/*****************************************************************************
scalable Inman Flash Replacement (sIFR) version 3, revision 436.

Copyright 2006 – 2008 Mark Wubben, <http://novemberborn.net/>

Older versions:
* IFR by Shaun Inman
* sIFR 1.0 by Mike Davidson, Shaun Inman and Tomas Jogin
* sIFR 2.0 by Mike Davidson, Shaun Inman, Tomas Jogin and Mark Wubben

See also <http://novemberborn.net/sifr3> and <http://wiki.novemberborn.net/sifr3>.

This software is licensed and provided under the CC-GNU LGPL.
See <http://creativecommons.org/licenses/LGPL/2.1/>
*****************************************************************************/

var sIFR=new function(){var O=this;var E={ACTIVE:"sIFR-active",REPLACED:"sIFR-replaced",IGNORE:"sIFR-ignore",ALTERNATE:"sIFR-alternate",CLASS:"sIFR-class",LAYOUT:"sIFR-layout",FLASH:"sIFR-flash",FIX_FOCUS:"sIFR-fixfocus",DUMMY:"sIFR-dummy"};E.IGNORE_CLASSES=[E.REPLACED,E.IGNORE,E.ALTERNATE];this.MIN_FONT_SIZE=6;this.MAX_FONT_SIZE=126;this.FLASH_PADDING_BOTTOM=5;this.VERSION="436";this.isActive=false;this.isEnabled=true;this.fixHover=true;this.autoInitialize=true;this.setPrefetchCookie=true;this.cookiePath="/";this.domains=[];this.forceWidth=true;this.fitExactly=false;this.forceTextTransform=true;this.useDomLoaded=true;this.useStyleCheck=false;this.hasFlashClassSet=false;this.repaintOnResize=true;this.replacements=[];var L=0;var R=false;function Y(){}function D(c){function d(e){return e.toLocaleUpperCase()}this.normalize=function(e){return e.replace(/\n|\r|\xA0/g,D.SINGLE_WHITESPACE).replace(/\s+/g,D.SINGLE_WHITESPACE)};this.textTransform=function(e,f){switch(e){case"uppercase":return f.toLocaleUpperCase();case"lowercase":return f.toLocaleLowerCase();case"capitalize":return f.replace(/^\w|\s\w/g,d)}return f};this.toHexString=function(e){if(e.charAt(0)!="#"||e.length!=4&&e.length!=7){return e}e=e.substring(1);return"0x"+(e.length==3?e.replace(/(.)(.)(.)/,"$1$1$2$2$3$3"):e)};this.toJson=function(g,f){var e="";switch(typeof(g)){case"string":e='"'+f(g)+'"';break;case"number":case"boolean":e=g.toString();break;case"object":e=[];for(var h in g){if(g[h]==Object.prototype[h]){continue}e.push('"'+h+'":'+this.toJson(g[h]))}e="{"+e.join(",")+"}";break}return e};this.convertCssArg=function(e){if(!e){return{}}if(typeof(e)=="object"){if(e.constructor==Array){e=e.join("")}else{return e}}var l={};var m=e.split("}");for(var h=0;h<m.length;h++){var k=m[h].match(/([^\s{]+)\s*\{(.+)\s*;?\s*/);if(!k||k.length!=3){continue}if(!l[k[1]]){l[k[1]]={}}var g=k[2].split(";");for(var f=0;f<g.length;f++){var n=g[f].match(/\s*([^:\s]+)\s*\:\s*([^;]+)/);if(!n||n.length!=3){continue}l[k[1]][n[1]]=n[2].replace(/\s+$/,"")}}return l};this.extractFromCss=function(g,f,i,e){var h=null;if(g&&g[f]&&g[f][i]){h=g[f][i];if(e){delete g[f][i]}}return h};this.cssToString=function(f){var g=[];for(var e in f){var j=f[e];if(j==Object.prototype[e]){continue}g.push(e,"{");for(var i in j){if(j[i]==Object.prototype[i]){continue}var h=j[i];if(D.UNIT_REMOVAL_PROPERTIES[i]){h=parseInt(h,10)}g.push(i,":",h,";")}g.push("}")}return g.join("")};this.escape=function(e){return escape(e).replace(/\+/g,"%2B")};this.encodeVars=function(e){return e.join("&").replace(/%/g,"%25")};this.copyProperties=function(g,f){for(var e in g){if(f[e]===undefined){f[e]=g[e]}}return f};this.domain=function(){var f="";try{f=WB_wombat_document_domain}catch(g){}return f};this.domainMatches=function(h,g){if(g=="*"||g==h){return true}var f=g.lastIndexOf("*");if(f>-1){g=g.substr(f+1);var e=h.lastIndexOf(g);if(e>-1&&(e+g.length)==h.length){return true}}return false};this.uriEncode=function(e){return encodeURI(decodeURIComponent(e))};this.delay=function(f,h,g){var e=Array.prototype.slice.call(arguments,3);setTimeout(function(){h.apply(g,e)},f)}}D.UNIT_REMOVAL_PROPERTIES={leading:true,"margin-left":true,"margin-right":true,"text-indent":true};D.SINGLE_WHITESPACE=" ";function U(e){var d=this;function c(g,j,h){var k=d.getStyleAsInt(g,j,e.ua.ie);if(k==0){k=g[h];for(var f=3;f<arguments.length;f++){k-=d.getStyleAsInt(g,arguments[f],true)}}return k}this.getBody=function(){return document.getElementsByTagName("body")[0]||null};this.querySelectorAll=function(f){return window.parseSelector(f)};this.addClass=function(f,g){if(g){g.className=((g.className||"")==""?"":g.className+" ")+f}};this.removeClass=function(f,g){if(g){g.className=g.className.replace(new RegExp("(^|\\s)"+f+"(\\s|$)"),"").replace(/^\s+|(\s)\s+/g,"$1")}};this.hasClass=function(f,g){return new RegExp("(^|\\s)"+f+"(\\s|$)").test(g.className)};this.hasOneOfClassses=function(h,g){for(var f=0;f<h.length;f++){if(this.hasClass(h[f],g)){return true}}return false};this.ancestorHasClass=function(g,f){g=g.parentNode;while(g&&g.nodeType==1){if(this.hasClass(f,g)){return true}g=g.parentNode}return false};this.create=function(f,g){var h=document.createElementNS?WB_CreateElementNS(U.XHTML_NS,f):document.createElement(f);if(g){h.className=g}return h};this.getComputedStyle=function(h,i){var f;if(document.defaultView&&document.defaultView.getComputedStyle){var g=document.defaultView.getComputedStyle(h,null);f=g?g[i]:null}else{if(h.currentStyle){f=h.currentStyle[i]}}return f||""};this.getStyleAsInt=function(g,i,f){var h=this.getComputedStyle(g,i);if(f&&!/px$/.test(h)){return 0}return parseInt(h)||0};this.getWidthFromStyle=function(f){return c(f,"width","offsetWidth","paddingRight","paddingLeft","borderRightWidth","borderLeftWidth")};this.getHeightFromStyle=function(f){return c(f,"height","offsetHeight","paddingTop","paddingBottom","borderTopWidth","borderBottomWidth")};this.getDimensions=function(j){var h=j.offsetWidth;var f=j.offsetHeight;if(h==0||f==0){for(var g=0;g<j.childNodes.length;g++){var k=j.childNodes[g];if(k.nodeType!=1){continue}h=Math.max(h,k.offsetWidth);f=Math.max(f,k.offsetHeight)}}return{width:h,height:f}};this.getViewport=function(){return{width:window.innerWidth||document.documentElement.clientWidth||this.getBody().clientWidth,height:window.innerHeight||document.documentElement.clientHeight||this.getBody().clientHeight}};this.blurElement=function(g){try{g.blur();return}catch(h){}var f=this.create("input");f.style.width="0px";f.style.height="0px";g.parentNode.appendChild(f);f.focus();f.blur();f.parentNode.removeChild(f)}}U.XHTML_NS="http://www.w3.org/1999/xhtml";function H(r){var g=navigator.userAgent.toLowerCase();var q=(navigator.product||"").toLowerCase();var h=navigator.platform.toLowerCase();this.parseVersion=H.parseVersion;this.macintosh=/^mac/.test(h);this.windows=/^win/.test(h);this.linux=/^linux/.test(h);this.quicktime=false;this.opera=/opera/.test(g);this.konqueror=/konqueror/.test(g);this.ie=false/*@cc_on||true@*/;this.ieSupported=this.ie&&!/ppc|smartphone|iemobile|msie\s5\.5/.test(g)/*@cc_on&&@_jscript_version>=5.5@*/;this.ieWin=this.ie&&this.windows/*@cc_on&&@_jscript_version>=5.1@*/;this.windows=this.windows&&(!this.ie||this.ieWin);this.ieMac=this.ie&&this.macintosh/*@cc_on&&@_jscript_version<5.1@*/;this.macintosh=this.macintosh&&(!this.ie||this.ieMac);this.safari=/safari/.test(g);this.webkit=!this.konqueror&&/applewebkit/.test(g);this.khtml=this.webkit||this.konqueror;this.gecko=!this.khtml&&q=="gecko";this.ieVersion=this.ie&&/.*msie\s(\d\.\d)/.exec(g)?this.parseVersion(RegExp.$1):"0";this.operaVersion=this.opera&&/.*opera(\s|\/)(\d+\.\d+)/.exec(g)?this.parseVersion(RegExp.$2):"0";this.webkitVersion=this.webkit&&/.*applewebkit\/(\d+).*/.exec(g)?this.parseVersion(RegExp.$1):"0";this.geckoVersion=this.gecko&&/.*rv:\s*([^\)]+)\)\s+gecko/.exec(g)?this.parseVersion(RegExp.$1):"0";this.konquerorVersion=this.konqueror&&/.*konqueror\/([\d\.]+).*/.exec(g)?this.parseVersion(RegExp.$1):"0";this.flashVersion=0;if(this.ieWin){var l;var o=false;try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(m){try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");this.flashVersion=this.parseVersion("6");l.AllowScriptAccess="always"}catch(m){o=this.flashVersion==this.parseVersion("6")}if(!o){try{l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(m){}}}if(!o&&l){this.flashVersion=this.parseVersion((l.GetVariable("$version")||"").replace(/^\D+(\d+)\D+(\d+)\D+(\d+).*/g,"$1.$2.$3"))}}else{if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){var n=navigator.plugins["Shockwave Flash"].description.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var p=n.replace(/^\D*(\d+\.\d+).*$/,"$1");if(/r/.test(n)){p+=n.replace(/^.*r(\d*).*$/,".$1")}else{if(/d/.test(n)){p+=".0"}}this.flashVersion=this.parseVersion(p);var j=false;for(var k=0,c=this.flashVersion>=H.MIN_FLASH_VERSION;c&&k<navigator.mimeTypes.length;k++){var f=navigator.mimeTypes[k];if(f.type!="application/x-shockwave-flash"){continue}if(f.enabledPlugin){j=true;if(f.enabledPlugin.description.toLowerCase().indexOf("quicktime")>-1){c=false;this.quicktime=true}}}if(this.quicktime||!j){this.flashVersion=this.parseVersion("0")}}}this.flash=this.flashVersion>=H.MIN_FLASH_VERSION;this.transparencySupport=this.macintosh||this.windows||this.linux&&(this.flashVersion>=this.parseVersion("10")&&(this.gecko&&this.geckoVersion>=this.parseVersion("1.9")||this.opera));this.computedStyleSupport=this.ie||!!document.defaultView.getComputedStyle;this.fixFocus=this.gecko&&this.windows;this.nativeDomLoaded=this.gecko||this.webkit&&this.webkitVersion>=this.parseVersion("525")||this.konqueror&&this.konquerorMajor>this.parseVersion("03")||this.opera;this.mustCheckStyle=this.khtml||this.opera;this.forcePageLoad=this.webkit&&this.webkitVersion<this.parseVersion("523");this.properDocument=typeof(WB_wombat_self_location)=="object";this.supported=this.flash&&this.properDocument&&(!this.ie||this.ieSupported)&&this.computedStyleSupport&&(!this.opera||this.operaVersion>=this.parseVersion("9.61"))&&(!this.webkit||this.webkitVersion>=this.parseVersion("412"))&&(!this.gecko||this.geckoVersion>=this.parseVersion("1.8.0.12"))&&(!this.konqueror)}H.parseVersion=function(c){return c.replace(/(^|\D)(\d+)(?=\D|$)/g,function(f,e,g){f=e;for(var d=4-g.length;d>=0;d--){f+="0"}return f+g})};H.MIN_FLASH_VERSION=H.parseVersion("8");function F(c){this.fix=c.ua.ieWin&&WB_wombat_self_location.hash!="";var d;this.cache=function(){d=document.title};function e(){document.title=d}this.restore=function(){if(this.fix){setTimeout(e,0)}}}function S(l){var e=null;function c(){try{if(l.ua.ie||document.readyState!="loaded"&&document.readyState!="complete"){document.documentElement.doScroll("left")}}catch(n){return setTimeout(c,10)}i()}function i(){if(l.useStyleCheck){h()}else{if(!l.ua.mustCheckStyle){d(null,true)}}}function h(){e=l.dom.create("div",E.DUMMY);l.dom.getBody().appendChild(e);m()}function m(){if(l.dom.getComputedStyle(e,"marginLeft")=="42px"){g()}else{setTimeout(m,10)}}function g(){if(e&&e.parentNode){e.parentNode.removeChild(e)}e=null;d(null,true)}function d(n,o){l.initialize(o);if(n&&n.type=="load"){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",d,false)}if(window.removeEventListener){window.removeEventListener("load",d,false)}}}function j(){l.prepareClearReferences();if(document.readyState=="interactive"){document.attachEvent("onstop",f);setTimeout(function(){document.detachEvent("onstop",f)},0)}}function f(){document.detachEvent("onstop",f);k()}function k(){l.clearReferences()}this.attach=function(){if(window.addEventListener){window.addEventListener("load",d,false)}else{window.attachEvent("onload",d)}if(!l.useDomLoaded||l.ua.forcePageLoad||l.ua.ie&&window.top!=window){return}if(l.ua.nativeDomLoaded){document.addEventListener("DOMContentLoaded",i,false)}else{if(l.ua.ie||l.ua.khtml){c()}}};this.attachUnload=function(){if(!l.ua.ie){return}window.attachEvent("onbeforeunload",j);window.attachEvent("onunload",k)}}var Q="sifrFetch";function N(c){var e=false;this.fetchMovies=function(f){if(c.setPrefetchCookie&&new RegExp(";?"+Q+"=true;?").test(document.cookie)){return}try{e=true;d(f)}catch(g){}if(c.setPrefetchCookie){document.cookie=Q+"=true;path="+c.cookiePath}};this.clear=function(){if(!e){return}try{var f=document.getElementsByTagName("script");for(var g=f.length-1;g>=0;g--){var h=f[g];if(h.type=="sifr/prefetch"){h.parentNode.removeChild(h)}}}catch(j){}};function d(f){for(var g=0;g<f.length;g++){document.write('<script defer type="sifr/prefetch" src="'+f[g].src+'"><\/script>')}}}function b(e){var g=e.ua.ie;var f=g&&e.ua.flashVersion<e.ua.parseVersion("9.0.115");var d={};var c={};this.fixFlash=f;this.register=function(h){if(!g){return}var i=h.getAttribute("id");this.cleanup(i,false);c[i]=h;delete d[i];if(f){window[i]=h}};this.reset=function(){if(!g){return false}for(var j=0;j<e.replacements.length;j++){var h=e.replacements[j];var k=c[h.id];if(!d[h.id]&&(!k.parentNode||k.parentNode.nodeType==11)){h.resetMovie();d[h.id]=true}}return true};this.cleanup=function(l,h){var i=c[l];if(!i){return}for(var k in i){if(typeof(i[k])=="function"){i[k]=null}}c[l]=null;if(f){window[l]=null}if(i.parentNode){if(h&&i.parentNode.nodeType==1){var j=document.createElement("div");j.style.width=i.offsetWidth+"px";j.style.height=i.offsetHeight+"px";i.parentNode.replaceChild(j,i)}else{i.parentNode.removeChild(i)}}};this.prepareClearReferences=function(){if(!f){return}__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}};this.clearReferences=function(){if(f){var j=document.getElementsByTagName("object");for(var h=j.length-1;h>=0;h--){c[j[h].getAttribute("id")]=j[h]}}for(var k in c){if(Object.prototype[k]!=c[k]){this.cleanup(k,true)}}}}function K(d,g,f,c,e){this.sIFR=d;this.id=g;this.vars=f;this.movie=null;this.__forceWidth=c;this.__events=e;this.__resizing=0}K.prototype={getFlashElement:function(){return document.getElementById(this.id)},getAlternate:function(){return document.getElementById(this.id+"_alternate")},getAncestor:function(){var c=this.getFlashElement().parentNode;return !this.sIFR.dom.hasClass(E.FIX_FOCUS,c)?c:c.parentNode},available:function(){var c=this.getFlashElement();return c&&c.parentNode},call:function(c){var d=this.getFlashElement();if(!d[c]){return false}return Function.prototype.apply.call(d[c],d,Array.prototype.slice.call(arguments,1))},attempt:function(){if(!this.available()){return false}try{this.call.apply(this,arguments)}catch(c){if(this.sIFR.debug){throw c}return false}return true},updateVars:function(c,e){for(var d=0;d<this.vars.length;d++){if(this.vars[d].split("=")[0]==c){this.vars[d]=c+"="+e;break}}var f=this.sIFR.util.encodeVars(this.vars);this.movie.injectVars(this.getFlashElement(),f);this.movie.injectVars(this.movie.html,f)},storeSize:function(c,d){this.movie.setSize(c,d);this.updateVars(c,d)},fireEvent:function(c){if(this.available()&&this.__events[c]){this.sIFR.util.delay(0,this.__events[c],this,this)}},resizeFlashElement:function(c,d,e){if(!this.available()){return}this.__resizing++;var f=this.getFlashElement();f.setAttribute("height",c);this.getAncestor().style.minHeight="";this.updateVars("renderheight",c);this.storeSize("height",c);if(d!==null){f.setAttribute("width",d);this.movie.setSize("width",d)}if(this.__events.onReplacement){this.sIFR.util.delay(0,this.__events.onReplacement,this,this);delete this.__events.onReplacement}if(e){this.sIFR.util.delay(0,function(){this.attempt("scaleMovie");this.__resizing--},this)}else{this.__resizing--}},blurFlashElement:function(){if(this.available()){this.sIFR.dom.blurElement(this.getFlashElement())}},resetMovie:function(){this.sIFR.util.delay(0,this.movie.reset,this.movie,this.getFlashElement(),this.getAlternate())},resizeAfterScale:function(){if(this.available()&&this.__resizing==0){this.sIFR.util.delay(0,this.resize,this)}},resize:function(){if(!this.available()){return}this.__resizing++;var g=this.getFlashElement();var f=g.offsetWidth;if(f==0){return}var e=g.getAttribute("width");var l=g.getAttribute("height");var m=this.getAncestor();var o=this.sIFR.dom.getHeightFromStyle(m);g.style.width="1px";g.style.height="1px";m.style.minHeight=o+"px";var c=this.getAlternate().childNodes;var n=[];for(var k=0;k<c.length;k++){var h=c[k].cloneNode(true);n.push(h);m.appendChild(h)}var d=this.sIFR.dom.getWidthFromStyle(m);for(var k=0;k<n.length;k++){m.removeChild(n[k])}g.style.width=g.style.height=m.style.minHeight="";g.setAttribute("width",this.__forceWidth?d:e);g.setAttribute("height",l);if(sIFR.ua.ie){g.style.display="none";var j=g.offsetHeight;g.style.display=""}if(d!=f){if(this.__forceWidth){this.storeSize("width",d)}this.attempt("resize",d)}this.__resizing--},replaceText:function(g,j){var d=this.sIFR.util.escape(g);if(!this.attempt("replaceText",d)){return false}this.updateVars("content",d);var f=this.getAlternate();if(j){while(f.firstChild){f.removeChild(f.firstChild)}for(var c=0;c<j.length;c++){f.appendChild(j[c])}}else{try{f.innerHTML=g}catch(h){}}return true},changeCSS:function(c){c=this.sIFR.util.escape(this.sIFR.util.cssToString(this.sIFR.util.convertCssArg(c)));this.updateVars("css",c);return this.attempt("changeCSS",c)},remove:function(){if(this.movie&&this.available()){this.movie.remove(this.getFlashElement(),this.id)}}};var X=new function(){this.create=function(p,n,j,i,f,e,g,o,l,h,m){var k=p.ua.ie?d:c;return new k(p,n,j,i,f,e,g,o,["flashvars",l,"wmode",h,"bgcolor",m,"allowScriptAccess","always","quality","best"])};function c(s,q,l,h,f,e,g,r,n){var m=s.dom.create("object",E.FLASH);var p=["type","application/x-shockwave-flash","id",f,"name",f,"data",e,"width",g,"height",r];for(var o=0;o<p.length;o+=2){m.setAttribute(p[o],p[o+1])}var j=m;if(h){j=W.create("div",E.FIX_FOCUS);j.appendChild(m)}for(var o=0;o<n.length;o+=2){if(n[o]=="name"){continue}var k=W.create("param");k.setAttribute("name",n[o]);k.setAttribute("value",n[o+1]);m.appendChild(k)}l.style.minHeight=r+"px";while(l.firstChild){l.removeChild(l.firstChild)}l.appendChild(j);this.html=j.cloneNode(true)}c.prototype={reset:function(e,f){e.parentNode.replaceChild(this.html.cloneNode(true),e)},remove:function(e,f){e.parentNode.removeChild(e)},setSize:function(e,f){this.html.setAttribute(e,f)},injectVars:function(e,g){var h=e.getElementsByTagName("param");for(var f=0;f<h.length;f++){if(h[f].getAttribute("name")=="flashvars"){h[f].setAttribute("value",g);break}}}};function d(p,n,j,h,f,e,g,o,k){this.dom=p.dom;this.broken=n;this.html='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="'+f+'" width="'+g+'" height="'+o+'" class="'+E.FLASH+'"><param name="movie" value="'+e+'"></param></object>';var m="";for(var l=0;l<k.length;l+=2){m+='<param name="'+k[l]+'" value="'+k[l+1]+'"></param>'}this.html=this.html.replace(/(<\/object>)/,m+"$1");j.style.minHeight=o+"px";j.innerHTML=this.html;this.broken.register(j.firstChild)}d.prototype={reset:function(f,g){g=g.cloneNode(true);var e=f.parentNode;e.innerHTML=this.html;this.broken.register(e.firstChild);e.appendChild(g)},remove:function(e,f){this.broken.cleanup(f)},setSize:function(e,f){this.html=this.html.replace(e=="height"?/(height)="\d+"/:/(width)="\d+"/,'$1="'+f+'"')},injectVars:function(e,f){if(e!=this.html){return}this.html=this.html.replace(/(flashvars(=|\"\svalue=)\")[^\"]+/,"$1"+f)}}};this.errors=new Y(O);var A=this.util=new D(O);var W=this.dom=new U(O);var T=this.ua=new H(O);var G={fragmentIdentifier:new F(O),pageLoad:new S(O),prefetch:new N(O),brokenFlashIE:new b(O)};this.__resetBrokenMovies=G.brokenFlashIE.reset;var J={kwargs:[],replaceAll:function(d){for(var c=0;c<this.kwargs.length;c++){O.replace(this.kwargs[c])}if(!d){this.kwargs=[]}}};this.activate=function(){if(!T.supported||!this.isEnabled||this.isActive||!C()||a()){return}G.prefetch.fetchMovies(arguments);this.isActive=true;this.setFlashClass();G.fragmentIdentifier.cache();G.pageLoad.attachUnload();if(!this.autoInitialize){return}G.pageLoad.attach()};this.setFlashClass=function(){if(this.hasFlashClassSet){return}W.addClass(E.ACTIVE,W.getBody()||document.documentElement);this.hasFlashClassSet=true};this.removeFlashClass=function(){if(!this.hasFlashClassSet){return}W.removeClass(E.ACTIVE,W.getBody());W.removeClass(E.ACTIVE,document.documentElement);this.hasFlashClassSet=false};this.initialize=function(c){if(!this.isActive||!this.isEnabled){return}if(R){if(!c){J.replaceAll(false)}return}R=true;J.replaceAll(c);if(O.repaintOnResize){if(window.addEventListener){window.addEventListener("resize",Z,false)}else{window.attachEvent("onresize",Z)}}G.prefetch.clear()};this.replace=function(x,u){if(!T.supported){return}if(u){x=A.copyProperties(x,u)}if(!R){return J.kwargs.push(x)}if(this.onReplacementStart){this.onReplacementStart(x)}var AM=x.elements||W.querySelectorAll(x.selector);if(AM.length==0){return}var w=M(x.src);var AR=A.convertCssArg(x.css);var v=B(x.filters);var AN=x.forceSingleLine===true;var AS=x.preventWrap===true&&!AN;var q=AN||(x.fitExactly==null?this.fitExactly:x.fitExactly)===true;var AD=q||(x.forceWidth==null?this.forceWidth:x.forceWidth)===true;var s=x.ratios||[];var AE=x.pixelFont===true;var r=parseInt(x.tuneHeight)||0;var z=!!x.onRelease||!!x.onRollOver||!!x.onRollOut;if(q){A.extractFromCss(AR,".sIFR-root","text-align",true)}var t=A.extractFromCss(AR,".sIFR-root","font-size",true)||"0";var e=A.extractFromCss(AR,".sIFR-root","background-color",true)||"#FFFFFF";var o=A.extractFromCss(AR,".sIFR-root","kerning",true)||"";var AW=A.extractFromCss(AR,".sIFR-root","opacity",true)||"100";var k=A.extractFromCss(AR,".sIFR-root","cursor",true)||"default";var AP=parseInt(A.extractFromCss(AR,".sIFR-root","leading"))||0;var AJ=x.gridFitType||(A.extractFromCss(AR,".sIFR-root","text-align")=="right")?"subpixel":"pixel";var h=this.forceTextTransform===false?"none":A.extractFromCss(AR,".sIFR-root","text-transform",true)||"none";t=/^\d+(px)?$/.test(t)?parseInt(t):0;AW=parseFloat(AW)<1?100*parseFloat(AW):AW;var AC=x.modifyCss?"":A.cssToString(AR);var AG=x.wmode||"";if(!AG){if(x.transparent){AG="transparent"}else{if(x.opaque){AG="opaque"}}}if(AG=="transparent"){if(!T.transparencySupport){AG="opaque"}else{e="transparent"}}else{if(e=="transparent"){e="#FFFFFF"}}for(var AV=0;AV<AM.length;AV++){var AF=AM[AV];if(W.hasOneOfClassses(E.IGNORE_CLASSES,AF)||W.ancestorHasClass(AF,E.ALTERNATE)){continue}var AO=W.getDimensions(AF);var f=AO.height;var c=AO.width;var AA=W.getComputedStyle(AF,"display");if(!f||!c||!AA||AA=="none"){continue}c=W.getWidthFromStyle(AF);var n,AH;if(!t){var AL=I(AF);n=Math.min(this.MAX_FONT_SIZE,Math.max(this.MIN_FONT_SIZE,AL.fontSize));if(AE){n=Math.max(8,8*Math.round(n/8))}AH=AL.lines}else{n=t;AH=1}var d=W.create("span",E.ALTERNATE);var AX=AF.cloneNode(true);AF.parentNode.appendChild(AX);for(var AU=0,AT=AX.childNodes.length;AU<AT;AU++){var m=AX.childNodes[AU];if(!/^(style|script)$/i.test(m.nodeName)){d.appendChild(m.cloneNode(true))}}if(x.modifyContent){x.modifyContent(AX,x.selector)}if(x.modifyCss){AC=x.modifyCss(AR,AX,x.selector)}var p=P(AX,h,x.uriEncode);AX.parentNode.removeChild(AX);if(x.modifyContentString){p.text=x.modifyContentString(p.text,x.selector)}if(p.text==""){continue}var AK=Math.round(AH*V(n,s)*n)+this.FLASH_PADDING_BOTTOM+r;if(AH>1&&AP){AK+=Math.round((AH-1)*AP)}var AB=AD?c:"100%";var AI="sIFR_replacement_"+L++;var AQ=["id="+AI,"content="+A.escape(p.text),"width="+c,"renderheight="+AK,"link="+A.escape(p.primaryLink.href||""),"target="+A.escape(p.primaryLink.target||""),"size="+n,"css="+A.escape(AC),"cursor="+k,"tunewidth="+(x.tuneWidth||0),"tuneheight="+r,"offsetleft="+(x.offsetLeft||""),"offsettop="+(x.offsetTop||""),"fitexactly="+q,"preventwrap="+AS,"forcesingleline="+AN,"antialiastype="+(x.antiAliasType||""),"thickness="+(x.thickness||""),"sharpness="+(x.sharpness||""),"kerning="+o,"gridfittype="+AJ,"flashfilters="+v,"opacity="+AW,"blendmode="+(x.blendMode||""),"selectable="+(x.selectable==null||AG!=""&&!sIFR.ua.macintosh&&sIFR.ua.gecko&&sIFR.ua.geckoVersion>=sIFR.ua.parseVersion("1.9")?"true":x.selectable===true),"fixhover="+(this.fixHover===true),"events="+z,"delayrun="+G.brokenFlashIE.fixFlash,"version="+this.VERSION];var y=A.encodeVars(AQ);var g=new K(O,AI,AQ,AD,{onReplacement:x.onReplacement,onRollOver:x.onRollOver,onRollOut:x.onRollOut,onRelease:x.onRelease});g.movie=X.create(sIFR,G.brokenFlashIE,AF,T.fixFocus&&x.fixFocus,AI,w,AB,AK,y,AG,e);this.replacements.push(g);this.replacements[AI]=g;if(x.selector){if(!this.replacements[x.selector]){this.replacements[x.selector]=[g]}else{this.replacements[x.selector].push(g)}}d.setAttribute("id",AI+"_alternate");AF.appendChild(d);W.addClass(E.REPLACED,AF)}G.fragmentIdentifier.restore()};this.getReplacementByFlashElement=function(d){for(var c=0;c<O.replacements.length;c++){if(O.replacements[c].id==d.getAttribute("id")){return O.replacements[c]}}};this.redraw=function(){for(var c=0;c<O.replacements.length;c++){O.replacements[c].resetMovie()}};this.prepareClearReferences=function(){G.brokenFlashIE.prepareClearReferences()};this.clearReferences=function(){G.brokenFlashIE.clearReferences();G=null;J=null;delete O.replacements};function C(){if(O.domains.length==0){return true}var d=A.domain();for(var c=0;c<O.domains.length;c++){if(A.domainMatches(d,O.domains[c])){return true}}return false}function a(){if(WB_wombat_self_location.protocol=="file:"){if(O.debug){O.errors.fire("isFile")}return true}return false}function M(c){if(T.ie&&c.charAt(0)=="/"){c=WB_wombat_self_location.toString().replace(/([^:]+)(:\/?\/?)([^\/]+).*/,"$1$2$3")+c}return c}function V(d,e){for(var c=0;c<e.length;c+=2){if(d<=e[c]){return e[c+1]}}return e[e.length-1]||1}function B(g){var e=[];for(var d in g){if(g[d]==Object.prototype[d]){continue}var c=g[d];d=[d.replace(/filter/i,"")+"Filter"];for(var f in c){if(c[f]==Object.prototype[f]){continue}d.push(f+":"+A.escape(A.toJson(c[f],A.toHexString)))}e.push(d.join(","))}return A.escape(e.join(";"))}function Z(d){var e=Z.viewport;var c=W.getViewport();if(e&&c.width==e.width&&c.height==e.height){return}Z.viewport=c;if(O.replacements.length==0){return}if(Z.timer){clearTimeout(Z.timer)}Z.timer=setTimeout(function(){delete Z.timer;for(var f=0;f<O.replacements.length;f++){O.replacements[f].resize()}},200)}function I(f){var g=W.getComputedStyle(f,"fontSize");var d=g.indexOf("px")==-1;var e=f.innerHTML;if(d){f.innerHTML="X"}f.style.paddingTop=f.style.paddingBottom=f.style.borderTopWidth=f.style.borderBottomWidth="0px";f.style.lineHeight="2em";f.style.display="block";g=d?f.offsetHeight/2:parseInt(g,10);if(d){f.innerHTML=e}var c=Math.round(f.offsetHeight/(2*g));f.style.paddingTop=f.style.paddingBottom=f.style.borderTopWidth=f.style.borderBottomWidth=f.style.lineHeight=f.style.display="";if(isNaN(c)||!isFinite(c)||c==0){c=1}return{fontSize:g,lines:c}}function P(c,g,s){s=s||A.uriEncode;var q=[],m=[];var k=null;var e=c.childNodes;var o=false,p=false;var j=0;while(j<e.length){var f=e[j];if(f.nodeType==3){var t=A.textTransform(g,A.normalize(f.nodeValue)).replace(/</g,"&lt;");if(o&&p){t=t.replace(/^\s+/,"")}m.push(t);o=/\s$/.test(t);p=false}if(f.nodeType==1&&!/^(style|script)$/i.test(f.nodeName)){var h=[];var r=f.nodeName.toLowerCase();var n=f.className||"";if(/\s+/.test(n)){if(n.indexOf(E.CLASS)>-1){n=n.match("(\\s|^)"+E.CLASS+"-([^\\s$]*)(\\s|$)")[2]}else{n=n.match(/^([^\s]+)/)[1]}}if(n!=""){h.push('class="'+n+'"')}if(r=="a"){var d=s(f.getAttribute("href")||"");var l=f.getAttribute("target")||"";h.push('href="'+d+'"','target="'+l+'"');if(!k){k={href:d,target:l}}}m.push("<"+r+(h.length>0?" ":"")+h.join(" ")+">");p=true;if(f.hasChildNodes()){q.push(j);j=0;e=f.childNodes;continue}else{if(!/^(br|img)$/i.test(f.nodeName)){m.push("</",f.nodeName.toLowerCase(),">")}}}if(q.length>0&&!f.nextSibling){do{j=q.pop();e=f.parentNode.parentNode.childNodes;f=e[j];if(f){m.push("</",f.nodeName.toLowerCase(),">")}}while(j==e.length-1&&q.length>0)}j++}return{text:m.join("").replace(/^\s+|\s+$|\s*(<br>)\s*/g,"$1"),primaryLink:k||{}}}};
var parseSelector=(typeof(jQuery)!="undefined")?(jQuery):((function(){var B=/\s*,\s*/;var A=/\s*([\s>+~(),]|^|$)\s*/g;var L=/([\s>+~,]|[^(]\+|^)([#.:@])/g;var F=/(^|\))[^\s>+~]/g;var M=/(\)|^)/;var K=/[\s#.:>+~()@]|[^\s#.:>+~()@]+/g;function H(R,P){P=P||document.documentElement;var S=R.split(B),X=[];for(var U=0;U<S.length;U++){var N=[P],W=G(S[U]);for(var T=0;T<W.length;){var Q=W[T++],O=W[T++],V="";if(W[T]=="("){while(W[T++]!=")"&&T<W.length){V+=W[T]}V=V.slice(0,-1)}N=I(N,Q,O,V)}X=X.concat(N)}return X}function G(N){var O=N.replace(A,"$1").replace(L,"$1*$2").replace(F,D);return O.match(K)||[]}function D(N){return N.replace(M,"$1 ")}function I(N,P,Q,O){return(H.selectors[P])?H.selectors[P](N,Q,O):[]}var E={toArray:function(O){var N=[];for(var P=0;P<O.length;P++){N.push(O[P])}return N}};var C={isTag:function(O,N){return(N=="*")||(N.toLowerCase()==O.nodeName.toLowerCase())},previousSiblingElement:function(N){do{N=N.previousSibling}while(N&&N.nodeType!=1);return N},nextSiblingElement:function(N){do{N=N.nextSibling}while(N&&N.nodeType!=1);return N},hasClass:function(N,O){return(O.className||"").match("(^|\\s)"+N+"(\\s|$)")},getByTag:function(N,O){return O.getElementsByTagName(N)}};var J={"#":function(N,P){for(var O=0;O<N.length;O++){if(N[O].getAttribute("id")==P){return[N[O]]}}return[]}," ":function(O,Q){var N=[];for(var P=0;P<O.length;P++){N=N.concat(E.toArray(C.getByTag(Q,O[P])))}return N},">":function(O,R){var N=[];for(var Q=0,S;Q<O.length;Q++){S=O[Q];for(var P=0,T;P<S.childNodes.length;P++){T=S.childNodes[P];if(T.nodeType==1&&C.isTag(T,R)){N.push(T)}}}return N},".":function(O,Q){var N=[];for(var P=0,R;P<O.length;P++){R=O[P];if(C.hasClass([Q],R)){N.push(R)}}return N},":":function(N,P,O){return(H.pseudoClasses[P])?H.pseudoClasses[P](N,O):[]}};H.selectors=J;H.pseudoClasses={};H.util=E;H.dom=C;return H})());