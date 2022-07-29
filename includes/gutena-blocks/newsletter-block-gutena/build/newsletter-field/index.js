(()=>{"use strict";var e,t={293:()=>{const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/newsletter-field","title":"Newsletter Field","category":"gutena","parent":["gutena/newsletter"],"icon":"email-alt","description":"Gutena Newsletter Field","textdomain":"newsletter-block-gutena","supports":{"html":false,"color":{"background":true,"text":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontStyle":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true},"spacing":{"padding":true,"margin":true}},"attributes":{"style":{"type":"object","default":{"color":{"text":"#000000","background":"#EBEBEB"},"border":{"radius":"5px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"20px","right":"20px"},"margin":{"top":"10px","bottom":"10px","left":"0","right":"0"}},"typography":{"fontSize":"18px"}}},"className":{"type":"string","default":"gutena-block-field"},"textSuccess":{"type":"string","default":"Thank you for subscribing!"},"textSubscribed":{"type":"string","default":"You\'re already subscribed with us!"},"provider":{"type":"string"},"mailchimpApiKey":{"type":"string"},"mailchimpListID":{"type":"string"},"iconColor":{"type":"string"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","script":"gutena-newsletter-block","style":"file:./style-index.css"}'),r=window.wp.element,l=window.wp.i18n,n=window.wp.components,a=window.wp.blockEditor;(0,e.registerBlockType)(t,{edit:function(e){let{attributes:t,setAttributes:i}=e;const o=(0,a.useBlockProps)({className:"gutena-newsletter-field-block"}),s=(0,r.createElement)("a",{href:"https://mailchimp.com/help/find-audience-id/",target:"_blank"},(0,l.__)("Find Audience ID","gutena-newsletter"));return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.InspectorControls,{key:"settings"},(0,r.createElement)(n.PanelBody,{title:(0,l.__)("Provider","gutena-newsletter")},(0,r.createElement)(n.SelectControl,{label:(0,l.__)("Choose Provider","gutena-newsletter"),value:t.provider,options:[{label:(0,l.__)("-- Select --","gutena-newsletter"),value:""},{label:(0,l.__)("Mailchimp","gutena-newsletter"),value:"mailchimp"}],onChange:e=>i({provider:e})}),"mailchimp"===t.provider?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(n.TextControl,{label:(0,l.__)("Mailchimp API Key","gutena-newsletter"),value:t.mailchimpApiKey,onChange:e=>i({mailchimpApiKey:e})}),(0,r.createElement)(n.TextControl,{label:(0,l.__)("Mailchimp Audience ID","gutena-newsletter"),value:t.mailchimpListID,onChange:e=>i({mailchimpListID:e}),help:s})):(0,r.createElement)(r.Fragment,null)),(0,r.createElement)(n.PanelBody,{title:(0,l.__)("Messages","gutena-newsletter"),initialOpen:!1},(0,r.createElement)(n.TextControl,{label:(0,l.__)("Success Message","gutena-newsletter"),value:t.textSuccess,onChange:e=>i({textSuccess:e})}),(0,r.createElement)(n.TextControl,{label:(0,l.__)("Already Subscribed Message","gutena-newsletter"),value:t.textSubscribed,onChange:e=>i({textSubscribed:e})})),(0,r.createElement)(a.PanelColorSettings,{title:(0,l.__)("Icon Color"),colorSettings:[{value:t.iconColor,onChange:e=>i({iconColor:e}),label:(0,l.__)("Color","gutena-newsletter")}]})),(0,r.createElement)("div",o,(0,r.createElement)("form",{className:"gutena-newsletter-form"},(0,r.createElement)("input",{type:"email",id:"gutena-newsletter-field",className:"gutena-newsletter-field",placeholder:"name@email.com"}),(0,r.createElement)("input",{type:"submit",id:"gutena-newsletter-action",className:"gutena-newsletter-action",value:"→",style:{color:t.iconColor}}))))}})}},r={};function l(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,r,n,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],o=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(l.O).every((e=>l.O[e](r[s])))?r.splice(s--,1):(o=!1,a<i&&(i=a));if(o){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={388:0,891:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,o,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in o)l.o(o,n)&&(l.m[n]=o[n]);if(s)var u=s(l)}for(t&&t(r);c<i.length;c++)a=i[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},r=globalThis.webpackChunknewsletter_block_gutena=globalThis.webpackChunknewsletter_block_gutena||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=l.O(void 0,[891],(()=>l(293)));n=l.O(n)})();