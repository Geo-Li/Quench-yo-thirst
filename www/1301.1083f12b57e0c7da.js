"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1301],{1301:(X,T,P)=>{P.r(T),P.d(T,{HomePageModule:()=>q});var d=P(6895),v=P(8058),z=P(433),k=P(2598);(0,P(1053).fo)("Geolocation",{web:()=>P.e(7186).then(P.bind(P,7186)).then(l=>new l.GeolocationWeb)});var o=P(8256);const W=[{path:"",component:(()=>{class l{constructor(){}}return l.\u0275fac=function(C){return new(C||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-home"]],decls:33,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large",1,"ion-text-center"],["stacked",""],["type","text","placeholder","input height here"],["slot","end"],["type","text","placeholder","input weight here"],["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(C,ee){1&C&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Quench Yo Thirst "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),o._uU(8," Quench Yo Thirst "),o.qZA()()(),o.TgZ(9,"ion-list")(10,"ion-item")(11,"ion-label",4),o._uU(12,"Height"),o.qZA(),o._UZ(13,"ion-input",5),o.TgZ(14,"ion-button",6),o._uU(15," set "),o.qZA()(),o.TgZ(16,"ion-item")(17,"ion-label",4),o._uU(18,"Weight"),o.qZA(),o._UZ(19,"ion-input",7),o.TgZ(20,"ion-button",6),o._uU(21," set "),o.qZA()()(),o.TgZ(22,"div",8)(23,"strong"),o._uU(24,"Ready to create an app?"),o.qZA(),o.TgZ(25,"p"),o._uU(26,"hello there!"),o.qZA(),o.TgZ(27,"p"),o._uU(28,"Start with Ionic "),o.TgZ(29,"a",9),o._uU(30,"UI Components"),o.qZA()(),o.TgZ(31,"ion-button"),o._uU(32," random button "),o.qZA()()()),2&C&&(o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0))},dependencies:[v.YG,v.W2,v.Gu,v.pK,v.Ie,v.Q$,v.q_,v.wd,v.sr,v.j9],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),l})()}];let S=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[k.Bz.forChild(W),k.Bz]}),l})(),q=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[d.ez,z.u5,v.Pc,S]}),l})()},1053:(X,T,P)=>{P.d(T,{Uw:()=>R,fo:()=>w});var d=P(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var Z=(()=>{return(n=Z||(Z={})).Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",Z;var n})();class j extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const S=n=>{var e,t,i,a,r;const c=n.CapacitorCustomPlatform||null,s=n.Capacitor||{},m=s.Plugins=s.Plugins||{},u=n.CapacitorPlatforms,A=(null===(e=null==u?void 0:u.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==c?c.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),ae=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==A()),ce=(null===(i=null==u?void 0:u.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(f=>{const g=B.get(f);return!!(null!=g&&g.platforms.has(A())||Q(f))}),Q=(null===(a=null==u?void 0:u.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(f=>{var g;return null===(g=s.PluginHeaders)||void 0===g?void 0:g.find(_=>_.name===f)}),B=new Map,me=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((f,g={})=>{const _=B.get(f);if(_)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),_.proxy;const x=A(),$=Q(f);let L;const pe=function(){var p=(0,d.Z)(function*(){return!L&&x in g?L=L="function"==typeof g[x]?yield g[x]():g[x]:null!==c&&!L&&"web"in g&&(L=L="function"==typeof g.web?yield g.web():g.web),L});return function(){return p.apply(this,arguments)}}(),I=p=>{let h;const y=(...U)=>{const O=pe().then(b=>{const E=((p,h)=>{var y,U;if(!$){if(p)return null===(U=p[h])||void 0===U?void 0:U.bind(p);throw new j(`"${f}" plugin is not implemented on ${x}`,Z.Unimplemented)}{const O=null==$?void 0:$.methods.find(b=>h===b.name);if(O)return"promise"===O.rtype?b=>s.nativePromise(f,h.toString(),b):(b,E)=>s.nativeCallback(f,h.toString(),b,E);if(p)return null===(y=p[h])||void 0===y?void 0:y.bind(p)}})(b,p);if(E){const M=E(...U);return h=null==M?void 0:M.remove,M}throw new j(`"${f}.${p}()" is not implemented on ${x}`,Z.Unimplemented)});return"addListener"===p&&(O.remove=(0,d.Z)(function*(){return h()})),O};return y.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(y,"name",{value:p,writable:!1,configurable:!1}),y},V=I("addListener"),Y=I("removeListener"),Pe=(p,h)=>{const y=V({eventName:p},h),U=function(){var b=(0,d.Z)(function*(){const E=yield y;Y({eventName:p,callbackId:E},h)});return function(){return b.apply(this,arguments)}}(),O=new Promise(b=>y.then(()=>b({remove:U})));return O.remove=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield U()}),O},D=new Proxy({},{get(p,h){switch(h){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return $?Pe:V;case"removeListener":return Y;default:return I(h)}}});return m[f]=D,B.set(f,{name:f,proxy:D,platforms:new Set([...Object.keys(g),...$?[x]:[]])}),D});return s.convertFileSrc||(s.convertFileSrc=f=>f),s.getPlatform=A,s.handleError=f=>n.console.error(f),s.isNativePlatform=ae,s.isPluginAvailable=ce,s.pluginMethodNoop=(f,g,_)=>Promise.reject(`${_} does not have an implementation of "${g}".`),s.registerPlugin=me,s.Exception=j,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},l=(n=>n.Capacitor=S(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),w=l.registerPlugin;class R{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const c=function(){var m=(0,d.Z)(function*(){return i.removeListener(e,t)});return function(){return m.apply(this,arguments)}}(),s=Promise.resolve({remove:c});return Object.defineProperty(s,"remove",{value:(m=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield c()}),function(){return m.apply(this,arguments)})}),s;var m}removeAllListeners(){var e=this;return(0,d.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(a=>a(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new l.Exception(e,Z.Unimplemented)}unavailable(e="not available"){return new l.Exception(e,Z.Unavailable)}removeListener(e,t){var i=this;return(0,d.Z)(function*(){const a=i.listeners[e];if(!a)return;const r=a.indexOf(t);i.listeners[e].splice(r,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const K=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),J=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class te extends R{getCookies(){return(0,d.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[a,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=J(a).trim(),r=J(r).trim(),t[a]=r}),t})()}setCookie(e){return(0,d.Z)(function*(){try{const t=K(e.key),i=K(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),c=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${a}; path=${r}; ${c};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,d.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,d.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,d.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}w("CapacitorCookies",{web:()=>new te});const ne=function(){var n=(0,d.Z)(function*(e){return new Promise((t,i)=>{const a=new FileReader;a.onload=()=>{const r=a.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},a.onerror=r=>i(r),a.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class se extends R{request(e){return(0,d.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),a=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(a=>a.toLocaleLowerCase()).reduce((a,r,c)=>(a[r]=n[e[c]],a),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(a.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[c,s]of Object.entries(n.data||{}))r.set(c,s);t.body=r.toString()}else if(a.includes("multipart/form-data")){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((s,m)=>{r.append(m,s)});else for(const s of Object.keys(n.data))r.append(s,n.data[s]);t.body=r;const c=new Headers(t.headers);c.delete("content-type"),t.headers=c}else(a.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),i=((n,e=!0)=>n?Object.entries(n).reduce((i,a)=>{const[r,c]=a;let s,m;return Array.isArray(c)?(m="",c.forEach(u=>{s=e?encodeURIComponent(u):u,m+=`${r}=${s}&`}),m.slice(0,-1)):(s=e?encodeURIComponent(c):c,m=`${r}=${s}`),`${i}&${m}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=i?`${e.url}?${i}`:e.url,r=yield fetch(a,t),c=r.headers.get("content-type")||"";let m,u,{responseType:s="text"}=r.ok?e:{};switch(c.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":u=yield r.blob(),m=yield ne(u);break;case"json":m=yield r.json();break;default:m=yield r.text()}const H={};return r.headers.forEach((A,G)=>{H[G]=A}),{data:m,headers:H,status:r.status,url:r.url}})()}get(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}w("CapacitorHttp",{web:()=>new se})}}]);