if(!self.define){let i,e={};const o=(o,s)=>(o=new URL(o+".js",s).href,e[o]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=o,i.onload=e,document.head.appendChild(i)}else i=o,importScripts(o),e()})).then((()=>{let i=e[o];if(!i)throw new Error(`Module ${o} didn’t register its module`);return i})));self.define=(s,r)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let l={};const u=i=>o(i,a),t={module:{uri:a},exports:l,require:u};e[a]=Promise.all(s.map((i=>t[i]||u(i)))).then((i=>(r(...i),l)))}}define(["./workbox-2d118ab0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"meravigliosi-automi"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/meravigliosi-automi/css/app.5199bc9c.css",revision:null},{url:"/meravigliosi-automi/hub.css",revision:"b3b089327fec94189800ee7882a7e6a2"},{url:"/meravigliosi-automi/hub.php",revision:"80923c8e19e555427f3d7edaeb1176e8"},{url:"/meravigliosi-automi/img/logo.b365a904.png",revision:null},{url:"/meravigliosi-automi/index.html",revision:"17eae15b39d8a174074e0c3327f6be95"},{url:"/meravigliosi-automi/js/app.4879e39e.js",revision:null},{url:"/meravigliosi-automi/js/chunk-vendors.02d55c24.js",revision:null},{url:"/meravigliosi-automi/logo.png",revision:"e3684af881587050681eff7d451342bb"},{url:"/meravigliosi-automi/manifest.json",revision:"68ffa6528a53a149613d19084810a9ae"},{url:"/meravigliosi-automi/robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"/meravigliosi-automi/save.css",revision:"feb99b415753019bf1e239074ace1095"},{url:"/meravigliosi-automi/save.php",revision:"47880f72b2d0e79c58027f7361f6bf88"},{url:"/meravigliosi-automi/wikia.css",revision:"1e15f0b3e604c8d506df49a08abc3272"},{url:"/meravigliosi-automi/wikia.html",revision:"e22404f9de80afba867e247f31b10f33"}],{})}));
//# sourceMappingURL=service-worker.js.map
