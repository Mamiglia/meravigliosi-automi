(function(){"use strict";var e={7773:function(e,a,t){var n=t(9242),l=t(3396),o=t(4870),i=t(7139),r=t.p+"img/logo.b365a904.png";const s=e=>((0,l.dD)("data-v-186f7b4e"),e=e(),(0,l.Cn)(),e),u=["hide"],c=s((()=>(0,l._)("img",{class:"logo",src:r},null,-1))),d=s((()=>(0,l._)("h1",{class:"title",id:"title"},[(0,l.Uk)("Meravigliosi Automi "),(0,l._)("br"),(0,l.Uk)("β")],-1))),v=s((()=>(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",{href:".\\wikia.html"},"Wiki")]),(0,l._)("li",null,[(0,l._)("a",{href:"https://github.com/Mamiglia/meravigliosi-automi"},"Source Code")]),(0,l._)("br")],-1))),p=s((()=>(0,l._)("span",null,null,-1))),h=s((()=>(0,l._)("button",{type:"button"},null,-1))),m=[h],g=["hide"];var f=(0,l.aZ)({emits:["startTutorial"],setup(e){const a=(0,o.iH)(!0);return(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{id:"sidemenu",hide:!a.value},[c,d,v,p,(0,l._)("button",{type:"button",onClick:t[0]||(t[0]=e=>a.value=!1)},"start >")],8,u),(0,l._)("div",{class:"menu-btn",onClick:t[1]||(t[1]=e=>a.value=!0)},m),(0,l._)("span",{class:"outside",onClick:t[2]||(t[2]=e=>a.value=!1),hide:!a.value},null,8,g)],64))}}),b=t(89);const y=(0,b.Z)(f,[["__scopeId","data-v-186f7b4e"]]);var w=y,k=t(6617);const U=["is-active"],_={class:"material-icons"};var E=(0,l.aZ)({props:{icon:String,active:{type:Boolean,default:!1}},setup(e){return(a,t)=>((0,l.wg)(),(0,l.iD)("button",{class:"btn","is-active":e.active},[(0,l._)("span",_,(0,i.zw)(e.icon),1)],8,U))}});const S=(0,b.Z)(E,[["__scopeId","data-v-7c5081c8"]]);var T=S,C=t(7063),N=t(7071);function I(e){return JSON.parse(JSON.stringify(e))}function L(e){return 0===e.length?[]:e.replaceAll(/\s/g,"").split(",")}function D(e){return new Promise((a=>setTimeout(a,e)))}async function V(e){const{toClipboard:a}=(0,N.Z)();await a(e)}function O(e){const a=(0,C.nN)(e);return JSON.stringify(a)}function A(e){return(0,C.Lj)(JSON.parse(e))}function x(e){return e[Math.floor(Math.random()*e.length)]}function P(e,a){const t=document.createElement("form");Object.keys(a).forEach((e=>{const n=document.createElement("input");n.type="hidden",n.name=e,n.value=a[e],t.appendChild(n)})),t.method="post",t.action=e,document.body.appendChild(t),t.submit()}var j=t(1957);const H={hub:"http://localhost:3000/public/hub.php",save:"http://localhost:3000/public/save.php"},W=(0,j.Kl)({view:{zoomEnabled:!1,doubleClickZoomEnabled:!1,mouseWheelZoomEnabled:!1,grid:{visible:!0,margin:0,interval:40,line:{color:"var(--color-grid)",width:1,dasharray:5},thick:{color:"var(--color-grid)",width:1}}},node:{normal:{color:e=>e.on?"var(--secondary)":e.final?"var(--color-text)":"var(--accent)",radius:e=>e.final||e.on?30:25},hover:{color:"var(--secondary)"},selectable:2,label:{direction:"center",fontFamily:"Courier New",text:"name",color:e=>e.final?"var(--background)":"var(--white-ish)"},focusring:{color:"var(--secondary)"}},edge:{normal:{width:2.5,color:"var(--accent)"},selectable:1,selected:{color:"var(--secondary)"},hover:{color:"var(--secondary)"},margin:2,gap:25,type:"curve",marker:{target:{type:"arrow"}},label:{color:"var(--color-text)",fontSize:15}}}),Z="\n:root {\n    /* colors: */\n      --white: #f7f9fa;\n      --white-ish: #d7d7d9;\n    \n      --black: #0c0c0d;\n      --black-ish: #2a2e35;\n    \n      --indigo: #2c3e50;\n    \n      --rosso-sapienza: #822433; /* <3 */\n    \n      --vt-c-text-light-1: var(--black-ish);\n      --vt-c-text-light-2: rgba(60, 60, 60, 1);\n      --vt-c-text-dark-1: var(--vt-c-white);\n      --vt-c-text-dark-2: rgba(235, 235, 235, 1);\n    \n    \n    /* palette: */\n      --main: var(--rosso-sapienza) ;\n    \n      --complement: #35799c;\n    \n      --fast-animation: 0.35s;\n      --normal-animation: 0.75s;   \n    }\n    \n    /* semantic color variables for this project */\n    :root {\n      --call-to-action: var(--rosso-sapienza);\n      --secondary: var(--complement);\n      --primary-dark: var(--white-ish);\n      --primary-light: var(--white);\n    \n      --background: var(--primary-light);\n      --background-alternative: var(--primary-dark);\n    \n      \n      --color-grid: var(--primary-dark);\n      \n      --color-text: var(--black-ish);\n      --accent: var(--call-to-action);\n    }\n    \n    @media (prefers-color-scheme: dark) {\n      :root {\n        --call-to-action: var(--rosso-sapienza);\n        --secondary: var(--complement);\n        --primary-dark: var(--black);\n        --primary-light: var(--black-ish);\n      \n        --background: var(--primary-dark);\n        --background-alternative: var(--primary-light);\n      \n        --color-grid: var(--primary-light);\n      \n        --color-text: var(--white-ish);\n      \n        --accent: var(--call-to-action);\n      } \n    }\n",M=/^(\w,)*\w$/;function z(e){return encodeURI(O(e))}function F(e){if(!e)return;const a=e.getAsSvg(),t=URL.createObjectURL(new Blob([a],{type:"octet/stream"}));console.log(t);const n=document.createElement("a");n.href=t,n.download="automa.svg",n.click(),window.URL.revokeObjectURL(t)}function Y(e){const a={nodes:{0:{name:"0"},1:{name:"1"},2:{name:"2"},3:{name:"3",final:!0}},edges:{0:{source:"0",target:"1",label:"a",ruleType:"INCLUDE",charset:["a"]},1:{source:"0",target:"2",label:"b",ruleType:"INCLUDE",charset:["b"]},2:{source:"2",target:"0",label:"b",ruleType:"INCLUDE",charset:["b"]},3:{source:"1",target:"0",label:"a",ruleType:"INCLUDE",charset:["a"]},4:{source:"0",target:"3",label:"c",ruleType:"INCLUDE",charset:["c"]}},alphabet:["a","b","c"],initial:"0",determinism:!0,layout:{nodes:{0:{x:200,y:200},1:{x:320,y:80},2:{x:320,y:320},3:{x:440,y:200}}}},t=new URLSearchParams(e),n=t.get("graph"),l=localStorage.getItem("graph");try{return null!=n?(console.log("Taking graph from url"),A(decodeURI(n))):null!=l?(console.log("Taking graph from local"),A(decodeURI(l))):a}catch(o){return console.log("Graph is unreadeable - starting with default"),a}}function G(e){if(navigator.share){const a="?graph="+z(e);navigator.share({title:"Meraviglioso Automa",url:a}).catch(console.error)}else{const a=window.location.hostname+window.location.pathname+"?graph="+z(e),{Toast:n}=t(7226);V(encodeURI(a)),new n("Copied to clipboard",n.TYPE_DONE)}}function R(e,a){P(H.save,{thumbnail:a.getAsSvg(),graph:z(e)})}function $(){localStorage.removeItem("graph"),window.location.reload()}const X=e=>((0,l.dD)("data-v-3c250c88"),e=e(),(0,l.Cn)(),e),B={id:"footer"},K=["show"],q={class:"settings"},J={class:"section"},Q=X((()=>(0,l._)("label",{for:"startNode"},"Starting node",-1))),ee=X((()=>(0,l._)("option",{disabled:"",value:"null"},null,-1))),ae=["value"],te={class:"section"},ne=X((()=>(0,l._)("label",{for:"alphabetInput"},"Alphabet: ",-1))),le=["pattern"],oe={class:"section"},ie=X((()=>(0,l._)("label",{for:"determinismCheckbox"},"Determinstic Automa",-1))),re={class:"section"},se=X((()=>(0,l._)("label",{for:"animateCheckbox"},"Animate Evaluation",-1))),ue={class:"section"};var ce=(0,l.aZ)({props:{alphabet:null,determinism:{type:Boolean},animated:{type:Boolean},start:null,nodes:null},emits:["addNode","remove","addEdge","validate","update:animated","update:alphabet","update:determinism","update:start","save","share","downloadSVG","findAMatch"],setup(e,{emit:a}){const t=e,r=(0,o.iH)(!1),s=(0,o.iH)(t.alphabet.join(",")),u=(0,l.Fl)((()=>L(s.value))),c=(0,o.iH)(t.determinism),d=(0,o.iH)(t.animated),v=(0,o.iH)("");function p(e,t){console.log(t),a(`update:${e}`,t)}return(a,t)=>((0,l.wg)(),(0,l.iD)("div",B,[(0,l._)("div",{class:"popupMenu",show:r.value},[(0,l.Wm)(T,{icon:"settings",active:r.value,onClick:t[0]||(t[0]=e=>r.value=r.value)},null,8,["active"]),(0,l._)("div",q,[(0,l._)("div",J,[Q,(0,l._)("select",{name:"startNode",onChange:t[1]||(t[1]=e=>p("start",e.target.value))},[ee,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Object.keys(e.nodes),(a=>((0,l.wg)(),(0,l.iD)("option",{key:a,value:a},(0,i.zw)(e.nodes[a].name),9,ae)))),128))],32)]),(0,l._)("div",te,[ne,(0,l.wy)((0,l._)("input",{type:"text",id:"alphabetInput",placeholder:"Alfabeto",onInput:t[2]||(t[2]=e=>(0,o.SU)(M).test(e.target?.value)&&p("alphabet",(0,o.SU)(u))),"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=e),pattern:(0,o.SU)(M).source},null,40,le),[[n.nr,s.value]])]),(0,l._)("div",oe,[ie,(0,l.Wm)((0,o.SU)(k.Z),{id:"determinismCheckbox",class:"toggle",onChange:t[4]||(t[4]=e=>p("determinism",c.value)),modelValue:c.value,"onUpdate:modelValue":t[5]||(t[5]=e=>c.value=e),"on-label":"on","off-label":"off"},null,8,["modelValue"])]),(0,l._)("div",re,[se,(0,l.Wm)((0,o.SU)(k.Z),{id:"animateCheckbox",class:"toggle",onChange:t[6]||(t[6]=e=>p("animated",d.value)),modelValue:d.value,"onUpdate:modelValue":t[7]||(t[7]=e=>d.value=e),"on-label":"on","off-label":"off"},null,8,["modelValue"])]),(0,l._)("div",ue,[(0,l.Wm)(T,{icon:"share",onClick:t[8]||(t[8]=e=>a.$emit("share"))}),(0,l.Wm)(T,{icon:"image",onClick:t[9]||(t[9]=e=>a.$emit("downloadSVG"))}),(0,l.Wm)(T,{icon:"sort_by_alpha",onClick:t[10]||(t[10]=e=>a.$emit("findAMatch"))}),(0,l.Wm)(T,{icon:"clear",onClick:t[11]||(t[11]=e=>(0,o.SU)($)())})])]),(0,l._)("span",{class:"outside",onClick:t[12]||(t[12]=e=>r.value=!1)})],8,K),(0,l.Wm)(T,{icon:"delete_forever",onClick:t[13]||(t[13]=e=>a.$emit("remove"))}),(0,l.Wm)(T,{icon:"add_circle",onClick:t[14]||(t[14]=e=>a.$emit("addNode"))}),(0,l.Wm)(T,{icon:"commit",onClick:t[15]||(t[15]=e=>a.$emit("addEdge"))}),(0,l.wy)((0,l._)("input",{id:"String",type:"text",placeholder:"Insert a string to validate","onUpdate:modelValue":t[16]||(t[16]=e=>v.value=e),onKeyup:t[17]||(t[17]=(0,n.D2)((e=>a.$emit("validate",v.value)),["enter"]))},null,544),[[n.nr,v.value]]),(0,l.Wm)(T,{icon:"skip_next",onClick:t[18]||(t[18]=e=>a.$emit("validate",v.value))})]))}});const de=(0,b.Z)(ce,[["__scopeId","data-v-3c250c88"]]);var ve=de;const pe={class:"editor edgeEditor"},he={class:"edgeTitle"},me={class:"section"},ge={class:"section"},fe=["disabled","pattern"],be=["disabled","pattern"];var ye=(0,l.aZ)({props:{edgeId:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,r=(0,o.iH)("ALL"),s=(0,o.iH)([]),u=(0,o.iH)(""),c=(0,o.iH)(""),d=(0,l.Fl)({set(e){"INCLUDE"===r.value&&M.test(e)||"EXCLUDE"===r.value&&M.test(e)?s.value=L(e):"ALL"!==r.value&&"EPSILON"!==r.value&&""!==e||(s.value=[])},get(){return s.value.toString()}});h();const v=(0,l.Fl)((()=>"INCLUDE"===r.value?d.value:"EXCLUDE"===r.value?0!==s.value.length?"¬"+s.value.join(", ¬"):"":"EPSILON"===r.value?"ε":"*")),p=(0,l.Fl)((()=>({source:t.modelValue.source,target:t.modelValue.target,label:v.value,ruleType:r.value,charset:s.value})));function h(){r.value=t.modelValue.ruleType,"INCLUDE"===t.modelValue.ruleType?(u.value=t.modelValue.charset.join(","),c.value="",d.value=u.value):(c.value=t.modelValue.charset.join(","),u.value="",d.value=c.value),console.log(t.edgeId,t.modelValue)}return(0,l.YP)(v,(async()=>a("update:modelValue",p.value))),(0,l.YP)((()=>t.edgeId),(async()=>h())),(0,l.YP)(r,(async()=>{"EXCLUDE"===r.value?d.value=c.value:"INCLUDE"===r.value&&(d.value=u.value)})),(a,t)=>((0,l.wg)(),(0,l.iD)("div",pe,[(0,l._)("div",he,[(0,l._)("h3",null,(0,i.zw)(e.modelValue.source)+" → "+(0,i.zw)(e.modelValue.target),1)]),(0,l._)("div",me,[(0,l._)("p",{onClick:t[0]||(t[0]=e=>r.value="EPSILON")},"ε-transition"),(0,l.wy)((0,l._)("input",{type:"radio",value:"EPSILON",id:"ruleTypeEPSILON",name:"ruleType","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e)},null,512),[[n.G2,r.value]])]),(0,l._)("div",ge,[(0,l._)("p",{onClick:t[2]||(t[2]=e=>r.value="ALL")},"All alphabet"),(0,l.wy)((0,l._)("input",{type:"radio",value:"ALL",id:"ruleTypeALL",name:"ruleType","onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e)},null,512),[[n.G2,r.value]])]),(0,l._)("div",{class:"section",onClick:t[7]||(t[7]=e=>r.value="EXCLUDE")},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Exclude characters",disabled:"EXCLUDE"!=r.value,pattern:(0,o.SU)(M).source,"onUpdate:modelValue":t[4]||(t[4]=e=>c.value=e),onInput:t[5]||(t[5]=e=>d.value=e.target.value)},null,40,fe),[[n.nr,c.value]]),(0,l.wy)((0,l._)("input",{type:"radio",value:"EXCLUDE",id:"ruleTypeEXCLUDE",name:"ruleType","onUpdate:modelValue":t[6]||(t[6]=e=>r.value=e)},null,512),[[n.G2,r.value]])]),(0,l._)("div",{class:"section",onClick:t[11]||(t[11]=e=>r.value="INCLUDE")},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Include characters",disabled:"INCLUDE"!=r.value,pattern:(0,o.SU)(M).source,"onUpdate:modelValue":t[8]||(t[8]=e=>u.value=e),onInput:t[9]||(t[9]=e=>d.value=e.target.value)},null,40,be),[[n.nr,u.value]]),(0,l.wy)((0,l._)("input",{type:"radio",value:"INCLUDE",id:"ruleTypeINCLUDE",name:"ruleType","onUpdate:modelValue":t[10]||(t[10]=e=>r.value=e)},null,512),[[n.G2,r.value]])])]))}});const we=ye;var ke=we;const Ue={class:"editor nodeEditor"},_e={class:"nodeTitle"},Ee={class:"section"},Se=(0,l.Uk)(" Name: "),Te={class:"section"},Ce=(0,l.Uk)(" Final:  ");var Ne=(0,l.aZ)({props:{nodeId:null,modelValue:null},emits:["update:modelValue"],setup(e){const a=e,t=(0,o.iH)(a.modelValue.final),r=(0,o.iH)(a.modelValue.name),s=(0,l.Fl)((()=>({name:r.value,final:t.value})));return(0,l.YP)((()=>a.nodeId),(async()=>{t.value=a.modelValue.final,r.value=a.modelValue.name})),(e,a)=>((0,l.wg)(),(0,l.iD)("div",Ue,[(0,l._)("div",_e,[(0,l._)("h3",null,"Node: "+(0,i.zw)(r.value),1)]),(0,l._)("div",Ee,[Se,(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Nome nodo","onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),onChange:a[1]||(a[1]=a=>e.$emit("update:modelValue",(0,o.SU)(s)))},null,544),[[n.nr,r.value]])]),(0,l._)("div",Te,[Ce,(0,l.Wm)((0,o.SU)(k.Z),{id:"finalToggle",class:"toggle",onChange:a[2]||(a[2]=a=>e.$emit("update:modelValue",(0,o.SU)(s))),modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),"on-label":"on","off-label":"off"},null,8,["modelValue"])])]))}});const Ie=(0,b.Z)(Ne,[["__scopeId","data-v-e4c0a59a"]]);var Le=Ie,De=t(2482);const Ve=t(7226);class Oe{constructor(e,a,t,n){(0,De.Z)(this,"nodes",void 0),(0,De.Z)(this,"edges",void 0),(0,De.Z)(this,"initialNode",void 0),(0,De.Z)(this,"alphabet",void 0),this.nodes=e,this.edges=a,this.initialNode=t,this.alphabet=n}toString(){let e="INITIAL NODE: "+this.initialNode+"\n";e+="NODES: \n";for(const a in this.nodes)e+=a,this.nodes[a].final&&(e+=" (final)"),e+="\n";e+="EDGES:\n";for(const a in this.edges){const t=this.edges[a];e+=a.toString()+": source = "+t.source+" target = "+t.target+" label = "+t.label+" ruleType = "+t.ruleType+" charset = "+t.charset,e+="\n"}return e+="ALPHABET: "+this.alphabet.toString(),e}isSuccess(e){return!!this.nodes[e].final}checkSuccess(e){for(const a of e)if(this.isSuccess(a))return!0;return!1}checkTransition(e,a,t){return"ALL"===e||("INCLUDE"===e?a.includes(t):"EXCLUDE"===e?!a.includes(t):("EPSILON"===e||console.log("Error: unrecognized ruleType"),!1))}validateEdges(){for(const e in this.edges){const a=this.edges[e];for(const e of a.charset)if(!this.alphabet.includes(e))return!1}return!0}async evaluate(e,a,t){for(const o of e)if(!this.alphabet.includes(o)){new Ve.Toast("The string contains characters that are not in the alphabet",Ve.Toast.TYPE_WARNING);return!1}if(!this.validateEdges()){new Ve.Toast("Transitions refer to character that are not in the alphabet",Ve.Toast.TYPE_WARNING);return!1}if(t&&!this.isDeterministic()){new Ve.Toast("The automaton in not deterministic",Ve.Toast.TYPE_WARNING);return!1}console.log(`animated: ${a}`);let n=new Set([this.initialNode]);n=this.epsilonTransitions(n);const l=await this.ricorsiveEvaluate(n,e,a);new Ve.Toast(l,Ve.Toast.TYPE_DONE);return l}async ricorsiveEvaluate(e,a,t){if(""===a||0===e.size)return!!this.checkSuccess(e);let n=new Set;for(const o in this.edges){const t=this.edges[o];e.has(t.source)&&this.checkTransition(t.ruleType,t.charset,a.charAt(0))&&n.add(t.target)}n=this.epsilonTransitions(n),t&&(n.forEach((e=>this.nodes[e].on=!0)),await D(500),n.forEach((e=>this.nodes[e].on=!1)));const l=a.slice(1);return this.ricorsiveEvaluate(n,l,t)}isDeterministic(){for(const e in this.edges){const a=this.edges[e];for(const e in this.edges){const t=this.edges[e];if(a.source===t.source&&a.target!=t.target)for(const e of this.alphabet)if(this.checkTransition(a.ruleType,a.charset,e)&&this.checkTransition(t.ruleType,t.charset,e))return!1}}return!0}epsilonTransitions(e){let a=!0;while(a){a=!1;for(const t in this.edges){const n=this.edges[t];"EPSILON"===n.ruleType&&e.has(n.source)&&!e.has(n.target)&&(a=!0,e.add(n.target))}}return e}randomWalk(e){if(void 0==e&&(e=this.initialNode),this.nodes[e].final&&Math.random()>.75)return"";const a=[];if(Object.entries(this.edges).forEach((t=>{const[n,l]=t;l.source===e&&a.push(n)})),0===a.length)return this.nodes[e].final?"":null;const t=x(a),n=this.edges[t];let l;l="ALL"===n.ruleType?this.alphabet:"INCLUDE"===n.ruleType?n.charset:this.alphabet.filter((e=>!n.charset.includes(e)));const o=this.randomWalk(n.target);return null===o?(console.log(o),null):x(l)+o}findAMatch(){const e=this.randomWalk();return null===e?new Ve.Toast("MATCH NOT FOUND",Ve.Toast.TYPE_WARNING):new Ve.Toast(e,Ve.Toast.TYPE_INFO),e}}const Ae={id:"worksheet"};var xe=(0,l.aZ)({setup(e){const a=Y(window.location.search),t=(0,o.qj)(a.nodes),r=(0,o.qj)(a.edges),s=(0,o.iH)([]),u=(0,o.iH)([]),c=(0,o.iH)(Math.max(...Object.keys(t).map((e=>parseInt(e))))+1),d=(0,o.iH)(Math.max(...Object.keys(r).map((e=>parseInt(e))))+1),v=(0,o.iH)(a.initial),p=(0,o.iH)(a.alphabet),h=(0,o.iH)(!0),m=(0,o.iH)(a.determinism),g=(0,o.iH)(),f=(0,l.Fl)((()=>new Oe(t,I(r),v.value,p.value))),b=(0,l.Fl)((()=>({nodes:t,edges:r,alphabet:p.value,determinism:m.value,layout:I(g.value?.currentLayouts??{}),initial:v.value})));function y(){t[c.value]={name:String(c.value)},s.value.forEach((e=>{U(e,String(c.value))})),c.value++}function k(){for(let e of s.value){delete t[e];for(let a in r){const t=r[a];t.source!=e&&t.target!=e||delete r[a]}}for(let e of u.value)delete r[e]}function U(e,a){if(void 0==a){for(let a of Object.values(r))if(e==a.target&&a.source==a.target)return;a=e}let t={source:e,target:a,label:"*",ruleType:"ALL",charset:[]};r[d.value]=t,d.value++}function _(e){console.log(`validate: ${e}`),console.log(f.value.toString()),f.value.evaluate(e,h.value,m.value)}function E(e,a){switch(e){case"n":a.preventDefault(),y();break;case"e":a.preventDefault(),U(s.value[0],s.value[1])}}(0,l.YP)(b,(()=>{localStorage.setItem("graph",z(b.value))}));const S={"node:contextmenu":({node:e,event:a})=>{a.preventDefault(),a.stopPropagation(),1!==s.value.length&&(s.value[0]=s.value[1]),s.value[1]=e},"edge:contextmenu":({edge:e,event:a})=>{a.preventDefault(),a.stopPropagation(),u.value[0]=e}};return(e,c)=>{const d=(0,l.up)("v-edge-label"),T=(0,l.up)("v-network-graph");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(w),(0,l._)("div",null,[(0,l._)("div",Ae,[(0,l.Wm)(T,{ref_key:"graph",ref:g,nodes:(0,o.SU)(t),edges:(0,o.SU)(r),configs:(0,o.SU)(W),layouts:(0,o.SU)(a).layout,"event-handlers":S,"selected-edges":u.value,"onUpdate:selected-edges":c[0]||(c[0]=e=>u.value=e),"selected-nodes":s.value,"onUpdate:selected-nodes":c[1]||(c[1]=e=>s.value=e),tabindex:"0",onKeydown:[(0,n.D2)(k,["delete"]),c[2]||(c[2]=e=>E(e.key,e))]},{"edge-label":(0,l.w5)((({edge:e,...a})=>[(0,l.Wm)(d,(0,l.dG)({text:e.label,color:"#fbfaf5",align:"center","vertical-align":"above"},a),null,16,["text"])])),default:(0,l.w5)((()=>[(0,l._)("defs",null,[((0,l.wg)(),(0,l.j4)((0,l.LL)("style"),null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)((0,o.SU)(Z)),1)])),_:1}))])])),_:1},8,["nodes","edges","configs","layouts","selected-edges","selected-nodes","onKeydown"]),(0,l.Wm)(n.uT,{name:"slide"},{default:(0,l.w5)((()=>[1===u.value.length?((0,l.wg)(),(0,l.j4)(ke,{key:0,edgeId:u.value[0],modelValue:(0,o.SU)(r)[u.value[0]],"onUpdate:modelValue":c[3]||(c[3]=e=>(0,o.SU)(r)[u.value[0]]=e)},null,8,["edgeId","modelValue"])):1===s.value.length?((0,l.wg)(),(0,l.j4)(Le,{key:1,"node-id":s.value[0],modelValue:(0,o.SU)(t)[s.value[0]],"onUpdate:modelValue":c[4]||(c[4]=e=>(0,o.SU)(t)[s.value[0]]=e)},null,8,["node-id","modelValue"])):(0,l.kq)("",!0)])),_:1})]),(0,l.Wm)(ve,{onValidate:c[5]||(c[5]=e=>_(e)),onAddNode:c[6]||(c[6]=e=>y()),onRemove:k,onAddEdge:c[7]||(c[7]=e=>U(s.value[0],s.value[1])),onSave:c[8]||(c[8]=e=>(0,o.SU)(R)((0,o.SU)(b),g.value)),onShare:c[9]||(c[9]=e=>(0,o.SU)(G)((0,o.SU)(b))),onDownloadSVG:c[10]||(c[10]=e=>(0,o.SU)(F)(g.value)),onFindAMatch:c[11]||(c[11]=e=>(0,o.SU)(f).findAMatch()),determinism:m.value,"onUpdate:determinism":c[12]||(c[12]=e=>m.value=e),alphabet:p.value,"onUpdate:alphabet":c[13]||(c[13]=e=>p.value=e),animated:h.value,"onUpdate:animated":c[14]||(c[14]=e=>h.value=e),start:v.value,"onUpdate:start":c[15]||(c[15]=e=>v.value=e),nodes:(0,o.SU)(t)},null,8,["determinism","alphabet","animated","start","nodes"])])],64)}}});const Pe=xe;var je=Pe,He=t(5431);(0,He.z)("/meravigliosi-automi/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const We=(0,n.ri)(je);We.use(j.ZP),We.mount("#app")}},a={};function t(n){var l=a[n];if(void 0!==l)return l.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,l,o){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],o=e[c][2];for(var r=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(c--,1);var u=l();void 0!==u&&(a=u)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,l,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/meravigliosi-automi/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var l,o,i=n[0],r=n[1],s=n[2],u=0;if(i.some((function(a){return 0!==e[a]}))){for(l in r)t.o(r,l)&&(t.m[l]=r[l]);if(s)var c=s(t)}for(a&&a(n);u<i.length;u++)o=i[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkmeravigliosi_automi"]=self["webpackChunkmeravigliosi_automi"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(7773)}));n=t.O(n)})();
//# sourceMappingURL=app.ab807fa0.js.map