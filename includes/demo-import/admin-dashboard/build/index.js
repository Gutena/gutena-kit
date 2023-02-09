(()=>{"use strict";var e,t={870:(e,t,a)=>{const n=window.wp.element,l=window.wp.i18n,s=window.wp.domReady;var i=a.n(s);const o=(e,t)=>{const{blocks:a,onBoarding:n,makeTemplateTabActive:l}=e;let s={};return"ACTIVE_TEMPLATE_TAB"===t.type?(s={blocks:t.blocks,onBoarding:!1,makeTemplateTabActive:!0},s):e},{createContext:c,useReducer:r}=wp.element,m=c(),d=e=>{let t={blocks:gutenakit_dahboard_info.onboarding_info.step_two.blocks.map((e=>({...e,status:e.is_enabled,is_enabled:"1"==gutenakit_dahboard_info.onboarding||e.is_enabled}))),onBoarding:gutenakit_dahboard_info.onboarding,makeTemplateTabActive:!1};const[a,l]=r(o,t);return(0,n.createElement)(m.Provider,{value:{...a,dispatch:l}},e.children)},u=()=>{},g=e=>{const{toggleID:t=Math.floor(1e3*Math.random())+1,size:a="",isActive:l=!1,onChangeFunc:s=u,msg:i=""}=e,o="gk-switch-target-"+t;return(0,n.createElement)("div",{className:"gk-toggle-tick-cross "+a},(0,n.createElement)("div",{className:"gk-toggle"},(0,n.createElement)("input",{type:"checkbox",id:o,onChange:()=>s(),checked:l?"checked":"",value:t}),(0,n.createElement)("label",{className:"gk-toggle",htmlFor:o},"large"===a&&""!==i?(0,n.createElement)("div",{className:"gk-toggle-msg"},i):"",(0,n.createElement)("span",{className:"gk-toggle-knob",role:"switch"}))))},_=e=>{const t=gutenakit_dahboard_info.onboarding_info.step_two,{blocks:a,onBoarding:s,makeTemplateTabActive:i,dispatch:o}=(0,n.useContext)(m),c=e=>{let t=0,a=(0,l.__)("All Blocks Disabled","gutena-kit");for(let n=0;n<e.length;n++)if(e[n].is_enabled&&(t=2,a=(0,l.__)("All Blocks Enabled","gutena-kit")),2===t&&!e[n].is_enabled){t=1,a=(0,l.__)("Few Blocks Enabled","gutena-kit");break}return{is_enabled:t>0,msg:a}},[r,d]=(0,n.useState)({blocks:a,allBlocksActionToggle:c(a),saveStatus:0,onBoard:s,step:1,currentBlockSlug:"",completedBlockSlugs:[]}),u=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=!1,a=[],n=0,l=[],i=!1;const m=()=>{let e=!0;for(let t=0;t<r.blocks.length;t++){let a=r.blocks[t];if(a.status!==a.is_enabled){e=!1;break}}return e},u=()=>{if(i)d({...r,saveStatus:3});else{let t=r.blocks.map((e=>({...e,status:e.is_enabled})));d({...r,blocks:t,allBlocksActionToggle:c(t),saveStatus:2}),s&&setTimeout((()=>{o({type:"ACTIVE_TEMPLATE_TAB",blocks:e?r.blocks:t})}),e?10:2e3)}};if(e||s&&m())return fetch(gutenakit_dahboard_info.ajax_url,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json","X-WP-Nonce":gutenakit_dahboard_info.nonce},body:new URLSearchParams({action:"manage_gutena_blocks",gutena_kit_security:gutenakit_dahboard_info.nonce,skip_settings:"skip"})}).then((e=>e.json())).then((e=>{setTimeout((()=>{u()}),200)})),!1;if(1===r.saveStatus)return!1;d({...r,saveStatus:1,currentBlockSlug:"",completedBlockSlugs:[]});const g=()=>{t.slug&&-1===a.indexOf(t.slug)&&(a.push(t.slug),d({...r,currentBlockSlug:t.slug}),fetch(gutenakit_dahboard_info.ajax_url,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json","X-WP-Nonce":gutenakit_dahboard_info.nonce},body:new URLSearchParams({action:"manage_gutena_blocks",gutena_kit_security:gutenakit_dahboard_info.nonce,slug:t.slug,activate_action:t.activate?"activate":"deactivate",skip_settings:s?"skip":""})}).then((e=>e.json())).then((e=>{l[t.slug]=e;let a=r.completedBlockSlugs;a.push(t.slug),d({...r,completedBlockSlugs:a}),!1===i&&!1===e.success&&(i=!0),_()})))},_=()=>{if(n>=r.blocks.length)return!1;let e=n;for(e=n;e<r.blocks.length;e++){let l=r.blocks[e];if(n++,l.status!==l.is_enabled&&-1===a.indexOf(l.slug)){(t=l).activate=l.is_enabled,g();break}}return n>=r.blocks.length||e===r.blocks.length?(setTimeout((()=>{u()}),1e3),!1):void 0};_()};return console.log("blockData",r),(0,n.createElement)(n.Fragment,null,s?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gk-onboarding-steps"},(0,n.createElement)("div",{className:"gk-step "+(2===r.step?"done":"active")}," 1 "),(0,n.createElement)("div",{className:"gk-step-link "+(2===r.step?"active":"")}),(0,n.createElement)("div",{className:"gk-step "+(2===r.step?"active":"")}," 2 ")),(0,n.createElement)("div",{className:"gk-steps-name"},(0,n.createElement)("div",{className:"gk-step-name "+(2===r.step?"done":"active")},gutenakit_dahboard_info.onboarding_info.step_one.step_name),(0,n.createElement)("div",{className:"gk-step-name "+(2===r.step?"active":"")},gutenakit_dahboard_info.onboarding_info.step_two.step_name)),1===r.step?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gutena-details"},(0,n.createElement)("h2",{className:"gutena-title"},gutenakit_dahboard_info.onboarding_info.step_one.title),(0,n.createElement)("p",{className:"gutena-description"},gutenakit_dahboard_info.onboarding_info.step_one.description),(0,n.createElement)("span",{className:"gutena-button",onClick:()=>d({...r,step:2})},gutenakit_dahboard_info.onboarding_info.step_one.button_text))):""):"",s&&2!==r.step?"":(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gk-block-settings-card"},(0,n.createElement)("div",{className:"gk-header"},(0,n.createElement)("div",{className:"gk-title"},t.title),(0,n.createElement)("div",{className:"gk-all-blocks-action"},(0,n.createElement)(g,{toggleID:"all-blocks-action",size:"large",isActive:r.allBlocksActionToggle.is_enabled,msg:r.allBlocksActionToggle.msg,onChangeFunc:()=>(e=>{let t=r.blocks.map((t=>({...t,is_enabled:e})));d({...r,blocks:t,allBlocksActionToggle:c(t),completedBlockSlugs:[]})})(!r.allBlocksActionToggle.is_enabled)}))),(0,n.createElement)("div",{className:"gk-block-list"},r.blocks.map((e=>(0,n.createElement)("div",{className:"gk-block-control-section "+e.slug,key:e.slug},(0,n.createElement)("div",{className:"gk-block-control-wrapper"},(0,n.createElement)("div",{className:"gk-block-name"},e.name),(0,n.createElement)("div",{className:"gk-block-control"},(0,n.createElement)(g,{toggleID:e.slug,isActive:e.is_enabled,onChangeFunc:()=>(e=>{let t=r.blocks.map((t=>e===t.slug?{...t,is_enabled:!t.is_enabled}:t));d({...r,blocks:t,allBlocksActionToggle:c(t),completedBlockSlugs:[]})})(e.slug)}))),(0,n.createElement)("div",{className:`gk-block-loader ${-1!==r.completedBlockSlugs.indexOf(e.slug)?" completed":""} ${e.slug===r.currentBlockSlug?" start":""}`},(0,n.createElement)("div",{className:"gk-loader "+(-1!==r.completedBlockSlugs.indexOf(e.slug)?" load-complete":"")},(0,n.createElement)("div",{className:"gk-checkmark draw"}))))))),(0,n.createElement)("div",{className:"gk-message"},3===r.saveStatus?(0,n.createElement)("div",{id:"unknown_error",className:"notice gk-notice notice-error is-dismissible"},(0,n.createElement)("p",null,(0,l.__)("Failed: Please check user or file permission to save block settings.","gutena-kit")),(0,n.createElement)("button",{type:"button",className:"notice-dismiss",onClick:()=>d({...r,saveStatus:0})},(0,n.createElement)("span",{className:"screen-reader-text"},(0,l.__)("Dismiss this notice.","gutena-kit")))):"",2===r.saveStatus?(0,n.createElement)("div",{id:"block_success",className:"notice gk-notice notice-success is-dismissible"},(0,n.createElement)("p",null,s?(0,l.__)("Blocks activated successfully.","gutena-kit"):(0,l.__)("Success: Block settings saved successfully.","gutena-kit")," "),(0,n.createElement)("button",{type:"button",className:"notice-dismiss",onClick:()=>d({...r,saveStatus:0})},(0,n.createElement)("span",{className:"screen-reader-text"},(0,l.__)("Dismiss this notice.","gutena-kit")))):"")),(0,n.createElement)("div",{className:"gk-save-block-settings"},(0,n.createElement)("div",{className:"gutena-button "+(1===r.saveStatus?"start-installing":""),onClick:()=>u(),disabled:1===r.saveStatus},(()=>{let e="";switch(r.saveStatus){case 0:e=s?(0,l.__)("Activate","gutena-kit"):(0,l.__)("Save","gutena-kit");break;case 1:e=s?(0,l.__)("Activating...","gutena-kit"):(0,l.__)("Saving...","gutena-kit");break;case 2:e=s?(0,l.__)("Activated","gutena-kit"):(0,l.__)("Saved","gutena-kit");break;default:e=(0,l.__)("Save","gutena-kit")}return e})()),s?(0,n.createElement)("div",{className:"gk-skip-settings",onClick:()=>u(!0)},(0,l.__)("Skip","gutena-kit")):"")))},k=e=>{if("undefined"==typeof gutenakit_demo_info||"undefined"==typeof gutenakit_dahboard_info)return(0,n.createElement)("div",null,(0,l.__)("Sorry! Gutena kit dashboard not available.","gutena-kit"));const t=gutenakit_dahboard_info.onboarding_info;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gutenakit-admin-dashboard gk-onboarding"},(0,n.createElement)("div",{className:"gutena-header"},(0,n.createElement)("div",{className:"gutena-admin-logo"},(0,n.createElement)("img",{src:gutenakit_dahboard_info.logo})),(0,n.createElement)("h3",null,t.heading)),(0,n.createElement)("div",{className:"gutena-tab-panel"},(0,n.createElement)("div",{className:"components-tab-panel__tab-content"},(0,n.createElement)(_,null)))))},p=e=>(0,n.createElement)("div",{className:"gutena-tab-body gutena-welcome-tab gutena-grid"},(0,n.createElement)("div",{className:"gutena-video"},(0,n.createElement)("a",{href:e.details.video_link,target:"_blank"},(0,n.createElement)("img",{src:e.details.video_img_url,alt:e.details.title,title:e.details.title}))),(0,n.createElement)("div",{className:"gutena-details"},(0,n.createElement)("h2",{className:"gutena-title"},e.details.title),(0,n.createElement)("p",{className:"gutena-description"},e.details.description),(0,n.createElement)("a",{href:e.details.button_link,className:"gutena-button",target:"_blank"},e.details.button_text))),E=(e,t)=>{const{showGutenaThemeRequireModal:a,gutenaThemeAvailable:n,previewDemoDispatchData:l,isPreviewDemo:s,previewDemoData:i,styleSelected:o,baseDemoIndex:c,demoIndex:r}=e;let m={};switch(t.type){case"GUTENA_THEME_INSTALLED":return m={...e,showGutenaThemeRequireModal:!1,gutenaThemeAvailable:!0},m;case"SHOW_GUTENA_THEME_REQUIRE_MODAL":return m={...e,showGutenaThemeRequireModal:!0,previewDemoDispatchData:t.previewData},m;case"CLOSE_GUTENA_THEME_REQUIRE_MODAL":return m={...e,showGutenaThemeRequireModal:!1},m;case"PREVIEW_DEMO":return m={...e,isPreviewDemo:!0,previewDemoData:t.selectedDemoData,styleSelected:"default",baseDemoIndex:t.selectedDemoIndex,demoIndex:t.selectedDemoIndex},m;case"SET_PREVIEW_DEMO":return m={...e,isPreviewDemo:!0,previewDemoData:i,styleSelected:t.styleSelected,baseDemoIndex:c,demoIndex:t.demoIndex},m;case"RESET_PREVIEW_DEMO":return m={...e,isPreviewDemo:!0,previewDemoData:i,styleSelected:"default",baseDemoIndex:c,demoIndex:c},m;case"CLOSE_PREVIEW_DEMO":return m={...e,isPreviewDemo:!1,previewDemoData:i,styleSelected:"default",baseDemoIndex:0,demoIndex:0},m;default:return e}},{createContext:b,useReducer:v}=wp.element,h=b(),f=e=>{let t={showGutenaThemeRequireModal:!1,gutenaThemeAvailable:"1"===gutenakit_demo_info.gutena_theme_available,previewDemoDispatchData:{},isPreviewDemo:!1,previewDemoData:{},styleSelected:"default",baseDemoIndex:0,demoIndex:0};const[a,l]=v(E,t);return(0,n.createElement)(h.Provider,{value:{...a,dispatch:l}},e.children)},{__}=wp.i18n,{Icon:N}=wp.components,{Fragment:w,useContext:y}=wp.element,D=e=>{const{import_preview_image_url:t,import_file_name:a,preview_url:l,demo_type:s}=e.demoWithVariation.default,{gutenaThemeAvailable:i,previewDemoDispatchData:o,isPreviewDemo:c,previewDemoData:r,styleSelected:m,baseDemoIndex:d,demoIndex:u,dispatch:g}=y(h);return(0,n.createElement)("div",{className:"gk-demo-card"},"freepro"===s?(0,n.createElement)("div",{className:"gk-demo-pro-icon"},(0,n.createElement)("img",{src:gutenakit_demo_info.pro_icon})):"",(0,n.createElement)("div",{className:"gk-demo-link"},(0,n.createElement)("a",{href:l,target:"_blank"},(0,n.createElement)("img",{src:gutenakit_demo_info.link_icon}))),(0,n.createElement)("div",{className:"gk-demo-card-img"},(0,n.createElement)("img",{src:t,alt:a,loading:"lazy"})),(0,n.createElement)("div",{className:"gk-demo-card-footer"},(0,n.createElement)("div",{className:"gk-demo-title"},a),(0,n.createElement)("div",{className:"gk-demo-import-action",onClick:()=>(()=>{if("freepro"===s)window.open(l,"_blank");else{let t=(()=>{let t=e.demoIndex;return t>0&&(t*=Object.keys(e.demoWithVariation).length),t})(),a={type:"PREVIEW_DEMO",selectedDemoData:e.demoWithVariation,selectedDemoIndex:t};g(i?a:{type:"SHOW_GUTENA_THEME_REQUIRE_MODAL",previewData:a})}})()},"freepro"===s?(0,n.createElement)(w,null,(0,n.createElement)("div",{className:"import-icon"},(0,n.createElement)(N,{icon:"external",size:"5"})),(0,n.createElement)("div",{className:"import-btn-name"},__("View","gutena-kit"))):(0,n.createElement)(w,null,(0,n.createElement)("div",{className:"import-icon"},(0,n.createElement)(N,{size:"5",icon:()=>(0,n.createElement)("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M0.833375 11.0835C0.832862 10.1631 1.06706 9.25771 1.51383 8.45296C1.96061 7.64821 2.60521 6.97067 3.38671 6.48438C3.59297 4.87612 4.37821 3.39813 5.59547 2.32701C6.81274 1.25589 8.37861 0.665039 10 0.665039C11.6215 0.665039 13.1873 1.25589 14.4046 2.32701C15.6219 3.39813 16.4071 4.87612 16.6134 6.48438C17.5827 7.08745 18.3368 7.98138 18.7678 9.03853C19.1988 10.0957 19.2848 11.262 19.0135 12.3709C18.7422 13.4798 18.1274 14.4747 17.257 15.2134C16.3866 15.9522 15.305 16.397 14.1667 16.4844L5.83337 16.5002C3.03671 16.2719 0.833375 13.9352 0.833375 11.0835ZM14.04 14.8227C14.8282 14.7621 15.5771 14.454 16.1797 13.9423C16.7823 13.4307 17.2078 12.7417 17.3954 11.9737C17.583 11.2058 17.5232 10.3982 17.2244 9.66636C16.9256 8.93449 16.4032 8.31576 15.7317 7.89854L15.0592 7.47938L14.9592 6.69438C14.8034 5.48912 14.2141 4.38182 13.3014 3.57945C12.3886 2.77708 11.2149 2.33453 9.99963 2.33453C8.78434 2.33453 7.61064 2.77708 6.69789 3.57945C5.78515 4.38182 5.19581 5.48912 5.04004 6.69438L4.94004 7.47938L4.26921 7.89854C3.59779 8.31571 3.07536 8.93437 2.77654 9.66617C2.47772 10.398 2.41778 11.2055 2.6053 11.9734C2.79281 12.7413 3.21819 13.4303 3.82067 13.942C4.42315 14.4537 5.17192 14.762 5.96004 14.8227L6.10421 14.8335H13.8959L14.04 14.8227ZM10.8334 9.00021H13.3334L10 13.1669L6.66671 9.00021H9.16671V5.66688H10.8334V9.00021Z",fill:"#484952"}))})),(0,n.createElement)("div",{className:"import-btn-name"},__("Import","gutena-kit"))))))},{__:C}=wp.i18n,{Fragment:S,useContext:T}=wp.element,{Icon:x}=wp.components,I=e=>{const{isPreviewDemo:t,previewDemoData:a,styleSelected:l,baseDemoIndex:s,demoIndex:i,dispatch:o}=T(h),c=a.default;return(0,n.createElement)(S,null,t&&c.preview_url.length>5?(0,n.createElement)("div",{className:"gk-demo-preview wp-full-overlay expanded preview-desktop"},(0,n.createElement)("div",{id:"customize-controls",className:"gk-left-section wrap wp-full-overlay-sidebar"},(0,n.createElement)("div",{className:"gk-header"},(0,n.createElement)("div",{className:"gk-back-button",onClick:()=>o({type:"CLOSE_PREVIEW_DEMO"})},(0,n.createElement)("div",{className:"gk-icon"},(0,n.createElement)(x,{icon:"arrow-left-alt2"})),(0,n.createElement)("div",{className:"gk-text"},C("BACK","gutena-kit"))),(0,n.createElement)("div",{className:"gk-demo-title"},c.import_file_name+" "+C("Demo","gutena kit"))),(0,n.createElement)("div",{className:"gk-style-variations"},(0,n.createElement)("div",{className:"gk-section-title-reset-icon"},(0,n.createElement)("div",{className:"gk-section-title"},C("Choose Style","gutena-kit")),(0,n.createElement)("div",{className:"gk-reset-icon",title:"reset",onClick:()=>(o({type:"RESET_PREVIEW_DEMO"}),void document.getElementById("gk-demo-preview-frame").contentWindow.postMessage({style:"default"},"*"))},(0,n.createElement)(x,{icon:"image-rotate"}))),(0,n.createElement)("div",{className:"gk-style-variation-cards"},Object.keys(a).length>0?Object.keys(a).map((function(e,t){let i=a[e];return(0,n.createElement)("div",{key:"gk-demo-variation"+e,className:"gk-color-demo-variation-card "+(l===e?"style-selected":""),onClick:()=>((e,t)=>{o({type:"SET_PREVIEW_DEMO",styleSelected:e,demoIndex:t}),document.getElementById("gk-demo-preview-frame").contentWindow.postMessage({style:e},"*")})(e,parseInt(s)+t)},(0,n.createElement)("div",{className:"gk-demo-color-palette"},i.colors.length>0?i.colors.map(((e,t)=>(0,n.createElement)("span",{key:"gk-colors-"+t,className:"gk-color-swatch",style:{background:e}}))):""),(0,n.createElement)("div",{className:"demo-style-details"},(0,n.createElement)("div",{className:"style-title"},i.title),(0,n.createElement)("div",{className:"font-families"},i.fontFamily.join(", "))))})):"")),(0,n.createElement)("div",{className:"import-demo-action"},(0,n.createElement)("a",{className:"import-demo-btn",href:gutenakit_demo_info.demo_import_url+i},(0,n.createElement)("span",{className:"gk-btn-icon"},(0,n.createElement)("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("rect",{y:"12",width:"12",height:"1",fill:"white"}),(0,n.createElement)("rect",{x:"5",y:"9",width:"9",height:"1",transform:"rotate(-90 5 9)",fill:"white"}),(0,n.createElement)("path",{d:"M5.49994 10L1 5.55124L1.51037 5L5.5 8.94401L9.48963 5L10 5.55124L5.49994 10Z",fill:"white"}))),(0,n.createElement)("span",{className:"gk-btn-text"},C("Import Demo","gutena-kit"))))),(0,n.createElement)("div",{id:"customize-preview",className:"gk-right-section wp-full-overlay-main iframe-ready"},(0,n.createElement)("iframe",{id:"gk-demo-preview-frame",title:"Site Preview",width:"100%",height:"100%",sandbox:"allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts",src:c.preview_url+"?embedddemo=gd"}))):"")},A=window.wp.components;gutenakit_demo_info.category.unshift("all");const O=e=>{if("undefined"==typeof gutenakit_demo_info)return(0,n.createElement)("div",null,(0,l.__)("Sorry! Gutena kit dashboard not available.","gutena-kit"));const{showGutenaThemeRequireModal:t,previewDemoDispatchData:a,dispatch:s}=(0,n.useContext)(h);let i={};Object.keys(gutenakit_demo_info.demo_list).forEach(((e,t)=>{i[e]=t}));const o=Object.values(gutenakit_demo_info.demo_list),[c,r]=(0,n.useState)(o),[m,d]=(0,n.useState)("all"),[u,g]=(0,n.useState)("all"),[_,k]=(0,n.useState)({available:gutenakit_demo_info.gutena_theme_available,action:gutenakit_demo_info.gutena_theme_action,status:0}),p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"btnName",t={btnName:"install"===_.action?(0,l.__)("Install Gutena Theme","gutena-kit"):(0,l.__)("Activate Gutena Theme","gutena-kit"),message:(0,l.__)("Starter templates requires Gutena theme to be installed in order to work properly.","gutena-kit"),statusClass:"warning"};switch(_.status){case 0:default:break;case 1:t={...t,btnName:"install"===_.action?(0,l.__)("Installing...","gutena-kit"):(0,l.__)("Activating...","gutena-kit")};break;case 2:t={...t,btnName:(0,l.__)("Gutena Theme Activated","gutena-kit"),message:(0,l.__)("Success: Gutena theme activated successfully.","gutena-kit"),statusClass:"success"};break;case 3:t={...t,message:(0,l.__)("Failed: Please check user or file permission to install or activate theme.","gutena-kit"),statusClass:"error"}}return t?.[e]},E=()=>{s(a)},b=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(0<_.status)return!1;k({..._,status:1}),fetch(gutenakit_dahboard_info.ajax_url,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json","X-WP-Nonce":gutenakit_dahboard_info.nonce},body:new URLSearchParams({action:"activate_gutena_theme",gutena_kit_security:gutenakit_dahboard_info.nonce,theme_slug:gutenakit_dahboard_info.theme_slug})}).then((e=>e.json())).then((t=>{setTimeout((()=>{k({..._,status:!1===t.success?3:2})}),1e3),setTimeout((()=>{e?E():s({type:"GUTENA_THEME_INSTALLED"})}),1500)}))},v=e=>{g(e),r("all"===e?o:o.filter((t=>"free"===e?"free"===t.default.demo_type:"free"!=t.default.demo_type)))};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gk-dashboard"},(0,n.createElement)(I,null),t&&(0,n.createElement)(A.Modal,{closeLabel:(0,l.__)("Close","gutena-kit"),onRequestClose:()=>s({type:"CLOSE_GUTENA_THEME_REQUIRE_MODAL"}),title:"",className:"gutena-theme-require-modal",aria:{describedby:"gk-description"}},(0,n.createElement)("div",{className:"gutena-theme-require-modal-description"},(0,n.createElement)("img",{src:2===_.status?gutenakit_demo_info.success_icon_green:gutenakit_demo_info.warning_icon,alt:"gutena-theme-require",className:p("statusClass")}),(0,n.createElement)("p",{id:"gk-description"},0===_.status?(0,l.__)("This template requires Gutena (free) theme to be installed in order to work properly, do you wish to import this template? ","gutena-kit"):p("message"))),(0,n.createElement)("div",{className:"gutena-theme-require-modal-buttons gutena-buttons"},(0,n.createElement)("span",{className:"gk-black-btn gutena-button ",onClick:()=>E()},(0,l.__)("Continue Anyway")),(0,n.createElement)("span",{className:`gutena-action-button gutena-button ${1===_.status?"start-installing":""} ${p("statusClass")}-btn`,onClick:()=>b(!0)},(0,n.createElement)("img",{src:2===_.status?gutenakit_demo_info.success_icon_white:gutenakit_demo_info.download_icon,alt:p("btnName")}),(0,n.createElement)("span",null,p("btnName"))))),(0,n.createElement)("div",{className:"gk-top-header"},(0,n.createElement)("div",{className:"gk-logo"},(0,n.createElement)("img",{src:gutenakit_demo_info.logo})),(0,n.createElement)("div",{className:"gk-center-tabs"},"1"===gutenakit_demo_info.show_demo_type_filter?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gk-tab "+("all"===u?"selected":""),onClick:()=>v("all")},(0,l.__)("All","gutena-kit")),(0,n.createElement)("div",{className:"gk-tab "+("free"===u?"selected":""),onClick:()=>v("free")},(0,l.__)("Free Templates","gutena-kit")),(0,n.createElement)("div",{className:"gk-tab "+("pro"===u?"selected":""),onClick:()=>v("pro")},(0,l.__)("Premium Templates","gutena-kit"))):""),(0,n.createElement)("div",{className:"gk-right-filters"},"1"===gutenakit_demo_info.show_category_filter?(0,n.createElement)(A.SelectControl,{value:m,options:gutenakit_demo_info.category.map((e=>({value:e,label:e[0].toUpperCase()+e.slice(1)}))),onChange:e=>{return d(t=e),void r("all"===t?o:o.filter((e=>e.default.category.indexOf(t)>=0)));var t},__nextHasNoMarginBottom:!0}):"")),(0,n.createElement)("div",{className:"gk-dashboard-body"},"1"===_.available?"":(0,n.createElement)("div",{id:"block_warning",className:" gk-save-block-settings notice gk-notice gutena-theme-require-notice is-dismissible notice-"+p("statusClass")},(0,n.createElement)("img",{src:2===_.status?gutenakit_demo_info.success_icon_green:gutenakit_demo_info.warning_icon,alt:"gutena-theme-require"})," ",(0,n.createElement)("p",null,"  ",p("message"),2===_.status?(0,n.createElement)("span",{className:"dismiss-link",onClick:e=>(e=>{e.target.parentNode.parentNode.remove()})(e)},(0,l.__)(" Dismiss ","gutena-kit")):""),(0,n.createElement)("span",{className:`gutena-action-button gutena-button ${1===_.status?"start-installing":""} ${p("statusClass")}-btn`,onClick:()=>b()},(0,n.createElement)("img",{src:2===_.status?gutenakit_demo_info.success_icon_white:gutenakit_demo_info.download_icon,alt:p("btnName")}),(0,n.createElement)("span",null,p("btnName")))),(0,n.createElement)("div",{className:"gk-demo-grid"},c.length>0?c.map(((e,t)=>(0,n.createElement)(D,{key:"gk-demo-"+t,demoWithVariation:e,demoIndex:i[e.default.demo_slug]}))):""))))};gutenakit_demo_info.category.unshift("all");const B=e=>(0,n.createElement)("div",{className:"gk-block-settings-tab"},(0,n.createElement)(_,null)),M=e=>{const t=e.details.changelog;return(0,n.createElement)("div",{className:"gutena-tab-body gutena-knowledge-tab"},(0,n.createElement)("div",{className:" gutena-doc-tab"},(0,n.createElement)("div",{className:"gutena-details"},(0,n.createElement)("h2",{className:"gutena-title"},e.details.title),(0,n.createElement)("div",{className:"gutena-topics"},e.details.topics.map(((e,t)=>(0,n.createElement)("div",{key:"gutena-topics-"+t},(0,n.createElement)("p",{className:"gutena-heading"},t+1+". "," ",void 0===e.link||""===e.link?e.heading:(0,n.createElement)("a",{href:e.link,target:"_blank"},e.heading)," "),(0,n.createElement)("p",{className:""},e.description))))),(0,n.createElement)("hr",null),(0,n.createElement)("div",{className:"gutena-support"},(0,n.createElement)("h2",{className:"gutena-title"},e.details.support.title),(0,n.createElement)("p",{className:"gutena-description"},e.details.support.description),(0,n.createElement)("div",{className:"gutena-buttons"},(0,n.createElement)("a",{href:e.details.support.documentation_link,className:"gk-black-btn gutena-button",target:"_blank"},(0,l.__)("Documentation")),(0,n.createElement)("a",{href:e.details.support.link_url,className:"gutena-support-link gutena-button",target:"_blank"},e.details.support.link_text))),(0,n.createElement)("hr",null))),(0,n.createElement)("div",{className:" gutena-changelog-tab"},(0,n.createElement)("div",{className:"gutena-details"},(0,n.createElement)("h2",{className:"gutena-title"},t.title),(0,n.createElement)("p",{className:"gutena-description",dangerouslySetInnerHTML:{__html:t.description}}))))},P=e=>{const{onBoarding:t,makeTemplateTabActive:a}=(0,n.useContext)(m);if("undefined"==typeof gutenakit_demo_info||"undefined"==typeof gutenakit_dahboard_info)return(0,n.createElement)("div",null,(0,l.__)("Sorry! Gutena kit dashboard not available.","gutena-kit"));const s={welcome:p,templates:O,blockSettings:B,doc:M},i=[];for(let e in gutenakit_dahboard_info.tabs){let t=gutenakit_dahboard_info.tabs[e];i.push({name:e,title:t.tab_title,className:"gutena-dashboard-"+e,details:t})}return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(f,null,(0,n.createElement)("div",{className:"gutenakit-admin-dashboard"},(0,n.createElement)("div",{className:"gutena-header"},(0,n.createElement)("div",{className:"gutena-admin-logo"},(0,n.createElement)("img",{src:gutenakit_dahboard_info.logo}))),(0,n.createElement)(A.TabPanel,{className:"gutena-tab-panel",activeClass:"active-tab",onSelect:e=>{},tabs:i,initialTabName:a?"templates":(()=>{let e="welcome",t=new URLSearchParams(window.location.search).get("tab");return void 0!==t&&null!=t&&""!==t&&("blocksettings"===t?e="blockSettings":"templates"===t?e="templates":"doc"===t&&(e="doc")),e})()},(e=>{const t=s[e.name]||p;return(0,n.createElement)(t,{details:e.details})})))))},L=()=>{const{onBoarding:e,makeTemplateTabActive:t}=(0,n.useContext)(m);return e?(0,n.createElement)(k,null):(0,n.createElement)(P,null)};i()((()=>{if("undefined"==typeof gutenakit_demo_info||"undefined"==typeof gutenakit_dahboard_info)return(0,n.createElement)("div",null,(0,l.__)("Sorry! Gutena kit dashboard not available.","gutena-kit"));(0,n.render)((0,n.createElement)(d,null,(0,n.createElement)(L,null)),document.getElementById("gutenakit-admin-dashboard-page"))}))}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,l,s)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,l,s]=e[m],o=!0,c=0;c<a.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(o=!1,s<i&&(i=s));if(o){e.splice(m--,1);var r=l();void 0!==r&&(t=r)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,l,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,s,[i,o,c]=a,r=0;if(i.some((t=>0!==e[t]))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(c)var m=c(n)}for(t&&t(a);r<i.length;r++)s=i[r],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(m)},a=globalThis.webpackChunkgutena_kit_demo_import=globalThis.webpackChunkgutena_kit_demo_import||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[431],(()=>n(870)));l=n.O(l)})();