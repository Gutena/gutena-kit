(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/newsletter","title":"Newsletter","category":"gutena","icon":"email","description":"Newsletter Block by Gutena","textdomain":"newsletter-block-gutena","supports":{"__experimentalLayout":true,"align":["wide","full"],"html":false},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),r=window.wp.element,o=(window.wp.i18n,window.wp.blockEditor),c=[["core/columns",{style:{spacing:{padding:{top:"40px",right:" 40px",bottom:"40px",left:"40px"},margin:{top:"0",right:" 0",bottom:"0",left:"0"}},border:{width:"1px",radius:"10px",style:"solid",color:"#0c0c0c"}},backgroundColor:"background"},[["core/column",{width:"30%",verticalAlignment:"center",className:"gutena-newsletter-col-first"},[["core/image",{sizeSlug:"full",width:140,height:115,url:e.p+"images/image.c7f425bc.png",alt:"Image",align:"center"}]]],["core/column",{className:"gutena-newsletter-col-last",style:{spacing:{blockGap:"6px"}}},[["core/heading",{content:"Subscribe",style:{typography:{fontSize:"28px"}}}],["core/paragraph",{content:"Sign up for free content.",style:{typography:{fontSize:"14px"}},color:{text:"#505050"}}],["gutena/newsletter-field"],["core/paragraph",{content:"I won’t send you spam. Unsubscribe at any time.",style:{typography:{fontSize:"14px"}},color:{text:"#505050"}}]]]]]];(0,t.registerBlockType)(n,{edit:function(){const e=(0,o.useBlockProps)({className:"gutena-newsletter-block"});return(0,r.createElement)("div",e,(0,r.createElement)(o.InnerBlocks,{template:c}))},save:function(){const e=o.useBlockProps.save({className:"gutena-newsletter-block"});return(0,r.createElement)("div",e,(0,r.createElement)(o.InnerBlocks.Content,null))}})})();