//tealium universal tag - utag.22 ut4.0.201503301613, Copyright 2015 Tealium.com Inc. All Rights Reserved.
var _qevents=_qevents||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.scriptrequested=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g,i;u.data={"base_url":(document.location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js","qacct":"p-yyb3JEF9Pm8ey","orderid":"","revenue":"","order_id":"","order_subtotal":""};c=[];g={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(u.data[e[f]]!==undefined){u.data[e[f]]=b[d];}else{c.push(e[f]+"."+b[d]);}}}}
u.data.order_id=u.data.order_id||u.data.orderid||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||u.data.revenue||b._csubtotal||"";g.qacct=u.data.qacct;if(c.length>0){u.data.labels=c.join(",");g.labels=c.join(",");}
if(u.data.order_id){g.orderid=u.data.order_id;}
if(u.data.order_subtotal){g.revenue=u.data.order_subtotal;}
if(u.scriptrequested){__qc.qpixelsent=[];}
_qevents.push(g);if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"loc":"script","id":"utag_22"});}
}};utag.o[loader].loader.LOAD(id);}("22","trendmicro.nabu"));}catch(error){utag.DB(error);}
