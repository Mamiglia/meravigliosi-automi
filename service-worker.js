if(!self.define){let i,e={};const o=(o,s)=>(o=new URL(o+".js",s).href,e[o]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=o,i.onload=e,document.head.appendChild(i)}else i=o,importScripts(o),e()})).then((()=>{let i=e[o];if(!i)throw new Error(`Module ${o} didn’t register its module`);return i})));self.define=(s,a)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let l={};const u=i=>o(i,r),t={module:{uri:r},exports:l,require:u};e[r]=Promise.all(s.map((i=>t[i]||u(i)))).then((i=>(a(...i),l)))}}define(["./workbox-2d118ab0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"meravigliosi-automi"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/meravigliosi-automi/css/app.a514e41a.css",revision:null},{url:"/meravigliosi-automi/hub.css",revision:"b3b089327fec94189800ee7882a7e6a2"},{url:"/meravigliosi-automi/hub.php",revision:"80923c8e19e555427f3d7edaeb1176e8"},{url:"/meravigliosi-automi/img/logo.b365a904.png",revision:null},{url:"/meravigliosi-automi/index.html",revision:"d142f20aa918c1cf307628bd6fa64266"},{url:"/meravigliosi-automi/js/app.2c3a6b8a.js",revision:null},{url:"/meravigliosi-automi/js/chunk-vendors.5901a714.js",revision:null},{url:"/meravigliosi-automi/logo.png",revision:"e3684af881587050681eff7d451342bb"},{url:"/meravigliosi-automi/manifest.json",revision:"68ffa6528a53a149613d19084810a9ae"},{url:"/meravigliosi-automi/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/meravigliosi-automi/save.css",revision:"feb99b415753019bf1e239074ace1095"},{url:"/meravigliosi-automi/save.php",revision:"47880f72b2d0e79c58027f7361f6bf88"},{url:"/meravigliosi-automi/wikia.css",revision:"1e15f0b3e604c8d506df49a08abc3272"},{url:"/meravigliosi-automi/wikia.html",revision:"e22404f9de80afba867e247f31b10f33"}],{})}));
//# sourceMappingURL=service-worker.js.map
