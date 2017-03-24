'use strict';var _exports;function init(){function a(){for(let D in f.info(`vendorManager.js begin init`),t)if(!z[D]){let E=h.join(q,D),F=h.join(o,D),G=i.readFileSync(E);y[D]=G,i.writeFileSync(F,G)}else{let E=m?D:`${D}.exe`,F=h.join(q,E),G=h.join(o,E),H=i.readFileSync(F);i.writeFileSync(G,H,{mode:511})}t.appVersion=u;let C=JSON.stringify(t);i.writeFileSync(p,C),x=t,f.info(`vendorManager.js end init with config ${C}`)}function b(C){B.forEach(D=>{let E=x[D],F=C[D];if(E<F){let G={url:`${n}&type=${D.replace('.js','')}`,needToken:0,encoding:null};f.info(`vendorManager.js begin get new ${D}: ${G.url}`),d(G,(H,I,J)=>{if(!H){try{if(!z[D])y[D]=J.toString(),A.vendorChange(D,y[D]),i.writeFileSync(h.join(o,D),J),x[D]=F,i.writeFileSync(p,JSON.stringify(x),'utf8');else{let K=m?h.join(o,D):h.join(o,`${D}.exe`);i.writeFileSync(K,J,{mode:511}),x[D]=F,i.writeFileSync(p,JSON.stringify(x),'utf8')}clearTimeout(v),w.push(D),v=setTimeout(()=>{g.notifications({title:'\u57FA\u7840\u7EC4\u4EF6\u5E93\u66F4\u65B0\u5566',message:`这次更新的是 \n ${w.join(',')}`,buttons:[{title:'\u67E5\u770B\u66F4\u65B0\u65E5\u5FD7'}]},K=>{0===K&&nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html')}),w=[]},5000)}catch(K){f.error(`vendorManager.js end catch ${JSON.stringify(K)}`)}f.info(`vendorManager.js end up ${D}`)}else f.error(`vendorManager.js end error ${JSON.stringify(H)}`)})}})}const c=global.appConfig.isDev,d=require('request');require('glob'),require('crypto');const f=require('../../common/log/log.js');require('../../utils/tools.js');const g=require('../../utils/notifyManager.js');require('mkdir-p');const h=require('path'),i=require('fs'),j=require('events').EventEmitter,k=require('../../config/urlConfig.js'),l=require('../../config/dirConfig.js'),m='darwin'===process.platform,n=k.downloadRedirectURL+(m?'?os=darwin':'?os=win'),o=l.WeappVendor,p=h.join(o,'version.json'),q=c?h.join(__dirname,'../vendor/'):h.join(__dirname,'../onlinevendor/'),r=c?h.join(q,'config.json'):h.join(q,'version.json');var s=i.readFileSync(r,'utf8'),t=JSON.parse(s),u=global.appVersion,v,w=[],x,y={};const z={wcc:!0,wcsc:!0,'wcc.exe':!0,'wcsc.exe':!0};if(!c)try{if(x=JSON.parse(i.readFileSync(p,'utf8')),x.appVersion!==u)f.info(`vendorManager.js get appVersion is ${x.appVersion} , currentAppversion is ${u}`),a();else for(let C in x)if(!z[C]&&'appVersion'!==C){let D=h.join(o,C);y[C]=i.readFileSync(D,'utf8')}}catch(C){f.error(`vendorManager.js ${C.toString()}`),a()}var A=Object.assign({},j.prototype,{vendorChange:function(C,D){this.emit('VENDOR_CHANGE',C,D)}});const B=['WAService.js','WAWebview.js','wcc','wcsc'];_exports={check:C=>{c||b(C)},getFile:C=>{return c?i.readFileSync(h.join(q,C),'utf8'):y[C]},manager:A}}init(),module.exports=_exports;