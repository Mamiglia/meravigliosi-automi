if(!self.define){let i,e={};const o=(o,s)=>(o=new URL(o+".js",s).href,e[o]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=o,i.onload=e,document.head.appendChild(i)}else i=o,importScripts(o),e()})).then((()=>{let i=e[o];if(!i)throw new Error(`Module ${o} didn’t register its module`);return i})));self.define=(s,r)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let l={};const u=i=>o(i,a),t={module:{uri:a},exports:l,require:u};e[a]=Promise.all(s.map((i=>t[i]||u(i)))).then((i=>(r(...i),l)))}}define(["./workbox-2d118ab0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"meravigliosi-automi"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/meravigliosi-automi/css/app.1930de8c.css",revision:null},{url:"/meravigliosi-automi/hub.css",revision:"b3b089327fec94189800ee7882a7e6a2"},{url:"/meravigliosi-automi/hub.php",revision:"f06e9a931afb08ef0385b84ad2d0b427"},{url:"/meravigliosi-automi/img/logo2.e9fa9c93.png",revision:null},{url:"/meravigliosi-automi/index.html",revision:"2550d9a60647564fd8c52671896f162a"},{url:"/meravigliosi-automi/js/app.dd6a425c.js",revision:null},{url:"/meravigliosi-automi/js/chunk-vendors.19cdb156.js",revision:null},{url:"/meravigliosi-automi/logo2.png",revision:"bfaa334e2d814d3458177a213d7361ee"},{url:"/meravigliosi-automi/manifest.json",revision:"09d814605a2cbcecf5b1b189b8f89ef6"},{url:"/meravigliosi-automi/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/meravigliosi-automi/save.css",revision:"b98d7a981f681eb087c5181d0055dde4"},{url:"/meravigliosi-automi/save.php",revision:"4f0ef4ec5adee006a9383c32d4ccd694"},{url:"/meravigliosi-automi/wikia.css",revision:"1e15f0b3e604c8d506df49a08abc3272"},{url:"/meravigliosi-automi/wikia.html",revision:"8b3c13bfc26b5c44a623c7ebc09ba99d"}],{})}));
//# sourceMappingURL=service-worker.js.map
