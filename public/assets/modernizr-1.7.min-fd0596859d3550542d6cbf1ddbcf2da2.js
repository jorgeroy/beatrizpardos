// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function d(){l.input=function(a){for(var b=0,c=a.length;b<c;b++)A[a[b]]=a[b]in s;return A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),l.inputtypes=function(a){for(var d=0,e,f,g,h=a.length;d<h;d++)s.setAttribute("type",f=a[d]),e=s.type!=="text",e&&(s.value=t,s.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&s.style.WebkitAppearance!==c?(n.appendChild(s),g=b.defaultView,e=g.getComputedStyle&&g.getComputedStyle(s,null).WebkitAppearance!=="textfield"&&s.offsetHeight!==0,n.removeChild(s)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=s.checkValidity&&s.checkValidity()===!1:/^color$/.test(f)?(n.appendChild(s),n.offsetWidth,e=s.value!=t,n.removeChild(s)):e=s.value!=t)),z[a[d]]=!!e;return z}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function e(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+w.join(c+" ")+c).split(" ");return!!f(d,b)}function f(a,b){for(var d in a)if(r[a[d]]!==c&&(!b||b(a[d],q)))return!0}function g(a,b){return(""+a).indexOf(b)!==-1}function h(a,b){return typeof a===b}function i(a,b){return j(v.join(a+";")+(b||""))}function j(a){r.cssText=a}var k="1.7",l={},m=!0,n=b.documentElement,o=b.head||b.getElementsByTagName("head")[0],p="modernizr",q=b.createElement(p),r=q.style,s=b.createElement("input"),t=":)",u=Object.prototype.toString,v=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),w="Webkit Moz O ms Khtml".split(" "),x={svg:"http://www.w3.org/2000/svg"},y={},z={},A={},B=[],C,D=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;return c.textContent=a+"{#modernizr{height:3px}}",o.appendChild(c),d.id="modernizr",n.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d),!!e},E=function(){function a(a,e){e=e||b.createElement(d[a]||"div");var f=(a="on"+a)in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),f=h(e[a],"function"),h(e[a],c)||(e[a]=c),e.removeAttribute(a))),e=null,f}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),F={}.hasOwnProperty,G;h(F,c)||h(F.call,c)?G=function(a,b){return b in a&&h(a.constructor.prototype[b],c)}:G=function(a,b){return F.call(a,b)},y.flexbox=function(){function a(a,b,c,d){a.style.cssText=v.join(b+":"+c+";")+(d||"")}function c(a,b,c,d){b+=":",a.style.cssText=(b+v.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");c(d,"display","box","width:42px;padding:0;"),a(e,"box-flex","1","width:10px;"),d.appendChild(e),n.appendChild(d);var f=e.offsetWidth===42;return d.removeChild(e),n.removeChild(d),f},y.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},y.canvastext=function(){return l.canvas&&h(b.createElement("canvas").getContext("2d").fillText,"function")},y.webgl=function(){return!!a.WebGLRenderingContext},y.touch=function(){return"ontouchstart"in a||D("@media ("+v.join("touch-enabled),(")+"modernizr)")},y.geolocation=function(){return!!navigator.geolocation},y.postmessage=function(){return!!a.postMessage},y.websqldatabase=function(){var b=!!a.openDatabase;return b},y.indexedDB=function(){for(var b=-1,c=w.length;++b<c;){var d=w[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},y.hashchange=function(){return E("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},y.history=function(){return!!a.history&&!!history.pushState},y.draganddrop=function(){return E("dragstart")&&E("drop")},y.websockets=function(){return"WebSocket"in a},y.rgba=function(){return j("background-color:rgba(150,255,150,.5)"),g(r.backgroundColor,"rgba")},y.hsla=function(){return j("background-color:hsla(120,40%,100%,.5)"),g(r.backgroundColor,"rgba")||g(r.backgroundColor,"hsla")},y.multiplebgs=function(){return j("background:url(//:),url(//:),red url(//:)"),(new RegExp("(url\\s*\\(.*?){3}")).test(r.background)},y.backgroundsize=function(){return e("backgroundSize")},y.borderimage=function(){return e("borderImage")},y.borderradius=function(){return e("borderRadius","",function(a){return g(a,"orderRadius")})},y.boxshadow=function(){return e("boxShadow")},y.textshadow=function(){return b.createElement("div").style.textShadow===""},y.opacity=function(){return i("opacity:.55"),/^0.55$/.test(r.opacity)},y.cssanimations=function(){return e("animationName")},y.csscolumns=function(){return e("columnCount")},y.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return j((a+v.join(b+a)+v.join(c+a)).slice(0,-a.length)),g(r.backgroundImage,"gradient")},y.cssreflections=function(){return e("boxReflect")},y.csstransforms=function(){return!!f(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},y.csstransforms3d=function(){var a=!!f(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return a&&"webkitPerspective"in n.style&&(a=D("@media ("+v.join("transform-3d),(")+"modernizr)")),a},y.csstransitions=function(){return e("transitionProperty")},y.fontface=function(){var a,c,d=o||n,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var g=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){return!a||!b?!1:(a.cssText=b,a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0)};return c=g('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e),c},y.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},y.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;return c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")),c},y.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},y.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},y.webWorkers=function(){return!!a.Worker},y.applicationcache=function(){return!!a.applicationCache},y.svg=function(){return!!b.createElementNS&&!!b.createElementNS(x.svg,"svg").createSVGRect},y.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==x.svg},y.smil=function(){return!!b.createElementNS&&/SVG/.test(u.call(b.createElementNS(x.svg,"animate")))},y.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(u.call(b.createElementNS(x.svg,"clipPath")))};for(var H in y)G(y,H)&&(C=H.toLowerCase(),l[C]=y[H](),B.push((l[C]?"":"no-")+C));return l.input||d(),l.crosswindowmessaging=l.postmessage,l.historymanagement=l.history,l.addTest=function(a,b){a=a.toLowerCase();if(!l[a])return b=!!b(),n.className+=" "+(b?"":"no-")+a,l[a]=b,l},j(""),q=s=null,m&&a.attachEvent&&function(){var a=b.createElement("div");return a.innerHTML="<elem></elem>",a.childNodes.length!==1}()&&function(a,b){function c(a,b){var d=-1,e=a.length,f,g=[];while(++d<e)f=a[d],(b=f.media||b)!="screen"&&g.push(c(f.imports,b),f.cssText);return g.join("")}function d(a){var b=-1;while(++b<g)a.createElement(f[b])}var e="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),k=b.createDocumentFragment(),l=b.documentElement,m=l.firstChild,n=b.createElement("body"),o=b.createElement("style"),p;d(b),d(k),m.insertBefore(o,m.firstChild),o.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,d=c(b.styleSheets,"all"),e=[],m;p=p||b.body;while((m=j.exec(d))!=null)e.push((m[1]+m[2]+m[3]).replace(h,"$1.iepp_$2")+m[4]);o.styleSheet.cssText=e.join("\n");while(++a<g){var q=b.getElementsByTagName(f[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+f[a])}k.appendChild(p),l.appendChild(n),n.className=p.className,n.innerHTML=p.innerHTML.replace(i,"<$1font")}),a.attachEvent("onafterprint",function(){n.innerHTML="",l.removeChild(n),l.appendChild(p),o.styleSheet.cssText=""})}(a,b),l._enableHTML5=m,l._version=k,n.className=n.className.replace(/\bno-js\b/,"")+" js "+B.join(" "),l}(this,this.document);