!function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},e.apply(this,arguments)}var t=window.wp.element,l=window.wp.i18n,n=window.wp.hooks,a=window.wp.compose,o=window.wp.blockEditor,i=window.wp.components;const r=e=>e.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`)),u=(e,t,l,n)=>{let a=((e,t,l)=>{if(s(e)||!Array.isArray(e)||0===e.length)return-1;for(let n=0;n<e.length;n++)if(e[n][t]===l)return n;return-1})(e,t,l);return-1!==a&&e[a][n]},s=e=>null==e||""===e,g=e=>s(e)?"":e.trim().toLowerCase().replace(/\s+/g,"-"),c=function(e){let t,l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return s(e)||s(null==e?void 0:e.onBoxShadow)||s(null==e?void 0:e.offsetX)||s(null==e?void 0:e.offsetY)||s(null==e?void 0:e.color)||null==e||!e.onBoxShadow?"":(t=`${null==e?void 0:e.offsetX} ${null==e?void 0:e.offsetY} ${s(null==e?void 0:e.blurRadius)?"":null==e?void 0:e.blurRadius} ${s(null==e?void 0:e.spreadRadius)?"":null==e?void 0:e.spreadRadius} ${null==e?void 0:e.color} ${!s(null==e?void 0:e.inset)&&null!=e&&e.inset?"inset":""}`,l?`box-shadow: ${t};`:t)},d=(e,t)=>s(e)?"":["top","right","bottom","left"].map((l=>s(e[l])?"":t+"-"+l+":"+e[l]+"; ")).join(" "),p=(e,t)=>{let l="";if(!s(null==e?void 0:e.border)){let n=e.border;l=s(n.color)?["top","right","bottom","left"].map((e=>{var l,a,o,i;return`\n            ${s(n[e])?"":`${t}-${e}: ${null===(l=n[e])||void 0===l?void 0:l.width}  ${s(null===(a=n[e])||void 0===a?void 0:a.style)?"solid":null===(o=n[e])||void 0===o?void 0:o.style} ${null===(i=n[e])||void 0===i?void 0:i.color}; `}\n        `})).join(" "):`${t}: ${null==n?void 0:n.width}  ${s(null==n?void 0:n.style)?"solid":null==n?void 0:n.style} ${null==n?void 0:n.color}; `}return s(null==e?void 0:e.radius)?l:l+" "+t+"-radius:"+e.radius+"; "},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(s(e))return"";let l=null,n="";if(!s(t)&&e.fluidTypography&&!s(e.fontSize)&&(!s(e.MfontSize)||!s(e.TfontSize))){let l=e.fontSize,a=s(e.MfontSize)?e.TfontSize:e.MfontSize,o=l.replace(/[0-9]/g,""),i=a.replace(/[0-9]/g,"");l=l.replace(/[a-z]/g,""),a=a.replace(/[a-z]/g,"");let r=["px","em","rem"];-1!==r.indexOf(o)&&-1!==r.indexOf(i)&&(l=("px"===o?parseInt(l)/16:l)+"rem",a=("px"===i?parseInt(a)/16:a)+"rem",n+=t+"-min-font-size:"+a+"; "+t+"-max-font-size:"+l+"; ")}return e.fluidTypography&&!s(e.fluidFontSize)?l=e.fluidFontSize:(n+=s(e.MfontSize)?"":t+"-m-font-size:"+e.MfontSize+"; ",n+=s(e.TfontSize)?"":t+"-t-font-size:"+e.TfontSize+"; ",n+=s(e.MlineHeight)?"":t+"-m-line-height:"+e.MlineHeight+"; ",n+=s(e.TlineHeight)?"":t+"-t-line-height:"+e.TlineHeight+"; "),n+=["fontFamily","fontSize","lineHeight","fontStyle","fontWeight","letterSpacing","textTransform","textDecoration"].map((n=>"fontSize"!==n||s(l)?"fontSize"===n&&!s(null==e?void 0:e.fontSize)&&10<e.fontSize.length||s(null==e?void 0:e[n])?"":t+"-"+r(n)+":"+e[n]+";":t+"-font-size:"+l+";")).join(" "),n},h=e=>{if(s(e))return"";let t="";return Object.values(e).forEach((function(e){s(e)||"string"!=typeof e||(t+=e)})),t};var v=e=>{const{rangeLabel:l,attrValue:n,onChangeFunc:a,rangeMin:o,rangeMax:r,rangeStep:u,attrUnits:g=["px","em","rem","vh","vw"]}=e,c=(0,i.__experimentalUseCustomUnits)({availableUnits:g,defaultValues:{px:0,em:0,rem:0,vh:0,vw:0,"%":0}}),d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"unit";const[l,n]=(0,i.__experimentalParseQuantityAndUnitFromRawValue)(e);let a=null==n?"px":n;return"unit"===t?a:l};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("fieldset",{className:"components-gk-range-unit-control"},(0,t.createElement)("legend",null,s(l)?"":l),(0,t.createElement)("div",{className:"components-gk-range-unit-control__wrapper"},(0,t.createElement)(i.__experimentalUnitControl,{units:c,value:n,onChange:e=>a(e),className:"components-spacing-sizes-control__custom-value-input"}),(0,t.createElement)(i.RangeControl,{value:d(n,"Qty"),withInputField:!1,onChange:e=>a(e+d(n)),min:o,max:r[d(n)],step:u,className:"components-spacing-sizes-control__custom-value-range"}))))};const y=(0,a.createHigherOrderComponent)((e=>n=>{const{name:a,attributes:r,setAttributes:u,isSelected:g,clientId:c}=n;if("core/media-text"!==a)return(0,t.createElement)(e,n);const{gutenaKitGridGap:d,gutenaKitID:p,gutenaKitCSS:m={}}=r,[h,y]=(0,t.useState)("");(0,t.useEffect)((()=>{let e=!0;return e&&(u({gutenaKitCSS:{...m,mediaText:_(" .gutenakitid-"+c)},gutenaKitID:c}),y(_(" #block-"+c))),()=>{e=!1}}),[d]);const _=e=>s(d)||"0px"==d||"0"==d?"":`${e}{grid-gap:${d};}\n            ${e} .wp-block-media-text__content{padding: 0;}`;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),(0,t.createElement)("style",null,h),g&&(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(i.PanelBody,{title:"Spacing",initialOpen:!1},(0,t.createElement)(v,{data:n,rangeLabel:(0,l.__)("Grid gap","gutena-kit"),attrValue:d,onChangeFunc:e=>u({gutenaKitGridGap:e}),rangeMin:0,rangeMax:{px:500,em:40,rem:40,vh:100,vw:100},rangeStep:1}))))}),"gutenaKitEditMediaTextBlock");var _=window.wp.data,b=window.wp.blocks;const f=()=>(0,t.createElement)(i.Icon,{icon:()=>(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,t.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,t.createElement)("path",{d:"M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"}))}),k=()=>(0,t.createElement)(i.Icon,{icon:()=>(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,t.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,t.createElement)("path",{d:"M6 4v16h12V4H6zM5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}))}),E=()=>(0,t.createElement)(i.Icon,{icon:()=>(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,t.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,t.createElement)("path",{d:"M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}))}),S=()=>(0,t.createElement)(i.Icon,{icon:()=>(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,t.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,t.createElement)("path",{d:"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"}))}),C=()=>(0,t.createElement)(i.Icon,{icon:()=>(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,t.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,t.createElement)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"}))});var x=e=>{let{sideLabel:n="",onChangefunc:a,deviceTypeLocal:o,labelAtLeft:r=!1}=e;const u=(0,_.useSelect)((e=>e("core/edit-post").__experimentalGetPreviewDeviceType()),[]),g=s(o)?u:o,{__experimentalSetPreviewDeviceType:c}=(0,_.useDispatch)("core/edit-post"),d=s(a)?c:a,p="Desktop"===g?f:"Tablet"===g?k:E;return(0,t.createElement)(i.__experimentalHStack,{justify:"flex-start"},r&&1<n.length&&(0,t.createElement)("label",null," ",n," "),(0,t.createElement)(i.DropdownMenu,{label:(0,l.__)("Select device","gutena-kit"),className:"gutena-kit-select-device",popoverProps:{className:"gutena-kit-select-device-popover"},icon:p,controls:[{title:(0,l.__)("Desktop","gutena-kit"),icon:f,onClick:()=>d("Desktop")},{title:(0,l.__)("Tablet","gutena-kit"),icon:k,onClick:()=>d("Tablet")},{title:(0,l.__)("Mobile","gutena-kit"),icon:E,onClick:()=>d("Mobile")}]}),!r&&1<n.length&&(0,t.createElement)("label",null," ",n," "))},T=()=>{const e={disableCustomColors:!(0,o.useSetting)("color.custom"),disableCustomGradients:!(0,o.useSetting)("color.customGradient")},n=(0,o.useSetting)("color.palette.custom"),a=(0,o.useSetting)("color.palette.theme"),i=(0,o.useSetting)("color.palette.default"),r=(0,o.useSetting)("color.defaultPalette");e.colors=(0,t.useMemo)((()=>{const e=[];return a&&a.length&&e.push({name:(0,l._x)("Theme","Indicates this palette comes from the theme."),colors:a}),r&&i&&i.length&&e.push({name:(0,l._x)("Default","Indicates this palette comes from WordPress."),colors:i}),n&&n.length&&e.push({name:(0,l._x)("Custom","Indicates this palette comes from the theme."),colors:n}),e}),[i,a,n]);const u=(0,o.useSetting)("color.gradients.custom"),s=(0,o.useSetting)("color.gradients.theme"),g=(0,o.useSetting)("color.gradients.default"),c=(0,o.useSetting)("color.defaultGradients");return e.gradients=(0,t.useMemo)((()=>{const e=[];return s&&s.length&&e.push({name:(0,l._x)("Theme","Indicates this palette comes from the theme."),gradients:s}),c&&g&&g.length&&e.push({name:(0,l._x)("Default","Indicates this palette comes from WordPress."),gradients:g}),u&&u.length&&e.push({name:(0,l._x)("Custom","Indicates this palette is created by the user."),gradients:u}),e}),[u,s,g]),e};const w={normal:(0,l.__)("Normal","gutena-kit"),hover:(0,l.__)("Hover","gutena-kit")},z=()=>{},F={px:200,em:40,rem:40,vh:100,vw:100};var H=e=>{var n,a;let{label:o=(0,l.__)("Border Settings","gutena-kit"),panelLabel:r=(0,l.__)("Border","gutena-kit"),attrValue:u={},attrProps:g=w,onChangeFunc:c=z,rangeMax:d=F,withPanel:p=!0}=e;const m=Object.keys(g),[h,y]=(0,t.useState)(m[0]),_=(e,t)=>{let l=u;s(l[h])&&(l[h]={}),l[h][t]=e,c({...l})},{colors:b}=T(),f=(0,t.createElement)(t.Fragment,null,m.length>1&&(0,t.createElement)(i.__experimentalToggleGroupControl,{label:o,value:h,onChange:e=>y(e),isBlock:!0,hideLabelFromVision:p},m.map((e=>(0,t.createElement)(i.__experimentalToggleGroupControlOption,{key:e,value:e,label:g[e]})))),(0,t.createElement)(i.__experimentalBorderBoxControl,{onChange:e=>_(e,"border"),value:null===(n=u[h])||void 0===n?void 0:n.border,colors:b,enableAlpha:!0,popoverOffset:40,popoverPlacement:"left-start",__experimentalHasMultipleOrigins:!0}),(0,t.createElement)(v,{rangeLabel:(0,l.__)("Radius","gutena-kit"),attrValue:null===(a=u[h])||void 0===a?void 0:a.radius,onChangeFunc:e=>_(e,"radius"),rangeMin:0,rangeMax:d,rangeStep:5}));return p?(0,t.createElement)(i.PanelBody,{title:r,initialOpen:!1},f):f};const M={color:void 0,opacity:void 0},B=()=>{};var D=n=>{let{label:a=(0,l.__)("Overaly","gutena-kit"),attrValue:r=M,onChangeFunc:u=B,disableCustomColors:s=!1,withPanel:g=!0}=n;const c=(e,t)=>{let l=r;l[t]=e,u({...l})},{gradientValue:d,setGradient:p}=(0,o.__experimentalUseGradient)(),m=T(),h=(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.__experimentalColorGradientSettingsDropdown,e({__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,settings:[{colorValue:null==r?void 0:r.color,onColorChange:e=>c(e,"color"),label:(0,l.__)("color","gutena-kit"),gradientValue:d,onGradientChange:p}],disableCustomColors:s},m)),(0,t.createElement)(i.RangeControl,{label:(0,l.__)("Opacity","gutena-kit"),value:null==r?void 0:r.opacity,withInputField:!0,onChange:e=>c(e,"opacity"),min:10,max:100,step:10,className:"components-spacing-sizes-control__custom-value-range"}));return g?(0,t.createElement)(i.PanelBody,{title:a,initialOpen:!1},h):h};const N=()=>{};var V=n=>{let{label:a=(0,l.__)("Color","gutena-kit"),attrValue:r={},colorPanelsSettings:u=!1,onChangeFunc:s=N,enableAlpha:g=!1,disableCustomColors:c=!1,withPanel:d=!0,textColor:p=!0,bgColor:m=!0,isGradient:h=!0,linkColor:v=!0}=n;const y=(e,t)=>{let l=r;l[t]=e,s({...l})},{gradientValue:_,setGradient:b}=(0,o.__experimentalUseGradient)(),f=T();let k=[];if(!1===u){if(p&&k.push({colorValue:null==r?void 0:r.text,onColorChange:e=>y(e,"text"),label:(0,l.__)("Text","gutena-kit")}),m){let e={};h&&(e={gradientValue:_,onGradientChange:b}),k.push({colorValue:null==r?void 0:r.background,onColorChange:e=>y(e,"background"),label:(0,l.__)("Background","gutena-kit"),...e})}v&&k.push({colorValue:null==r?void 0:r.link,onColorChange:e=>y(e,"link"),label:(0,l.__)("Link","gutena-kit")})}else k=u;const E=(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.__experimentalColorGradientSettingsDropdown,e({__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,settings:k,disableCustomColors:c,enableAlpha:g},f)));return d?(0,t.createElement)(i.PanelBody,{title:a,initialOpen:!1},E):E};const O={onBoxShadow:!1,inset:!1,offsetX:void 0,offsetY:void 0,blurRadius:void 0,spreadRadius:void 0,color:void 0},I=()=>{};var P=e=>{let{label:n=(0,l.__)("Enable Box Shadow","gutena-kit"),toggleLabel:a=(0,l.__)("On","gutena-kit"),attrValue:o=O,onChangeFunc:r=I,onBoxShadow:u=!1,withPanel:g=!0}=e;const c={px:50,em:10,rem:10,vh:10,vw:10},d={offsetX:(0,l.__)("Offset X","gutena-kit"),offsetY:(0,l.__)("Offset Y","gutena-kit"),blurRadius:(0,l.__)("Blur radius","gutena-kit"),spreadRadius:(0,l.__)("Spread radius","gutena-kit")},p=(e,t)=>{let l=s(o)?O:o;u&&(l.onBoxShadow=!0),l[t]=e,r({...l})},m=(0,t.createElement)(t.Fragment,null,!u&&(0,t.createElement)(i.ToggleControl,{label:a,checked:o.onBoxShadow,onChange:e=>p(e,"onBoxShadow")}),(u||o.onBoxShadow)&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("legend",{style:{marginBottom:"8px"}},(0,l.__)("Shadow Color","gutena-kit")),(0,t.createElement)(i.ColorPalette,{colors:[{name:"Blue alpha 1",color:"rgba(9, 7, 37, 0.05)"},{name:"Black alpha 1",color:"rgba(0, 0, 0, 0.09)"},{name:"Blue alpha 2",color:"rgba(33, 37, 71, 0.1)"}],value:o.color,onChange:e=>p(e,"color"),enableAlpha:!0}),["offsetX","offsetY","blurRadius","spreadRadius"].map((e=>(0,t.createElement)(v,{key:e,rangeLabel:d[e],attrValue:s(o[e])?void 0:o[e],onChangeFunc:t=>p(t,e),rangeMin:0,rangeMax:c,rangeStep:1}))),(0,t.createElement)(i.__experimentalSpacer,{marginTop:2},(0,t.createElement)(i.ToggleControl,{label:(0,l.__)("Inset","gutena-kit"),checked:o.inset,onChange:e=>p(e,"inset")}))));return g?(0,t.createElement)(i.PanelBody,{title:n},m):m},G=e=>{const{componentName:l=""}=e;return"OverlayControl"===l?(0,t.createElement)(D,e):"ColorControl"===l?(0,t.createElement)(V,e):"BoxShadowControl"===l?(0,t.createElement)(P,e):void 0};const L={normal:(0,l.__)("Normal","gutena-kit"),hover:(0,l.__)("Hover","gutena-kit")},A=()=>{};var R=l=>{const{componentName:n="",label:a="",attrValue:o={},eventTabs:r=L,onChangeFunc:u=A,withPanel:s=!0}=l,g=Object.keys(r),[c,d]=(0,t.useState)(g[0]),p=(0,t.createElement)(t.Fragment,null,g.length>1&&(0,t.createElement)(i.__experimentalToggleGroupControl,{label:a,value:c,onChange:e=>d(e),isBlock:!0,hideLabelFromVision:s},g.map((e=>(0,t.createElement)(i.__experimentalToggleGroupControlOption,{key:e,value:e,label:r[e]})))),(0,t.createElement)(G,e({},l,{attrValue:o[c],onChangeFunc:e=>(e=>{let t=o;t[c]=e,u({...t})})(e),withPanel:!1})));return s?(0,t.createElement)(i.PanelBody,{title:a,initialOpen:!1},p):p},K=window.wp.primitives,$=(0,t.createElement)(K.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(K.Path,{d:"M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"}));const j=()=>{};var W=e=>{const{label:n=(0,l.__)("Size","gutena-kit"),fontSize:a,onChangeFunc:r=j,reponsive:g=!1,setCustom:c=!1}=e,[d,p]=((0,_.useSelect)((e=>e("core/edit-post").__experimentalGetPreviewDeviceType()),[]),(0,t.useState)(c||!s(a)&&10>a.length)),m=(0,o.useSetting)("typography.fontSizes"),h=s(m)?[]:m.map((e=>({label:e.name,value:"has-"+e.slug+"-font-size",fontSize:e.size})));let v=d?(0,l.__)("Custom","gutena-kit"):u(h,"value",a,"label");return v=!1===v?(0,l.__)("Default","gutena-kit"):"("+v+")",g?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.__experimentalHStack,null,(0,t.createElement)(i.FlexItem,null,(0,t.createElement)("label",null,n,(0,t.createElement)("span",{className:"components-font-size-picker__header__hint"},v)),d&&(0,t.createElement)(x,null)),(0,t.createElement)(i.FlexItem,null,(0,t.createElement)(i.Button,{label:d?(0,l.__)("Use size preset","gutena-kit"):(0,l.__)("Set custom size","gutena-kit"),icon:$,onClick:()=>(()=>{if(s(a))return p(!d),!d;if(d){let e=u(h,"fontSize",a,"value");e&&r(e)}else{let e=u(h,"value",a,"fontSize");e&&r(e)}p(!d)})(),isPressed:d,isSmall:!0,iconSize:24}))),d?(0,t.createElement)(i.__experimentalUnitControl,{value:a,onChange:e=>r(e)}):(0,t.createElement)(i.SelectControl,{value:a,options:h,onChange:e=>r(e),__nextHasNoMarginBottom:!0})):(0,t.createElement)(o.FontSizePicker,{value:a,onChange:e=>r(e),disableCustomFontSizes:!1,size:"__unstable-large",__nextHasNoMarginBottom:!0})};const U={fluidTypography:!1,fontFamily:void 0,fontSize:void 0,TfontSize:void 0,MfontSize:void 0,fluidFontSize:void 0,lineHeight:void 0,TlineHeight:void 0,MlineHeight:void 0,fontStyle:void 0,fontWeight:void 0,letterSpacing:void 0,textTransform:void 0,textDecoration:void 0},X=()=>{};var Y=n=>{const{label:a=(0,l.__)("Typography","gutena-kit"),attrValue:r=U,onChangeFunc:u=X,hasFontSizeEnabled:g=!0,hasAppearanceControl:c=!0,hasLetterSpacingControl:d=!0,hasLineHeightEnabled:p=!0,hasFontFamilyControl:m=!0,hasTextTransform:h=!0,editGlobalTypography:v=!1,makeFluidTypography:y=!1,withPanel:b=!0,resetButton:f=!0,devicePreview:k=!0,globalTypography:E}=n,S=(e,t)=>{let l=s(r)?U:r;l[t]=e,s(l.fontSize)||s(l.MfontSize)&&s(l.TfontSize)||(l.fluidFontSize=((e,t)=>{let l="";if(!s(e)&&!s(t)){let n=t.replace(/[0-9]/g,""),a=e.replace(/[0-9]/g,"");n=n.replace(".",""),a=a.replace(".",""),t=t.replace(/[a-z]/g,""),e=e.replace(/[a-z]/g,"");let o=["px","em","rem"];-1!==o.indexOf(n)&&-1!==o.indexOf(a)&&(t=("px"===n?parseInt(t)/16:t)+"rem",l="clamp("+(e=("px"===a?parseInt(e)/16:e)+"rem")+", calc("+e+" + ((1vw - 0.48rem) * "+(100*(parseInt(t)-parseInt(e))/52).toFixed(2)+")), "+t+")")}return l})(s(l.MfontSize)?l.TfontSize:l.MfontSize,l.fontSize)),u({...l})},T=(0,_.useSelect)((e=>e("core/edit-post").__experimentalGetPreviewDeviceType()),[]),[w,z]=(0,t.useState)("Desktop"),F=k?T:w,H=k?{}:{deviceTypeLocal:F,onChangefunc:e=>z(e)},M="Desktop"===F||s(null==r?void 0:r.fontSize)||10<r.fontSize.length?"fontSize":"Tablet"===F?"TfontSize":"MfontSize",B="Desktop"===F||!1===v?"lineHeight":"Tablet"===F?"TlineHeight":"MlineHeight",D=(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.__experimentalGrid,{columns:2},!s(E)&&0<E.length&&(0,t.createElement)("div",{className:"edit-site-typography-panel__full-width-control"},(0,t.createElement)(i.SelectControl,{label:(0,l.__)("Global typography","gutena-kit"),value:null==r?void 0:r.globalTypography,options:E,onChange:e=>u({...r,fluidTypography:!1,globalTypography:e,fontFamily:void 0,fontSize:void 0,TfontSize:void 0,MfontSize:void 0,fluidFontSize:void 0,lineHeight:void 0,TlineHeight:void 0,MlineHeight:void 0,fontStyle:void 0,fontWeight:void 0,letterSpacing:void 0,textTransform:void 0,textDecoration:void 0}),__nextHasNoMarginBottom:!0})),m&&(0,t.createElement)("div",{className:"edit-site-typography-panel__full-width-control"},(0,t.createElement)(o.__experimentalFontFamilyControl,{value:null==r?void 0:r.fontFamily,onChange:e=>S(e,"fontFamily"),size:"__unstable-large",__nextHasNoMarginBottom:!0})),g&&(0,t.createElement)(t.Fragment,null,!v&&(0,t.createElement)("div",{className:"edit-site-typography-panel__full-width-control"},(0,t.createElement)(W,{fontSize:null==r?void 0:r[M],onChangeFunc:e=>S(e,M),reponsive:!0,setCustom:!s(null==r?void 0:r.fontSize)&&10>r.fontSize.length})),v&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",null,(0,t.createElement)(x,e({sideLabel:(0,l.__)("Font size","gutena-kit")},H)),(0,t.createElement)(i.__experimentalUnitControl,{value:null==r?void 0:r[M],onChange:e=>S(e,M)})))),p&&(0,t.createElement)("div",null,v&&(0,t.createElement)(x,e({sideLabel:(0,l.__)("Line height","gutena-kit")},H)),(0,t.createElement)(i.__experimentalInputControl,{label:v?"":(0,l.__)("Line height","gutena-kit"),type:"number",value:(null==r?void 0:r[B])||"",onChange:e=>S(e,B)})),d&&(0,t.createElement)(o.__experimentalLetterSpacingControl,{value:null==r?void 0:r.letterSpacing,onChange:e=>S(e,"letterSpacing"),size:"__unstable-large",__unstableInputWidth:"auto"}),h&&(0,t.createElement)(o.__experimentalTextTransformControl,{value:null==r?void 0:r.textTransform,onChange:e=>S(e,"textTransform")}),c&&(0,t.createElement)("div",{className:v?"edit-site-typography-panel__full-width-control":""},(0,t.createElement)(o.__experimentalFontAppearanceControl,{value:{fontStyle:null==r?void 0:r.fontStyle,fontWeight:null==r?void 0:r.fontWeight},onChange:e=>{let{fontStyle:t,fontWeight:l}=e,n=s(r)?U:r;n.fontStyle=t,n.fontWeight=l,u({...n})},hasFontStyles:!0,hasFontWeights:!0,size:"__unstable-large",__nextHasNoMarginBottom:!0})),y&&(0,t.createElement)("div",{className:"edit-site-typography-panel__full-width-control"},(0,t.createElement)(i.__experimentalHStack,{className:"gutena-kit-fluid-typography-toggle-hstack"},(0,t.createElement)(i.FlexItem,null,(0,t.createElement)(i.ToggleControl,{label:(0,l.__)("Make it Fluid typography","gutena-kit"),checked:!s(null==r?void 0:r.fluidTypography)&&(null==r?void 0:r.fluidTypography),onChange:e=>S(e,"fluidTypography")}),(0,t.createElement)(i.Dropdown,{className:"gutena-kit-popover-help-text",contentClassName:"gutena-kit-popover-help-content",position:"bottom right",renderToggle:e=>{let{isOpen:l,onToggle:n}=e;return(0,t.createElement)(i.Button,{variant:"link",onClick:n,"aria-expanded":l,icon:C})},renderContent:()=>(0,t.createElement)("div",null,(0,l.__)("Create fluid typography using provided minimum and maximum font-size value","gutena-kit"))}))))),f&&(0,t.createElement)(i.__experimentalHStack,null,(0,t.createElement)(i.FlexItem,null),(0,t.createElement)(i.FlexItem,null,(0,t.createElement)(i.Button,{label:(0,l.__)("Reset typography settings","gutena-kit"),variant:"secondary",isSmall:!0,disabled:s(null==n?void 0:n.attrValue),onClick:()=>u(void 0)},(0,l.__)("Reset","gutena-kit")))));return b?(0,t.createElement)(i.PanelBody,{title:a,initialOpen:!1},D):D};const Z=()=>{};var q=e=>{var n;let{attrValue:a,onChangeFunc:o=Z,setGlobalTypography:r=Z,globalTypographySlug:u}=e;const[c,d]=(0,t.useState)({label:(0,l.__)("Saved Typography","gutena-kit"),activeTab:"set_global_typography",action:"",status:"",message:"",deleteTypography:!1,deleteTypographyConfirm:!1,globalTypography:null===(n=gutena_kit_block_editor)||void 0===n?void 0:n.globalTypography}),[p,h]=(0,t.useState)({fluidTypography:!1,name:void 0,slug:void 0,fontFamily:void 0,fontSize:void 0,TfontSize:void 0,MfontSize:void 0,fluidFontSize:void 0,lineHeight:void 0,TlineHeight:void 0,MlineHeight:void 0,fontStyle:void 0,fontWeight:void 0,letterSpacing:void 0,textTransform:void 0,textDecoration:void 0,css:void 0});(0,t.useEffect)((()=>{if("progress"===(null==c?void 0:c.status))if(s(null==p?void 0:p.name)||s(null==p?void 0:p.slug))d({...c,status:"error",message:"add_typography"===(null==c?void 0:c.activeTab)?(0,l.__)("Name is required","gutena-kit"):(0,l.__)("Please select a global typography","gutena-kit")});else if(!k()){const e=new FormData;e.append("action",gutena_kit_block_editor.save_typography_action),e.append("nonce",gutena_kit_block_editor.nonce),b()&&c.deleteTypography&&c.deleteTypographyConfirm&&e.append("delete_typography",null==p?void 0:p.slug),e.append("typography",JSON.stringify(p)),fetch(gutena_kit_block_editor.ajax_url,{method:"POST",credentials:"same-origin",body:e}).then((e=>e.json())).then((e=>{s(null==e?void 0:e.globalTypography)||(gutena_kit_block_editor.globalTypography=e.globalTypography);let t=s(gutena_kit_block_editor.globalTypography)||0===gutena_kit_block_editor.globalTypography.length?{activeTab:"set_global_typography",label:(0,l.__)("Saved Typography","gutena-kit")}:{};d({...c,...e,...t,deleteTypography:!1,deleteTypographyConfirm:!1})}))}}),[c]);const v=()=>{if(s(c.globalTypography))return[];let e=[{label:(0,l.__)("Select typography","gutena-kit"),value:""}];return Object.keys(c.globalTypography).forEach((function(t){s(t)||e.push({label:c.globalTypography[t].name,value:t})})),e},y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=null==p?void 0:p.slug;if("add_typography"===c.activeTab&&null!==e){var l;t=g(e);let n=(new Date).getTime();t=s(null==c||null===(l=c.globalTypography)||void 0===l?void 0:l[t])?t:t+"-"+n}return t},_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=y(e);return s(t)?"":".has-gutenakit-g-typography.has-gutenakit-"+t+"{"+m(p,"--gutenakit--gt-")+"}"},b=()=>!0===c.deleteTypography,f=()=>"progress"===c.status,k=()=>b()&&f()&&!c.deleteTypographyConfirm,E=s(v())||1>=v().length,C=()=>d({...c,deleteTypography:!1,status:"",message:""}),x=[{tabName:"edit_typography",icon:"edit",label:(0,l.__)("Edit Typography","gutena-kit")},{tabName:"add_typography",icon:"plus-alt2",label:(0,l.__)("Add New Typography","gutena-kit")}],T={default:(0,l.__)("Default","gutena-kit"),global:(0,l.__)("Global","gutena-kit")},w=Object.keys(T),[z,F]=(0,t.useState)(s(u)?"default":"global");return(0,t.createElement)(i.PanelBody,{title:(0,l.__)("Typography","gutena-kit"),initialOpen:!1},w.length>1&&(0,t.createElement)(i.__experimentalToggleGroupControl,{value:z,onChange:e=>F(e),isBlock:!0},w.map((e=>(0,t.createElement)(i.__experimentalToggleGroupControlOption,{key:e,value:e,label:T[e]})))),"default"===z?(0,t.createElement)(Y,{attrValue:a,onChangeFunc:e=>o(e),withPanel:!1}):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.__experimentalHStack,null,(0,t.createElement)(i.FlexItem,null,(0,t.createElement)(i.__experimentalText,{isBlock:!0},c.label)),(0,t.createElement)(i.FlexItem,null,x.map((e=>"edit_typography"===e.tabName&&E?"":(0,t.createElement)(i.Button,{key:e.tabName,label:c.activeTab===e.tabName?(0,l.__)("Saved Typography","gutena-kit"):e.label,icon:e.icon,onClick:()=>{h(void 0),d({...c,label:c.activeTab===e.tabName?(0,l.__)("Saved Typography","gutena-kit"):e.label,activeTab:c.activeTab===e.tabName?"set_global_typography":e.tabName,status:"",message:""})},isPressed:c.activeTab===e.tabName,isSmall:!0,iconSize:24}))))),"set_global_typography"===c.activeTab&&(E?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.__experimentalText,{align:"center",className:"gutena-kit-border-text",isBlock:!0},(0,l.__)("No typography found","gutena-kit")),(0,t.createElement)("p",null,(0,l.__)("Add a new Typography by clicking on","gutena-kit"),(0,t.createElement)("strong",null," + "),(0,l.__)("icon","gutena-kit"))):(0,t.createElement)(i.SelectControl,{value:u,options:v(),onChange:e=>r(e),__nextHasNoMarginBottom:!0})),"edit_typography"===c.activeTab&&!E&&(0,t.createElement)(i.SelectControl,{value:s(null==p?void 0:p.slug)?"":p.slug,options:v(),onChange:e=>{var t;return h({...null==c||null===(t=c.globalTypography)||void 0===t?void 0:t[e]})},__nextHasNoMarginBottom:!0}),("add_typography"===c.activeTab||"edit_typography"===c.activeTab&&!E&&!s(null==p?void 0:p.slug))&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.TextControl,{label:(0,l.__)("Name","gutena-kit"),value:(null==p?void 0:p.name)||"",onChange:e=>h({...p,name:e,slug:y(e),css:_(e)})}),(0,t.createElement)(Y,{attrValue:p,onChangeFunc:e=>h({...e,css:_()}),editGlobalTypography:!0,makeFluidTypography:!0,withPanel:!1,resetButton:!1,devicePreview:!1}),(0,t.createElement)(i.__experimentalHStack,null,(0,t.createElement)(i.FlexItem,null,(0,t.createElement)(i.Button,{label:(0,l.__)("Save typography","gutena-kit"),variant:"secondary",disabled:f(),onClick:()=>d({...c,status:"progress"})},(0,l.__)("Save","gutena-kit"))),"edit_typography"===c.activeTab&&(0,t.createElement)(i.FlexItem,null,(0,t.createElement)(i.Button,{label:(0,l.__)("Delete typography","gutena-kit"),variant:"link",disabled:f(),onClick:()=>d({...c,status:"progress",deleteTypography:!0}),isDestructive:!0,icon:S,className:"gutena-kit-delete-btn"},(0,l.__)("Delete","gutena-kit")))),(0,t.createElement)(i.__experimentalHStack,null,(0,t.createElement)(i.__experimentalText,{isDestructive:"error"===c.status},f()?(0,l.__)("Please wait...","gutena-kit"):(0,t.createElement)(t.Fragment,null,"success"===c.status&&(0,t.createElement)(i.Icon,{icon:"yes-alt"}),c.message)))),k()&&(0,t.createElement)(i.Modal,{closeLabel:(0,l.__)("Close","gutena-kit"),onRequestClose:()=>C(),title:(0,l.__)("Delete global typography?","gutena-kit"),className:"wp-block-page-list-modal",aria:{describedby:"wp-block-page-list-modal__description"}},(0,t.createElement)("p",{id:"wp-block-page-list-modal__description"},(0,l.__)("Do you wanna delete typography: ","gutena-kit")+(null==p?void 0:p.name)),(0,t.createElement)("p",null,(0,l.__)("Note: If you have assigned this typography to any block, it will lost the typography.","gutena-kit")),(0,t.createElement)("div",{className:"wp-block-page-list-modal-buttons"},(0,t.createElement)(i.Button,{variant:"tertiary",onClick:()=>C()},(0,l.__)("Cancel")),(0,t.createElement)(i.Button,{variant:"secondary",onClick:()=>d({...c,deleteTypographyConfirm:!0}),isDestructive:!0},(0,l.__)("Delete"))))))};const Q=(0,a.createHigherOrderComponent)((e=>n=>{var a,r,u,g,h,v,y,f,k;const{name:E,attributes:S,setAttributes:C,isSelected:T,clientId:w}=n;if(-1===["core/group","core/column","core/paragraph","core/heading"].indexOf(E))return(0,t.createElement)(e,n);const z={color:!0,overlay:-1!==["core/group","core/column"].indexOf(E),spacing:!0,border:-1!==["core/group","core/column"].indexOf(E),boxShadow:!0,display:!0,typography:-1!==["core/paragraph","core/heading"].indexOf(E)},{supports:F={}}=(0,_.useSelect)((e=>e(b.store).getBlockType(E,"")),[]),M=s(null==F||null===(a=F.spacing)||void 0===a?void 0:a.margin)||!Array.isArray(F.spacing.margin)?["top","right","bottom","left"]:F.spacing.margin,B=s(null==F||null===(r=F.spacing)||void 0===r?void 0:r.padding)||!Array.isArray(F.spacing.padding)?["top","right","bottom","left"]:F.spacing.padding;let D=S.style;var N,V,O,I,P,G,L;s(D)||(D={...D,border:{normal:{border:null===(N=S.style)||void 0===N?void 0:N.border,radius:null===(V=S.style)||void 0===V||null===(O=V.border)||void 0===O?void 0:O.radius}},spacing:{padding:{default:null===(I=S.style)||void 0===I||null===(P=I.spacing)||void 0===P?void 0:P.padding},margin:{default:null===(G=S.style)||void 0===G||null===(L=G.spacing)||void 0===L?void 0:L.margin}}});const A={enable:!0,style:D},{gutenaKitID:K,gutenaKitCSS:$,gutenaKitClass:j={},gutenaKitStyle:W=A,style:U={}}=S,X=(0,_.useSelect)((e=>e("core/edit-post").__experimentalGetPreviewDeviceType()),[]),Y="Desktop"===X?"default":"Tablet"===X?"tablet":"mobile",Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#block-"+w,l="";if(s(e))return"";let n="--gutenakit-";return s(null==e?void 0:e.spacing)||["padding","margin"].forEach((t=>{s(e.spacing[t])||["default","tablet","mobile"].forEach((a=>{var o;s(null===(o=e.spacing[t])||void 0===o?void 0:o[a])||(l+=d(e.spacing[t][a],n+"-"+a+"-"+t))}))})),["color","overlay","border","boxShadow"].forEach((t=>{["normal","hover"].forEach((a=>{var o;if(!s(null==e||null===(o=e[t])||void 0===o?void 0:o[a])){let o=n+"-"+t.toLowerCase()+"-"+a;var i;"color"===t&&["text","background","link"].forEach((n=>{s(e[t][a][n])||(l+=o+"-"+n+":"+e[t][a][n]+";")})),"overlay"!==t||s(e[t][a].color)||(l+=o+"-background:"+e[t][a].color+";",l+=o+"-opacity:"+(s(null===(i=e[t][a])||void 0===i?void 0:i.opacity)?"80%;":e[t][a].opacity+"%;")),"border"===t&&(l+=p(e[t][a],o)),"boxShadow"===t&&(l+=o+":"+c(e[t][a],!1))}}))})),l+=m(null==e?void 0:e.typography,n),10>l.length?"":" "+t+"{"+l+"} "},Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;if(s(e))return!1;let t=[],l="has-gutenakit";if(s(null==e?void 0:e.spacing),s(null==e?void 0:e.spacing)||["padding","margin"].forEach((n=>{s(e.spacing[n])||["default","tablet","mobile"].forEach((a=>{var o;s(null===(o=e.spacing[n])||void 0===o?void 0:o[a])||t.push(l+"-"+n+"-"+a)}))})),["color","overlay","border","boxShadow"].forEach((n=>{["normal","hover"].forEach((a=>{var o,i,r;s(null==e||null===(o=e[n])||void 0===o?void 0:o[a])||(t.push(l+"-"+n.toLowerCase()+"-"+a),"color"!==n||s(null==e||null===(i=e[n])||void 0===i||null===(r=i[a])||void 0===r?void 0:r.link)||t.push(l+"-"+n.toLowerCase()+"-"+a+"-link"))}))})),s(null==e?void 0:e.hideDisplay)||["default","tablet","mobile"].forEach((n=>{var a,o;s(null===(a=e.hideDisplay)||void 0===a?void 0:a[n])||!0!==(null===(o=e.hideDisplay)||void 0===o?void 0:o[n])||t.push(l+"-hide-in-"+n)})),s(null==e?void 0:e.typography))s(null==e?void 0:e.globalTypography)||(t.push(l+"-g-typography"),t.push(l+"-"+e.globalTypography));else{var n;let c=!1,d="";var a,o,i,r,u,g;["fontFamily","fontSize","lineHeight","fontStyle","fontWeight","letterSpacing","textTransform","textDecoration"].forEach((l=>{var n,a;if("fontSize"===l&&!s(null===(n=e.typography)||void 0===n?void 0:n.fontSize)&&10<e.typography.fontSize.length)t.push(e.typography.fontSize);else if(!s(null===(a=e.typography)||void 0===a?void 0:a[l]))return void(c=!0)})),d+=c?"-d":"",s(null===(n=e.typography)||void 0===n?void 0:n.fluidTypography)||!0!==e.typography.fluidTypography&&"1"!=e.typography.fluidTypography?(d+=s(null===(a=e.typography)||void 0===a?void 0:a.TfontSize)&&s(null===(o=e.typography)||void 0===o?void 0:o.TlineHeight)?"":"-t",d+=s(null===(i=e.typography)||void 0===i?void 0:i.MfontSize)&&s(null===(r=e.typography)||void 0===r?void 0:r.MlineHeight)?"":"-m"):(t.push("has-gutenakit-f-typography"),d+=s(null===(u=e.typography)||void 0===u?void 0:u.TlineHeight)?"":"-t",d+=s(null===(g=e.typography)||void 0===g?void 0:g.MlineHeight)?"":"-m"),1<d.length&&t.push(l+"-typography"+d)}return t.join(" ")},J=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(s(t))return;let a=s(W)?A:W;s(a[t])&&(a[t]={}),s(l)?s(n)?a[t]=e:a[t][n]=e:s(n)?a[t][l]=e:(s(a[t][l])&&(a[t][l]={}),a[t][l][n]=e),"globalTypography"!==t||s(null==a?void 0:a.typography)?"typography"!==t||s(null==a?void 0:a.globalTypography)||(a.globalTypography=void 0):a.typography=void 0,C({gutenaKitStyle:{...a},gutenaKitID:w,gutenaKitCSS:{...$,blockCss:Z(a," .gutenakitid-"+w)},gutenaKitClass:{...j,blockClasses:Q(a)}})},ee={Desktop:(0,l.__)("Hide on Desktop","gutena-kit"),Tablet:(0,l.__)("Hide on Tablet","gutena-kit"),Mobile:(0,l.__)("Hide on Mobile","gutena-kit")};let te="";var le,ne,ae;!z.typography||s(null==W?void 0:W.globalTypography)||s(null===(u=gutena_kit_block_editor)||void 0===u||null===(g=u.globalTypography)||void 0===g||null===(h=g[W.globalTypography])||void 0===h?void 0:h.css)||(te+="#block-"+w+(null===(le=gutena_kit_block_editor)||void 0===le||null===(ne=le.globalTypography)||void 0===ne||null===(ae=ne[W.globalTypography])||void 0===ae?void 0:ae.css));const oe=Z()+" "+te+(()=>{var e;if("Desktop"!==X&&!s(null===(e=gutena_kit_block_editor)||void 0===e?void 0:e.css)&&s(gutena_kit_block_editor.cssCount)){let e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const l=window.frames;let n="";for(let a=0;a<l.length;a++)s(l[a].name)||"editor-canvas"!==l[a].name||(n=l[a].document,s(e)||(n=t?n.querySelectorAll(e):n.querySelector(e)));return n}("head");if(s(e)||e.length<1)return!1;e.insertAdjacentHTML("afterend","<style>"+gutena_kit_block_editor.css+"</style>"),gutena_kit_block_editor.cssCount=1}return""})();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),(0,t.createElement)("style",null,oe),T&&(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(i.PanelBody,{icon:()=>(0,t.createElement)(i.Icon,{icon:()=>(0,t.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M4.22391 11.3335H0.00208904L11.3348 0.000746265V4.18958L4.22391 11.3335Z",fill:"#0DA88C"}),(0,t.createElement)("path",{d:"M19.7791 11.3325H24.001L12.6682 -0.000230298V4.18861L19.7791 11.3325Z",fill:"#0DA88C"}),(0,t.createElement)("path",{d:"M4.22184 12.6655H1.3843e-05L11.3328 23.9983V19.8094L4.22184 12.6655Z",fill:"#0DA88C"}),(0,t.createElement)("path",{d:"M19.7772 12.6675H23.999L12.6663 24.0002V19.8114L19.7772 12.6675Z",fill:"#0DA88C"}),(0,t.createElement)("rect",{width:"8.81436",height:"2.60358",transform:"matrix(1 0 0 -1 11.9625 15.2695)",fill:"#0DA88C"}))}),iconPosition:"left",title:(0,l.__)("Gutena Kit Settings","gutena-kit"),className:"gutena-kit-settings",initialOpen:!0},(0,t.createElement)(i.__experimentalHStack,null,(0,t.createElement)(i.FlexItem,null),(0,t.createElement)(i.FlexItem,null,(0,t.createElement)(i.Button,{variant:"secondary",isSmall:!0,disabled:s(null==$?void 0:$.blockCss),onClick:()=>C({gutenaKitStyle:void 0,gutenaKitCSS:{...$,blockCss:void 0}})},(0,l.__)("Reset")))),z.typography&&(0,t.createElement)(q,{attrValue:null==W?void 0:W.typography,onChangeFunc:e=>J(e,"typography"),globalTypographySlug:null==W?void 0:W.globalTypography,setGlobalTypography:e=>J(e,"globalTypography")}),z.color&&(0,t.createElement)(R,{componentName:"ColorControl",label:(0,l.__)("Color","gutena-kit"),attrValue:null==W?void 0:W.color,onChangeFunc:e=>J(e,"color")}),z.overlay&&(0,t.createElement)(R,{componentName:"OverlayControl",label:(0,l.__)("Overlay","gutena-kit"),attrValue:null==W?void 0:W.overlay,onChangeFunc:e=>J(e,"overlay")}),z.spacing&&(0,t.createElement)(i.PanelBody,{title:(0,l.__)("Spacing","gutena-kit"),initialOpen:!1},(0,t.createElement)(x,null),(0,t.createElement)(i.__experimentalBoxControl,{label:(0,l.__)("Padding","gutena-kit"),values:null==W||null===(v=W.spacing)||void 0===v||null===(y=v.padding)||void 0===y?void 0:y[Y],onChange:e=>J(e,"spacing","padding",Y),allowReset:!0,sides:B}),(0,t.createElement)(x,null),(0,t.createElement)(i.__experimentalBoxControl,{label:(0,l.__)("Margin","gutena-kit"),values:null==W||null===(f=W.spacing)||void 0===f||null===(k=f.margin)||void 0===k?void 0:k[Y],onChange:e=>J(e,"spacing","margin",Y),allowReset:!0,sides:M,inputProps:{min:-1/0}})),z.border&&(0,t.createElement)(H,{attrValue:null==W?void 0:W.border,onChangeFunc:e=>J(e,"border")}),z.border&&(0,t.createElement)(R,{componentName:"BoxShadowControl",label:(0,l.__)("Box Shadow","gutena-kit"),attrValue:null==W?void 0:W.boxShadow,onChangeFunc:e=>J(e,"boxShadow"),onBoxShadow:!0}),z.display&&(0,t.createElement)(i.PanelBody,{title:(0,l.__)("Display","gutena-kit"),initialOpen:!1},["Desktop","Tablet","Mobile"].map((e=>{var l,n;let a="Desktop"===e?"default":"Tablet"===e?"tablet":"mobile";return(0,t.createElement)(i.ToggleControl,{key:e,label:ee[e],checked:!s(null==W||null===(l=W.hideDisplay)||void 0===l?void 0:l[a])&&(null==W||null===(n=W.hideDisplay)||void 0===n?void 0:n[a]),onChange:e=>J(e,"hideDisplay",null,a)})}))))))}),"GutenaKitSettings"),J={"media-text-block":y,"common-block":Q};Object.keys(J).forEach((e=>{console.log("blockSlug",e),(0,n.addFilter)("editor.BlockEdit","gutena-kit/edit-"+e,J[e])}));const ee=(0,a.createHigherOrderComponent)((l=>n=>{const{gutenaKitClass:a={}}=n.attributes;return(0,t.createElement)(l,e({},n,{className:h(a)}))}),"withGutenaKitClassName");wp.hooks.addFilter("editor.BlockListBlock","my-plugin/with-client-id-class-name",ee)}();