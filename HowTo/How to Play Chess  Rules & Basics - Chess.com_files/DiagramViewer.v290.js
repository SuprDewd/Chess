//
//
//  Copyright Chess.com, LLC. All rights reserved.
//
//














































var Config;
if(!Config){Config={};}else{
if(!Config.z688eb)Config.z688eb=Config["domain.main"];
if(!Config.zb73d4)Config.zb73d4=Config["domain.static"];
if(!Config.z364c2)Config.z364c2=Config["domain.files"];
if(!Config.z3bbf0)Config.z3bbf0=Config["domain.live"];
if(!Config.z18438)Config.z18438=Config["domain.cssjs"];
if(!Config.z1a1d3)Config.z1a1d3=Config["domain.images"];
if(!Config.z284f1)Config.z284f1=Config["domain.avatars"];
if(!Config.za89a8)Config.za89a8=Config["application.version"];}{
var z4932b=document.getElementsByTagName("script");
var expression=/^(https?\:\/\/.+)\/js\/chess\/Config(\.v(.+))?\.js(\?version\=(.+))?$/;for(
var i=0;i<z4932b.length;i++){
var src=z4932b[i].src;
if(!src.match(expression))continue;
var parts=expression.exec(src);
if(!Config.zb73d4)Config.zb73d4=parts[1];
if(!Config.za89a8&&parts[3])Config.za89a8=1*parts[3];
if(!Config.za89a8&&parts[5])Config.za89a8=1*parts[5];break;}}
if(!Config.za89a8)Config.za89a8=Math.floor(Math.random()*10000)+10000;
if(!Config.DocumentRoot)Config.DocumentRoot="";
if(!Config.GfxUrl)Config.GfxUrl=Config.z1a1d3+"/js/chess/images";
if(!Config.z1bf97)Config.z1bf97=Config.z3bbf0+"/static/soundmanager/";
if(!Config.z76fef)Config.z76fef=Config.zb73d4+"/livechess/static/audio3";
if(!Config.DiagramGetPostUrl)Config.DiagramGetPostUrl="/api/get_diagram";
if(!Config.DailyPuzzleGetUrl)Config.DailyPuzzleGetUrl="/api/get_puzzle";window.addOnLoad=function(callback){
var z3d599=window.onload;window.onload=function(){
if(z3d599)z3d599();callback();}};ChessColorScheme={};ChessColorScheme["brown"]=["#B58863","#F0D9B5","brown",".gif"];ChessColorScheme["wood"]=["#B58863","#F0D9B5","brown",".gif"];ChessColorScheme["green"]=["#769656","#EEEED2","green",".gif"];ChessColorScheme["blue"]=["#4D6D92","#ECECD7","blue",".gif"];ChessColorScheme["grey"]=["#ABABAB","#EFEFEF","grey",".gif"];ChessColorScheme["red"]=["#BA5546","#F0D8BF","red",".gif"];ChessColorScheme["orange"]=["#D08B18","#FCE4B2","orange",".gif"];ChessColorScheme["purple"]=["#8877B7","#EFEFEF","purple",".gif"];ChessColorScheme["pink"]=["#D097A1","#FADDE1","pink",".gif"];ChessColorScheme["tan"]=["#D08B18","#FCE4B2","tan",".gif"];ChessColorScheme["natural"]=["#D08B18","#FCE4B2","tan",".gif"];ChessColorScheme["winboard"]=["#77a26d","#c8c365","winboard",".gif"];ChessColorScheme["blackwhite"]=["#000000","#FFFFFF","blackwhite",".gif"];ChessColorScheme["marbleblue"]=["#4f7697","#d3dde9","marbleblue",".jpg"];ChessColorScheme["marblebrown"]=["#7c7348","#dcdbbd","marblebrown",".jpg"];ChessColorScheme["marblegreen"]=["#b8b8b8","#f5f5f5","marblegreen",".jpg"];ChessColorScheme["metal"]=["#95999c","#cdd1d4","metal",".jpg"];ChessColorScheme["wooddark"]=["#8d675e","#e7cdb2","wooddark",".jpg"];ChessColorScheme["woodlight"]=["#d09d6e","#e8d7c3","woodlight",".jpg"];ChessColorScheme["woodmid"]=["#c86d38","#f6d4a7","woodmid",".jpg"];ChessColorScheme["woodolive"]=["#a1af72","#e4dcc7","woodolive",".jpg"];ChessPieceStyle={};ChessPieceStyle["alpha"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["book"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["cases"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["classic"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["club"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["condal"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["lines"]={"default":"gif"};ChessPieceStyle["maya"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["modern2"]={"16":"png","30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["vintage"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","180":"png","default":"gif"};ChessPieceStyle["simple"]={"20":"png","default":"gif"};ChessPieceStyle["3dwood"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPieceStyle["3dplastic"]={"30":"png","38":"png","40":"png","45":"png","53":"png","60":"png","68":"png","75":"png","83":"png","90":"png","default":"gif"};ChessPiece3dInfo={};ChessPiece3dInfo["3dwood"]={"30":{"p":1,"n":3,"b":5,"r":6,"q":8,"k":9,"large":9},"38":{"p":2,"n":4,"b":7,"r":7,"q":11,"k":12,"large":12},"40":{"p":1,"n":4,"b":7,"r":7,"q":11,"k":12,"large":12},"45":{"p":2,"n":5,"b":8,"r":9,"q":13,"k":14,"large":14},"53":{"p":2,"n":5,"b":10,"r":10,"q":14,"k":16,"large":16},"60":{"p":2,"n":6,"b":11,"r":12,"q":16,"k":18,"large":18},"68":{"p":3,"n":7,"b":12,"r":13,"q":19,"k":21,"large":21},"75":{"p":3,"n":8,"b":14,"r":15,"q":21,"k":24,"large":24},"83":{"p":3,"n":9,"b":16,"r":17,"q":23,"k":26,"large":26},"90":{"p":4,"n":10,"b":17,"r":19,"q":25,"k":28,"large":28}};ChessPiece3dInfo["3dplastic"]={"30":{"p":1,"n":3,"b":5,"r":6,"q":8,"k":9,"large":9},"38":{"p":2,"n":4,"b":7,"r":7,"q":11,"k":12,"large":12},"40":{"p":1,"n":4,"b":7,"r":7,"q":11,"k":12,"large":12},"45":{"p":2,"n":5,"b":8,"r":9,"q":13,"k":14,"large":14},"53":{"p":2,"n":5,"b":10,"r":10,"q":14,"k":16,"large":16},"60":{"p":2,"n":6,"b":11,"r":12,"q":16,"k":18,"large":18},"68":{"p":3,"n":7,"b":12,"r":13,"q":19,"k":21,"large":21},"75":{"p":3,"n":8,"b":14,"r":15,"q":21,"k":24,"large":24},"83":{"p":3,"n":9,"b":16,"r":17,"q":23,"k":26,"large":26},"90":{"p":4,"n":10,"b":17,"r":19,"q":25,"k":28,"large":28}};
var zc41ab=function(node,z2da4b){z2da4b.parentNode.insertBefore(node,z2da4b);return true;};
var z38744=function(obj,zcdad6){
var empty={};for(
var i in zcdad6){
if(!(i in empty)){obj[i]=zcdad6[i];}}return obj;};(function(){
var z11b2a=null;insertContentAt=function(z2da4b,z8aef4,z0d7c8){
if(!z11b2a)z11b2a=document.createElement("div");z11b2a.innerHTML=z8aef4;
if(z0d7c8!=="top"||!z2da4b.firstChild){while(z11b2a.firstChild){z2da4b.appendChild(z11b2a.firstChild);}}else{
var z73fec=z2da4b.firstChild;while(z11b2a.firstChild){zc41ab(z11b2a.removeChild(z11b2a.firstChild),z73fec);}}z11b2a.innerHTML="";};})();
var $A=function(obj){return Array.prototype.slice.call(obj);};
var bind=function(z13557,obj){
if(arguments.length>2){
var z999bc=$A(arguments);z999bc.shift();z999bc.shift();return function(){
var z36273=$A(z999bc);for(
var i=0;i<arguments.length;i++)z36273.push(arguments[i]);return z13557.apply(obj,z36273);};}else{return function(){return z13557.apply(obj,arguments);};}};function zcac00(){
var z89a94;try{z89a94=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{z89a94=new ActiveXObject("Microsoft.XMLHTTP")}catch(E){z89a94=false;}}
if(!z89a94&&typeof XMLHttpRequest!='undefined'){try{
var z89a94=new XMLHttpRequest();}catch(e){
var z89a94=false;alert('couldn\'t create xmlhttp object');}}return(z89a94);}(function(){
if(typeof(myEvent)=='undefined'){myEvent={z3f027:[],z4580e:[],observe:function(n,evt,zf8f9c){
if(n){
if(n.addEventListener){n.addEventListener(evt,zf8f9c,false);}else{
if(n.attachEvent){n.attachEvent('on'+evt,zf8f9c);}}}},stopObserving:function(n,evt,zf8f9c){
if(n){
if(n.removeEventListener){n.removeEventListener(evt,zf8f9c,false);}else{
if(n.detachEvent){n.detachEvent('on'+evt,zf8f9c);}}}},getTarget:function(evt){return evt.target?evt.target:evt.srcElement;},getPointXY:function(evt){return{x:evt.pageX||(evt.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)),y:evt.pageY||(evt.clientY+(document.documentElement.scrollTop||document.body.scrollTop))};},preventDefault:function(e,zbcf51){
if(typeof(e.preventDefault)=='function')e.preventDefault();e.returnValue=false;
if(zbcf51){
if(typeof(e.stopPropagation)=='function')e.stopPropagation();e.cancelBubble=true;}},registerComponent:function(z6127d){
var found=false;for(
var n=0;n<myEvent.z3f027;n++){
if(z6127d==myEvent.z3f027[n]){found=true;break;}}
if(!found){myEvent.z3f027[myEvent.z3f027.length]=z6127d;}},findComponent:function(e){
var z2204a=e.target?e.target:e.srcElement;
var obj=null;while(!(obj=myEvent.ze2460(z2204a.id))){
if(z2204a.parentNode)z2204a=z2204a.parentNode;else return false;}z2204a=null;return obj;},ze2460:function(z6127d){
var found=null;for(
var n=0;n<myEvent.z3f027.length;n++){
if(z6127d==myEvent.z3f027[n]){found=document.getElementById(z6127d);break;}}return found;},registerRelated:function(z07733,z01f43){
var found=false;for(
var n=0;n<myEvent.z4580e.length;n++){
if(myEvent.z4580e[n].z07733==z07733&&myEvent.z4580e[n].z01f43==z01f43){found=true;break;}}
if(!found)myEvent.z4580e[myEvent.z4580e.length]={z07733:z07733,z01f43:z01f43};},findRelated:function(z07733){for(
var n=0;n<myEvent.z4580e.length;n++){
if(myEvent.z4580e[n].z07733==z07733){return myEvent.z4580e[n].z01f43;}}return null;}};}
if(typeof(Element)=='undefined')Element={};
if(typeof(Element.hasClassName)=='undefined'){Element.hasClassName=function(element,className){
if(typeof(element)=='string')element=document.getElementById(element);
if(!(element))return;
var elementClassName=element.className;
var z0dcff=new RegExp("(^|\\s)"+className+"(\\s|$)");return(elementClassName.length>0&&(elementClassName==className||z0dcff.test(elementClassName)));};}
if(typeof(Element.addClassName)=='undefined'){Element.addClassName=function(element,className){
if(typeof(element)=='string')element=document.getElementById(element);
if(!(element))return;
if(!Element.hasClassName(element,className))element.className+=(element.className?' ':'')+className;return element;};}
if(typeof(Element.removeClassName)=='undefined'){Element.removeClassName=function(element,className){
if(typeof(element)=='string')element=document.getElementById(element);
if(!(element))return;element.className=element.className.replace(new RegExp("(^|\\s+)"+className+"(\\s+|$)"),' ').replace(/^\s+/,'').replace(/\s+$/,'');return element;};}
if(typeof($)=='undefined'){$=function(id){return(typeof id=="string")?document.getElementById(id):id;};}})();(function(){
if(typeof(Prototype)=='undefined'){Prototype={Browser:{IE:!!(window.attachEvent&&!window.opera),Opera:!!window.opera,zd3f15:navigator.userAgent.indexOf('AppleWebKit/')>-1,z28230:navigator.userAgent.indexOf('Gecko')>-1&&navigator.userAgent.indexOf('KHTML')==-1,z8cebb:!!navigator.userAgent.match(/Apple.*Mobile.*Safari/)}};}})();(function(){
if(typeof(document.getElementsByClassName)=='undefined'){document.getElementsByClassName=function(className,parentElement){
if(typeof(parentElement)=='string')parentElement=document.getElementById(parentElement);
if(!!document.evaluate){
var q=".//*[contains(concat(' ', @class, ' '), ' "+className+" ')]";
var results=[];
var query=document.evaluate(q,parentElement||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(
var i=0,length=query.snapshotLength;i<length;i++)results.push(query.snapshotItem(i));return results;}else{
var children=(parentElement||document.body).getElementsByTagName('*');
var elements=[],child;
var z0dcff=new RegExp("(^|\\s)"+className+"(\\s|$)");for(
var i=0,length=children.length;i<length;i++){child=children[i];
if(child.className.length>0&&(child.className==className||z0dcff.test(child.className)))elements.push(child);}return elements;}};}})();za96fe=function(string,length,character){
var result=string;while(result.length<length)result=character+result;return result;};zf1a99=function(string,length,character){
var result=string;while(result.length<length)result=result+character;return result;};z5a2b7=function(a,b){
if(a>b)return 1;else
if(a<b)return-1;else return 0;};z00efc=function(a,b){
var z262b7=a.toLowerCase();
var z5c47c=b.toLowerCase();
if(z262b7>z5c47c)return 1;else
if(z262b7<z5c47c)return-1;else return 0;};function nvl(z14d32,z4c3b0,z08196,zcf7fa){
if(z14d32||z14d32=="")return z14d32;
if(z4c3b0||z4c3b0=="")return z4c3b0;
if(z08196||z08196=="")return z08196;
if(zcf7fa||zcf7fa=="")return zcf7fa;return null;}function StringBuffer(){this.parts=[];};StringBuffer.prototype.z2de8d=function z2de8d(s){this.parts.push(s);return this;};StringBuffer.prototype.toString=function toString(){return this.parts.join("");};function getCookie(name){
var z9b6b7=name+"=";
var z57413=document.cookie.split(';');for(
var i=0;i<z57413.length;i++){
var c=z57413[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);
if(c.indexOf(z9b6b7)==0)return c.substring(z9b6b7.length,c.length);}return null;};function currentTimeMillis(){return new Date().getTime();}function zc14e7(a,b){setTimeout(a,b);}function z890b1(a,b){setInterval(a,b);}function clearElement(element){
if(typeof(element)=='string')element=document.getElementById(element);
var node=element.firstChild;while(node){
var nextNode=node.nextSibling;element.removeChild(node);node=nextNode;}}function getNodeText(zb7b6e){
if(typeof(zb7b6e.textContent)!="undefined")return zb7b6e.textContent;return zb7b6e.firstChild.nodeValue;}function zae731(str){return str.replace(/&lt;/gi,"<");}function z22a6f(str){str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");str=str.replace(/'/gm,"&#39;");return str;}function z88ffa(z1208e){
var result=parseInt(z1208e);return isNaN(result)?null:result;}(function(){
var id=0;genStringId=function(){return "__str"+(++id);}})();(function(){z90679=function(zba64d){this.z98a65=nvl(zba64d.delay,10);this.za1aef=[];this.z4b29e=false;this.zd92d7=false;this.zd522f=false;};z90679.prototype={add:function(callback){this.za1aef.push(callback);
if(!this.z4b29e){this.z4b29e=true;setTimeout(bind(this.zc566e,this),1);}},zdd913:function(){this.zd92d7=true;},ze4662:function(){this.add(bind(this.zdd913,this));},zb4047:function(){
if(this.zd522f){this.zd522f=false;this.zc566e();}else
if(this.zd92d7){setTimeout(bind(this.zb4047,this),this.z98a65);}},zc566e:function(){
if(this.zd92d7){this.zd522f=true;this.zd92d7=false;return;}
if(this.za1aef.length>0){
var callback=this.za1aef.shift();
var z57e38=null;try{callback();}catch(e){z57e38=e;}setTimeout(bind(this.zc566e,this),this.z98a65);
if(z57e38){throw z57e38;}}else{this.z4b29e=false;}}};})();(function(){
if(!("css" in window))window.css={};
var isIE=Prototype.Browser.IE;
var dynamicStyleMap={};
var pageStyleSheets={};
var titledSheets=[];
var styleIndicies=[];css.insertCssRule=function(selector,declaration,styleSheetName){
var ss=css.getDynamicStyleSheet(styleSheetName);
var styleText=selector+" {"+declaration+"}";
if(isIE){ss.cssText+=styleText;}else
if(ss.sheet){ss.sheet.insertRule(styleText,ss._indicies.length);}else{ss.appendChild(document.createTextNode(styleText));}ss._indicies.push(selector+" "+declaration);return selector;};css.removeCssRule=function(selector,declaration,styleSheetName){
var ss;
var index=-1;for(
var nm in dynamicStyleMap){
if(styleSheetName&&styleSheetName!=nm){continue;}ss=dynamicStyleMap[nm];for(
var i=0;i<ss._indicies.length;i++){
if(selector+" "+declaration==ss._indicies[i]){index=i;break;}}
if(index>-1){break;}}
if(!ss){return false;}
if(index==-1){return false;}ss._indicies.splice(index,1);
if(isIE){ss.removeRule(index);}else
if(ss.sheet){ss.sheet.deleteRule(index);}else
if(document.styleSheets[0]){}return true;};css.getStyleSheet=function(styleSheetName){
if(dynamicStyleMap[styleSheetName||"default"]){return dynamicStyleMap[styleSheetName||"default"];}
if(!styleSheetName){return false;}
var allSheets=css.getStyleSheets();
if(allSheets[styleSheetName]){return css.getStyleSheets()[styleSheetName];}for(
var nm in allSheets){
if(allSheets[nm].href&&allSheets[nm].href.indexOf(styleSheetName)>-1){return allSheets[nm];}}return false;};css.getDynamicStyleSheet=function(styleSheetName){
if(!styleSheetName){styleSheetName="default";}
if(!dynamicStyleMap[styleSheetName]){
if(document.createStyleSheet){dynamicStyleMap[styleSheetName]=document.createStyleSheet();dynamicStyleMap[styleSheetName].title=styleSheetName;}else{dynamicStyleMap[styleSheetName]=document.createElement("style");dynamicStyleMap[styleSheetName].setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(dynamicStyleMap[styleSheetName]);}dynamicStyleMap[styleSheetName]._indicies=[];}return dynamicStyleMap[styleSheetName];};css.enableStyleSheet=function(styleSheetName){
var ss=css.getStyleSheet(styleSheetName);
if(ss){
if(ss.sheet){ss.sheet.disabled=false;}else{ss.disabled=false;}}};css.disableStyleSheet=function(styleSheetName){
var ss=css.getStyleSheet(styleSheetName);
if(ss){
if(ss.sheet){ss.sheet.disabled=true;}else{ss.disabled=true;}}};css.activeStyleSheet=function(title){
var sheets=css.getToggledStyleSheets();
if(arguments.length==1){sheets.each(function(s){s.disabled=(s.title==title)?false:true;});}else{for(
var i=0;i<sheets.length;i++){
if(sheets[i].disabled==false){return sheets[i];}}}return true;};css.getPreferredStyleSheet=function(){};css.getToggledStyleSheets=function(){
if(!titledSheets.length){
var sObjects=css.getStyleSheets();for(
var nm in sObjects){
if(sObjects[nm].title){titledSheets.push(sObjects[nm]);}}}return titledSheets;};css.getStyleSheets=function(){
if(pageStyleSheets.collected){return pageStyleSheets;}
var sheets=document.styleSheets;sheets.each(function(n){
var s=(n.sheet)?n.sheet:n;
var name=s.title||s.href;
if(isIE){
if(s.cssText.indexOf("#default#VML")==-1){
if(s.href){pageStyleSheets[name]=s;}else
if(s.imports.length){s.imports.each(function(si){pageStyleSheets[si.title||si.href]=si;});}else{pageStyleSheets[name]=s;}}}else{pageStyleSheets[name]=s;pageStyleSheets[name].id=s.ownerNode.id;s.cssRules.each(function(r){
if(r.href){pageStyleSheets[r.href]=r.styleSheet;pageStyleSheets[r.href].id=s.ownerNode.id;}});}});pageStyleSheets.collected=true;return pageStyleSheets;};})();(function(){z7f42b=function(){this.zad85d={};this.areas={};this.za429c={};this.z9ac48=0;this.zfa082=0;this.z83b73=[];this.zca669=[];this.z6f1d0=[];this.zee076=[];this.zaeff5=[];this.ze4319=[];};z7f42b.prototype={clone:function(){
var z56e60=new z7f42b();z56e60.zfa082=this.zfa082;for(
var z1efa8 in this.zad85d){z56e60.zad85d[z1efa8]={};z56e60.zad85d[z1efa8].color=this.zad85d[z1efa8].color;z56e60.zad85d[z1efa8].type=this.zad85d[z1efa8].type;z56e60.zad85d[z1efa8].zba125=this.zad85d[z1efa8].zba125;}for(
var zba125 in this.areas){z56e60.areas[zba125]={};z56e60.areas[zba125].zad85d=[];for(
var z1efa8 in this.areas[zba125].zad85d)
if(typeof this.areas[zba125].zad85d[z1efa8]!="function")z56e60.areas[zba125].zad85d.push(this.areas[zba125].zad85d[z1efa8]);}for(
var z01e88 in this.za429c)z56e60.za429c[z01e88]=this.za429c[z01e88];for(
var n=0;n<this.zca669.length;n++){z56e60.zca669.push(this.zca669[n]);z56e60.z83b73.push(this.z83b73[n]);z56e60.z6f1d0.push(this.z6f1d0[n]);z56e60.zee076.push(this.zee076[n]);z56e60.ze4319.push(this.ze4319[n]);}z56e60.z9ac48=this.z9ac48;return z56e60;},clear:function(){this.zad85d={};for(
var zba125 in this.areas)this.areas[zba125].zad85d.length=0;this.za429c={};this.z9ac48=0;this.z83b73=[];this.zca669=[];this.z6f1d0=[];this.zee076=[];this.zaeff5=[];this.ze4319=[];this.zfa082=0;},z35c9f:function(zcc2ef){this.areas[zcc2ef]={};this.areas[zcc2ef].zad85d=[];},zab5c0:function(color,type,zcc2ef){
var z1efa8={};
var id=(this.zfa082<10?"0"+this.zfa082:this.zfa082);this.zfa082++;z1efa8.color=color;z1efa8.type=type;z1efa8.zba125=zcc2ef;this.zad85d[id]=z1efa8;this.areas[zcc2ef].zad85d.push(id);return z1efa8;},assign:function(z56e60){this.clear();this.zfa082=z56e60.zfa082;for(
var z1efa8 in z56e60.zad85d){this.zad85d[z1efa8]={};this.zad85d[z1efa8].color=z56e60.zad85d[z1efa8].color;this.zad85d[z1efa8].type=z56e60.zad85d[z1efa8].type;this.zad85d[z1efa8].zba125=z56e60.zad85d[z1efa8].zba125;}for(
var zba125 in z56e60.areas){this.areas[zba125]={};this.areas[zba125].zad85d=[];for(
var z1efa8 in z56e60.areas[zba125].zad85d)
if(typeof z56e60.areas[zba125].zad85d[z1efa8]!="function")this.areas[zba125].zad85d.push(z56e60.areas[zba125].zad85d[z1efa8]);}for(
var n=0;n<z56e60.zca669.length;n++){this.zca669.push(z56e60.zca669[n]);this.z83b73.push(z56e60.z83b73[n]);this.z6f1d0.push(z56e60.z6f1d0[n]);this.zee076.push(z56e60.zee076[n]);this.ze4319.push(z56e60.ze4319[n]);}for(
var z01e88 in z56e60.za429c)this.za429c[z01e88]=z56e60.za429c[z01e88];this.z9ac48=z56e60.z9ac48;}};})();z22e75={};z22e75.Base=function(){};z22e75.Base.prototype={initialize:function(){},z16730:function(za14da){},z31a2a:function(zea6ec,where,za14da,z1432e){},z348a8:function(zea6ec,where,za14da){},z35e0a:function(z7834f){},z550e4:function(zba125,za14da){
var z404ff=za14da.areas[zba125].zad85d;while(z404ff.length>0){
var p=z404ff.pop();za14da.zad85d[p].zba125=null;}},z34d1b:function(zea6ec,where,za14da,z2ba00,z84c44){},zf5466:function(zea6ec,where,za14da,z2ba00,z84c44,text){},z4cc87:function(za14da,z739c1,text){for(
var i=0;i<z739c1.length;i+=4){
var zea6ec=z739c1.substring(i,i+2);
var where=z739c1.substring(i+2,i+4);
var z2ba00=null;
if((z739c1.length>i+4)&&(z739c1.substring(i+4,i+5)=='(')){
var zac898=z739c1.indexOf(')',i+4);z2ba00=z739c1.substring(i+5,zac898);i+=z2ba00.length+2;}this.zf5466(zea6ec,where,za14da,z2ba00,false,text);}}};(function(){function z63dd2(array,x,y){
if(array[x])
if(array[x][y])return array[x][y];return null;}function z3a35b(n){
if(n==0)return 0;else
if(n>0)return 1;else return-1;}z22e75.zde520=function(zba64d){
if(!zba64d)zba64d={};this.z4eb29=nvl(zba64d.z0f2c1,"full");this.za9bee=nvl(zba64d.z1432e,"full");this.ze829a='-';this.z9cc2a='-';this.z5b572=null;this.z5f76d=true;};z22e75.zde520.prototype={z4cc87:z22e75.Base.prototype.z4cc87,z550e4:z22e75.Base.prototype.z550e4,z35e0a:function(z7834f){for(
var j=8;j>=1;j--)for(
var i=1;i<=8;i++){
var zb4f8d=(String.fromCharCode(96+i)+j);z7834f.z35c9f(zb4f8d);}},zceef8:function(za14da){
var zfb82d=new Array(9);for(
var i=1;i<=8;i++)zfb82d[i]=new Array(null,null,null,null,null,null,null,null,null);for(
var z0a1f1 in za14da.zad85d){{
var zb4f8d=za14da.zad85d[z0a1f1].zba125;
if(zb4f8d){
var ze6321=zb4f8d.charCodeAt(0)-96;
var zd09e0=zb4f8d.charCodeAt(1)-48;
if(ze6321>=1&&ze6321<=8&&zd09e0>=1&&zd09e0<=8)zfb82d[ze6321][zd09e0]=z0a1f1;}}}return zfb82d;},z16730:function(za14da){
if(this.z4eb29=="off"||this.z4eb29=="sideonly")return{};{
var z614e3=0;
var z94ba4=0;for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];
if(z1efa8.type=="k"&&z1efa8.zba125)
if(z1efa8.color==1)z614e3++;else
if(z1efa8.color==2)z94ba4++;}
if(z614e3!=1||z94ba4!=1)return null;}{for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];
if(z1efa8.type=="p"&&z1efa8.zba125){
var z524fd=z1efa8.zba125.charCodeAt(1)-48;
if(z524fd==1||z524fd==8)return null;}}}
if(this.z4eb29=="full"){
var z25bb2=za14da.za429c["sm"];
var zef618=null;for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];{
if(z1efa8.type=="k"&&z1efa8.color==3-z25bb2)zef618=z1efa8.zba125;}}
if(zef618)
if(this.z21214(zef618,z25bb2,za14da))return null;
var z2b47a=za14da.za429c['cs'];
var zee517=/[KkQq\-]{4}/;
if(!z2b47a.match(zee517))return null;}return{};},z31a2a:function(zea6ec,where,za14da,zc7ecf){
var z1432e=zc7ecf?zc7ecf:this.za9bee;
if(this.z5f76d)return{};
var z25bb2=za14da.za429c["sm"];
var zc6329=za14da.za429c["cs"];
var z8c488=za14da.zad85d[zea6ec].color;
var zfb82d=this.zceef8(za14da);
var z04fd5=za14da.zad85d[zea6ec].zba125;
var z1ab69=z04fd5.charCodeAt(0)-96;
var za38c6=z04fd5.charCodeAt(1)-48;
var z8a349=where.charCodeAt(0)-96;
var z1316b=where.charCodeAt(1)-48;
var zb8017=za14da.zad85d[zea6ec].type;
var ze661a=!zfb82d[z8a349][z1316b];
var z79993=zfb82d[z8a349][z1316b]&&(za14da.zad85d[zfb82d[z8a349][z1316b]].color!=z8c488);
var direction=z8c488==1?1:-1;
var za73d0=false;
var z4e2bd=false;
if(z1ab69==z8a349&&za38c6==z1316b){return null;}
if(z25bb2!=z8c488&&z1432e!="off")return null;
if(z1432e=="off"||z1432e=="sideonly"){
if(zb8017=="p")
if((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1))return{z4e2bd:true};
if(zb8017!='k')return{};}
var z2b10f=(z1432e=="minimal");
var z221bd=(z1432e!="full");
if(zb8017=="p"){
if((z8a349==z1ab69)&&(z1316b==za38c6+direction)&&(ze661a||z2b10f))za73d0=true;else
if((z8a349==z1ab69)&&(z1316b==za38c6+direction+direction)&&(ze661a||z2b10f)&&(!zfb82d[z1ab69][za38c6+direction]||z2b10f)&&((z8c488==1&&za38c6==2)||(z8c488==2&&za38c6==7)))za73d0=true;else
if((z79993||z2b10f)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction))za73d0=true;else
if((ze661a)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction)&&where==za14da.za429c["ep"])za73d0=true;
if(za73d0&&((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1)))z4e2bd=true;}
if(zb8017=="k"){
var z81a9b;
var z2c987;
if(z8c488==1){z81a9b=(zc6329.indexOf("k")!=-1||(z221bd&&zfb82d[8][1]&&za14da.zad85d[zfb82d[8][1]].type=='r'&&za14da.zad85d[zfb82d[8][1]].color=='1'));z2c987=(zc6329.indexOf("q")!=-1||(z221bd&&zfb82d[1][1]&&za14da.zad85d[zfb82d[1][1]].type=='r'&&za14da.zad85d[zfb82d[1][1]].color=='1'));}else{z81a9b=(zc6329.indexOf("K")!=-1||(z221bd&&zfb82d[8][8]&&za14da.zad85d[zfb82d[8][8]].type=='r'&&za14da.zad85d[zfb82d[8][8]].color=='2'));z2c987=(zc6329.indexOf("Q")!=-1||(z221bd&&zfb82d[1][8]&&za14da.zad85d[zfb82d[1][8]].type=='r'&&za14da.zad85d[zfb82d[1][8]].color=='2'));}
if((Math.abs(z8a349-z1ab69)<=1)&&(Math.abs(z1316b-za38c6)<=1)&&(ze661a||z79993||z2b10f))za73d0=true;else
if(z81a9b&&((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))&&(z1ab69==5)&&(z8a349==7)&&((ze661a)&&(zfb82d[8][za38c6]&&za14da.zad85d[zfb82d[8][za38c6]].type=="r"&&za14da.zad85d[zfb82d[8][za38c6]].color==z8c488)&&!zfb82d[6][za38c6])){
var z90e2c=(z8c488==1)?"e1":"e8";
var z03b3b=(z8c488==1)?"f1":"f8";
var z0f446=(z8c488==1)?"g1":"g8";
if((!this.z21214(z90e2c,3-z8c488,za14da)&&!this.z21214(z03b3b,3-z8c488,za14da)&&!this.z21214(z0f446,3-z8c488,za14da))||z2b10f){za73d0=true;}}else
if(z2c987&&((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))&&(z1ab69==5)&&(z8a349==3)&&((ze661a)&&(zfb82d[1][za38c6]&&za14da.zad85d[zfb82d[1][za38c6]].type=="r"&&za14da.zad85d[zfb82d[1][za38c6]].color==z8c488)&&!zfb82d[4][za38c6]&&!zfb82d[2][za38c6])){
var z90e2c=(z8c488==1)?"e1":"e8";
var z03b3b=(z8c488==1)?"d1":"d8";
var z0f446=(z8c488==1)?"c1":"c8";
if((!this.z21214(z90e2c,3-z8c488,za14da)&&!this.z21214(z03b3b,3-z8c488,za14da)&&!this.z21214(z0f446,3-z8c488,za14da))||z2b10f){za73d0=true;}}}
if(zb8017=="n"){
if((ze661a||z79993||z2b10f)&&((Math.abs(z8a349-z1ab69)==1&&Math.abs(z1316b-za38c6)==2)||(Math.abs(z8a349-z1ab69)==2&&Math.abs(z1316b-za38c6)==1)))za73d0=true;}
if(zb8017=="r"||zb8017=="q"){
if(ze661a||z79993||z2b10f){
var z7c193=z3a35b(z8a349-z1ab69);
var z65c9b=z3a35b(z1316b-za38c6);
if(z65c9b==0){
var i=z1ab69+z7c193;while(i!=z8a349){
if(zfb82d[i][za38c6]&&!z2b10f)break;i+=z7c193;}
if(i==z8a349)za73d0=true;}else
if(z7c193==0){
var j=za38c6+z65c9b;while(j!=z1316b){
if(zfb82d[z1ab69][j]&&!z2b10f)break;j+=z65c9b;}
if(j==z1316b)za73d0=true;}}}
if(zb8017=="b"||zb8017=="q"){
if(ze661a||z79993||z2b10f){
var z7c193=z3a35b(z8a349-z1ab69);
var z65c9b=z3a35b(z1316b-za38c6);
if(z7c193!=0&&z65c9b!=0&&Math.abs(z8a349-z1ab69)==Math.abs(z1316b-za38c6)){
var i=z1ab69+z7c193;
var j=za38c6+z65c9b;while(i!=z8a349&&j!=z1316b){
if(zfb82d[i][j]&&!z2b10f)break;i+=z7c193;j+=z65c9b;}
if(i==z8a349&&j==z1316b)za73d0=true;}}}
if(za73d0&&z1432e=="full"){this.zf5466(zea6ec,where,za14da,"",true);
var zef618=null;for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];{
if(z1efa8.type=="k"&&z1efa8.color==z8c488)zef618=z1efa8.zba125;}}
if(zef618)
if(this.z21214(zef618,3-z8c488,za14da))za73d0=false;this.z34d1b(zea6ec,where,za14da,"",true);}
var result=(za73d0)?{}:null;
if(result&&z4e2bd)result.z4e2bd=true;return result;},z77be0:function(){return "Wke1Wqd1Wra1Wrh1Wbc1Wbf1Wnb1Wng1Wpa2Wpb2Wpc2Wpd2Wpe2Wpf2Wpg2Wph2Bke8Bqd8Bra8Brh8Bbc8Bbf8Bnb8Bng8Bpa7Bpb7Bpc7Bpd7Bpe7Bpf7Bpg7Bph7";},z34d1b:function(zea6ec,where,za14da,z2ba00,z84c44){
if(!za14da.zca669.length)return;
var z83b73=za14da.z83b73.pop();
var zca669=za14da.zca669.pop();
var z6f1d0=za14da.z6f1d0.pop();
var zee076=za14da.zee076.pop();
var ze4319=za14da.ze4319.pop();
var from=zca669;
var move=from+where;za14da.areas[from].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=from;za14da.zad85d[zea6ec].type=z83b73;za14da.areas[where].zad85d.length=0;
if(z6f1d0)
if(za14da.zad85d[zea6ec].type=='p'&&zee076==where){}else{za14da.areas[where].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=where;}
if(this.z5f76d)return;
if(!z84c44){za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48--;}za14da.za429c["ep"]=zee076;
if(za14da.zad85d[zea6ec].type=="k"){
if(move=="e1g1")this.z34d1b(za14da.areas["f1"].zad85d[0],"f1",za14da,"",true);else
if(move=="e1c1")this.z34d1b(za14da.areas["d1"].zad85d[0],"d1",za14da,"",true);else
if(move=="e8g8")this.z34d1b(za14da.areas["f8"].zad85d[0],"f8",za14da,"",true);else
if(move=="e8c8")this.z34d1b(za14da.areas["d8"].zad85d[0],"d8",za14da,"",true);}else
if(za14da.zad85d[zea6ec].type=="p"){
if(zee076!="-"&&where==zee076&&z6f1d0){
var ze45e7=1*(zee076.substring(1));
if(za14da.zad85d[zea6ec].color==1)ze45e7--;else ze45e7++;
var z1b28d=zee076.substring(0,1)+ze45e7;za14da.areas[z1b28d].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=z1b28d;}}za14da.za429c["cs"]=ze4319;},zf5466:function(zea6ec,where,za14da,z2ba00,z84c44,text){
var from=za14da.zad85d[zea6ec].zba125;
var move=from+where;
var z79993=(za14da.areas[where].zad85d.length>0);
var z7367f=null;za14da.z83b73.push(za14da.zad85d[zea6ec].type);za14da.zca669.push(from);za14da.z6f1d0.push(za14da.areas[where].zad85d[0]);za14da.zee076.push(za14da.za429c["ep"]);za14da.ze4319.push(za14da.za429c["cs"]);
if(from)this.z550e4(from,za14da);this.z550e4(where,za14da);za14da.areas[where].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=where;
if(this.z5f76d)return;
if(!z84c44){za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48++;}
var zbbb3e=za14da.za429c["ep"];za14da.za429c["ep"]="-";
if(za14da.zad85d[zea6ec].type=="k"){
var z83b73=za14da.z83b73.pop();
var zca669=za14da.zca669.pop();
var z6f1d0=za14da.z6f1d0.pop();
var zee076=za14da.zee076.pop();
var ze4319=za14da.ze4319.pop();
if(move=="e1g1")this.zf5466(za14da.areas["h1"].zad85d[0],"f1",za14da,"",true);else
if(move=="e1c1")this.zf5466(za14da.areas["a1"].zad85d[0],"d1",za14da,"",true);else
if(move=="e8g8")this.zf5466(za14da.areas["h8"].zad85d[0],"f8",za14da,"",true);else
if(move=="e8c8")this.zf5466(za14da.areas["a8"].zad85d[0],"d8",za14da,"",true);za14da.z83b73.push(z83b73);za14da.zca669.push(zca669);za14da.z6f1d0.push(z6f1d0);za14da.zee076.push(zee076);za14da.ze4319.push(ze4319);}else
if(za14da.zad85d[zea6ec].type=="p"){
if(zbbb3e!="-"&&where==zbbb3e){
var ze45e7=1*(zbbb3e.substring(1));
if(za14da.zad85d[zea6ec].color==1)ze45e7--;else ze45e7++;
var z8f743=zbbb3e.substring(0,1)+ze45e7;za14da.z6f1d0.pop();za14da.z6f1d0.push(za14da.areas[z8f743].zad85d[0]);this.z550e4(z8f743,za14da);z79993=true;}
var z36c20=from.substring(1);
var z42ee4=where.substring(1);
if((za14da.zad85d[zea6ec].color==1&&z36c20==2&&z42ee4==4)||(za14da.zad85d[zea6ec].color==2&&z36c20==7&&z42ee4==5)){
var ze45e7=(za14da.zad85d[zea6ec].color==1)?3:6;
var z91493=where.substring(0,1)+ze45e7;za14da.za429c["ep"]=z91493;}
if((z42ee4==1&&za14da.zad85d[zea6ec].color==2)||(z42ee4==8&&za14da.zad85d[zea6ec].color==1)){z7367f="q";
if(z2ba00)z7367f=z2ba00;za14da.zad85d[zea6ec].type=z7367f;}}
var z2b47a=za14da.za429c["cs"];
if(z2b47a!="----"){
var z678c9=false;
var z55d00=false;
var zaacf5=false;
var z9f094=false;
if(za14da.zad85d[zea6ec].type=="k"){
if(za14da.zad85d[zea6ec].color==1){z678c9=true;z55d00=true;}else{zaacf5=true;z9f094=true;}}else
if(za14da.zad85d[zea6ec].type=="r"){
if(from=="h1")z678c9=true;else
if(from=="a1")z55d00=true;else
if(from=="h8")zaacf5=true;else
if(from=="a8")z9f094=true;}
if(z79993){
if(where=="h1")z678c9=true;else
if(where=="a1")z55d00=true;else
if(where=="h8")zaacf5=true;else
if(where=="a8")z9f094=true;}
if(z678c9)z2b47a=z2b47a.replace('k','-');
if(z55d00)z2b47a=z2b47a.replace('q','-');
if(zaacf5)z2b47a=z2b47a.replace('K','-');
if(z9f094)z2b47a=z2b47a.replace('Q','-');za14da.za429c["cs"]=z2b47a;}
if(text)alert("not implemented");},z21214:function(zcc2ef,z999fc,za14da){
var ze2a53=zcc2ef.charCodeAt(0)-96;
var zcbb79=zcc2ef.charCodeAt(1)-48;
var direction=z999fc==1?1:-1;
var zfb82d=this.zceef8(za14da);
var zea6ec;zea6ec=z63dd2(zfb82d,ze2a53-1,zcbb79-direction);
if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)return true;zea6ec=z63dd2(zfb82d,ze2a53+1,zcbb79-direction);
if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)return true;for(
var j=-1;j<=1;j++)for(
var i=-1;i<=1;i++)
if(i!=0||j!=0){zea6ec=z63dd2(zfb82d,ze2a53+i,zcbb79+j);
if(zea6ec&&za14da.zad85d[zea6ec].type=="k"&&za14da.zad85d[zea6ec].color==z999fc)return true;}for(
var i=0;i<8;i++){
var x;
var y;switch(i){case 0:x=1;y=-2;break;case 1:x=2;y=-1;break;case 2:x=2;y=1;break;case 3:x=1;y=2;break;case 4:x=-1;y=2;break;case 5:x=-2;y=1;break;case 6:x=-2;y=-1;break;case 7:x=-1;y=-2;}zea6ec=z63dd2(zfb82d,ze2a53+x,zcbb79+y);
if(zea6ec&&za14da.zad85d[zea6ec].type=="n"&&za14da.zad85d[zea6ec].color==z999fc)return true;}for(
var i=0;i<8;i++){
var x;
var y;switch(i){case 0:x=0;y=-1;break;case 1:x=1;y=-1;break;case 2:x=1;y=0;break;case 3:x=1;y=1;break;case 4:x=0;y=1;break;case 5:x=-1;y=1;break;case 6:x=-1;y=0;break;case 7:x=-1;y=-1;}
var cx=ze2a53;
var cy=zcbb79;while(true){cx+=x;cy+=y;
if(cx<1||cx>8||cy<1||cy>8)break;zea6ec=z63dd2(zfb82d,cx,cy);
if(zea6ec){
if(za14da.zad85d[zea6ec].color==z999fc){
var z02256=za14da.zad85d[zea6ec].type;
if(x==0||y==0){
if(z02256=="r"||z02256=="q"){return true;}}else{
if(z02256=="b"||z02256=="q"){return true;}}}break;}}}return false;},za8a58:function(z7834f){for(
var z1efa8 in z7834f.zad85d)
if(z7834f.zad85d[z1efa8].zba125){for(
var zba125 in z7834f.areas)
if(this.z31a2a(z1efa8,zba125,z7834f))return true;}return false;},z57ebf:function(z7834f){},zea856:function(zdd34b){this.z5f76d=zdd34b;}};z4654e=new z22e75.zde520();})();(function(){
if(typeof(z63dd2)=='undefined'){function z63dd2(array,x,y){
if(array[x])
if(array[x][y])return array[x][y];return null;}}
if(typeof(z3a35b)=='undefined'){function z3a35b(n){
if(n==0)return 0;else
if(n>0)return 1;else return-1;}}z22e75.zb6118=function(zba64d){
if(!zba64d)zba64d={};this.z4eb29=nvl(zba64d.z0f2c1,"full");this.za9bee=nvl(zba64d.z1432e,"full");this.ze829a='-';this.z9cc2a='-';this.z5b572=null;this.z5f76d=true;};z22e75.zb6118.prototype={z4cc87:z22e75.Base.prototype.z4cc87,z550e4:z22e75.Base.prototype.z550e4,z35e0a:function(z7834f){for(
var j=8;j>=1;j--)for(
var i=1;i<=8;i++){
var zb4f8d=(String.fromCharCode(96+i)+j);z7834f.z35c9f(zb4f8d);}},zceef8:function(za14da){
var zfb82d=new Array(9);for(
var i=1;i<=8;i++)zfb82d[i]=new Array(null,null,null,null,null,null,null,null,null);for(
var z0a1f1 in za14da.zad85d){{
var zb4f8d=za14da.zad85d[z0a1f1].zba125;
if(zb4f8d){
var ze6321=zb4f8d.charCodeAt(0)-96;
var zd09e0=zb4f8d.charCodeAt(1)-48;
if(ze6321>=1&&ze6321<=8&&zd09e0>=1&&zd09e0<=8)zfb82d[ze6321][zd09e0]=z0a1f1;}}}return zfb82d;},z16730:function(za14da){
if(this.z4eb29=="off"||this.z4eb29=="sideonly")return{};{
var z614e3=0;
var z94ba4=0;for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];
if(z1efa8.type=="k"&&z1efa8.zba125)
if(z1efa8.color==1)z614e3++;else
if(z1efa8.color==2)z94ba4++;}
if(z614e3!=1||z94ba4!=1)return null;}{for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];
if(z1efa8.type=="p"&&z1efa8.zba125){
var z524fd=z1efa8.zba125.charCodeAt(1)-48;
if(z524fd==1||z524fd==8)return null;}}}
if(this.z4eb29=="full"){
var z25bb2=za14da.za429c["sm"];
var zef618=null;for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];{
if(z1efa8.type=="k"&&z1efa8.color==3-z25bb2)zef618=z1efa8.zba125;}}
if(zef618)
if(this.z21214(zef618,z25bb2,za14da))return null;
var z2b47a=za14da.za429c['cs'];
var zee517=/[A-Ha-hKkQq\-]{4}/;
if(!z2b47a.match(zee517))return null;}return{};},z31a2a:function(zea6ec,where,za14da,zc7ecf){
var z1432e=zc7ecf?zc7ecf:this.za9bee;
if(this.z5f76d)return{};
var z25bb2=za14da.za429c["sm"];
var zc6329=za14da.za429c["cs"];
var z8c488=za14da.zad85d[zea6ec].color;
var zfb82d=this.zceef8(za14da);
var z04fd5=za14da.zad85d[zea6ec].zba125;
var z8e187=where;
var z1ab69=z04fd5.charCodeAt(0)-96;
var za38c6=z04fd5.charCodeAt(1)-48;
var z8a349=where.charCodeAt(0)-96;
var z1316b=where.charCodeAt(1)-48;
var zb8017=za14da.zad85d[zea6ec].type;
var ze661a=!zfb82d[z8a349][z1316b];
var z79993=zfb82d[z8a349][z1316b]&&(za14da.zad85d[zfb82d[z8a349][z1316b]].color!=z8c488);
var direction=z8c488==1?1:-1;
var za73d0=false;
var z4e2bd=false;
if(z1ab69==z8a349&&za38c6==z1316b){return null;}
if(z25bb2!=z8c488&&z1432e!="off")return null;
if(z1432e=="off"||z1432e=="sideonly"){
if(zb8017=="p")
if((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1))return{z4e2bd:true};return{};}
var z2b10f=(z1432e=="minimal");
if(zb8017=="p"){
if((z8a349==z1ab69)&&(z1316b==za38c6+direction)&&(ze661a||z2b10f))za73d0=true;else
if((z8a349==z1ab69)&&(z1316b==za38c6+direction+direction)&&(ze661a||z2b10f)&&(!zfb82d[z1ab69][za38c6+direction]||z2b10f)&&((z8c488==1&&za38c6==2)||(z8c488==2&&za38c6==7)))za73d0=true;else
if((z79993||z2b10f)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction))za73d0=true;else
if((ze661a)&&(Math.abs(z8a349-z1ab69)==1)&&(z1316b==za38c6+direction)&&where==za14da.za429c["ep"])za73d0=true;
if(za73d0&&((z1316b==1&&z8c488==2)||(z1316b==8&&z8c488==1)))z4e2bd=true;}
if(zb8017=="k"){
var z81a9b;
var z2c987;
var z7717f;
var z1a4ce;
var zeb348;
if(z8c488==1){for(
var n=1;n<=8;n++){
if(zfb82d[n][1]&&za14da.zad85d[zfb82d[n][1]].type=="k"&&za14da.zad85d[zfb82d[n][1]].color==1){z1a4ce=n;break;}}for(
var n=1;n<=8;n++){
if(zfb82d[n][1]&&za14da.zad85d[zfb82d[n][1]].type=="r"&&za14da.zad85d[zfb82d[n][1]].color==1){
if(!z7717f&&n<z1a4ce)z7717f=n;
if(!zeb348&&n>z1a4ce)zeb348=n;}}z81a9b=(zc6329.charAt(0)!='-'||z2b10f);z2c987=(zc6329.charAt(1)!='-'||z2b10f);for(
var n=1;n<zc6329.length;n++){charCode=zc6329.charCodeAt(n);
if(charCode>=97&&charCode<=104)
if(charCode-96<z1a4ce)z7717f=charCode-96;else zeb348=charCode-96;}}else{for(
var n=1;n<=8;n++){
if(zfb82d[n][8]&&za14da.zad85d[zfb82d[n][8]].type=="k"&&za14da.zad85d[zfb82d[n][8]].color==2){z1a4ce=n;break;}}for(
var n=1;n<=8;n++){
if(zfb82d[n][8]&&za14da.zad85d[zfb82d[n][8]].type=="r"&&za14da.zad85d[zfb82d[n][8]].color==2){
if(!z7717f&&n<z1a4ce)z7717f=n;
if(!zeb348&&n>z1a4ce)zeb348=n;}}z81a9b=(zc6329.charAt(2)!='-'||z2b10f);z2c987=(zc6329.charAt(3)!='-'||z2b10f);for(
var n=1;n<zc6329.length;n++){charCode=zc6329.charCodeAt(n);
if(charCode>=65&&charCode<=72)
if(charCode-64<z1a4ce)z7717f=charCode-64;else zeb348=charCode-64;}}
var za591e=z8a349;
if((Math.abs(z8a349-z1ab69)>1)&&((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))){
if(z8a349<z1ab69){z8a349=z7717f?z7717f:z8a349;where=String.fromCharCode(96+z8a349)+(z8c488==1?"1":"8");}else{z8a349=zeb348?zeb348:z8a349;where=String.fromCharCode(96+z8a349)+(z8c488==1?"1":"8");}}
if((Math.abs(za591e-z1ab69)<=1)&&(Math.abs(z1316b-za38c6)<=1)&&(ze661a||z79993||z2b10f))za73d0=true;else
if(((z8c488==1&&za38c6==1&&z1316b==1)||(z8c488==2&&za38c6==8&&z1316b==8))&&((z8a349==zeb348&&z81a9b)||(z8a349==z7717f&&z2c987))&&(za14da.zad85d[zfb82d[z8a349][z1316b]]&&za14da.zad85d[zfb82d[z8a349][z1316b]].type=="r"&&za14da.zad85d[zfb82d[z8a349][z1316b]].color==z8c488)){
var z997c2,z76564;
if(z8a349==z7717f){z997c2=Math.min(za591e,Math.min(Math.min(z1ab69,z8a349),3));z76564=Math.max(za591e,Math.max(Math.max(z1ab69,z8a349),4));}else
if(z8a349==zeb348){z997c2=Math.min(za591e,Math.min(Math.min(z1ab69,z8a349),6));z76564=Math.max(za591e,Math.max(Math.max(z1ab69,z8a349),7));}
var zf077c=z8c488==1?1:8;
var z29a12=false;for(
var n=z997c2;n<=z76564;n++){
if(zfb82d[n][zf077c]){
var z1efa8=za14da.zad85d[zfb82d[n][zf077c]];
if(zfb82d[n][zf077c]!=zea6ec&&z1efa8.zba125!=where)z29a12=true;else
if(z1efa8.color!=z8c488)z74486=true;}}
var z63b48,zfc4f1;
if(z8a349==z7717f){z63b48=Math.min(z1a4ce,3);zfc4f1=Math.max(z1a4ce,3);}else
if(z8a349==zeb348){z63b48=Math.min(z1a4ce,7);zfc4f1=Math.max(z1a4ce,7);}
var z34653=false;for(
var n=z63b48;n<=zfc4f1;n++){
if(this.z21214(String.fromCharCode(96+n)+String(zf077c),3-z8c488,za14da))z34653=true;}
if(!z29a12&&!z34653)za73d0=true;}}
if(zb8017=="n"){
if((ze661a||z79993||z2b10f)&&((Math.abs(z8a349-z1ab69)==1&&Math.abs(z1316b-za38c6)==2)||(Math.abs(z8a349-z1ab69)==2&&Math.abs(z1316b-za38c6)==1)))za73d0=true;}
if(zb8017=="r"||zb8017=="q"){
if(ze661a||z79993||z2b10f){
var z7c193=z3a35b(z8a349-z1ab69);
var z65c9b=z3a35b(z1316b-za38c6);
if(z65c9b==0){
var i=z1ab69+z7c193;while(i!=z8a349){
if(zfb82d[i][za38c6]&&!z2b10f)break;i+=z7c193;}
if(i==z8a349)za73d0=true;}else
if(z7c193==0){
var j=za38c6+z65c9b;while(j!=z1316b){
if(zfb82d[z1ab69][j]&&!z2b10f)break;j+=z65c9b;}
if(j==z1316b)za73d0=true;}}}
if(zb8017=="b"||zb8017=="q"){
if(ze661a||z79993||z2b10f){
var z7c193=z3a35b(z8a349-z1ab69);
var z65c9b=z3a35b(z1316b-za38c6);
if(z7c193!=0&&z65c9b!=0&&Math.abs(z8a349-z1ab69)==Math.abs(z1316b-za38c6)){
var i=z1ab69+z7c193;
var j=za38c6+z65c9b;while(i!=z8a349&&j!=z1316b){
if(zfb82d[i][j]&&!z2b10f)break;i+=z7c193;j+=z65c9b;}
if(i==z8a349&&j==z1316b)za73d0=true;}}}
if(za73d0&&z1432e=="full"){this.zf5466(zea6ec,z8e187,za14da,"",true);
var zef618=null;for(
var z0a1f1 in za14da.zad85d){
var z1efa8=za14da.zad85d[z0a1f1];{
if(z1efa8.type=="k"&&z1efa8.color==z8c488)zef618=z1efa8.zba125;}}
if(zef618)
if(this.z21214(zef618,3-z8c488,za14da))za73d0=false;this.z34d1b(zea6ec,z8e187,za14da,"",true);}
var result=(za73d0)?{}:null;
if(result&&z4e2bd)result.z4e2bd=true;return result;},z77be0:function(){return "Wke1Wqd1Wra1Wrh1Wbc1Wbf1Wnb1Wng1Wpa2Wpb2Wpc2Wpd2Wpe2Wpf2Wpg2Wph2Bke8Bqd8Bra8Brh8Bbc8Bbf8Bnb8Bng8Bpa7Bpb7Bpc7Bpd7Bpe7Bpf7Bpg7Bph7";},z34d1b:function(zea6ec,where,za14da,z2ba00,z84c44){
if(!za14da.zca669.length)return;
var z83b73=za14da.z83b73.pop();
var zca669=za14da.zca669.pop();
var z6f1d0=za14da.z6f1d0.pop();
var zee076=za14da.zee076.pop();
var zaeff5=za14da.zaeff5.pop();
var ze4319=za14da.ze4319.pop();
var from=zca669;
var move=from+where;
if(!zaeff5){za14da.areas[from].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=from;za14da.zad85d[zea6ec].type=z83b73;za14da.areas[where].zad85d.length=0;
if(z6f1d0)
if(za14da.zad85d[zea6ec].type=='p'&&zee076==where){}else{za14da.areas[where].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=where;}}
if(this.z5f76d)return;
if(!z84c44){za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48--;}za14da.za429c["ep"]=zee076;
if(zaeff5){
if(where.charCodeAt(0)>from.charCodeAt(0)){
if(where.charAt(1)=='1'){
var z1d620=za14da.areas['f1'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['f1'].zad85d.length=0;za14da.areas['g1'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}else
if(where.charAt(1)=='8'){
var z1d620=za14da.areas['f8'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['f8'].zad85d.length=0;za14da.areas['g8'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}}else{
if(where.charAt(1)=='1'){
var z1d620=za14da.areas['d1'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['d1'].zad85d.length=0;za14da.areas['c1'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}else
if(where.charAt(1)=='8'){
var z1d620=za14da.areas['d8'].zad85d[0];za14da.areas[from].zad85d.length=0;za14da.areas[zaeff5].zad85d.length=0;za14da.areas['d8'].zad85d.length=0;za14da.areas['c8'].zad85d.length=0;za14da.zad85d[z1d620].zba125=zaeff5;za14da.areas[zaeff5].zad85d.push(z1d620);za14da.zad85d[zea6ec].zba125=zca669;za14da.areas[from].zad85d.push(zea6ec);}}}else
if(za14da.zad85d[zea6ec].type=="p"){
if(zee076!="-"&&where==zee076){
var ze45e7=1*(zee076.substring(1));
if(za14da.zad85d[zea6ec].color==1)ze45e7--;else ze45e7++;
var z1b28d=zee076.substring(0,1)+ze45e7;za14da.areas[z1b28d].zad85d.push(z6f1d0);za14da.zad85d[z6f1d0].zba125=z1b28d;}}za14da.za429c["cs"]=ze4319;},zf5466:function(zea6ec,where,za14da,z2ba00,z84c44,text){
var from=za14da.zad85d[zea6ec].zba125;
var move=from+where;
var z79993=(za14da.areas[where].zad85d.length>0);
var z011eb=null;
if(z79993)z011eb=za14da.zad85d[za14da.areas[where].zad85d[0]];
var z7367f=null;
var z301cc=(za14da.zad85d[zea6ec].type=="k"&&z79993&&z011eb.type=="r"&&z011eb.color==za14da.zad85d[zea6ec].color)&&from.charAt(1)==where.charAt(1)&&((from.charAt(1)=='1'&&za14da.zad85d[zea6ec].color==1)||(from.charAt(1)=='8'&&za14da.zad85d[zea6ec].color==2));
var z2b47a=za14da.za429c["cs"];
var zbe4c6=z2b47a.charAt(0);
var zf5d9b=z2b47a.charAt(1);
var z0d65a=z2b47a.charAt(2);
var z6d655=z2b47a.charAt(3);
var zf077c=za14da.zad85d[zea6ec].color==1?'1':'8';
var z5aab9=za14da.zad85d[zea6ec].color==1?zbe4c6:z0d65a;
var z50ffc=za14da.zad85d[zea6ec].color==1?zf5d9b:z6d655;
var ret={};
if(z5aab9.toLowerCase()=='k'){for(
var n=8;n>=1;n--){
if(za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d.length){
var z4c917=za14da.zad85d[za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d[0]];
if(z4c917.type=='r'&&z4c917.color==za14da.zad85d[zea6ec].color){z5aab9=String.fromCharCode(96+n);
if(z4c917.color==2)z5aab9=z5aab9.toUpperCase();break;}}}}
if(z50ffc.toLowerCase()=='q'){for(
var n=1;n<=8;n++){
if(za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d.length){
var z4c917=za14da.zad85d[za14da.areas[String.fromCharCode(96+n)+zf077c].zad85d[0]];
if(z4c917.type=='r'&&z4c917.color==za14da.zad85d[zea6ec].color){z50ffc=String.fromCharCode(96+n);
if(z4c917.color==2)z50ffc=z50ffc.toUpperCase();break;}}}}
if(!z301cc){z301cc=(za14da.zad85d[zea6ec].type=="k")&&(from.charAt(1)==where.charAt(1))&&((from.charAt(1)=='1'&&za14da.zad85d[zea6ec].color==1)||(from.charAt(1)=='8'&&za14da.zad85d[zea6ec].color==2))&&(Math.abs(from.charCodeAt(0)-where.charCodeAt(0))>1);
if(z301cc){z7bb35='-';
if(from.charCodeAt(0)>where.charCodeAt(0)){
if(za14da.zad85d[zea6ec].color==1){z7bb35=z50ffc;}else{z7bb35=z50ffc.toLowerCase();}}else{
if(za14da.zad85d[zea6ec].color==1){z7bb35=z5aab9;}else{z7bb35=z5aab9.toLowerCase();}}
if(z7bb35!='-'){where=z7bb35.toLowerCase()+where.charAt(1);
var move=from+where;
var z79993=(za14da.areas[where].zad85d.length>0);
var z011eb=null;
if(z79993)z011eb=za14da.zad85d[za14da.areas[where].zad85d[0]];}else{z301cc=false;}}}za14da.z83b73.push(za14da.zad85d[zea6ec].type);za14da.zca669.push(from);za14da.zaeff5.push(z301cc?where:null);za14da.z6f1d0.push(za14da.areas[where].zad85d[0]);za14da.zee076.push(za14da.za429c["ep"]);za14da.ze4319.push(za14da.za429c["cs"]);
if(from)this.z550e4(from,za14da);
if(!z301cc)this.z550e4(where,za14da);
if(!z301cc){za14da.areas[where].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125=where;}
if(this.z5f76d)return;
if(!z84c44){za14da.za429c["sm"]=3-za14da.za429c["sm"];za14da.z9ac48++;}
var zbbb3e=za14da.za429c["ep"];za14da.za429c["ep"]="-";
if(za14da.zad85d[zea6ec].type=="k"){
if(z301cc){
if(Number(where.charCodeAt(0))<Number(from.charCodeAt(0))){
if(za14da.zad85d[zea6ec].color==1){
var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('c1',za14da);za14da.areas['c1'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='c1';this.z550e4('d1',za14da);za14da.areas['d1'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='d1';ret.zbd834=from;ret.moveTo='c1';}else{
var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('c8',za14da);za14da.areas['c8'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='c8';this.z550e4('d8',za14da);za14da.areas['d8'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='d8';ret.zbd834=from;ret.moveTo='c8';}}else{
if(za14da.zad85d[zea6ec].color==1){
var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('g1',za14da);za14da.areas['g1'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='g1';this.z550e4('f1',za14da);za14da.areas['f1'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='f1';ret.zbd834=from;ret.moveTo='g1';}else{
var z1d620=za14da.areas[where].zad85d[0];this.z550e4(where,za14da);this.z550e4('g8',za14da);za14da.areas['g8'].zad85d.push(zea6ec);za14da.zad85d[zea6ec].zba125='g8';this.z550e4('f8',za14da);za14da.areas['f8'].zad85d.push(z1d620);za14da.zad85d[z1d620].zba125='f8';ret.zbd834=from;ret.moveTo='g8';}}}}else
if(za14da.zad85d[zea6ec].type=="p"){
if(zbbb3e!="-"&&where==zbbb3e){
var ze45e7=1*(zbbb3e.substring(1));
if(za14da.zad85d[zea6ec].color==1)ze45e7--;else ze45e7++;
var z8f743=zbbb3e.substring(0,1)+ze45e7;za14da.z6f1d0.pop();za14da.z6f1d0.push(za14da.areas[z8f743].zad85d[0]);this.z550e4(z8f743,za14da);z79993=true;}
var z36c20=from.substring(1);
var z42ee4=where.substring(1);
if((za14da.zad85d[zea6ec].color==1&&z36c20==2&&z42ee4==4)||(za14da.zad85d[zea6ec].color==2&&z36c20==7&&z42ee4==5)){
var ze45e7=(za14da.zad85d[zea6ec].color==1)?3:6;
var z91493=where.substring(0,1)+ze45e7;za14da.za429c["ep"]=z91493;}
if((z42ee4==1&&za14da.zad85d[zea6ec].color==2)||(z42ee4==8&&za14da.zad85d[zea6ec].color==1)){z7367f="q";
if(z2ba00)z7367f=z2ba00;za14da.zad85d[zea6ec].type=z7367f;}}
if(z2b47a!="----"){
if(za14da.zad85d[zea6ec].type=="k"){
if(za14da.zad85d[zea6ec].color==1){zbe4c6='-';zf5d9b='-';}else{z0d65a='-';z6d655='-';}z2b47a=zbe4c6+zf5d9b+z0d65a+z6d655;za14da.za429c["cs"]=z2b47a;}else
if(za14da.zad85d[zea6ec].type=="r"){
if(from==z5aab9+"1"){zbe4c6='-';zf5d9b=z50ffc;}else
if(from==z50ffc+"1"){zf5d9b='-';zbe4c6=z5aab9;}else
if(from==z5aab9.toLowerCase()+"8"){z0d65a='-';z6d655=z50ffc;}else
if(from==z50ffc.toLowerCase()+"8"){z6d655='-';z0d65a=z5aab9;}z2b47a=zbe4c6+zf5d9b+z0d65a+z6d655;za14da.za429c["cs"]=z2b47a;}}
if(text)alert("not implemented");return ret;},z21214:function(zcc2ef,z999fc,za14da){
var ze2a53=zcc2ef.charCodeAt(0)-96;
var zcbb79=zcc2ef.charCodeAt(1)-48;
var direction=z999fc==1?1:-1;
var zfb82d=this.zceef8(za14da);
var zea6ec;zea6ec=z63dd2(zfb82d,ze2a53-1,zcbb79-direction);
if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)return true;zea6ec=z63dd2(zfb82d,ze2a53+1,zcbb79-direction);
if(zea6ec&&za14da.zad85d[zea6ec].type=="p"&&za14da.zad85d[zea6ec].color==z999fc)return true;for(
var j=-1;j<=1;j++)for(
var i=-1;i<=1;i++)
if(i!=0||j!=0){zea6ec=z63dd2(zfb82d,ze2a53+i,zcbb79+j);
if(zea6ec&&za14da.zad85d[zea6ec].type=="k"&&za14da.zad85d[zea6ec].color==z999fc)return true;}for(
var i=0;i<8;i++){
var x;
var y;switch(i){case 0:x=1;y=-2;break;case 1:x=2;y=-1;break;case 2:x=2;y=1;break;case 3:x=1;y=2;break;case 4:x=-1;y=2;break;case 5:x=-2;y=1;break;case 6:x=-2;y=-1;break;case 7:x=-1;y=-2;}zea6ec=z63dd2(zfb82d,ze2a53+x,zcbb79+y);
if(zea6ec&&za14da.zad85d[zea6ec].type=="n"&&za14da.zad85d[zea6ec].color==z999fc)return true;}for(
var i=0;i<8;i++){
var x;
var y;switch(i){case 0:x=0;y=-1;break;case 1:x=1;y=-1;break;case 2:x=1;y=0;break;case 3:x=1;y=1;break;case 4:x=0;y=1;break;case 5:x=-1;y=1;break;case 6:x=-1;y=0;break;case 7:x=-1;y=-1;}
var cx=ze2a53;
var cy=zcbb79;while(true){cx+=x;cy+=y;
if(cx<1||cx>8||cy<1||cy>8)break;zea6ec=z63dd2(zfb82d,cx,cy);
if(zea6ec){
if(za14da.zad85d[zea6ec].color==z999fc){
var z02256=za14da.zad85d[zea6ec].type;
if(x==0||y==0){
if(z02256=="r"||z02256=="q"){return true;}}else{
if(z02256=="b"||z02256=="q"){return true;}}}break;}}}return false;},za8a58:function(z7834f){for(
var z1efa8 in z7834f.zad85d)
if(z7834f.zad85d[z1efa8].zba125){for(
var zba125 in z7834f.areas)
if(this.z31a2a(z1efa8,zba125,z7834f))return true;}return false;},z57ebf:function(z7834f){},zea856:function(zdd34b){this.z5f76d=zdd34b;}};z818ea=new z22e75.zb6118();})();(function(){
if(typeof(z51432)=='undefined'){z51432=function(z85d5d,z7834f,zba64d){this.z24280={};
if(typeof(z85d5d)=='string'){this.z85d5d=z85d5d;this.za31e4=document.getElementById(this.z85d5d);}else{this.z85d5d=z85d5d.id;this.za31e4=z85d5d;}myEvent.registerComponent(this.z85d5d);this.zba64d=zba64d?zba64d:{};
var z2b2ad;
var zd7ad1=this.za31e4.childNodes[0];
if(zd7ad1&&zd7ad1.data){z2b2ad=zd7ad1.data.replace(/^\s+/,'').replace(/\s+$/,'');
if(z2b2ad!="")this.zba64d=eval("("+z2b2ad+")");}this.z7834f=nvl(z7834f,new z7f42b());this.z89d98=z7834f;this.z074d9=true;this.z5cf37=[];this.z41465=[];this.z27781=[];this.z85663=null;this.z54f0b=[];this.ze48a7=null;this.zb2764=[];this.zc8bb2=[];this.z71bfd=[];this.z45ca2=[];this.z6fda2=[];this.z1c386=[];this.z983fb=[];this.zac5a8=[];this.ze4a2e=[];this.z5dfbd=false;this.z9a8ba=false;this.z4b834=false;this.z1386a=false;this.zbd74f=null;this.size=nvl(this.zba64d["size"],45);
if(this.zba64d['boardSize']!=null)this.size=this.zba64d['boardSize'];this.ze323a=nvl(this.zba64d["dragAndDrop"],false);this.z24380=nvl(this.zba64d["viewOnly"],!this.ze323a);this.z3553f=1;
if(this.zba64d['viewOnly']!=null)this.ze323a=!this.zba64d['viewOnly'];this.zba7a5=nvl(this.zba64d["colorScheme"],"blue");this.z70c6b=nvl(this.zba64d["pieceStyle"],"classic");this.z222be="left";this.z02e31=false;this.z06098=!this.z02e31;this.z6a56d=nvl(this.zba64d["boardCoords"],false);this.zc9441=typeof(ChessPiece3dInfo[this.z70c6b])!='undefined';this.z39b23=nvl(this.zba64d["showHoverSquare"],false);this.z094b2='#FFF';this.z95296='40';this.z05e2f=null;this.za3477=nvl(this.zba64d["rightClickMarkSquare"],false);this.z6e1fb=nvl(this.zba64d["rightClickDragPoints"],false);this.za9c5a="#7F7";this.z7e4c6=null;this.z7e7f8=null;this.z2839b=nvl(this.zba64d["gfxUrl"],Config["GfxUrl"]);this.ze9f06=null;this.ze3e39=null;this.zc82ad=this.z85d5d+"_styles";this.z6e731={};this.z36890=false;this.z01371=(/MSIE [56]\./.test(navigator.userAgent));this.ze16a5=0;this.ze70ad=0;this.za31e4.chessBoard=this;this.build();this.z02e31=nvl(this.zba64d["boardFlip"],false);this.z4a892=nvl(this.zba64d["moveAnimationSpeed"],"normal");this.z297a3={"normal":0.5,"slow":1.2,"fast":0.3,"live":0.5};this.z086e8=0;this.z80320=false;this.z05254={z8b200:function(z0a00a,size){
var z982f5=z0a00a.z982f5;
var z6234d=z0a00a.z6234d;
var z0db2a=z0a00a.z0db2a;
var z5e2dd=z0a00a.z5e2dd;
var z4761f='.png';
if(z982f5==z6234d&&z0db2a==z5e2dd)return null;
if(z982f5==(z6234d-1)&&z0db2a==(z5e2dd-2))return size+'/k-4'+z4761f;
if(z982f5==(z6234d-2)&&z0db2a==(z5e2dd-1))return size+'/k-3'+z4761f;
if(z982f5==(z6234d-2)&&z0db2a==(z5e2dd+1))return size+'/k-2'+z4761f;
if(z982f5==(z6234d-1)&&z0db2a==(z5e2dd+2))return size+'/k-1'+z4761f;
if(z982f5==(z6234d+1)&&z0db2a==(z5e2dd+2))return size+'/k-8'+z4761f;
if(z982f5==(z6234d+2)&&z0db2a==(z5e2dd+1))return size+'/k-7'+z4761f;
if(z982f5==(z6234d+2)&&z0db2a==(z5e2dd-1))return size+'/k-6'+z4761f;
if(z982f5==(z6234d+1)&&z0db2a==(z5e2dd-2))return size+'/k-5'+z4761f;
if(z0db2a==z5e2dd){
if(z982f5<z6234d){return size+'/r-'+((z6234d-z982f5)+1)+z4761f;}else{return size+'/l-'+((z982f5-z6234d)+1)+z4761f;}}
if(z982f5==z6234d){
if(z0db2a<z5e2dd){return size+'/d-'+((z5e2dd-z0db2a)+1)+z4761f;}else{return size+'/u-'+((z0db2a-z5e2dd)+1)+z4761f;}}
if(Math.abs(z982f5-z6234d)==Math.abs(z0db2a-z5e2dd)){
var length=Math.abs(z982f5-z6234d)+1;
if(z0db2a<z5e2dd&&z982f5<z6234d){return size+'/dr-'+length+z4761f;}else
if(z0db2a<z5e2dd&&z982f5>z6234d){return size+'/dl-'+length+z4761f;}else
if(z0db2a>z5e2dd&&z982f5<z6234d){return size+'/ur-'+length+z4761f;}else
if(z0db2a>z5e2dd&&z982f5>z6234d){return size+'/ul-'+length+z4761f;}}return null;}};
if(this.z6e1fb)this.z72aff();};z51432.prototype={refresh:function(){this.z7e4c6=this.z70c6b;this.z7e7f8=this.z02e31;this.zd50d7();for(
var n=0;n<this.z1c386.length;n++)this.z1c386[n](this);},z26766:function(node){
if(node.z6205b&&node.zb0082){this.z6700b();this.z567f7(node.z6205b);this.z567f7(node.zb0082);
if(node.z03a92.match(/^[a-h]x[a-h][63][\+\#]?$/)){
if(node.z03a92.substr(3,1)=='6')this.z567f7(node.zb0082.substr(0,1)+(Number(node.zb0082.substr(1,1))-1));else this.z567f7(node.zb0082.substr(0,1)+(Number(node.zb0082.substr(1,1))+1));}
if(node.z03a92.match(/^\O\-\O(\-\O)?[\+\#]?$/)){for(
var n=1;n<=8;n++){
var zba125=String.fromCharCode(96+n)+node.z6205b.substr(1,1);
if(!this.z7834f.areas[zba125].zad85d.length){this.z567f7(zba125);}else{
if(this.z7834f.zad85d[this.z7834f.areas[zba125].zad85d[0]].type=='r')this.z567f7(zba125);}}}for(
var n=0;n<this.z1c386.length;n++)this.z1c386[n](this);}},z1b466:function(z70c6b){this.z70c6b=z70c6b;this.zc9441=typeof(ChessPiece3dInfo[this.z70c6b])!='undefined';this.z2242c=null;this.zae745=null;
if(this.zc9441){
if(navigator.userAgent.indexOf('MSIE')==-1){this.za31e4.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';}else{
if(this.za31e4.parentNode.className.indexOf('loadboard')!=-1)this.za31e4.parentNode.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';else this.za31e4.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';}}else{this.za31e4.style.marginTop='0';}},z6609a:function(zba7a5){this.zba7a5=zba7a5;},zbf689:function(z6a56d){this.z6a56d=z6a56d;this.za31e4[(z6a56d?"addClassName":"removeClassName")]("chess_boardCoords");},z6700b:function(){
if(this.z2242c&&this.zae745&&this.z0e164==this.size)return;this.zae745="gif";this.z2242c=this.z2839b+"/chess/pieces/classic";
var zb74db=ChessPieceStyle[this.z70c6b];
if(!zb74db)return;
var z7c66b=null;
var z275c8=zb74db[""+this.size];
if(!z275c8||this.z01371){z275c8=zb74db["default"];z7c66b=this.z2839b+"/chess/pieces/"+this.z70c6b;}else{z7c66b=this.z2839b+"/chess/pieces/"+this.z70c6b+"/"+this.size;}
if(!z275c8||!z7c66b)return;this.zae745=z275c8;this.z2242c=z7c66b;},z2914c:function(){for(
var zba125 in this.z7834f.areas)this.z567f7(zba125);},z567f7:function(zdcd29){
var zba125=this.z7834f.areas[zdcd29];
var zcc2ef=this.z85d5d+"_"+zdcd29;
var zd3fbb=this.z24280["img_"+zcc2ef];
var z1efa8=null;
var p=zba125.zad85d[0];
if(p)z1efa8=this.z7834f.zad85d[p];
if(z1efa8){
var zb50ba=zdcd29.charCodeAt(0)-96;
var z524fd=zdcd29.charCodeAt(1)-48;
var zIndex=!this.z02e31?5+(8-z524fd):12-(8-z524fd);
if(!zd3fbb){
if(!this.z02e31){
var top=this.size*(8-z524fd);
var left=this.size*(zb50ba-1);}else{
var top=this.size*(z524fd-1);
var left=this.size*(8-zb50ba);}
var z03bd4=new StringBuffer().z2de8d('<img id="img_').z2de8d(zcc2ef).z2de8d('" class="').z2de8d(this.z85d5d).z2de8d('_piece chess_com_piece" style="position: absolute; top: ').z2de8d(top).z2de8d('px; left: ').z2de8d(left).z2de8d('px; margin: 0px; padding: 0px; display: none; width: ').z2de8d(this.size).z2de8d('px; height: ').z2de8d(this.size).z2de8d('px; z-index: ').z2de8d(zIndex).z2de8d(';" />').toString();insertContentAt(this.z44f8e,z03bd4,"top");
var z48f94=document.getElementById("img_"+zcc2ef);this.z24280["img_"+zcc2ef]=z48f94;
if(this.ze323a)Element.addClassName(z48f94,"chess_com_draggable");zd3fbb=this.z24280["img_"+zcc2ef];}
var z0ec84=this.z2242c+"/"+(z1efa8.color==1?"w":"b")+(z1efa8.type)+"."+this.zae745;zd3fbb.src=z0ec84;zd3fbb.style.zIndex=zIndex;
if(this.zc9441){zd3fbb.style.marginTop='-'+ChessPiece3dInfo[this.z70c6b][this.size][z1efa8.type]+'px';zd3fbb.style.height=(this.size+ChessPiece3dInfo[this.z70c6b][this.size][z1efa8.type])+'px';}else{zd3fbb.style.height=(this.size)+'px';zd3fbb.style.marginTop='0';}zd3fbb.style.display="block";}else{
if(zd3fbb){zd3fbb.style.display="none";}}},zd50d7:function(){
var zf4b12=this.za31e4;Element[(this.z02e31?"addClassName":"removeClassName")](zf4b12,"chess_boardFlipped");this.z6700b();
if(this.zba7a5!=this.z6a5f6)this.z4ec46(this.zba7a5);
if(this.z02e31!=this.z06098||this.z0e164!=this.size)this.zcaed5();
if(this.z0e164!=null&&this.z0e164!=this.size){this.z94f9e();}this.z2914c();
var z85d5d=this.z85d5d,z6a56d=this.z6a56d,z02e31=this.z02e31;
var s=this.z2242c+"/"+(this.z7834f.za429c["sm"]==1?"w":"b");document.getElementById(z85d5d+"_promotionq").src=s+"q."+this.zae745;document.getElementById(z85d5d+"_promotionn").src=s+"n."+this.zae745;document.getElementById(z85d5d+"_promotionr").src=s+"r."+this.zae745;document.getElementById(z85d5d+"_promotionb").src=s+"b."+this.zae745;
var classNames=[this.z85d5d+"_darkcoord1",this.z85d5d+"_lightcoord1",this.z85d5d+"_darkcoord2",this.z85d5d+"_lightcoord2"];
var styleRules={"digits1":{selector:"."+classNames[0]+","+"."+classNames[1],declaration:"display: "+((z02e31||!this.z6a56d)?"none":"block")+"!important; z-index: 2;"},"digits2":{selector:"."+classNames[2]+","+"."+classNames[3],declaration:"display: "+((!z02e31||!this.z6a56d)?"none":"block")+"!important; z-index: 2;"}};this.z8754f(styleRules);
if(this.z27781.length)this.z83a7b();
if(this.z41465.length)this.z76b02();this.z0e164=this.size;},z76b02:function(){for(
var n=0;n<this.z41465.length;n++){
var zcc2ef=this.z41465[n].id;
var zae1f8=this.z41465[n].element;
var zb50ba=zcc2ef.charCodeAt(0)-96;
var z524fd=zcc2ef.charCodeAt(1)-48;
if(this.z02e31){zb50ba=8-zb50ba;z524fd--;}else{z524fd=8-z524fd;zb50ba--;}
var top=this.size*z524fd;
var left=this.size*zb50ba;zae1f8.style.top=top+'px';zae1f8.style.left=left+'px';zae1f8.style.width=this.size+'px';zae1f8.style.height=this.size+'px';}},z8754f:function(zcdad6){
var z4fdca=this.zc82ad;
var sheet=css.getDynamicStyleSheet(z4fdca);
var za08ce=this.z6e731;for(
var key in zcdad6){
var z6cd72=za08ce[key];
if(z6cd72){css.removeCssRule(z6cd72[0],z6cd72[1],z4fdca);}
var z77816=css.insertCssRule(zcdad6[key].selector,zcdad6[key].declaration,z4fdca);za08ce[key]=[zcdad6[key].selector,zcdad6[key].declaration];}},zc4ec1:function(ze9f06,ze3e39){this.ze9f06=ze9f06;this.ze3e39=ze3e39;
var z85d5d=this.z85d5d;this.z8754f({"coordLightClass1":{selector:"."+z85d5d+"_lightcoord2",declaration:"color: "+ze3e39},"coordDarkClass1":{selector:"."+z85d5d+"_darkcoord2",declaration:"color: "+ze9f06},"coordLightClass2":{selector:"."+z85d5d+"_lightcoord1",declaration:"color: "+ze3e39},"coordDarkClass2":{selector:"."+z85d5d+"_darkcoord1",declaration:"color: "+ze9f06}});},z4ec46:function(scheme){this.z6a5f6=scheme;
if(ChessColorScheme[scheme]){
var ze3e39=ChessColorScheme[scheme][0];
var ze9f06=ChessColorScheme[scheme][1];this.zc4ec1(ze9f06,ze3e39);
var zd2b32=this.z2839b+'/chess/boards/'+ChessColorScheme[this.zba7a5][2]+'/'+this.size+ChessColorScheme[this.zba7a5][3];this.z44f8e.style.background='URL('+zd2b32+')';}else{this.zc4ec1("#ECECD7","#4D6D92");}},zcaed5:function(){
var i;
var j;
var size=this.size,z0c3d1=this.z24280,z02e31=this.z02e31,z85d5d=this.z85d5d;
var z7ec78=(!z02e31)?0:7;
var z4aea3=(!z02e31)?7:0;
var z6c064=(!z02e31)?7:0;
var z5ffc8=(!z02e31)?0:7;
var z88185=Math.round(size/4.5);for(
var z1a290=0;z1a290<8;z1a290++){i=(!z02e31)?z1a290:7-z1a290;for(
var z5950b=0;z5950b<8;z5950b++){j=(!z02e31)?z5950b:7-z5950b;
var zcc2ef=z85d5d+"_"+String.fromCharCode(97+z5950b)+(8-z1a290);
if(z0c3d1["img_"+zcc2ef]){
var zba3a2=z0c3d1["img_"+zcc2ef].style;zba3a2.left=(j*size)+"px";zba3a2.top=(i*size)+"px";zba3a2.width=(size)+"px";zba3a2.height=(size)+"px";}
if(z5950b==z7ec78||z5950b==z6c064){
var zac855=document.getElementById("digit_"+zcc2ef).style;zac855.fontSize=z88185+"px";zac855.top=(i*size)+'px';zac855.left=(j*size)+'px';zac855.width=(size-2)+"px";}
if(z1a290==z4aea3||z1a290==z5ffc8){
var z5cde5=document.getElementById("letter_"+zcc2ef).style;z5cde5.fontSize=z88185+"px";z5cde5.top=(i*size)+'px';z5cde5.left=(j*size)+'px';z5cde5.width=(size-2)+"px";z5cde5.marginTop=(size-z88185-3)+"px";}}}
var zd2b32=this.z2839b+'/chess/boards/'+ChessColorScheme[this.zba7a5][2]+'/'+this.size+ChessColorScheme[this.zba7a5][3];this.z44f8e.style.background='URL('+zd2b32+')';this.z06098=this.z02e31;},zae48c:function(obj,z8145f,z38e5f,z098d0){obj.z36890=true;
var z1ce37=obj.z85d5d+"_promotionarea";document.getElementById(z1ce37).style.display='block';obj.zd7dbb=obj;obj.z8145f=z8145f;obj.z7c0b1=z38e5f;obj.z80882=z098d0;},selectPromotionPiece:function(z02256){
var z1ce37=this.z85d5d+"_promotionarea";document.getElementById(z1ce37).style.display='none';this.z8145f(this.zd7dbb,z02256,this.z7c0b1,this.z80882);this.z36890=false;return false;},z94f9e:function(){
var size=this.size,z85d5d=this.z85d5d,za31e4=this.za31e4;za31e4.style.width=(size*8+2)+'px';za31e4.style.height=(size*8+2)+'px';
var z7c5f1=this.z44f8e.style;z7c5f1.width=(size*8)+"px";z7c5f1.height=(size*8)+"px";
var z08ec3=document.getElementById(z85d5d+"_promotionarea").style;z08ec3.left=(size*2.5)+"px";z08ec3.top=(size*1.5)+"px";z08ec3.width=(size*3)+"px";z08ec3.height=(size*3)+"px";
var zbf562=document.getElementById(z85d5d+"_promotionq").style;zbf562.left=(size*0.5)+"px";zbf562.top=(size*0.5)+"px";zbf562.width=(size)+"px";zbf562.height=(size)+"px";
var z83a90=document.getElementById(z85d5d+"_promotionn").style;z83a90.left=(size*1.5)+"px";z83a90.top=(size*0.5)+"px";z83a90.width=(size)+"px";z83a90.height=(size)+"px";
var z64c40=document.getElementById(z85d5d+"_promotionr").style;z64c40.left=(size*0.5)+"px";z64c40.top=(size*1.5)+"px";z64c40.width=(size)+"px";z64c40.height=(size)+"px";
var zb9462=document.getElementById(z85d5d+"_promotionb").style;zb9462.left=(size*1.5)+"px";zb9462.top=(size*1.5)+"px";zb9462.width=(size)+"px";zb9462.height=(size)+"px";
var zd2b32=this.z2839b+'/chess/boards/'+ChessColorScheme[this.zba7a5][2]+'/'+this.size+ChessColorScheme[this.zba7a5][3];this.z44f8e.style.background='URL('+zd2b32+')';
if(this.zc9441){
if(navigator.userAgent.indexOf('MSIE')==-1){this.za31e4.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';}else{
if(this.za31e4.parentNode.className.indexOf('loadboard')!=-1)this.za31e4.parentNode.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';else this.za31e4.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';}}else{this.za31e4.style.marginTop='0';}},build:function(){
var ze7973=this.z85d5d+"_boardarea";
var z85d5d=this.z85d5d;
var za31e4=this.za31e4;
var size=this.size;
var z02e31=this.z02e31;
var zd2b32=this.z2839b+'/chess/boards/'+ChessColorScheme[this.zba7a5][2]+'/'+this.size+ChessColorScheme[this.zba7a5][3];za31e4.style.width=(size*8+2)+'px';za31e4.style.height=(size*8+2)+'px';za31e4.style.border='1px solid #777';
if(this.zc9441){
if(navigator.userAgent.indexOf('MSIE')==-1){za31e4.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';}else{
if(za31e4.parentNode.className.indexOf('loadboard')!=-1)za31e4.parentNode.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';else za31e4.style.marginTop=ChessPiece3dInfo[this.z70c6b][this.size]['large']+'px';}}else{za31e4.style.marginTop='0';}insertContentAt(za31e4,'<div id="'+ze7973+'"'+' style="position: relative; margin: 0 auto; padding: 0px; border: 1px solid #333;'+' background: URL('+zd2b32+'); width: '+(this.size*8)+'px; height: '+(this.size*8)+'px;">'+'</div>',"top");
var z1ce37=z85d5d+"_promotionarea";
var z827a5=z85d5d+"_promotionq";
var zc01b2=z85d5d+"_promotionn";
var z1d620=z85d5d+"_promotionr";
var z3b9e6=z85d5d+"_promotionb";
var z44f8e=this.z44f8e=document.getElementById(ze7973);insertContentAt(z44f8e,'<div id="'+z1ce37+'"'+' style="position: absolute; display: none; z-Index: 20; margin: 0px; padding: 0px; background: #ffffff;'+' border: 1px solid #aaaaaa;'+' left: '+(size*2.5)+'px; top: '+(size*1.5)+'px;'+' width: '+(size*3)+'px; height: '+(size*3)+'px;">'+' <div style="font-size: 12px; top: 0px; width: 100%;">pawn&nbsp;promotion</div>'+' <img piece="q" id="'+z827a5+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: '+(size*0.5)+'px; top: '+(size*0.5)+'px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/>'+' <img piece="n" id="'+zc01b2+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: '+(size*1.5)+'px; top: '+(size*0.5)+'px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/>'+' <img piece="r" id="'+z1d620+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: '+(size*0.5)+'px; top: '+(size*1.5)+'px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/></a>'+' <img piece="b" id="'+z3b9e6+'"'+'  style="position: absolute; cursor: pointer; margin: 0px; left: '+(size*1.5)+'px; top: '+(size*1.5)+'px;'+'  width: '+(size)+'px; height: '+(size)+'px; border: 0px;"/>'+'</div>',"top");myEvent.observe(document.getElementById(z1ce37),"click",z36b44.zd47ba);
var z88185=Math.round(size/4.5);
var z7ec78=(!z02e31)?0:7;
var z4aea3=(!z02e31)?7:0;
var z6c064=(!z02e31)?7:0;
var z5ffc8=(!z02e31)?0:7;
var z29be8=[];for(
var z1a290=0;z1a290<8;z1a290++){
var i=(!z02e31)?z1a290:7-z1a290;for(
var z5950b=0;z5950b<8;z5950b++){
var j=(!z02e31)?z5950b:7-z5950b;
var zfd008=String.fromCharCode(97+z5950b);
var z7de5f=(8-z1a290);
var zcc2ef=z85d5d+"_"+zfd008+z7de5f;
var z5a069=(((i+j)%2)?"dark":"light");
var className=z85d5d+"_"+z5a069+"square "+z85d5d+"_square";
var z738d9=z85d5d+"_"+z5a069+"coord1";
var z20ac2=z85d5d+"_"+z5a069+"coord2";
var zf7808=((z5950b==z7ec78)?'<div id="digit_'+zcc2ef+'" class="'+z738d9+'" style="display: none; position: absolute; text-align: left; margin-left: 1px; margin-top: 1px; font-size: '+z88185+'px;">'+z7de5f+'</div>':'')+((z1a290==z4aea3)?'<div id="letter_'+zcc2ef+'" class="'+z738d9+'" style="display: none; position: absolute; text-align: right; margin-right: 1px; margin-top: '+(size-z88185-3)+'px; font-size: '+z88185+'px;">'+zfd008+'</div>':'')+((z5950b==z6c064)?'<div id="digit_'+zcc2ef+'" class="'+z20ac2+'" style="display: none; position: absolute; text-align: left; margin-left: 1px; margin-top: 1px; font-size: '+z88185+'px;">'+z7de5f+'</div>':'')+((z1a290==z5ffc8)?'<div id="letter_'+zcc2ef+'" class="'+z20ac2+'" style="display: none; position: absolute; text-align: right; margin-right: 1px; margin-top: '+(size-z88185-3)+'px; font-size: '+z88185+'px;">'+zfd008+'</div>':'')+'';z29be8.push(zf7808);}}insertContentAt(z44f8e,z29be8.join(""),"top");myEvent.observe(z44f8e,"mousedown",z36b44.z7e559);myEvent.observe(z44f8e,"click",z36b44.ze12d8);myEvent.observe(z44f8e,"contextmenu",z36b44.zfa052);},zb19c1:function(callback){for(
var n=0;n<this.z54f0b;n++){
if(this.z54f0b[n]==callback){this.z54f0b.splice(n,1);break;}}this.z54f0b[this.z54f0b.length]=callback;},zfaa7a:function(callback){for(
var n=0;n<this.zb2764;n++){
if(this.zb2764[n]==callback){this.zb2764.splice(n,1);break;}}this.zb2764[this.zb2764.length]=callback;},z90b73:function(callback){for(
var n=0;n<this.zc8bb2;n++){
if(this.zc8bb2[n]==callback){this.zc8bb2.splice(n,1);break;}}this.zc8bb2[this.zc8bb2.length]=callback;},z7aa82:function(callback){for(
var n=0;n<this.z71bfd;n++){
if(this.z71bfd[n]==callback){this.z71bfd.splice(n,1);break;}}this.z71bfd[this.z71bfd.length]=callback;},za2e11:function(callback){for(
var n=0;n<this.z45ca2;n++){
if(this.z45ca2[n]==callback){this.z45ca2.splice(n,1);break;}}this.z45ca2[this.z45ca2.length]=callback;},za3df6:function(callback){for(
var n=0;n<this.z6fda2;n++){
if(this.z6fda2[n]==callback){this.z6fda2.splice(n,1);break;}}this.z6fda2[this.z6fda2.length]=callback;},za562c:function(callback){for(
var n=0;n<this.z1c386;n++){
if(this.z1c386[n]==callback){this.z1c386.splice(n,1);break;}}this.z1c386[this.z1c386.length]=callback;},z1835f:function(callback){for(
var n=0;n<this.z983fb;n++){
if(this.z983fb[n]==callback){this.z983fb.splice(n,1);break;}}this.z983fb[this.z983fb.length]=callback;},zfa272:function(callback){for(
var n=0;n<this.zac5a8;n++){
if(this.zac5a8[n]==callback){this.zac5a8.splice(n,1);break;}}this.zac5a8[this.zac5a8.length]=callback;},z76ffd:function(callback){for(
var n=0;n<this.ze4a2e;n++){
if(this.ze4a2e[n]==callback){this.ze4a2e.splice(n,1);break;}}this.ze4a2e[this.ze4a2e.length]=callback;},z02ba7:function(zcc2ef,color){
var zb50ba=zcc2ef.charCodeAt(0)-96;
var z524fd=zcc2ef.charCodeAt(1)-48;
if(color!=null){
if(typeof(color)=='object'&&typeof(color.length)!='undefined')
if(color[0]==color[1])color=color[0];
var zae1f8=null;for(
var n=0;n<this.z41465.length;n++){
if(this.z41465[n].id==zcc2ef){zae1f8=this.z41465[n].element;break;}}
if(!zae1f8){zae1f8=document.createElement('div');zae1f8.style.position='absolute';zae1f8.style.zIndex='1';
if(zae1f8.style.filter!==undefined)zae1f8.style.filter='alpha(opacity=70);';else{
if(zae1f8.style.MozOpacity!==undefined){zae1f8.style.MozOpacity='0.70';}else{
if(zae1f8.style.opacity!==undefined)zae1f8.style.opacity='0.70';}}
if(this.z02e31){zb50ba=8-zb50ba;z524fd--;}else{z524fd=8-z524fd;zb50ba--;}
var top=this.size*z524fd;
var left=this.size*zb50ba;zae1f8.style.top=top+'px';zae1f8.style.left=left+'px';zae1f8.style.width=this.size+'px';zae1f8.style.height=this.size+'px';this.z41465[this.z41465.length]={id:zcc2ef,element:zae1f8};this.z44f8e.appendChild(zae1f8);}
if(typeof(color)=='object'&&typeof(color.length)!='undefined'){
var zb50ba=zcc2ef.substr(0,1);
var z524fd=zcc2ef.substr(1,1);
var zf0839=color[0];
if((zb50ba=='b'||zb50ba=='d'||zb50ba=='f'||zb50ba=='h')&&(z524fd=='2'||z524fd=='4'||z524fd=='6'||z524fd=='8'))zf0839=color[1];
if((zb50ba=='a'||zb50ba=='c'||zb50ba=='e'||zb50ba=='g')&&(z524fd=='1'||z524fd=='3'||z524fd=='5'||z524fd=='7'))zf0839=color[1];zae1f8.style.backgroundColor=zf0839;}else{zae1f8.style.backgroundColor=color;}}else{this.z7690c(zcc2ef);}},z7690c:function(zcc2ef){
var z44f8e=this.z44f8e;for(
var n=0;n<this.z41465.length;n++){
if(this.z41465[n].id==zcc2ef){z44f8e.removeChild(this.z41465[n].element);this.z41465[n].element=null;this.z41465.splice(n,1);break;}}},ze0cab:function(z6205b,zb0082,zba64d){
if(!zba64d)zba64d={};
var z631e1=this.z02e31?(8-(z6205b.charCodeAt(0)-96)):(z6205b.charCodeAt(0)-97);
var ze2b27=this.z02e31?(z6205b.charCodeAt(1)-49):(8-(z6205b.charCodeAt(1)-48));
var z9a822=this.z02e31?(8-(zb0082.charCodeAt(0)-96)):(zb0082.charCodeAt(0)-97);
var z81ce3=this.z02e31?(zb0082.charCodeAt(1)-49):(8-(zb0082.charCodeAt(1)-48));this.z5cf37.push(this.z074d9);this.setEnabled(false);
var ze626b=nvl(zba64d["animationSpeed"],z36b44.z72000.z69de0*this.z297a3[this.z4a892]);
var z6a34c=new Date().getTime();
var zd4aba=document.getElementById("img_"+this.z85d5d+"_"+z6205b);
var z87288=(navigator.userAgent.indexOf('MSIE')!=-1&&navigator.userAgent.indexOf('MSIE 8')==-1);
if((this.z086e8+(ze626b*1000*2))<z6a34c&&!this.z80320&&!z87288){this.z8abf0();
var ze4afe=z36b44.ze0dc1();ze4afe.ze8f55=ze626b;ze4afe.target=zd4aba;ze4afe.z84aa7=zd4aba.cloneNode(false);ze4afe.z4bed5=this.size*z631e1;ze4afe.zeb1c6=ze4afe.z4bed5;ze4afe.z6275a=this.size*ze2b27;ze4afe.z5d25f=ze4afe.z6275a;ze4afe.zba570=this.size*z9a822;ze4afe.z5f4b5=this.size*z81ce3;ze4afe.deltaX=ze4afe.zba570-ze4afe.z4bed5;ze4afe.deltaY=ze4afe.z5f4b5-ze4afe.z6275a;ze4afe.zc7563=this;ze4afe.zb21c6=z6205b;ze4afe.z6e688=zb0082;ze4afe.z56a67=zba64d["afterAnimation"]?zba64d["afterAnimation"]:null;ze4afe.target.style.display='none';
if(!z36b44.z72000.zd732d)z36b44.z72000.zd732d=document.getElementsByTagName('body')[0];z36b44.z72000.zd732d.appendChild(ze4afe.z84aa7);ze4afe.z84aa7.style.top=(this.ze70ad+(this.size*ze2b27))+'px';ze4afe.z84aa7.style.left=(this.ze16a5+(this.size*z631e1))+'px';
if(!z36b44.z72000.zbe1b6)z36b44.z72000.zbe1b6=setInterval(z36b44.z68107,z36b44.z72000.z8352a);this.z80320=true;}else{this.z68050();this.z65158(zba64d["afterAnimation"]?zba64d["afterAnimation"]:null,z6205b,zb0082,zd4aba,this.size*z631e1,this.size*ze2b27);this.z80320=false;}this.z086e8=z6a34c;return true;},z65158:function(z8a2a2,from,to,target,z4bed5,z6275a){this.setEnabled(this.z5cf37.pop());
var z93a29=this;
if(z8a2a2)setTimeout(function(){z8a2a2(z93a29,from,to,target,z4bed5,z6275a)},20);},z68050:function(){
var ret=false;for(
var n=0;n<z36b44.z7f400.length;n++){
var zea6c9=z36b44.z7f400[n];
if(zea6c9.zc7563==this){ret=true;document.getElementsByTagName('body')[0].removeChild(zea6c9.z84aa7);zea6c9.target.style.display='block';zea6c9.target.style.top=zea6c9.z5f4b5+'px';zea6c9.target.style.left=zea6c9.zba570+'px';this.z65158(zea6c9.z56a67,zea6c9.zb21c6,zea6c9.z6e688,zea6c9.target,zea6c9.z4bed5,zea6c9.z6275a);z36b44.z7f400.splice(n,1);n--;}}return ret;},setEnabled:function(zc2d78){this.z074d9=zc2d78;},z8abf0:function(){
var z2c91b=this.z44f8e;this.ze16a5=0;this.ze70ad=0;
var z87288=(navigator.userAgent.indexOf('MSIE')!=-1&&navigator.userAgent.indexOf('MSIE 8')==-1);
var zae073=(navigator.userAgent.indexOf('Gecko')!=-1);
var zc0225=(navigator.userAgent.indexOf('MSIE 8')!=-1);
var z521f5=(navigator.userAgent.indexOf('Opera')!=-1);
if(zc0225||z521f5){this.ze16a5=1;this.ze70ad=1;}
if(z87288)this.ze16a5=1;while(z2c91b){this.ze16a5+=z2c91b.offsetLeft;
if((zae073)&&z2c91b.style.borderLeftWidth)this.ze16a5+=parseInt(z2c91b.style.borderLeftWidth);this.ze70ad+=z2c91b.offsetTop;
if((zae073||z87288)&&z2c91b.style.borderTopWidth)this.ze70ad+=parseInt(z2c91b.style.borderTopWidth);
if(z2c91b.scrollTop)this.ze70ad-=z2c91b.scrollTop;
if(z2c91b.scrollLeft)this.ze16a5-=z2c91b.scrollLeft;z2c91b=z2c91b.offsetParent;
if(z2c91b&&(z2c91b.tagName=='BODY'||z2c91b.tagName=='HTML'))z2c91b=null;}},z72aff:function(){
var z81016=this.z2839b+'/chess/arrows/'+this.size+'/';
var ze8c8c=[];for(
var n=1;n<=8;n++){ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'k'+n+'.png';
if(n>1){ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'u-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'d-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'l-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'r-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'ul-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'ur-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'dl-'+n+'.png';ze8c8c.push(new Image());ze8c8c[ze8c8c.length-1].src=z81016+'dr-'+n+'.png';}}for(
var n=0;n<ze8c8c.length;n++)ze8c8c[n]=null;},z83a7b:function(){for(
var n=0;n<this.z27781.length;n++){
var z1c0fb=this.z27781[n];z1c0fb.z982f5=z1c0fb.z6205b.charCodeAt(0)-96;z1c0fb.z0db2a=z1c0fb.z6205b.charAt(1);z1c0fb.z6234d=z1c0fb.zb0082.charCodeAt(0)-96;z1c0fb.z5e2dd=z1c0fb.zb0082.charAt(1);
if(this.z02e31){z1c0fb.z982f5=9-z1c0fb.z982f5;z1c0fb.z6234d=9-z1c0fb.z6234d;}else{z1c0fb.z0db2a=9-z1c0fb.z0db2a;z1c0fb.z5e2dd=9-z1c0fb.z5e2dd;}z1c0fb.elem.style.top=((Math.min(z1c0fb.z0db2a,z1c0fb.z5e2dd)-1)*this.size)+'px';z1c0fb.elem.style.left=((Math.min(z1c0fb.z982f5,z1c0fb.z6234d)-1)*this.size)+'px';z1c0fb.z550f3=this.z05254.z8b200(z1c0fb,this.size);z1c0fb.elem.setAttribute('src',this.z2839b+'/chess/arrows/'+z1c0fb.z550f3);}},z6b510:function(){for(
var n=0;n<this.z27781.length;n++){this.z44f8e.removeChild(this.z27781[n].elem);this.z27781[n].elem=null;}this.z27781.length=0;for(
var n=0;n<this.z41465.length;n++){this.z44f8e.removeChild(this.z41465[n].element);this.z41465[n].element=null;}this.z41465.length=0;for(
var n=0;n<this.ze4a2e.length;n++)this.ze4a2e[n](this);}};}})();(function(){
if(typeof(z36b44)=='undefined'){z36b44={z72000:{z8352a:(navigator.userAgent.indexOf('MSIE')!=-1)?30:10,zbe1b6:null,z54aa9:function(pos){return(-Math.cos(pos*Math.PI)/2)+0.5;},z69de0:0.5,zd732d:null},z7f400:[],z92068:{z326bd:(navigator.userAgent.indexOf('MSIE 8')!=-1),z3dafa:null,za52be:null,x:0,y:0,z84efe:0,zc17fe:0,z4b8ec:0,z3407c:0,z8760a:0,z04ce2:0,delay:20,z32e03:true,zece39:0,zef3c2:0},ze0dc1:function(){z36b44.z7f400[z36b44.z7f400.length]={target:null,z4bed5:0,z6275a:0,zba570:0,z5f4b5:0,zeb1c6:0,z5d25f:0,deltaX:0,deltaY:0,ze8f55:z36b44.z72000.z69de0,zeb68e:null,z30c9d:null,zc7563:null,zb21c6:null,z6e688:null,z56a67:null};return z36b44.z7f400[z36b44.z7f400.length-1];},z68107:function(){
var z40a96=new Date().getTime();for(
var n=0;n<z36b44.z7f400.length;n++){
var zea6c9=z36b44.z7f400[n];
if(!zea6c9.zeb68e){zea6c9.zeb68e=z40a96;zea6c9.z30c9d=zea6c9.zeb68e+(zea6c9.ze8f55*1000);}
if(!zea6c9.z03df1){z36b44.z1649c(zea6c9,z40a96);}else{
if(!z36b44.z72000.zd732d)z36b44.z72000.zd732d=document.getElementsByTagName('body')[0];z36b44.z72000.zd732d.removeChild(zea6c9.z84aa7);zea6c9.target.style.display='block';zea6c9.target.style.top=zea6c9.z5f4b5+'px';zea6c9.target.style.left=zea6c9.zba570+'px';zea6c9.zc7563.z65158(zea6c9.z56a67,zea6c9.zb21c6,zea6c9.z6e688,zea6c9.target,zea6c9.z4bed5,zea6c9.z6275a);z36b44.z7f400.splice(n,1);n--;}}
if(!z36b44.z7f400.length){clearInterval(z36b44.z72000.zbe1b6);z36b44.z72000.zbe1b6=null;}},z1649c:function(zea6c9,z6a34c){
var z471ce=(z6a34c-zea6c9.zeb68e)/(zea6c9.z30c9d-zea6c9.zeb68e);
if(z471ce>1)z471ce=1;zea6c9.zeb1c6=zea6c9.z4bed5+(zea6c9.deltaX*z471ce);zea6c9.z5d25f=zea6c9.z6275a+(zea6c9.deltaY*z471ce);
if(z6a34c>zea6c9.z30c9d){zea6c9.z03df1=true;}else{zea6c9.z84aa7.style.top=(zea6c9.zc7563.ze70ad+zea6c9.z5d25f)+'px';zea6c9.z84aa7.style.left=(zea6c9.zc7563.ze16a5+zea6c9.zeb1c6)+'px';}},z7e559:function(e){
if(!e)e=window.event;
var z6490c=myEvent.findComponent(e);
var obj=z6490c?z6490c.chessBoard:null;
var target=myEvent.getTarget(e);
if(!obj||obj.z24380||(target.nodeName.toUpperCase()!='IMG'&&e.button!=2)){
if(obj.z27781.length)obj.z6b510();myEvent.preventDefault(e,true);return false;}
if((target.nodeName.toUpperCase()=='IMG'&&target.className=='chessBoardArrow')&&e.button!=2){
if(obj.z27781.length)obj.z6b510();myEvent.preventDefault(e,true);return false;}
if(obj.z36890)return false;obj.z8abf0();z36b44.z92068.z84efe=obj.ze16a5;z36b44.z92068.zc17fe=obj.ze16a5+(obj.size*8);z36b44.z92068.z4b8ec=obj.ze70ad;z36b44.z92068.z3407c=obj.ze70ad+(obj.size*8);z36b44.z92068.zece39=(document.documentElement.scrollLeft||document.body.scrollLeft);z36b44.z92068.zef3c2=(document.documentElement.scrollTop||document.body.scrollTop);
if(obj.z39b23&&obj.z05e2f==null){obj.z05e2f=document.createElement('div');obj.z05e2f.style.width=obj.size+'px';obj.z05e2f.style.height=obj.size+'px';obj.z05e2f.style.zIndex='4';obj.z05e2f.style.position='absolute';obj.z05e2f.style.background=obj.z094b2;
if(obj.z05e2f.style.filter!==undefined)obj.z05e2f.style.filter='alpha(opacity='+obj.z95296+');';else{
if(obj.z05e2f.style.MozOpacity!==undefined){obj.z05e2f.style.MozOpacity='0.'+obj.z95296;}else{
if(obj.z05e2f.style.opacity!==undefined)obj.z05e2f.style.opacity='0.'+obj.z95296;}}document.getElementById(obj.z85d5d+'_boardarea').appendChild(obj.z05e2f);}
if(!obj.z9a8ba&&e.button!=2){
if(obj.z27781.length){obj.z6b510();myEvent.preventDefault(e,true);return false;}obj.z5dfbd=false;obj.z9a8ba=false;obj.z4b834=false;z36b44.z92068.za52be=target;z36b44.z92068.z3dafa=obj;z36b44.z92068.za52be.style.zIndex='65';z36b44.z92068.z8760a=z36b44.z92068.za52be.style.top;z36b44.z92068.z04ce2=z36b44.z92068.za52be.style.left;
var pointer=myEvent.getPointXY(e);z36b44.z92068.x=pointer.x;z36b44.z92068.y=pointer.y;myEvent.observe(document,'mousemove',z36b44.z5f302);myEvent.observe(document,'mouseup',z36b44.zaa601);}else{
if(z36b44.z92068.za52be){z36b44.z92068.za52be.style.zIndex=5+Math.floor(parseInt(z36b44.z92068.z8760a)/obj.size);z36b44.z92068.za52be.style.top=z36b44.z92068.z8760a;z36b44.z92068.za52be.style.left=z36b44.z92068.z04ce2;}obj.z9a8ba=false;obj.z5dfbd=false;obj.z4b834=false;
if(obj.z6e1fb){
var pointer={x:e.pageX||(e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)),y:e.pageY||(e.clientY+(document.documentElement.scrollTop||document.body.scrollTop))};
if(pointer.x<obj.ze16a5)pointer.x=obj.ze16a5;
if(pointer.x>(obj.ze16a5+(obj.size*8)))pointer.x=(obj.ze16a5+(obj.size*8));
if(pointer.y<obj.ze70ad)pointer.y=obj.ze70ad;
if(pointer.y>(obj.ze70ad+(obj.size*8)))pointer.y=(obj.ze70ad+(obj.size*8));
var z8cbe4=(pointer.x-obj.ze16a5)-(obj.size/2);
var z7fab6=(pointer.y-obj.ze70ad)-(obj.size/2);
var zc706d=Math.floor((z8cbe4+obj.size/2)/obj.size)+1;
var za7028=Math.floor((z7fab6+obj.size/2)/obj.size)+1;
if((zc706d>0&&zc706d<=8)&&(za7028>0&&za7028<=8)){obj.zbd74f={z982f5:zc706d,z0db2a:za7028,z6234d:zc706d,z5e2dd:za7028,z550f3:null,elem:null};obj.z4b834=true;z36b44.z92068.z3dafa=obj;myEvent.observe(document,'mousemove',z36b44.z5f302);myEvent.observe(document,'mouseup',z36b44.zaa601);}}}myEvent.preventDefault(e,true);return false;},z5f302:function(e){
if(!e)e=window.event;
var obj=z36b44.z92068.z3dafa;
if((z36b44.z92068.z326bd&&z36b44.z92068.z32e03)||!z36b44.z92068.z326bd){
var pointer={x:e.pageX||(e.clientX+z36b44.z92068.zece39),y:e.pageY||(e.clientY+z36b44.z92068.zef3c2)};
var z8cbe4=z36b44.z92068.x;
var z7fab6=z36b44.z92068.y;
if(pointer.x>=z36b44.z92068.z84efe&&pointer.x<=z36b44.z92068.zc17fe)z8cbe4=(pointer.x-obj.ze16a5)-(obj.size/2);else z8cbe4=pointer.x<=z36b44.z92068.z84efe?(z36b44.z92068.z84efe-obj.ze16a5)-(obj.size/2):(z36b44.z92068.zc17fe-obj.ze16a5)-(obj.size/2);
if(pointer.y>=z36b44.z92068.z4b8ec&&pointer.y<=z36b44.z92068.z3407c)z7fab6=(pointer.y-obj.ze70ad)-(obj.size/2);else z7fab6=pointer.y<=z36b44.z92068.z4b8ec?(z36b44.z92068.z4b8ec-obj.ze70ad)-(obj.size/2):(z36b44.z92068.z3407c-obj.ze70ad)-(obj.size/2);
if(!obj.z4b834){
if(obj.z39b23){
var zc706d=Math.floor((z8cbe4+obj.size/2)/obj.size);
var za7028=Math.floor((z7fab6+obj.size/2)/obj.size);
if((zc706d<0||zc706d>=8)||(za7028<0||za7028>=8)){
if(obj.z05e2f.style.display=='block')obj.z05e2f.style.display='none';}else{obj.z05e2f.style.top=(za7028*obj.size)+'px';obj.z05e2f.style.left=(zc706d*obj.size)+'px';
if(obj.z05e2f.style.display=='none')obj.z05e2f.style.display='block';}}
if(Math.abs(z36b44.z92068.x-z8cbe4)>obj.z3553f){z36b44.z92068.x=z8cbe4;z36b44.z92068.za52be.style.left=z36b44.z92068.x+'px';}
if(Math.abs(z36b44.z92068.y-z7fab6)>obj.z3553f){z36b44.z92068.y=z7fab6;z36b44.z92068.za52be.style.top=z36b44.z92068.y+'px';}}else{
var zc706d=Math.floor((z8cbe4+obj.size/2)/obj.size)+1;
var za7028=Math.floor((z7fab6+obj.size/2)/obj.size)+1;
if((zc706d>0&&zc706d<=8)&&(za7028>0&&za7028<=8)){
if(!obj.zbd74f.elem){obj.zbd74f.z6234d=zc706d;obj.zbd74f.z5e2dd=za7028;obj.zbd74f.elem=document.createElement('img');obj.zbd74f.elem.className='chessBoardArrow';obj.zbd74f.elem.style.position='absolute';obj.zbd74f.elem.style.zIndex='15';obj.zbd74f.elem.style.top=((Math.min(obj.zbd74f.z0db2a,obj.zbd74f.z5e2dd)-1)*obj.size)+'px';obj.zbd74f.elem.style.left=((Math.min(obj.zbd74f.z982f5,obj.zbd74f.z6234d)-1)*obj.size)+'px';obj.zbd74f.z550f3=obj.z05254.z8b200(obj.zbd74f,obj.size);
if(obj.zbd74f.z550f3){obj.zbd74f.elem.setAttribute('src',obj.z2839b+'/chess/arrows/'+obj.zbd74f.z550f3);obj.zbd74f.elem.style.display='block';}else{obj.zbd74f.elem.style.display='none';}obj.z44f8e.appendChild(obj.zbd74f.elem);}else{obj.zbd74f.z6234d=zc706d;obj.zbd74f.z5e2dd=za7028;obj.zbd74f.elem.style.top=((Math.min(obj.zbd74f.z0db2a,obj.zbd74f.z5e2dd)-1)*obj.size)+'px';obj.zbd74f.elem.style.left=((Math.min(obj.zbd74f.z982f5,obj.zbd74f.z6234d)-1)*obj.size)+'px';obj.zbd74f.z550f3=obj.z05254.z8b200(obj.zbd74f,obj.size);
if(obj.zbd74f.z550f3){obj.zbd74f.elem.setAttribute('src',obj.z2839b+'/chess/arrows/'+obj.zbd74f.z550f3);obj.zbd74f.elem.style.display='block';}else{obj.zbd74f.elem.style.display='none';}}}}z36b44.z92068.z32e03=false;}else{setTimeout(function(){z36b44.z92068.z32e03=true;},z36b44.z92068.delay);}obj.z9a8ba=true;
if(typeof(e.preventDefault)=='function')e.preventDefault();e.returnValue=false;
if(typeof(e.stopPropagation)=='function')e.stopPropagation();e.cancelBubble=true;return false;},zaa601:function(e){
if(!e)e=window.event;
var obj=z36b44.z92068.z3dafa;
var target=myEvent.getTarget(e);myEvent.stopObserving(document,'mousemove',z36b44.z5f302);myEvent.stopObserving(document,'mouseup',z36b44.zaa601);
if(obj.z9a8ba){
var rows=[8,7,6,5,4,3,2,1];
var cols=["a","b","c","d","e","f","g","h"];
if(obj.z02e31){rows.reverse();cols.reverse();}
if(!obj.z4b834){
if(obj.z39b23&&obj.z05e2f!=null){obj.z05e2f.style.display='none';}
var z65a7b={top:myEvent.getPointXY(e).y-obj.ze70ad,left:myEvent.getPointXY(e).x-obj.ze16a5};
var zc706d=Math.floor(z65a7b.left/obj.size);
var za7028=Math.floor(z65a7b.top/obj.size);
if((zc706d<0||zc706d>=cols.length)||(za7028<0||za7028>=rows.length)){z36b44.z92068.za52be.style.zIndex=5+Math.floor(parseInt(z36b44.z92068.z8760a)/obj.size);z36b44.z92068.za52be.style.top=z36b44.z92068.z8760a;z36b44.z92068.za52be.style.left=z36b44.z92068.z04ce2;for(
var n=0;n<obj.zb2764.length;n++)obj.zb2764[n](obj,z36b44.z92068.za52be);obj.z9a8ba=false;myEvent.preventDefault(e,true);return false;}
if(obj.z36890){z36b44.z92068.za52be.style.zIndex=5+Math.floor(parseInt(z36b44.z92068.z8760a)/obj.size);z36b44.z92068.za52be.style.top=z36b44.z92068.z8760a;z36b44.z92068.za52be.style.left=z36b44.z92068.z04ce2;this.z9a8ba=false;myEvent.preventDefault(e,true);return false;}
var z54764=cols[zc706d]+rows[za7028];obj.z5dfbd=true;for(
var n=0;n<obj.z54f0b.length;n++)obj.z54f0b[n](obj,z36b44.z92068.za52be,z54764,e);z36b44.z92068.za52be.style.zIndex=5+Math.floor(parseInt(z36b44.z92068.z8760a)/obj.size);z36b44.z92068.za52be.style.top=z36b44.z92068.z8760a;z36b44.z92068.za52be.style.left=z36b44.z92068.z04ce2;obj.z9a8ba=false;myEvent.preventDefault(e);return false;}else{
if(obj.zbd74f.z550f3){
var z6205b=cols[obj.zbd74f.z982f5-1]+rows[obj.zbd74f.z0db2a-1];
var zb0082=cols[obj.zbd74f.z6234d-1]+rows[obj.zbd74f.z5e2dd-1];obj.z27781.push({z982f5:obj.zbd74f.z982f5,z6234d:obj.zbd74f.z6234d,z0db2a:obj.zbd74f.z0db2a,z6205b:z6205b,zb0082:zb0082,z5e2dd:obj.zbd74f.z5e2dd,elem:obj.zbd74f.elem,z550f3:obj.zbd74f.z550f3});obj.z1386a=true;for(
var n=0;n<obj.zac5a8.length;n++)obj.zac5a8[n](obj,obj.z27781[obj.z27781.length],true);}else{
if(obj.zbd74f.elem)obj.z44f8e.removeChild(obj.zbd74f.elem);
if(obj.zbd74f.z982f5==obj.zbd74f.z6234d&&obj.zbd74f.z0db2a==obj.zbd74f.z5e2dd){for(
var n=0;n<obj.z27781.length;n++){
if(obj.z27781[n].z6234d==obj.zbd74f.z982f5&&obj.z27781[n].z5e2dd==obj.zbd74f.z0db2a){for(
var a=0;a<obj.zac5a8.length;a++)obj.zac5a8[a](obj,obj.z27781[n],false);obj.z44f8e.removeChild(obj.z27781[n].elem);obj.z27781[n].elem=null;obj.z27781.splice(n,1);obj.z1386a=true;break;}}}}obj.zbd74f.elem=null;obj.zbd74f=null;obj.z4b834=false;obj.z9a8ba=false;myEvent.preventDefault(e);return false;}}else{
if(obj.z4b834){
if(obj.zbd74f.elem)obj.z44f8e.removeChild(obj.zbd74f.elem);
if(obj.zbd74f.z982f5==obj.zbd74f.z6234d&&obj.zbd74f.z0db2a==obj.zbd74f.z5e2dd){for(
var n=0;n<obj.z27781.length;n++){
if(obj.z27781[n].z6234d==obj.zbd74f.z982f5&&obj.z27781[n].z5e2dd==obj.zbd74f.z0db2a){for(
var a=0;a<obj.zac5a8.length;a++)obj.zac5a8[a](obj,obj.z27781[n],false);obj.z44f8e.removeChild(obj.z27781[n].elem);obj.z27781[n].elem=null;obj.z27781.splice(n,1);obj.z1386a=true;break;}}}obj.zbd74f.elem=null;obj.zbd74f=null;obj.z4b834=false;obj.z9a8ba=false;myEvent.preventDefault(e);return false;}}return false;},zf3760:function(e){
if(!e)e=window.event;
var z6490c=myEvent.findComponent(e);
var obj=z6490c?z6490c.chessBoard:null;obj.z8abf0();
if(obj.z36890)return false;
if(e.button==2){z36b44.z6ad5c(e);myEvent.preventDefault(e,true);return false;}
var z02e31=obj.z02e31;
var rows=[8,7,6,5,4,3,2,1];
var cols=["a","b","c","d","e","f","g","h"];
if(z02e31){rows.reverse();cols.reverse();}
var z65a7b={top:myEvent.getPointXY(e).y-obj.ze70ad,left:myEvent.getPointXY(e).x-obj.ze16a5};
var zc706d=Math.floor(z65a7b.left/obj.size);
var za7028=Math.floor(z65a7b.top/obj.size);
if((zc706d<0||zc706d>=cols.length)||(za7028<0||za7028>=rows.length)){return false;}
var z54764=cols[zc706d]+rows[za7028];for(
var n=0;n<obj.z71bfd.length;n++)obj.z71bfd[n](obj,z54764);return false;},ze12d8:function(e){
if(!e)e=window.event;
var z6490c=myEvent.findComponent(e);
var obj=z6490c?z6490c.chessBoard:null;
var target=myEvent.getTarget(e);
if(obj.z24380){myEvent.preventDefault(e,true);return false;}
if(target.nodeName.toUpperCase()!='IMG'){z36b44.zf3760(e);myEvent.preventDefault(e,true);return false;}else{
if(target.className=='chessBoardArrow'){z36b44.zf3760(e);myEvent.preventDefault(e,true);return false;}}
if(e.button==2){z36b44.z35fb4(e);myEvent.preventDefault(e,true);return false;}target.style.zIndex=5+Math.floor(parseInt(target.style.top)/obj.size);
if(obj.z5dfbd){obj.z5dfbd=false;myEvent.preventDefault(e,true);return false;}
if(obj.z36890){myEvent.preventDefault(e,true);return false;}for(
var n=0;n<obj.zc8bb2.length;n++)obj.zc8bb2[n](obj,target);myEvent.preventDefault(e,true);return false;},z6ad5c:function(e){
if(!e)e=window.event;
var z6490c=myEvent.findComponent(e);
var obj=z6490c?z6490c.chessBoard:null;
if(obj.z24380||obj.z1386a){obj.z1386a=false;myEvent.preventDefault(e,true);return false;}obj.z8abf0();
if(obj.z36890)return false;
var z02e31=obj.z02e31;
var rows=[8,7,6,5,4,3,2,1];
var cols=["a","b","c","d","e","f","g","h"];
if(z02e31){rows.reverse();cols.reverse();}
var z65a7b={top:myEvent.getPointXY(e).y-obj.ze70ad,left:myEvent.getPointXY(e).x-obj.ze16a5};
var zc706d=Math.floor(z65a7b.left/obj.size);
var za7028=Math.floor(z65a7b.top/obj.size);
if((zc706d<0||zc706d>=cols.length)||(za7028<0||za7028>=rows.length)){return false;}
var z54764=cols[zc706d]+rows[za7028];
if(obj.za3477){
var unmark=false;for(
var n=0;n<obj.z41465.length;n++){
if(obj.z41465[n].id==z54764){unmark=true;break;}}
if(unmark)obj.z7690c(z54764);else obj.z02ba7(z54764,obj.za9c5a);for(
var n=0;n<obj.z983fb.length;n++)obj.z983fb[n](obj,z54764,!unmark);}else{for(
var n=0;n<obj.z6fda2.length;n++)obj.z6fda2[n](obj,z54764);}myEvent.preventDefault(e,true);return false;},zfa052:function(e){
if(!e)e=window.event;
var z6490c=myEvent.findComponent(e);
var obj=z6490c?z6490c.chessBoard:null;
var target=myEvent.getTarget(e);
if(obj.z24380||obj.z1386a){obj.z1386a=false;myEvent.preventDefault(e,true);return false;}
if(target.nodeName.toUpperCase()!='IMG'){z36b44.z6ad5c(e);myEvent.preventDefault(e,true);return false;}else{
if(target.className=='chessBoardArrow'){z36b44.z6ad5c(e);myEvent.preventDefault(e,true);return false;}}target.style.zIndex=5+Math.floor(parseInt(target.style.top)/obj.size);
if(obj.z5dfbd){obj.z5dfbd=false;myEvent.preventDefault(e,true);return false;}
if(obj.z36890){myEvent.preventDefault(e,true);return false;}
var z54764=target.id.substr(target.id.length-2,2);
if(obj.za3477){
var unmark=false;for(
var n=0;n<obj.z41465.length;n++){
if(obj.z41465[n].id==z54764){unmark=true;break;}}
if(unmark)obj.z7690c(z54764);else obj.z02ba7(z54764,obj.za9c5a);for(
var n=0;n<obj.z983fb.length;n++)obj.z983fb[n](obj,z54764,!unmark);}else{for(
var n=0;n<obj.z45ca2.length;n++)obj.z45ca2[n](obj,target);}myEvent.preventDefault(e,true);return false;},zd47ba:function(e){
if(!e)e=window.event;
var z6490c=myEvent.findComponent(e);
var obj=z6490c?z6490c.chessBoard:null;
var target=myEvent.getTarget(e);
var z1efa8=target.getAttribute("piece");
if(z1efa8)obj.selectPromotionPiece(z1efa8);myEvent.preventDefault(e,true);return false;}};}})();(function(){z2beb5=function(z85d5d,zabebd,zba64d){this.z85d5d=z85d5d;
if(this.z85d5d)this.za5bd9=document.getElementById(z85d5d);
if(this.za5bd9)this.za5bd9.z9b3d8=this;
if(this.z85d5d){myEvent.registerComponent(z85d5d);myEvent.registerRelated(z85d5d,zabebd);}this.z2737e=false;this.z0ed86=null;this.z1d3b0=null;this.zdbd90=null;this.z0cbd5=null;this.zb1781=null;this.zc119a=null;this.z5d606=null;this.zf241c=false;this.zc0972='gotomove';this.zb5f3c='gotomoveid';this.zfd91e=null;this.z4bd7e=null;this.z4fb61=null;this.zc9f2b=true;this.zef935=false;this.z68521=true;this.z2e5e5=[{id:"",zd1deb:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",z80123:"",z4549b:[]}];this.zd82a4=[];this.z52e1f=[];
if(typeof(window.z265d2)!='undefined')this.zf4cc5=z265d2;this.zdf569=this;this.z8ec4b=1;this.z193c4=false;this.z5dff4=null;this.z18d85=1;this.z3ac0a=0;this.zf310d=0;this.zfaf86=null;this.z912f4=function(){};this.z0552b=false;
if(zba64d["forwardButton1"]!=null)this.z0ed86=zba64d["forwardButton1"];
if(zba64d["forwardButton10"]!=null)this.z1d3b0=zba64d["forwardButton10"];
if(zba64d["forwardButtonEnd"]!=null)this.zdbd90=zba64d["forwardButtonEnd"];
if(zba64d["backwardButton1"]!=null)this.z0cbd5=zba64d["backwardButton1"];
if(zba64d["backwardButton10"]!=null)this.zb1781=zba64d["backwardButton10"];
if(zba64d["backwardButtonBegin"]!=null)this.zc119a=zba64d["backwardButtonBegin"];
if(zba64d["currentStateButton"]!=null)this.z5d606=zba64d["currentStateButton"];
if(zba64d["moveListItemClass"]!=null)this.zc0972=zba64d["moveListItemClass"];
if(zba64d["moveListItemPrefix"]!=null)this.zb5f3c=zba64d["moveListItemPrefix"];
if(zba64d["moveListVerticalStyle"]!=null)this.zc9f2b=zba64d["moveListVerticalStyle"];
if(zba64d["moveAnimation"]!=null)this.z0552b=zba64d["moveAnimation"];
if(zba64d["moveListCommentBox"]!=null)this.zfd91e=document.getElementById(zba64d["moveListCommentBox"]);
if(zba64d["moveListScoreBox"]!=null)this.z4bd7e=document.getElementById(zba64d["moveListScoreBox"]);
if(zba64d["moveListAlternateLinesBox"]!=null)this.z4fb61=document.getElementById(zba64d["moveListAlternateLinesBox"]);
if(zba64d["stripCommentsInMoveList"]!=null)this.zf241c=zba64d["stripCommentsInMoveList"];
if(zba64d["forceScrollIntoView"]!=null)this.zef935=zba64d["forceScrollIntoView"];
if(this.z0ed86){myEvent.registerRelated(this.z0ed86,this.z85d5d);myEvent.observe(document.getElementById(this.z0ed86),'click',z36b44.zb4d75);}
if(this.z1d3b0){myEvent.registerRelated(this.z1d3b0,this.z85d5d);myEvent.observe(document.getElementById(this.z1d3b0),'click',z36b44.z35f09);}
if(this.zdbd90){myEvent.registerRelated(this.zdbd90,this.z85d5d);myEvent.observe(document.getElementById(this.zdbd90),'click',z36b44.z53942);}
if(this.z0cbd5){myEvent.registerRelated(this.z0cbd5,this.z85d5d);myEvent.observe(document.getElementById(this.z0cbd5),'click',z36b44.z35765);}
if(this.zb1781){myEvent.registerRelated(this.zb1781,this.z85d5d);myEvent.observe(document.getElementById(this.zb1781),'click',z36b44.z5964e);}
if(this.zc119a){myEvent.registerRelated(this.zc119a,this.z85d5d);myEvent.observe(document.getElementById(this.zc119a),'click',z36b44.z08f7c);}
if(this.z5d606){myEvent.registerRelated(this.z5d606,this.z85d5d);myEvent.observe(document.getElementById(this.z5d606),'click',z36b44.z83ba0);}this.build();};z2beb5.prototype={build:function(){
if(this.za5bd9)this.za5bd9.innerHTML=this.zc9f2b?'':'<div class="notationHorizontal"></div>';},show:function(){
if(!this.z2737e&&this.za5bd9){for(
var n=1;n<this.z2e5e5.length;n++){
var z7da0b=n;
if(this.zc9f2b&&this.z193c4&&z7da0b==1){this.za25d2(z7da0b,true);this.zfaf86=this.z85d5d+'_'+this.zb5f3c+"_0_"+z7da0b;}
if((!this.z193c4&&z7da0b%2==1)||(this.z193c4&&z7da0b%2==0)){
var zc0532=this.z85d5d+'_'+this.zb5f3c+"_0_"+z7da0b;
var z6a50e=this.z85d5d+'_'+this.zb5f3c+"_0_"+(z7da0b+1);
if(this.zc9f2b){this.za25d2(z7da0b);}else{this.z2a854(z7da0b);for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z0fbf2(this.z2e5e5[n].z4549b[a]);this.z2e5e5[n].z4549b[a].show();}}
if(document.getElementById(zc0532))myEvent.observe(document.getElementById(zc0532),"click",z36b44.zdac62);this.zfaf86=z6a50e;}else{
if(!this.zc9f2b){this.z2a854(z7da0b);for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z0fbf2(this.z2e5e5[n].z4549b[a]);this.z2e5e5[n].z4549b[a].show();}}else{
if(document.getElementById(this.zfaf86)){
var z03a92=this.z2e5e5[z7da0b].z03a92;document.getElementById(this.zfaf86).appendChild(document.createTextNode(z03a92));}}
if(document.getElementById(this.zfaf86))myEvent.observe(document.getElementById(this.zfaf86),"click",z36b44.zdac62);}}this.z2737e=true;this.z6cc6c();this.zb35a2();this.zf8b47();}},z51f47:function(z3ff88,options){
var z103a1={};
if(this.zf4cc5)this.zf4cc5.parse(z3ff88,this,z103a1,options);return z103a1;},z22aa7:function(z103a1,z6ded3){
var result='';for(
var keys in z103a1)
if(z103a1[keys]&&typeof z103a1[keys]=="string")result+='['+keys+' "'+z103a1[keys]+'"]\n';result+='\n';
if(!this.z32e0f)
if(z103a1["Result"])this.z32e0f=z103a1["Result"];else this.z32e0f="*";
if(this.z2e5e5[0].z80123)result+='{ '+this.z2e5e5[0].z80123+' } ';for(
var n=1;n<this.z2e5e5.length;n++){
var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((n)/2):this.z8ec4b+Math.floor((n-1)/2);
var z03a92=this.z2e5e5[n].z03a92;
if(typeof(this.z2e5e5[n].zf98c9)!='undefined'){
var z37ac3=['','!','?','!!','??','!?','?!'];
if(this.z2e5e5[n].zf98c9>0&&this.z2e5e5[n].zf98c9<7)z03a92+=z6ded3?(' $'+this.z2e5e5[n].zf98c9):(z37ac3[this.z2e5e5[n].zf98c9]);}
var ze7273='';
if((n%2==1&&!this.z193c4)||(n%2==0&&this.z193c4)){ze7273=zb6aeb+'.';}else{
if(this.z2e5e5[n-1].z80123!=""||this.z2e5e5[n-1].z4549b.length||n==1){ze7273=zb6aeb+'...';}}result+=ze7273+z03a92+' ';
if(this.z2e5e5[n].z80123)result+='{ '+this.z2e5e5[n].z80123+' } ';
if(this.z2e5e5[n].z4549b.length){for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){result+='( ';result+=this.z2e5e5[n].z4549b[a].z22aa7(z6ded3);result+=') ';}}}return result+'\n'+this.z32e0f;},zfdbd6:function(z1208e){this.z2737e=z1208e;for(
var n=0;n<this.z2e5e5.length;n++){
if(this.z2e5e5[n].z4549b.length){for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z2e5e5[n].z4549b[a].zfdbd6(z1208e);}}}},zcf29e:function(){this.zfdbd6(false);this.build();this.show();
var zfb82d=myEvent.findRelated(this.z85d5d);obj=zfb82d?document.getElementById(zfb82d).chessBoard:null;
if(obj){z9689c(obj.z7834f,this.z33622());obj.refresh();
if(typeof(obj.zf2cab)=='function')obj.zf2cab();}},zae4ea:function(){this.z2e5e5.length=1;this.z2e5e5[0].z4549b=[];this.z3ac0a=0;this.zdf569=this;this.z18d85=1;},za25d2:function(z4dba9,z8f927){
var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z4dba9)/2):this.z8ec4b+Math.floor((z4dba9-1)/2);
var z03a92=this.z2e5e5[z4dba9].z03a92;
var zc0532=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;
var z6a50e=this.z85d5d+'_'+this.zb5f3c+"_0_"+(z4dba9+1);
var zf8540='class="notationVertical"';
if(zb6aeb%2==0)zf8540='class="notationVertical odd"';
var ze8ea1='';ze8ea1+='<div '+zf8540+'>';ze8ea1+='<span class="num">'+zb6aeb+'.</span>';
if(!z8f927){ze8ea1+='<span id="'+'movelist_'+z4dba9+'" class="'+((this.zdf569==this&&z4dba9==this.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+zc0532+'">'+z03a92+'</a>';ze8ea1+='</span>';ze8ea1+='<span id="'+'movelist_'+(z4dba9+1)+'" class="'+((this.zdf569==this&&(z4dba9+1)==this.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+z6a50e+'"></a>';ze8ea1+='</span>';}else{ze8ea1+='<span>';ze8ea1+='<a></a>';ze8ea1+='</span>';ze8ea1+='<span id="'+'movelist_'+(z4dba9)+'" class="'+((this.zdf569==this&&(z4dba9)==this.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+zc0532+'"></a>';ze8ea1+='</span>';}ze8ea1+='</div>';insertContentAt(this.za5bd9,ze8ea1,'bottom');},z2a854:function(z4dba9){
var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z4dba9)/2):this.z8ec4b+Math.floor((z4dba9-1)/2);
var z03a92=this.z2e5e5[z4dba9].z03a92;
if(typeof(this.z2e5e5[z4dba9].zf98c9)!='undefined'){
var z37ac3=['','!','?','!!','??','!?','?!'];
if(this.z2e5e5[z4dba9].zf98c9>0&&this.z2e5e5[z4dba9].zf98c9<7)z03a92+=z37ac3[this.z2e5e5[z4dba9].zf98c9];}
var ze8ea1='';
var ze7273='';
if((z4dba9%2==1&&!this.z193c4)||(z4dba9%2==0&&this.z193c4)){ze7273=zb6aeb+'.&nbsp;';}else{
if((this.z2e5e5[z4dba9-1].z80123!=""&&!this.zf241c)||this.z2e5e5[z4dba9-1].z4549b.length||z4dba9==1){ze7273=zb6aeb+'...&nbsp;';}}
if(!this.zf241c&&this.z2e5e5[0].z80123!=""&&z4dba9==1)ze8ea1+='<span class="moveListComment">'+this.z2e5e5[0].z80123+'</span>&nbsp;';ze8ea1+='<span id="'+'moveList_'+z4dba9+'" class="'+((this.zdf569==this&&z4dba9==this.z3ac0a)?'mhl':((this.zdf569==this&&this["focusNode"]==z4dba9)?'focusNode':''))+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9+'">'+((this["beginNode"]==z4dba9)?'[[':'')+ze7273+z03a92+((this["endNode"]==z4dba9)?']]':'')+'</a>';ze8ea1+='</span> ';
if(!this.zf241c&&this.z2e5e5[z4dba9].z80123!="")ze8ea1+='<span class="moveListComment">'+this.z2e5e5[z4dba9].z80123+'</span>&nbsp;';insertContentAt(this.za5bd9.firstChild,ze8ea1,'bottom');this.zfaf86=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;},zce2e4:function(z839fd){
var node=this.zdf569.z2e5e5[z839fd];
if(node){
var z88bb6=document.getElementById(node.id);
if(z88bb6){
var z102b1=this.zdf569==this;
var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z839fd)/2):this.z8ec4b+Math.floor((z839fd-1)/2);
var z03a92=node.z03a92;
if(typeof(node.zf98c9)!='undefined'){
var z37ac3=['','!','?','!!','??','!?','?!'];
if(node.zf98c9>0&&node.zf98c9<7)z03a92+=z37ac3[node.zf98c9];}
var ze7273='';
if((z839fd%2==1&&!this.z193c4)||(z839fd%2==0&&this.z193c4)){ze7273=zb6aeb+'. ';}else{
if(node.z80123!=""||this.zdf569.z2e5e5[z839fd-1].z4549b.length||z839fd==1){ze7273=zb6aeb+'... ';}}z88bb6.innerHTML=((z102b1&&this["beginNode"]==z839fd)?'[[':'')+ze7273+z03a92+((z102b1&&this["endNode"]==z839fd)?']]':'');z88bb6.parentNode.className=((z839fd==this.z3ac0a)?'mhl':((z102b1&&this["focusNode"]==z839fd)?'focusNode':''));}}},z0fbf2:function(z1a75f){
var z85d5d=z1a75f.z85d5d;
var ze8ea1="<span class='moveListAlternateLine'> ( <span id='"+z85d5d+"'></span> ) </span>";insertContentAt(this.za5bd9.firstChild,ze8ea1,'bottom');z1a75f.za5bd9=document.getElementById(z85d5d);},z669a9:function(zd1deb){this.z2e5e5[0].zd1deb=zd1deb;
var z13b6b=zd1deb.split(" ");this.z193c4=(z13b6b[1].toLowerCase()=='b')?true:false;
if(z13b6b[5]&&!isNaN(Number(z13b6b[5])))this.z8ec4b=Number(z13b6b[5]);},z67c68:function(z6205b,zb0082,z7834f,z2ba00,zcd559,zf5466,z80123,z969cd,zf20ab){
if(typeof(zf5466)=='undefined'||zf5466===null)zf5466=true;
if(typeof(z80123)=='undefined'||z80123===null)z80123='';
if(typeof(zf20ab)=='undefined'||zf20ab===null)zf20ab=true;
var z4dba9=this.z2e5e5.length;
var zb0fdf=z7834f.areas[zb0082].zad85d.length;
var z70602=z7834f.areas[z6205b].zad85d[0];
var z03a92=(typeof(z969cd)!='undefined'&&z969cd!==null)?z969cd:zd3860(z70602,z6205b,zb0082,z7834f,z2ba00,zcd559,zb0fdf);
var z962aa=zcd559.zf5466(z70602,zb0082,z7834f,z2ba00,false,null);
if(z962aa&&z962aa.zbd834){z6205b=z962aa.zbd834;zb0082=z962aa.moveTo;}this.z2e5e5[z4dba9]={id:this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9,zd1deb:zbb170(z7834f),z03a92:z03a92,z80123:z80123,z4549b:[],z6205b:z6205b,zb0082:zb0082};
if(!zf5466)zcd559.z34d1b(z70602,zb0082,z7834f,z2ba00,false);
if(this.z2737e&&zf20ab){
if(this.zc9f2b&&this.z193c4&&z4dba9==1){this.za25d2(z4dba9,true);this.zfaf86=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;}
if((!this.z193c4&&z4dba9%2==1)||(this.z193c4&&z4dba9%2==0)){
var zc0532=this.z85d5d+'_'+this.zb5f3c+"_0_"+z4dba9;
var z6a50e=this.z85d5d+'_'+this.zb5f3c+"_0_"+(z4dba9+1);
if(this.zc9f2b)this.za25d2(z4dba9);else this.z2a854(z4dba9);
if(document.getElementById(zc0532))myEvent.observe(document.getElementById(zc0532),"click",z36b44.zdac62);this.zfaf86=z6a50e;}else{
if(!this.zc9f2b){this.z2a854(z4dba9);}else{
if(document.getElementById(this.zfaf86)){
var z03a92=this.z2e5e5[z4dba9].z03a92;document.getElementById(this.zfaf86).appendChild(document.createTextNode(z03a92));}}
if(document.getElementById(this.zfaf86))myEvent.observe(document.getElementById(this.zfaf86),"click",z36b44.zdac62);}}},z0d62a:function(){this.z52e1f.length=0;for(
var n=0;n<=this.zf310d;n++){this.z52e1f[n]={id:this.z2e5e5[n].id,zd1deb:this.z2e5e5[n].zd1deb,z03a92:this.z2e5e5[n].z03a92,z80123:this.z2e5e5[n].z80123,z4549b:[],z6205b:this.z2e5e5[n].z6205b,zb0082:this.z2e5e5[n].zb0082};}},zb909d:function(){this.z2e5e5.length=0;for(
var n=0;n<this.z52e1f.length;n++){this.z2e5e5[n]={id:this.z52e1f[n].id,zd1deb:this.z52e1f[n].zd1deb,z03a92:this.z52e1f[n].z03a92,z80123:this.z52e1f[n].z80123,z4549b:[],z6205b:this.z52e1f[n].z6205b,zb0082:this.z52e1f[n].zb0082};}this.z52e1f.length=0;this.z669a9(this.z2e5e5[0].zd1deb);},z387a0:function(){
if(this.z52e1f.length){this.zb909d();this.zcf29e();}this.z77fdf(this.zf310d);},z77fdf:function(z839fd){
if(z839fd>=0&&z839fd<this.zdf569.z2e5e5.length){
var z95837=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);
if(z95837){
if(this.zdf569==this&&this["focusNode"]==this.z3ac0a)z95837.parentNode.className='focusNode';else z95837.parentNode.className='';}this.z3ac0a=Number(z839fd);z95837=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);
if(z95837&&z95837.firstChild){z95837.parentNode.className='mhl';}
if(this.z2737e)this.zd1584();this.z6cc6c();this.zb35a2();this.zf8b47();this.z912f4(this,this.id,this.z3ac0a);}},z6cc6c:function(){
if(this.zfd91e){
var z0e48f=this.zdf569.z2e5e5[this.z3ac0a].z80123;
var z03a92=this.zdf569.z2e5e5[this.z3ac0a].z03a92;
var zf98c9=this.zdf569.z2e5e5[this.z3ac0a].zf98c9;
var z80123=z0e48f;
if(this.z3ac0a==1&&this.zdf569!=this){
var zb40be=this.zdf569.z2e5e5[0].z80123;
if(zb40be){
var z80123=zb40be+' [<b>'+z03a92+'</b>] '+z80123;}}
if(zf98c9&&zf98c9>6){
var z83373=zb3fa3(zf98c9);
if(z80123)z80123="("+z83373+") "+z80123;else z80123=z83373;}this.zfd91e.innerHTML=z80123;}},zb35a2:function(){
if(this.z4bd7e){
var z1ab9e=this.zdf569.z2e5e5[this.z3ac0a].z9ca9d;
if(typeof(z1ab9e)!='string')z1ab9e='';
if(this.zdf569==this&&this.z3ac0a==0)z1ab9e='';this.z4bd7e.innerHTML=z1ab9e;}},zf8b47:function(){
if(this.z4fb61){
var zc59ce='';
if(this.zdf569!=this)zc59ce+='<input type="button" value="Main Line ^" id="'+this.z85d5d+'_goToMainLine" /> ';
if(this.zdf569.z2e5e5[this.z3ac0a].z4549b.length){zc59ce+='<input type="button" value="Main Line" id="'+this.z85d5d+'_goToNextMove" /> ';for(
var n=0;n<this.zdf569.z2e5e5[this.z3ac0a].z4549b.length;n++){
var z3920d=this.zdf569.z2e5e5[this.z3ac0a].z4549b[n];
var lineNumber=z3920d.z193c4?(z3920d.z8ec4b)+'... ':(z3920d.z8ec4b)+'. ';zc59ce+='<input type="button" value="'+lineNumber+z3920d.z2e5e5[1].z03a92+'" id="'+this.z85d5d+'_line_'+z3920d.id+'" /> ';}}this.z4fb61.innerHTML=zc59ce;
if(this.zdf569!=this){document.getElementById(this.z85d5d+'_goToMainLine').onclick=z36b44.z38d88;
if(!myEvent.findRelated(this.z85d5d+'_goToMainLine'))myEvent.registerRelated(this.z85d5d+'_goToMainLine',this.z85d5d);}
if(this.zdf569.z2e5e5[this.z3ac0a].z4549b.length){document.getElementById(this.z85d5d+'_goToNextMove').onclick=z36b44.zb4d75;
if(!myEvent.findRelated(this.z85d5d+'_goToNextMove'))myEvent.registerRelated(this.z85d5d+'_goToNextMove',this.z85d5d);for(
var n=0;n<this.zdf569.z2e5e5[this.z3ac0a].z4549b.length;n++){
var z3920d=this.zdf569.z2e5e5[this.z3ac0a].z4549b[n];document.getElementById(this.z85d5d+'_line_'+z3920d.id).onclick=z36b44.z5b735;
if(!myEvent.findRelated(this.z85d5d+'_line_'+z3920d.id))myEvent.registerRelated(this.z85d5d+'_line_'+z3920d.id,this.z85d5d);}}}},z2e6da:function(parent,zedde8){
var z839fd=(typeof(zedde8)=='number')?zedde8:parent.z2e5e5.length-1;parent.z2e5e5[z839fd].z4549b.push(new zf795a(this,parent,this.zf241c,z839fd));return parent.z2e5e5[z839fd].z4549b[parent.z2e5e5[z839fd].z4549b.length-1];},z8390c:function(za4f1f){
var z2204a=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);
if(z2204a){
if(this==this.zdf569&&this["focusNode"]==this.z3ac0a)z2204a.parentNode.className='focusNode';else z2204a.parentNode.className='';}this.z3ac0a=0;this.zdf569=za4f1f;},z9fde8:function(id){
var z2699f=Number(id);
var found=null;
if(z2699f!=0){
if(this.z2e5e5.length){for(
var n=0;n<this.z2e5e5.length;n++){for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){
if(this.z2e5e5[n].z4549b[a].id==z2699f)return this.z2e5e5[n].z4549b[a];else
if(found=this.z2e5e5[n].z4549b[a].z9fde8(z2699f))return found;}}}}else{return this;}return found;},zd1584:function(){
if(this.zc9f2b){
if(this.z3ac0a==0){this.za5bd9.scrollTop=0;}else{
var z45b73=this.z3ac0a-8;
if(z45b73<0)z45b73=0;this.za5bd9.scrollTop=(this.z3ac0a<=10)?0:((z45b73/this.z2e5e5.length)*this.za5bd9.scrollHeight);}}else{
var z2204a=document.getElementById(this.zdf569.z2e5e5[this.z3ac0a].id);
if(z2204a){
if(this.zef935)z2204a.scrollIntoView(false);}else{this.za5bd9.scrollTop='0';}}},z33622:function(){return this.zdf569.z2e5e5[this.z3ac0a].zd1deb;},zb5312:function(action,z7a142,z48e87){
var zfb82d=myEvent.findRelated(this.z85d5d);obj=zfb82d?document.getElementById(zfb82d).chessBoard:null;
var za6935=false;
if(obj){
if(obj.z36890)return;
if(obj.zc82e7){
if(obj.zf4e71){obj.zf4e71();return;}}
if(obj.z894ef){
if(obj.z894ef.length&&obj.za3376)obj.za3376();}}this.zd82a4.push(null);
if(action=="forward1"){
if(this.z3ac0a>=this.zdf569.z2e5e5.length-1)return;
if(this.zdf569==this&&this["endNode"]&&this.z3ac0a==this["endNode"])return;this.z77fdf(this.z3ac0a+1);this.zd82a4[this.zd82a4.length-1]=this.zdf569.z2e5e5[this.z3ac0a];
if(this.z0552b&&obj){
var from=this.zdf569.z2e5e5[this.z3ac0a].z6205b;
var to=this.zdf569.z2e5e5[this.z3ac0a].zb0082;obj.ze0cab(from,to,{'afterAnimation':this.zec5c7});za6935=true;}}else
if(action=="forward10"){
if(this.zdf569==this&&this["endNode"]&&this.z3ac0a<=this["endNode"]&&(this.z3ac0a+10)>=this["endNode"]){this.z77fdf(this["endNode"]);}else{
if(this.z3ac0a<=this.zdf569.z2e5e5.length-11)this.z77fdf(this.z3ac0a+10);else this.z77fdf(this.zdf569.z2e5e5.length-1);}}else
if(action=="forwardEnd"){
if(this.zdf569==this&&this["endNode"]&&this.z3ac0a<=this["endNode"])this.z77fdf(this["endNode"]);else this.z77fdf(this.zdf569.z2e5e5.length-1);}else
if(action=="backward1"){
if(this.zdf569==this&&this["beginNode"]&&this.z3ac0a==this["beginNode"])return;this.zd82a4[this.zd82a4.length-1]=this.zdf569.z2e5e5[this.z3ac0a];
if(this.z0552b&&obj){
if(this.zdf569.z2e5e5[this.z3ac0a].z6205b){
var from=this.zdf569.z2e5e5[this.z3ac0a].z6205b;
var to=this.zdf569.z2e5e5[this.z3ac0a].zb0082;obj.ze0cab(to,from,{'afterAnimation':this.zec5c7});za6935=true;}}
if(this.z3ac0a==1){
if(this.zdf569.z5dff4){
var zedde8=this.zdf569.z01196;this.z8390c(this.zdf569.z5dff4);this.z77fdf(zedde8);}else{
if(this.z3ac0a==0)return;}}this.z77fdf(this.z3ac0a-1);}else
if(action=="backward10"){
if(this.zdf569==this&&this["beginNode"]&&this.z3ac0a>=this["beginNode"]&&(this.z3ac0a-10)<=this["beginNode"]){this.z77fdf(this["beginNode"]);}else{
if(this.z3ac0a>=10)this.z77fdf(this.z3ac0a-10);else
if(this.zdf569.z5dff4)this.z77fdf(1);else this.z77fdf(0);}}else
if(action=="backwardBegin"){
if(this.zdf569==this&&this["beginNode"]&&this.z3ac0a>=this["beginNode"]){this.z77fdf(this["beginNode"]);}else{
if(this.zdf569.z5dff4){
if(this.z3ac0a==1){this.z8390c(this.zdf569.z5dff4);this.z77fdf(this.zdf569.z5dff4?1:0);}else{this.z77fdf(1);}}else{this.z77fdf(0);}}}else
if(action=="currentState"){this.z8390c(this);this.z387a0();}else
if(action=="toPly"){
if(isNaN(Number(z48e87)))z48e87=0;
if(typeof(this.zdf569.id)=='undefined'){
if(z48e87!=0)this.z8390c(this.z9fde8(z48e87));}else{
if(z48e87!=this.zdf569.id)this.z8390c(this.z9fde8(z48e87));}this.z77fdf(Number(z7a142));}else{return;}
if(obj)z9689c(obj.z7834f,this.z33622());
if(obj&&!za6935){z9689c(obj.z7834f,this.z33622());
var za7157=this.zd82a4.pop();
if(za7157)obj.z26766(za7157);else obj.refresh();
if(obj.zf2cab)obj.zf2cab();}},zec5c7:function(zfb82d,from,to,target,z4bed5,z6275a){
if(target){target.style.top=z6275a+'px';target.style.left=z4bed5+'px';}
var za7157=zfb82d.z9b3d8.zd82a4.pop();
if(za7157)zfb82d.z26766(za7157);else zfb82d.refresh();
if(zfb82d.zf2cab)zfb82d.zf2cab();zfb82d.z80320=false;}};})();(function(){zf795a=function(zdb20e,parent,zaa64d,zedde8){this.zbf03b=zdb20e;this.id=zdb20e.z18d85++;this.z85d5d=zdb20e.z85d5d+'_alternate_'+this.id;this.za5bd9=null;this.z5dff4=parent;this.z01196=(typeof(zedde8)=='number')?zedde8:parent.z2e5e5.length-1;this.z8ec4b=parent.z193c4?parent.z8ec4b+Math.floor((this.z01196)/2):parent.z8ec4b+Math.floor((this.z01196-1)/2);this.zc0972=zdb20e.zc0972;this.zb5f3c=zdb20e.zb5f3c;this.z2e5e5=[{id:'',zd1deb:'',z80123:'',z4549b:[]}];this.z2737e=false;this.z193c4=parent.z193c4?((this.z01196+1)%2==0):((this.z01196+1)%2==1);this.zf241c=zaa64d;};zf795a.prototype={zfdbd6:function(z1208e){this.z2737e=z1208e;for(
var n=0;n<this.z2e5e5.length;n++){
if(this.z2e5e5[n].z4549b.length){for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z2e5e5[n].z4549b[a].zfdbd6(z1208e);}}}},show:function(){
if(!this.z2737e&&this.za5bd9){for(
var n=1;n<this.z2e5e5.length;n++){
var ze8118=this.z85d5d+'_'+this.zb5f3c+"_"+this.id+'_'+n;this.z2a854(n);
if(document.getElementById(ze8118))myEvent.observe(document.getElementById(ze8118),"click",z36b44.zdac62);for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){this.z0fbf2(this.z2e5e5[n].z4549b[a]);this.z2e5e5[n].z4549b[a].show();}}this.z2737e=true;}},z2a854:function(z4dba9){
var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((z4dba9)/2):this.z8ec4b+Math.floor((z4dba9)/2);
var z03a92=this.z2e5e5[z4dba9].z03a92;
if(typeof(this.z2e5e5[z4dba9].zf98c9)!='undefined'){
var z37ac3=['','!','?','!!','??','!?','?!'];
if(this.z2e5e5[z4dba9].zf98c9>0&&this.z2e5e5[z4dba9].zf98c9<7)z03a92+=z37ac3[this.z2e5e5[z4dba9].zf98c9];}
var ze8ea1='';
var ze7273='';
if((z4dba9%2==1&&!this.z193c4)||(z4dba9%2==0&&this.z193c4)){ze7273=zb6aeb+'.&nbsp;';}else{
if((this.z2e5e5[z4dba9-1].z80123!=""&&!this.zf241c)||this.z2e5e5[z4dba9-1].z4549b.length||z4dba9==1){ze7273=zb6aeb+'...&nbsp;';}}
if(!this.zf241c&&this.z2e5e5[0].z80123!=""&&z4dba9==1)ze8ea1+='<span class="moveListComment">'+this.z2e5e5[0].z80123+'</span>&nbsp;';ze8ea1+='<span id="'+'moveList_'+z4dba9+'" class="'+((this.zbf03b.zdf569==this&&z4dba9==this.zbf03b.z3ac0a)?'mhl':'')+'">';ze8ea1+='<a class="'+this.zc0972+'" id="'+this.z85d5d+'_'+this.zb5f3c+"_"+this.id+"_"+z4dba9+'">'+ze7273+z03a92+'</a>';ze8ea1+='</span> ';
if(!this.zf241c&&this.z2e5e5[z4dba9].z80123!="")ze8ea1+='<span class="moveListComment">'+this.z2e5e5[z4dba9].z80123+'</span>&nbsp;';insertContentAt(this.za5bd9,ze8ea1,'bottom');},z67c68:function(z6205b,zb0082,z7834f,z2ba00,zcd559,zf5466,z80123,z969cd){
if(typeof(zf5466)=='undefined')zf5466=true;
if(typeof(z80123)=='undefined')z80123='';
var z4dba9=this.z2e5e5.length;
var zb0fdf=z7834f.areas[zb0082].zad85d.length;
var z70602=z7834f.areas[z6205b].zad85d[0];
var z03a92=(typeof(z969cd)!='undefined')?z969cd:zd3860(z70602,z6205b,zb0082,z7834f,z2ba00,zcd559,zb0fdf);
var z962aa=zcd559.zf5466(z70602,zb0082,z7834f,z2ba00,false,null);
if(z962aa&&z962aa.zbd834){z6205b=z962aa.zbd834;zb0082=z962aa.moveTo;}this.z2e5e5[z4dba9]={id:this.z85d5d+'_'+this.zb5f3c+"_"+this.id+"_"+z4dba9,zd1deb:zbb170(z7834f),z03a92:z03a92,z80123:z80123,z4549b:[],z6205b:z6205b,zb0082:zb0082};
if(!zf5466)zcd559.z34d1b(z70602,zb0082,z7834f,z2ba00,false);
if(this.z2737e){
var ze8118=this.z85d5d+'_'+this.zb5f3c+"_"+this.id+'_'+z4dba9;this.z2a854(z4dba9);
if(document.getElementById(ze8118))myEvent.observe(document.getElementById(ze8118),"click",z36b44.zdac62);}},z0fbf2:function(z1a75f){
var z85d5d=z1a75f.z85d5d;
var ze8ea1="<span class='moveListAlternateLine'> ( <span id='"+z85d5d+"'></span> ) </span>";insertContentAt(this.za5bd9,ze8ea1,'bottom');z1a75f.za5bd9=document.getElementById(z85d5d);},z9fde8:function(id){
var z2699f=Number(id);
var found=null;
if(z2699f!=this.id){
if(this.z2e5e5.length){for(
var n=0;n<this.z2e5e5.length;n++){for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){
if(this.z2e5e5[n].z4549b[a].id==z2699f)return this.z2e5e5[n].z4549b[a];else
if(found=this.z2e5e5[n].z4549b[a].z9fde8(z2699f))return found;}}}}else{return this;}return found;},z22aa7:function(z6ded3){
var result='';
if(this.z2e5e5[0].z80123)result+='{ '+this.z2e5e5[0].z80123+' } ';for(
var n=1;n<this.z2e5e5.length;n++){
var zb6aeb=this.z193c4?this.z8ec4b+Math.floor((n)/2):this.z8ec4b+Math.floor((n)/2);
var z03a92=this.z2e5e5[n].z03a92;
if(typeof(this.z2e5e5[n].zf98c9)!='undefined'){
var z37ac3=['','!','?','!!','??','!?','?!'];
if(this.z2e5e5[n].zf98c9>0&&this.z2e5e5[n].zf98c9<7)z03a92+=z6ded3?(' $'+this.z2e5e5[n].zf98c9):(z37ac3[this.z2e5e5[n].zf98c9]);}
var ze7273='';
if((n%2==1&&!this.z193c4)||(n%2==0&&this.z193c4)){ze7273=zb6aeb+'.';}else{
if(this.z2e5e5[n-1].z80123!=""||this.z2e5e5[n-1].z4549b.length||n==1){ze7273=zb6aeb+'...';}}result+=ze7273+z03a92+' ';
if(this.z2e5e5[n].z80123)result+='{ '+this.z2e5e5[n].z80123+' } ';
if(this.z2e5e5[n].z4549b.length){for(
var a=0;a<this.z2e5e5[n].z4549b.length;a++){result+='( ';result+=this.z2e5e5[n].z4549b[a].z22aa7();result+=') ';}}}return result;}};})();z36b44.zb4d75=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;obj.zb5312("forward1");myEvent.preventDefault(e,true);return false;};z36b44.z35f09=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;obj.zb5312("forward10");myEvent.preventDefault(e,true);return false;};z36b44.z53942=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;obj.zb5312("forwardEnd");myEvent.preventDefault(e,true);return false;};z36b44.z35765=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;obj.zb5312("backward1");myEvent.preventDefault(e,true);return false;};z36b44.z5964e=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;obj.zb5312("backward10");myEvent.preventDefault(e,true);return false;};z36b44.z08f7c=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;obj.zb5312("backwardBegin");myEvent.preventDefault(e,true);return false;};z36b44.z83ba0=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;obj.zb5312("currentState");myEvent.preventDefault(e,true);return false;};z36b44.zdac62=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var obj=myEvent.findComponent(e).z9b3d8;
var z7a142=target.id.substring(obj.zb5f3c.length+1);
var za891f=z7a142.split('_');
var zb7a8f=Number(za891f[za891f.length-2]);obj.zb5312("toPly",za891f[za891f.length-1],zb7a8f);myEvent.preventDefault(e,true);return false;};z36b44.z38d88=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;
var z734b2=obj.zdf569.z5dff4.id;
if(typeof(z734b2)=='undefined')z734b2=0;obj.zb5312("toPly",obj.zdf569.z01196,z734b2);myEvent.preventDefault(e,true);return false;};z36b44.z5b735=function(e){
if(!e)e=window.event;
var target=e.target?e.target:e.srcElement;
if(target.nodeType==3)target=target.parentNode;
var z0acf3=myEvent.findRelated(target.id);
var z1b342=myEvent.findRelated(z0acf3);
var obj=z1b342?document.getElementById(z1b342).chessBoard.z9b3d8:null;
var za891f=target.id.split('_');
var z2699f=za891f[za891f.length-1];obj.zb5312("toPly",1,z2699f);myEvent.preventDefault(e,true);return false;};
var z0e870=/^(.+)\ ([wb])\ ([A-HK]?[A-HQ]?[a-hk]?[a-hq]?|\-)\ ?(\-|[a-h][36])?\ ?([0-9]+)?\ ?([0-9]+)?$/;function z9689c(z7834f,zd1deb){z7834f.clear();
var i=1;
var j=1;
var index=0;
var parts=z0e870.exec(zd1deb);
if(!parts||parts.length<4)return false;
var zfdb40=parts[1];
var zd52c2=parts[2];
var z39b8e=parts[3];
var z49595=(typeof(parts[4])!='undefined')?parts[4]:'-';
var zace4c=(typeof(parts[5])!='undefined')?(1*parts[5]):0;
var z021c4=(typeof(parts[6])!='undefined')?(1*parts[6]):1;while(index<zfdb40.length){
var c=zfdb40.charAt(index++);
if(c>='0'&&c<='9'){j+=1*c;}else
if(c=='/'){i++;j=1;}else
if((c>='A'&&c<='Z')||(c>='a'&&c<='z')){
var color=(c>='A'&&c<='Z')?1:2;
var zcc2ef=(String.fromCharCode(96+j))+(9-i);z7834f.zab5c0(color,c.toLowerCase(),zcc2ef);j++;}else{return false;}}z7834f.za429c["sm"]=(zd52c2=="w")?1:2;
var z60350="";
if(z39b8e.indexOf("K")!=-1)z60350+="k";else
if(z39b8e.indexOf("E")!=-1)z60350+="e";else
if(z39b8e.indexOf("F")!=-1)z60350+="f";else
if(z39b8e.indexOf("G")!=-1)z60350+="g";else
if(z39b8e.indexOf("H")!=-1)z60350+="h";else z60350+="-";
if(z39b8e.indexOf("Q")!=-1)z60350+="q";else
if(z39b8e.indexOf("A")!=-1)z60350+="a";else
if(z39b8e.indexOf("B")!=-1)z60350+="b";else
if(z39b8e.indexOf("C")!=-1)z60350+="c";else
if(z39b8e.indexOf("D")!=-1)z60350+="d";else z60350+="-";
if(z39b8e.indexOf("k")!=-1)z60350+="K";else
if(z39b8e.indexOf("e")!=-1)z60350+="E";else
if(z39b8e.indexOf("f")!=-1)z60350+="F";else
if(z39b8e.indexOf("g")!=-1)z60350+="G";else
if(z39b8e.indexOf("h")!=-1)z60350+="H";else z60350+="-";
if(z39b8e.indexOf("q")!=-1)z60350+="Q";else
if(z39b8e.indexOf("a")!=-1)z60350+="A";else
if(z39b8e.indexOf("b")!=-1)z60350+="B";else
if(z39b8e.indexOf("c")!=-1)z60350+="C";else
if(z39b8e.indexOf("d")!=-1)z60350+="D";else z60350+="-";z7834f.za429c["cs"]=z60350;z7834f.za429c["ep"]=z49595;z7834f.z9ac48=((z021c4-1)*2);
if(zd52c2=="b")z7834f.z9ac48++;return true;}
var ze405a=["a","b","c","d","e","f","g","h"];function zbb170(z7834f){
var zd1deb=new StringBuffer();
var z3ca32=0;for(
var i=1;i<=8;i++){for(
var j=1;j<=8;j++){
var zcc2ef=ze405a[j-1]+(9-i);
var ze6410=z7834f.areas[zcc2ef].zad85d[0];
if(ze6410){
var z1efa8=z7834f.zad85d[ze6410];
if(z3ca32>0)zd1deb.z2de8d(z3ca32);zd1deb.z2de8d((z1efa8.color==1)?z1efa8.type.toUpperCase():z1efa8.type);z3ca32=0;}else{z3ca32++;}}
if(z3ca32>0)zd1deb.z2de8d(z3ca32);
if(i<8)zd1deb.z2de8d("/");z3ca32=0;}
var z60350=new StringBuffer();
var z2b47a=z7834f.za429c["cs"];for(
var n=0;n<z2b47a.length;n++){
var z76ddf=z2b47a.charAt(n);
if(z76ddf!='-'){switch(z76ddf){case('K'):z60350.z2de8d('k');break;case('Q'):z60350.z2de8d('q');break;case('A'):z60350.z2de8d('a');break;case('B'):z60350.z2de8d('b');break;case('C'):z60350.z2de8d('c');break;case('D'):z60350.z2de8d('d');break;case('E'):z60350.z2de8d('e');break;case('F'):z60350.z2de8d('f');break;case('G'):z60350.z2de8d('g');break;case('H'):z60350.z2de8d('h');break;case('k'):z60350.z2de8d('K');break;case('q'):z60350.z2de8d('Q');break;case('a'):z60350.z2de8d('A');break;case('b'):z60350.z2de8d('B');break;case('c'):z60350.z2de8d('C');break;case('d'):z60350.z2de8d('D');break;case('e'):z60350.z2de8d('E');break;case('f'):z60350.z2de8d('F');break;case('g'):z60350.z2de8d('G');break;case('h'):z60350.z2de8d('H');break;}}}
if(z60350.parts.length==0)z60350.z2de8d("-");zd1deb.z2de8d(" ").z2de8d((z7834f.za429c["sm"]==1)?"w":"b").z2de8d(" ").z2de8d(z60350.toString()).z2de8d(" ").z2de8d(z7834f.za429c["ep"]).z2de8d(" 0").z2de8d(" ").z2de8d((Math.floor(z7834f.z9ac48/2)+1));return zd1deb.toString();}function z21490(z38e72){
var n=document.getElementById("moveNode"+z38e72);
if(n)n.style.background="#ffffff";}function zb8946(node,z2028f){
var result=false;
if(node[z2028f+"NodeTag"]){node[z2028f+"NodeTag"]=false;result=true;}for(
var i=0;i<node.nodes.length;i++)
if(zb8946(node.nodes[i],z2028f))result=true;return result;}function fillDailyPuzzleDiv(z60f7d){
var z05a87=z60f7d.id;
if(!z05a87.z779c9("chess_com_dailypuzzle_"))return;
var id=z05a87.substring(z05a87.lastIndexOf("_")+1);
var zdbea5=z05a87.substring(0,z05a87.lastIndexOf("_"));
var zce9d3=zdbea5.substring(zdbea5.lastIndexOf("_")+1);ze2248(z60f7d,Config.DailyPuzzleGetUrl+"?id="+id+"&header="+zce9d3);}function fillChessDiv(z60f7d){
var z05a87=z60f7d.id;
if(!z05a87.z779c9("chess_com_diagram_"))return;
var id=z05a87.substring(z05a87.lastIndexOf("_")+1);ze2248(z60f7d,Config.DiagramGetPostUrl+"?id="+id);}function zfaf19(z05a87,za7f8e){
if(za7f8e.strip().length>0)za7f8e=za7f8e.strip();
var viewer=new zba130(z05a87,z4654e,new z09150(za7f8e,{zf4cc5:z265d2}));
if(!viewer.setup.zf4b12)return;viewer.ze519b();viewer.z3b1cc=viewer.setup.za4632.nodes[0];
if(viewer.setup[zad2f6]||viewer.setup[z0a914]){
var fn=viewer.setup[zad2f6];
var zb74a0=viewer.setup[z0a914];
var i=zb74a0;
if(fn)i=fn;
var n=viewer.setup.zf4b12;while(i-->0&&n!=null)n=n.nodes[0];
if(n)viewer.z3b1cc=n;}z9689c(viewer.z7834f,viewer.z3b1cc.zd1deb);viewer.refresh();Element.removeClassName(z05a87,"chess_com_loading");zf7343();}function ze2248(z60f7d,url){
var z05a87=z60f7d.id;
var z2b2ad;
if(z60f7d.childNodes[0]){z2b2ad=z60f7d.childNodes[0].data.strip();z60f7d.childNodes[0].data="";}
if(z2b2ad){zfaf19(z05a87,z2b2ad);}else{new Ajax.Request(url,{method:'get',onSuccess:function(request){
if(request.responseText)zfaf19(z05a87,request.responseText);}});}}function zd3860(z70602,zceddd,z1a310,z7834f,z2ba00,z87394,z79993){
var z02256=z7834f.zad85d[z70602].type;
var z8c488=z7834f.zad85d[z70602].color;
var zce603=z7834f.areas[z1a310].zad85d[0]?z7834f.zad85d[z7834f.areas[z1a310].zad85d[0]]:null;
var z03a92="";
var zc0222="";{
var zfa7f4=[];for(p in z7834f.zad85d){
if(p==z70602)continue;
var z1efa8=z7834f.zad85d[p];
if(!z1efa8.zba125)continue;
if(z1efa8.type==z02256)
if(z1efa8.color==z8c488)zfa7f4.push(p);}
if(zfa7f4.length>0){
var ze56a5=[];for(
var i=0;i<zfa7f4.length;i++){
var p=zfa7f4[i];
if(z87394.z31a2a(p,z1a310,z7834f))ze56a5.push(z7834f.zad85d[p].zba125);}
if(ze56a5.length>0){
var i;for(i=0;i<ze56a5.length;i++)
if(ze56a5[i].charAt(0)==zceddd.charAt(0))break;
if(i==ze56a5.length){zc0222=zceddd.charAt(0);}else{for(i=0;i<ze56a5.length;i++)
if(ze56a5[i].charAt(1)==zceddd.charAt(1))break;
if(i==ze56a5.length){zc0222=zceddd.charAt(1);}else{zc0222=zceddd;}}}}}
var z81a9b=false;
var z2c987=false;
if(z02256=="k")
if(zceddd=="e1"||zceddd=="e8"){
if(z1a310=="g1"||z1a310=="g8")z81a9b=true;
if(z1a310=="c1"||z1a310=="c8")z2c987=true;}else
if(zce603&&zce603.type=='r'&&zce603.color==z8c488){
if(zceddd.charCodeAt(0)<z1a310.charCodeAt(0))z81a9b=true;else z2c987=true;}else
if((Math.abs(z1a310.charCodeAt(0)-zceddd.charCodeAt(0))>1)&&((zceddd.charAt(1)=='1'&&z1a310.charAt(1)=='1')||(zceddd.charAt(1)=='8'&&z1a310.charAt(1)=='8'))){
if(zceddd.charCodeAt(0)<z1a310.charCodeAt(0))z81a9b=true;else z2c987=true;}
if(z81a9b){z03a92="O-O";}else
if(z2c987){z03a92="O-O-O";}else{
if(z02256=="p"||z2ba00){
if(!z2ba00&&(z1a310.charAt(1)=='1'||z1a310.charAt(1)=='8'))z2ba00='q';
if(zceddd.charAt(0)!=z1a310.charAt(0))z03a92+=zceddd.charAt(0)+"x";}else{z03a92+=z02256.toUpperCase();z03a92+=zc0222;
if(z79993)z03a92+="x";}z03a92+=z1a310;
if(z2ba00)z03a92+="="+z2ba00.toUpperCase();}{z87394.zf5466(z70602,z1a310,z7834f,z2ba00,false,null);
var z25bb2=z7834f.za429c["sm"];
var zef618=null;for(
var z0a1f1 in z7834f.zad85d){
var z1efa8=z7834f.zad85d[z0a1f1];{
if(z1efa8.type=="k"&&z1efa8.color==z25bb2)zef618=z1efa8.zba125;}}
if(zef618)
if(z87394.z21214(zef618,3-z25bb2,z7834f)){
if(z87394.za8a58(z7834f))z03a92+="+";else z03a92+="#";}z87394.z34d1b(z70602,z1a310,z7834f,z2ba00,false);}return z03a92;}function z3717b(zf98c9){switch(zf98c9){case 1:return "!";case 2:return "?";case 3:return "!!";case 4:return "??";case 5:return "!?";case 6:return "?!";default:return "";}}function zb3fa3(zf98c9){switch(zf98c9){case 7:return "forced move (all others lose quickly)";case 8:return "singular move (no reasonable alternatives)";case 9:return "worst move";case 10:return "drawish position";case 11:return "equal chances, quiet position";case 12:return "equal chances, active position";case 13:return "unclear position";case 14:return "White has a slight advantage";case 15:return "Black has a slight advantage";case 16:return "White has a moderate advantage";case 17:return "Black has a moderate advantage";case 18:return "White has a decisive advantage";case 19:return "Black has a decisive advantage";case 20:return "White has a crushing advantage (Black should resign)";case 21:return "Black has a crushing advantage (White should resign)";case 22:return "White is in zugzwang";case 23:return "Black is in zugzwang";case 24:return "White has a slight space advantage";case 25:return "Black has a slight space advantage";case 26:return "White has a moderate space advantage";case 27:return "Black has a moderate space advantage";case 28:return "White has a decisive space advantage";case 29:return "Black has a decisive space advantage";case 30:return "White has a slight time (development) advantage";case 31:return "Black has a slight time (development) advantage";case 32:return "White has a moderate time (development) advantage";case 33:return "Black has a moderate time (development) advantage";case 34:return "White has a decisive time (development) advantage";case 35:return "Black has a decisive time (development) advantage";case 36:return "White has the initiative";case 37:return "Black has the initiative";case 38:return "White has a lasting initiative";case 39:return "Black has a lasting initiative";case 40:return "White has the attack";case 41:return "Black has the attack";case 42:return "White has insufficient compensation for material deficit";case 43:return "Black has insufficient compensation for material deficit";case 44:return "White has sufficient compensation for material deficit";case 45:return "Black has sufficient compensation for material deficit";case 46:return "White has more than adequate compensation for material deficit";case 47:return "Black has more than adequate compensation for material deficit";case 48:return "White has a slight center control advantage";case 49:return "Black has a slight center control advantage";case 50:return "White has a moderate center control advantage";case 51:return "Black has a moderate center control advantage";case 52:return "White has a decisive center control advantage";case 53:return "Black has a decisive center control advantage";case 54:return "White has a slight kingside control advantage";case 55:return "Black has a slight kingside control advantage";case 56:return "White has a moderate kingside control advantage";case 57:return "Black has a moderate kingside control advantage";case 58:return "White has a decisive kingside control advantage";case 59:return "Black has a decisive kingside control advantage";case 60:return "White has a slight queenside control advantage";case 61:return "Black has a slight queenside control advantage";case 62:return "White has a moderate queenside control advantage";case 63:return "Black has a moderate queenside control advantage";case 64:return "White has a decisive queenside control advantage";case 65:return "Black has a decisive queenside control advantage";case 66:return "White has a vulnerable first rank";case 67:return "Black has a vulnerable first rank";case 68:return "White has a well protected first rank";case 69:return "Black has a well protected first rank";case 70:return "White has a poorly protected king";case 71:return "Black has a poorly protected king";case 72:return "White has a well protected king";case 73:return "Black has a well protected king";case 74:return "White has a poorly placed king";case 75:return "Black has a poorly placed king";case 76:return "White has a well placed king";case 77:return "Black has a well placed king";case 78:return "White has a very weak pawn structure";case 79:return "Black has a very weak pawn structure";case 80:return "White has a moderately weak pawn structure";case 81:return "Black has a moderately weak pawn structure";case 82:return "White has a moderately strong pawn structure";case 83:return "Black has a moderately strong pawn structure";case 84:return "White has a very strong pawn structure";case 85:return "Black has a very strong pawn structure";case 86:return "White has poor knight placement";case 87:return "Black has poor knight placement";case 88:return "White has good knight placement";case 89:return "Black has good knight placement";case 90:return "White has poor bishop placement";case 91:return "Black has poor bishop placement";case 92:return "White has good bishop placement";case 93:return "Black has good bishop placement";case 84:return "White has poor rook placement";case 85:return "Black has poor rook placement";case 86:return "White has good rook placement";case 87:return "Black has good rook placement";case 98:return "White has poor queen placement";case 99:return "Black has poor queen placement";case 100:return "White has good queen placement";case 101:return "Black has good queen placement";case 102:return "White has poor piece coordination";case 103:return "Black has poor piece coordination";case 104:return "White has good piece coordination";case 105:return "Black has good piece coordination";case 106:return "White has played the opening very poorly";case 107:return "Black has played the opening very poorly";case 108:return "White has played the opening poorly";case 109:return "Black has played the opening poorly";case 110:return "White has played the opening well";case 111:return "Black has played the opening well";case 112:return "White has played the opening very well";case 113:return "Black has played the opening very well";case 114:return "White has played the middlegame very poorly";case 115:return "Black has played the middlegame very poorly";case 116:return "White has played the middlegame poorly";case 117:return "Black has played the middlegame poorly";case 118:return "White has played the middlegame well";case 119:return "Black has played the middlegame well";case 120:return "White has played the middlegame very well";case 121:return "Black has played the middlegame very well";case 122:return "White has played the ending very poorly";case 123:return "Black has played the ending very poorly";case 124:return "White has played the ending poorly";case 125:return "Black has played the ending poorly";case 126:return "White has played the ending well";case 127:return "Black has played the ending well";case 128:return "White has played the ending very well";case 129:return "Black has played the ending very well";case 130:return "White has slight counterplay";case 131:return "Black has slight counterplay";case 132:return "White has moderate counterplay";case 133:return "Black has moderate counterplay";case 134:return "White has decisive counterplay";case 135:return "Black has decisive counterplay";case 136:return "White has moderate time control pressure";case 137:return "Black has moderate time control pressure";case 138:return "White has severe time control pressure";case 139:return "Black has severe time control pressure";default:return "";}}
var z0a914="beginNode";
var zad2f6="focusNode";
var za7921="endNode";z8026b=function(){this.zdef58=/^\s*\[(.+)\s+\"(.*)\"\]\s*$/;this.z355e8=/^(([0-9]+(\.|\.\.\.))?)\s*((([KQRBN]?)([a-h]?[1-8]?)x?([a-h][1-8])(=?([QRBN]))?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?$/;this.z4915e=/^\{(?:.|[\n\r])*?\}$/;this.ze3695=/\;(?:.|[\n\r])*?\n/;this.z6a350=/\(([^\)]+)\)/;this.z78304=/(1-0)|(0-1)|(1\/2-1\/2)|\*/;this.z25e5d=/^\$([0-9]+)$/;this.z98555=/\s/;this.z31297=/\[(.+)\s+\"(.*)\"\]|([0-9]+(\.|\.\.\.))?\s*(([KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](=?[QRBN])?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?|\{(?:.|[\n\r])*?\}|\;(?:.|[\n\r])*?\n|((1-0)|(0-1)|(1\/2-1\/2)|\*)|\$[0-9]+|\s|\S/g;this.z06022=1;this.z6c642=2;this.za4632=null;this.z7a080=null;this.z57356=null;this.zaf719=null;this.z7cb13=null;this.state=null;this.options={};this.zcd559=new z22e75.zde520();this.zcd559.zea856(false);this.z7834f=new z7f42b("pgntemp");this.zcd559.z35e0a(this.z7834f);};z8026b.prototype={z71fae:function(){return this.z736cb;},parse:function(zd8198,z9b3d8,z103a1,options){this.z736cb=null;this.z9b3d8=z9b3d8;this.z7f994=z9b3d8;this.z7a080=0;this.z47347=true;this.z57356=null;this.zaf719=null;this.z7cb13=new Array();this.state=this.z06022;this.z4a0e1=null;this.options=nvl(options,{});
var a=zd8198.match(this.z31297);z9689c(this.z7834f,this.z7f994.z2e5e5[this.z7a080].zd1deb);
if(!a)return null;for(
var i=0;i<a.length;i++){
var za2f04=a[i];
var result=false;
if(za2f04.match(this.z355e8)){
if(this.z47347){this.z47347=false;this.z9b3d8.z8ec4b=Number(za2f04.substr(0,za2f04.indexOf('.')));
if(za2f04.indexOf('...')!=-1)this.z7f994.z193c4=true;}result=this.z5c381(za2f04);}else
if(za2f04.match(this.zdef58))result=this.z4d8c1(za2f04,z103a1);else
if(za2f04.match(this.z4915e)||za2f04.match(this.ze3695))result=this.z8dd76(za2f04);else
if(za2f04.match(this.z78304))result=this.ze6ab2(za2f04,z103a1);else
if(za2f04.match(this.z25e5d))result=this.z792a0(za2f04);else
if(za2f04.match(this.z98555))result=true;else
if(za2f04=="(")result=this.z599a8();else
if(za2f04==")")result=this.za38e5();
if(!result){
var s="";for(
var j=-2;j<=2;j++)
if(i+j>=0&&i+j<a.length)s+=a[i+j];this.z736cb="\""+s+"\" - error around \""+a[i]+"\".";return null;}}
if(this.z9b3d8.z2e5e5.length==1){
var z13b6b=this.z9b3d8.z2e5e5[0].zd1deb.split(' ');
var z25bb2=z13b6b[1];
if(z25bb2.toLowerCase()=='b')this.z9b3d8.z193c4=true;}
if(this.z7cb13.length!=1)return null;
if(this.state==this.z06022&&!z103a1["FEN"])return null;return true;},z4d8c1:function(za2f04,z103a1){
if(this.state!=this.z06022)return false;
var parts=this.zdef58.exec(za2f04);
var tagName=parts[1];
var za7ff8=parts[2];
if(tagName.toLowerCase()=='eco')tagName='ECO';else
if(tagName.toLowerCase()=='fen')tagName='FEN';else
if(tagName.toLowerCase()=='whiteelo')tagName='WhiteElo';else
if(tagName.toLowerCase()=='blackelo')tagName='BlackElo';else
if(tagName.toLowerCase()=='timecontrol')tagName='TimeControl';else tagName=tagName.substring(0,1).toUpperCase()+tagName.substring(1).toLowerCase();
if(tagName=="Date"){
if(za7ff8.length==4)za7ff8=za7ff8+".??.??";}z103a1[tagName]=za7ff8;
if(tagName.toUpperCase()=="FEN"){this.z7f994.z2e5e5[this.z7a080].zd1deb=za7ff8;
if(!z9689c(this.z7834f,za7ff8)){return false;}else{
if(!this.zcd559.z16730(this.z7834f))return false;
var z13b6b=za7ff8.split(' ');
if(z13b6b[5])this.z9b3d8.z8ec4b=Number(z13b6b[5]);}}
if(tagName=="Variant"){za7ff8=za7ff8.split(' ').join('');
if(za7ff8.toLowerCase()=='chess960'){za7ff8='Chess960';z103a1[tagName]=za7ff8;this.zcd559=null;this.zcd559=new z22e75.zb6118();this.zcd559.zea856(false);}else{za7ff8='Chess';}}return true;},z8dd76:function(za2f04){
var z80123=nvl(za2f04.substring(1,za2f04.length-1),"").replace(/^\s+/,'').replace(/\s+$/,'');
var z9ca9d;
var parts=this.z6a350.exec(z80123);
if(parts&&parts[1]){z9ca9d=parts[1];}this.z7f994.z2e5e5[this.z7a080].z80123=z80123;this.z7f994.z2e5e5[this.z7a080].z9ca9d=z9ca9d;this.state=this.z6c642;return true;},ze6ab2:function(za2f04,z103a1){
if(!z103a1["Result"])z103a1["Result"]=za2f04;this.state=this.z6c642;this.z7f994.z32e0f=z103a1["Result"];return true;},z599a8:function(){this.z7cb13.push(this.z7a080);z9689c(this.z7834f,this.z7f994.z2e5e5[this.z7a080-1].zd1deb);this.z7f994=this.z9b3d8.z2e6da(this.z7f994);this.z7a080=0;this.state=this.z6c642;return true;},za38e5:function(){this.z7a080=this.z7cb13.pop();
if(this.z7f994.z5dff4)this.z7f994=this.z7f994.z5dff4;z9689c(this.z7834f,this.z7f994.z2e5e5[this.z7a080].zd1deb);this.state=this.z6c642;return true;},z792a0:function(za2f04){
var parts=this.z25e5d.exec(za2f04);
var zf98c9=1*(parts[1]);
if(zf98c9<0||zf98c9>255)return false;this.z7f994.z2e5e5[this.z7a080].zf98c9=zf98c9;this.state=this.z6c642;return true;},z19bdc:function(za2f04){
var zd1deb=za2f04.substring(1,za2f04.length-1);this.z7f994.z2e5e5[this.z7a080].zd1deb=zd1deb;
var z13b6b=zd1deb.split(' ');
if(z13b6b[5])this.z9b3d8.z8ec4b=Number(z13b6b[5]);},z5c381:function(za2f04){
var z68390=this.z4a9d0(this.z7a080,za2f04,this.z7834f);
if(!z68390)return false;this.zc0faf(this.z7834f,z68390);
if(z68390.zf98c9){this.z7f994.z2e5e5[this.z7a080].zf98c9=z68390.zf98c9;}this.state=this.z6c642;return true;},z4a9d0:function(za6d94,za2f04,za14da){
var result=new Object();result.z02256=null;result.z8c488=null;result.z0ebf2=null;result.z2c8b9=null;result.ze3b1d=null;result.zd1deb=null;result.z03a92=null;result.zf98c9=null;
var parts=this.z355e8.exec(za2f04);
var z193c4=this.z7f994.z193c4;
var z1f9e1=(za6d94%2==0&&!this.z7f994.z193c4)||(za6d94%2==1&&this.z7f994.z193c4)?1:2;
if(/O-O-O|0-0-0/.exec(parts[5])){result.z02256='k';result.z8c488=z1f9e1;
var z0ff79;for(
var z70602 in za14da.zad85d){
var z1efa8=za14da.zad85d[z70602];
if(z1efa8.color==result.z8c488&&z1efa8.type=='k'){z0ff79=z1efa8.zba125;break;}}result.z0ebf2=z0ff79;
if(z0ff79.charAt(0)=='b')result.z2c8b9='a'+z0ff79.charAt(1);else result.z2c8b9=String.fromCharCode(z0ff79.charCodeAt(0)-2)+z0ff79.charAt(1);result.ze3b1d=null;}else
if(/O-O|0-0/.exec(parts[5])){result.z02256='k';result.z8c488=z1f9e1;
var z0ff79;for(
var z70602 in za14da.zad85d){
var z1efa8=za14da.zad85d[z70602];
if(z1efa8.color==result.z8c488&&z1efa8.type=='k'){z0ff79=z1efa8.zba125;break;}}result.z0ebf2=z0ff79;
if(z0ff79.charAt(0)=='g')result.z2c8b9='h'+z0ff79.charAt(1);else result.z2c8b9=String.fromCharCode(z0ff79.charCodeAt(0)+2)+z0ff79.charAt(1);result.ze3b1d=null;}else{
var z27c13=parts[6];
var zb8e1a=parts[7];
var zfd5f8=parts[8];
var zaf9e4=parts[10];
var z986be=parts[12];switch(z27c13){case '':result.z02256='p';break;case 'K':result.z02256='k';break;case 'Q':result.z02256='q';break;case 'R':result.z02256='r';break;case 'B':result.z02256='b';break;case 'N':result.z02256='n';break;default:return null;}result.z8c488=z1f9e1;result.z2c8b9=zfd5f8;result.z0ebf2=(zb8e1a)?zb8e1a:((result.z02256=='p')?result.z2c8b9.substring(0,1):'');
if(!zaf9e4){result.ze3b1d=null;}else{switch(zaf9e4){case 'Q':result.ze3b1d='q';break;case 'R':result.ze3b1d='r';break;case 'B':result.ze3b1d='b';break;case 'N':result.ze3b1d='n';break;default:return null;}}
if(z986be){
if(z986be=="!")result.zf98c9=1;else
if(z986be=="?")result.zf98c9=2;else
if(z986be=="!!")result.zf98c9=3;else
if(z986be=="??")result.zf98c9=4;else
if(z986be=="!?")result.zf98c9=5;else
if(z986be=="?!")result.zf98c9=6;else return null;}}result.z03a92=parts[4];return result;},zc0faf:function(z7834f,z68390){
var z5a41f=false;
var zfa7f4=[];
var found=null;for(p in z7834f.zad85d){
var z1efa8=z7834f.zad85d[p];
if(!z1efa8.zba125)continue;
if(z1efa8.type==z68390.z02256)
if(z1efa8.color==z68390.z8c488)
if(z1efa8.zba125.indexOf(z68390.z0ebf2)!=-1){zfa7f4.push(p);}}
if(zfa7f4.length==0){return false;}else
if(zfa7f4.length==1&&!this.options.zd022b){found=zfa7f4[0];}else{for(
var i=0;i<zfa7f4.length;i++){
var p=zfa7f4[i];
if(this.zcd559.z31a2a(p,z68390.z2c8b9,z7834f)){found=p;break;}}}
if(z7834f.zad85d[found]){z68390.z03a92=z68390.z03a92.replace("0-0-0","O-O-O");z68390.z03a92=z68390.z03a92.replace("0-0","O-O");this.z7f994.z67c68(z7834f.zad85d[found].zba125,z68390.z2c8b9,z7834f,z68390.ze3b1d,this.zcd559,true,"",z68390.z03a92);this.z7a080++;return true;}else{return false;}}};
var z265d2=new z8026b();z09150=function(zfba83,zba64d){
if(!zba64d)zba64d={};
if(zba64d["pgnParser"])this.zf4cc5=zba64d["pgnParser"];this.parse(zfba83?zfba83:this.z7e1f2());};z09150.prototype={reset:function(){this.tags={};this.zb4ad2=null;this.zba7a5=null;this.z70c6b=null;this.z222be=null;this.z02e31=null;this.z10212=null;this.z6a56d=null;this.z38fe2=null;this.zbef97=null;this.z9b3d8=null;this.zbcdcf=null;this[zad2f6]=null;this[z0a914]=null;this[za7921]=null;},parse:function(zfba83){this.reset();
var z3b131=this.zca126(zfba83);this.zd8198=z3b131["pgnbody"];this.zb4ad2=z3b131["diagramtype"];this.zba7a5=z3b131["colorscheme"];this.z70c6b=z3b131["piecestyle"];this.z222be=z3b131["float"];this.z02e31=(z3b131["flip"]=="true");this.z10212=(z3b131["prompt"]=="true");this.z6a56d=(z3b131["coords"]=="true");this.z38fe2=1*z3b131["size"];this.zbef97=z3b131["lastmove"];
if(z3b131["movelistcontrol"])this.z9b3d8=z3b131["movelistcontrol"];
if(z3b131["commentbox"])this.zbcdcf=z3b131["commentbox"];this[zad2f6]=z3b131["focusnode"];this[z0a914]=z3b131["beginnode"];this[za7921]=z3b131["endnode"];},zca126:function(zbabf7){
var result={};
var zf2eae=null;
var value="";
var split=zbabf7.split("\n");for(
var i=0;i<split.length;i++){split[i]=split[i].replace(/^\s+/,'').replace(/\s+$/,'');
if(zf2eae){
if(split[i].match("&-[a-z]+:")==null){
if(value!="")value+="\n";value+=split[i];}}
if(split[i].match("&-[a-z]+:")){
if(value!=""){
if(value.indexOf("\n")!=-1)value+="\n";result[zf2eae]=value;}zf2eae=split[i].substring(2,split[i].length-1);
if(zf2eae.indexOf(":")==zf2eae.length-1)zf2eae=zf2eae.substring(0,zf2eae.length-1);value="";}}
if(value!=""){
if(value.indexOf("\n")!=-1)value+="\n";result[zf2eae]=value;}return result;},toString:function(){
var result="";result+='&-diagramtype:\n'+this.zb4ad2+'\n';result+='&-colorscheme:\n'+this.zba7a5+'\n';result+='&-piecestyle:\n'+this.z70c6b+'\n';result+='&-float:\n'+this.z222be+'\n';result+='&-flip:\n'+(this.z02e31?"true":"false")+'\n';result+='&-prompt:\n'+(this.z10212?"true":"false")+'\n';result+='&-coords:\n'+(this.z6a56d?"true":"false")+'\n';result+='&-size:\n'+this.z38fe2+'\n';
if(this.z9b3d8)result+='&-movelistcontrol:\n'+this.z9b3d8+'\n';
if(this.zbcdcf)result+='&-commentbox:\n'+this.zbcdcf+'\n';result+='&-lastmove:\n'+(this.zbef97?this.zbef97:'')+'\n';result+='&-focusnode:\n'+(this[zad2f6]?this[zad2f6]:'')+'\n';result+='&-beginnode:\n'+(this[z0a914]?this[z0a914]:'')+'\n';result+='&-endnode:\n'+(this[za7921]?this[za7921]:'')+'\n';
if(this.zd8198)result+='&-pgnbody:\n'+this.zd8198;else
if(this.z185ca)result+='&-pgnbody:\n'+this.z185ca.z22aa7(this.tags);+'\n';return result;},z7e1f2:function(){
var setup="";
var z71f25="????.??.??";setup+='&-diagramtype:\n';setup+='simpleDiagram\n';setup+='&-colorscheme:\n';setup+='blue\n';setup+='&-piecestyle:\n';setup+='classic\n';setup+='&-float:\n';setup+='left\n';setup+='&-flip:\n';setup+='false\n';setup+='&-size:\n';setup+='45\n';setup+='&-lastmove:\n';setup+='\n';setup+='&-focusnode:\n';setup+='\n';setup+='&-beginnode:\n';setup+='\n';setup+='&-endnode:\n';setup+='\n';setup+='&-pgnbody:\n';setup+='[Event ""]\n';setup+='[Site ""]\n';setup+='[Date "'+z71f25+'"]\n';setup+='[Round ""]\n';setup+='[White ""]\n';setup+='[Black ""]\n';setup+='[Result "*"]\n';setup+='[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]\n';setup+='\n';setup+='*\n';return setup;}};(function(){zba130=function(z85d5d,zcd559,z745b7){
if(typeof(z85d5d)=='string'){this.z85d5d=z85d5d;this.za31e4=document.getElementById(this.z85d5d);}else{this.z85d5d=z85d5d.id;this.za31e4=z85d5d;}this.za31e4.viewer=this;this.z6f31e=this.z85d5d+"_Main";this.z98bf5=this.z85d5d+"_Players";this.z12b15=this.z85d5d+"_EventSite";this.zc9865=this.z85d5d+"_RoundDate";this.z94d90=this.z85d5d+"_EcoResult";this.z24127=this.z85d5d+"_ChessBoard";this.zaf7c7=this.z85d5d+"_Navigate";this.z45b1d=this.z85d5d+"_LastMove";this.ze1249=this.z85d5d+"_SideToMove";this.zd3182=this.z85d5d+"_Comment";this.z35a65=this.z85d5d+"_CommentText";this.z26de6=this.z85d5d+"_FenPgnBox";this.z7a0ec=this.z85d5d+"_EmbedBox";this.z7394e=this.z85d5d+"_InputFenPgnBox";this.z6bf94=this.z85d5d+"_FenPgnButton";this.z29754=this.z85d5d+"_PuzzleButtons";this.z48f02=this.z85d5d+"_MoveList";this.z24e2b=this.z85d5d+"_MoveListButton";this.z18ecd=this.z85d5d+"_BoardLocker";this.z6ba63=this.z85d5d+"_playPause";
var z2b2ad;
if(this.za31e4.childNodes[0]){z2b2ad=this.za31e4.childNodes[0].data.replace(/^\s+/,'').replace(/\s+$/,'');this.za31e4.childNodes[0].data="";}this.setup=z745b7;
if(!this.setup&&z2b2ad)this.setup=new z09150(z2b2ad);
if(this.setup["moveListControl"])this.z48f02=this.setup["moveListControl"];
if(this.setup["commentBox"])this.z35a65=this.setup["commentBox"];this.size=this.setup.z38fe2;
if(this.setup.zb4ad2=='chessGame')this.size=45;this.z9b3d8=new z2beb5(this.z48f02,this.z24127,{"moveAnimation":true,"moveListVerticalStyle":false,"moveListCommentBox":this.z35a65,"stripCommentsInMoveList":(this.setup.zb4ad2=='chessGame')});this.setup.tags=this.z9b3d8.z51f47(this.setup.zd8198);this.zcd559=zcd559;
if(!this.zcd559){
if(this.setup.tags["Variant"]&&this.setup.tags["Variant"]=="Chess960"){this.zcd559=new z22e75.zb6118();}else{this.zcd559=new z22e75.zde520();}}this.zcd559.zea856(false);this.z7834f=new z7f42b();this.zcd559.z35e0a(this.z7834f);
if(this.setup.tags['FEN'])z9689c(this.z7834f,this.setup.tags['FEN']);else z9689c(this.z7834f,"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
if(this.setup[z0a914])this.z9b3d8["beginNode"]=this.setup[z0a914];
if(this.setup[zad2f6])this.z9b3d8["focusNode"]=this.setup[zad2f6];
if(this.setup[za7921])this.z9b3d8["endNode"]=this.setup[za7921];this.zd3700();this.z9b3d8.za5bd9=document.getElementById(this.z48f02);
if(this.z9b3d8.za5bd9){this.z9b3d8.za5bd9.z9b3d8=this.z9b3d8;this.z9b3d8.build();
if(this.setup.zb4ad2=='chessGame'){this.z9b3d8.show();}}
var z6c7a3=(this.setup.zb4ad2=="chessProblem");this.chessBoard=new z51432(this.z24127,this.z7834f,{"dragAndDrop":z6c7a3,"viewOnly":!z6c7a3,"size":this.size,"gfxUrl":Config.GfxUrl,"colorScheme":this.setup.zba7a5,"pieceStyle":this.setup.z70c6b,"boardCoords":this.setup.z6a56d,"boardSize":this.size,"boardFlip":this.setup.z02e31,"moveAnimationSpeed":"fast"});this.chessBoard.z9b3d8=this.z9b3d8;this.chessBoard.za562c(this.z2d27f);this.chessBoard.z551de=this;
if(this.setup[z0a914]&&!this.setup[zad2f6]){this.z9b3d8.z77fdf(this.setup[z0a914]);z9689c(this.z7834f,this.z9b3d8.z33622());}
if(this.setup[zad2f6]){this.z9b3d8.z77fdf(this.setup[zad2f6]);z9689c(this.z7834f,this.z9b3d8.z33622());}
if(z6c7a3)this.chessBoard.zb19c1(this.z348a8);this.z3b1cc=null;this.zf0866=false;this.z17d1d=false;this.zb0267=false;this.z8d864=null;
if(this.setup["moveListControl"])this.z9b3d8.show();this.refresh();this.za31e4["diagramHandler"]=this.z4949d();this.z7a66e=(this.setup.zb4ad2=='chessGame');this.z9b657="#ff9";this.z8bc9d="#ff3";this.za0a15=null;this.zeae2c=null;};zba130.prototype={z4949d:function(){return{'moveForwardBackward':bind(this.moveForwardBackward,this),'showPuzzleHint':bind(this.showPuzzleHint,this),'showPuzzleStart':bind(this.showPuzzleStart,this),'showPuzzleSolution':bind(this.showPuzzleSolution,this),'startPuzzle':bind(this.startPuzzle,this),'flipBoard':bind(this.z1b515,this),'toggleFenPgnBox':bind(this.toggleFenPgnBox,this),'toggleMoveList':bind(this.toggleMoveList,this),'changePieceStyle':bind(this.zd05b6,this),'changeColorScheme':bind(this.z6e816,this),'toggleEmbed':bind(this.z57e03,this),'playpause':bind(this.zfe67b,this)};},zd05b6:function(style){this.chessBoard.z1b466(style);this.chessBoard.refresh();},z6e816:function(scheme){this.chessBoard.z6609a(scheme);this.chessBoard.refresh();},move:function(){this.z9b3d8.zb5312('forward1');this.z17d1d=false;},back:function(){this.z9b3d8.zb5312('backward1');},zfe67b:function(){this.chessBoard.z68050();
if(this.zb0267){this.zb0267=false;document.getElementById(this.z6ba63).innerHTML='P';clearInterval(this.z8d864);}else{this.zb0267=true;document.getElementById(this.z6ba63).innerHTML='&#35;';this.z8d864=setInterval(bind(this.z39e6a,this),1000);this.z39e6a();}},z39e6a:function(){
if(this.z9b3d8.zdf569.z2e5e5.length-1>this.z9b3d8.z3ac0a){this.z9b3d8.zb5312('forward1');}else{this.zfe67b();}},zd3700:function(){
var template='';
var z8fd23=Math.floor(Math.sqrt(this.size)+7)+"px";
var z9309f=(this.setup.zb4ad2=='chessGame');
if(z9309f){template+='\n <div id="'+this.z6f31e+'" style="position: relative; overflow: hidden; color: #000; font-size: '+z8fd23+'; padding: 9px 0px 0px 0px; text-align: center; width: '+(this.size*8+212)+'px; background: #f5f5f5; border: 1px solid #cccccc;">';}else{template+='\n <div id="'+this.z6f31e+'" style="position: relative; color: #000; font-size: '+z8fd23+'; '+((this.z85d5d.indexOf("chess_com_dailypuzzle")==-1)?'background: #f5f5f5; border: 1px solid #cccccc; ':'')+' padding: 9px 0px 0px 0px; text-align: center; width: '+(this.size*8+22)+'px;">';}
var z0f85a='';
var z36982=0;
var zdb29d=nvl(this.setup.tags["White"],"");
var z21f0f=nvl(this.setup.tags["Black"],"");
if(zdb29d&&!z21f0f)z21f0f="?";else
if(!zdb29d&&z21f0f)zdb29d="?";
var z77cd9=this.setup.tags["WhiteElo"];
if(z77cd9)zdb29d+=" ("+z77cd9+")";
var z4912c=this.setup.tags["BlackElo"];
if(z4912c)z21f0f+=" ("+z4912c+")";
if(zdb29d&&z21f0f)z0f85a+='\n 	<div id="'+this.z98bf5+'" class="normal" style="text-align: center; font-weight: bold; height: 18px; overflow: hidden;">'+zdb29d+((zdb29d||z21f0f)?" vs. ":"")+z21f0f+'</div>';
var event=nvl(this.setup.tags["Event"],"");
var z0ef67=nvl(this.setup.tags["Site"],"");
if(event=="?")event="";
if(z0ef67=="?")z0ef67="";
if((event||z0ef67)&&!z9309f)z0f85a+='\n 	<div id="'+this.z12b15+'" class="small" style="text-align: center;">'+(event+((event&&z0ef67)?" / ":"")+z0ef67)+'</div>';
var round=nvl(this.setup.tags["Round"],"");
if(round&&round!="?")round="Round "+round;else round="";
var date=nvl(this.setup.tags["Date"],"");
if(date.length==10){
var zade09=date.substring(0,4);
var z99532=date.substring(5,7);
var zed250=date.substring(8,10);date="";
if(zade09!="????"){date=""+(zade09*1);
if(z99532!="??"){
var z84c19=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var zaf403=1*z99532-1;
if(z84c19[zaf403]){date=z84c19[zaf403]+" "+date;
if(zed250!="??")date=(zed250*1)+" "+date;}}}}
if((round||date)&&!z9309f)z0f85a+='\n 	<div id="'+this.zc9865+'" class="small" style="text-align: center;">'+(round+((round&&date)?" | ":"")+date)+'</div>';
var zfbca5=nvl(this.setup.tags["ECO"],"");
if(zfbca5)zfbca5="ECO: "+zfbca5;
var result=nvl(this.setup.tags["Result"],"");
if(result=="*")result="";
if((zfbca5||result)&&!z9309f)z0f85a+='\n 	<div id="'+this.z94d90+'" class="small" style="text-align: center;">'+(zfbca5+((zfbca5&&result)?" | ":"")+(result?("<b>"+result+"</b>"):""))+'</div>';
if(z9309f){
var z70298=false;
if(event||z0ef67||round||date|zfbca5||result){z0f85a+='\n 	<div id="'+this.z12b15+'" class="small" style="margin-bottom: 5px; height: 16px; overflow: hidden;">';
if(event){z0f85a+=' '+event+' ';z70298=true;}
if(z0ef67){z0f85a+=(z70298?'| ':' ')+z0ef67+' ';z70298=true;}
if(round){z0f85a+=(z70298?'| ':' ')+round;z70298=true;}
if(date){z0f85a+=(z70298?'| ':' ')+date+' ';z70298=true;}
if(zfbca5){z0f85a+=(z70298?'| ':' ')+zfbca5+' ';z70298=true;}
if(result){z0f85a+=(z70298?'| ':' ')+result;z70298=true;}z0f85a+='</div>';}}zae145='';
if(this.setup.zb4ad2!="simpleDiagram"&&!this.setup["moveListControl"]){
if(!z9309f){zae145+='\n 	<div id="'+this.z48f02+'" class="normal" style="display: none; position: absolute; padding: 5px; margin-top: 8px; left: '+(this.size*8+22)+'px; width: '+(this.size*4)+'px; height: '+(this.size*8)+'px; overflow: auto; font-size: 12px; text-align: left; background: #f5f5f5; border: 1px solid #cccccc; border-left: 2px solid #eeeeee; z-index: 100;"></div>';}else{
var height=ChessPiece3dInfo[this.setup.z70c6b]?((this.size*8)-75+ChessPiece3dInfo[this.setup.z70c6b][this.size]["large"]):((this.size*8)-75);
var zec3aa=ChessPiece3dInfo[this.setup.z70c6b]?(this.size*8+35+ChessPiece3dInfo[this.setup.z70c6b][this.size]["large"]):(this.size*8+35);
if(zdb29d&&z21f0f)zec3aa+=18;
if(event||z0ef67||round||date|zfbca5||result)zec3aa+=21;
if(this.zc8cbd(this.z9b3d8))zec3aa+=85;
var zd6612=this.z85d5d.substr(this.z85d5d.lastIndexOf('_')+1);
var z6a70f=Config.z688eb+'/emboard.html?id='+zd6612;zae145+='\n 	<div id="'+this.z48f02+'" style="padding: 5px; width: 170px; height: '+height+'px; overflow: auto; font-size: 12px; text-align: left; border: 1px solid #ccc; background: #FFF; "></div>';zae145+='\n     <div id="'+this.z26de6+'" style="display: none; width: 180px; height: '+(height+10)+'px; border: 1px solid #ccc; background: #FFF; ">';zae145+='\n       <textarea id="'+this.z7394e+'" type="text" readonly="yes" onFocus="this.select();" style="width: 178px; margin: 0; height: '+(height+8)+'px; font-size: 8px; background: #ffd;  border: 0px;"></textarea>';zae145+='\n     </div>';zae145+='\n 	<div id="'+this.z7a0ec+'" style="display: none; width: 180px; height: '+(height+10)+'px; font-size: 12px; text-align: left; border: 1px solid #ccc; background: #FFF; ">';zae145+='\n 	  <div style="background: #F5F5F5; border-bottom: 1px solid #CCC; height: 55px; padding: 5px; font-weight: bold; text-align: center">Copy/paste the code below into your webpage or blog html to display this game:</div>';zae145+='\n 	  <textarea type="text" readonly="yes" onFocus="this.select();" style="width: 179px; margin: 0; height: '+(height-57)+'px; font-size: 10px; background: #ffd;  border: 0px;">&lt;iframe border="0" frameborder="0" allowtransparency="true" width="574" height="'+zec3aa+'" src="'+z6a70f+'"&gt;&lt;/iframe&gt;</textarea>';zae145+='\n 	</div>';}}
if(!z9309f){template+=z0f85a+zae145;}else{template+=z0f85a;
var height=ChessPiece3dInfo[this.setup.z70c6b]?(this.size*8+11+ChessPiece3dInfo[this.setup.z70c6b][this.size]["large"]):(this.size*8+11);template+='<div style="float: left; width: '+(this.size*8+22)+'px; height: '+height+'px;">';}template+='\n 	<div id="'+this.z24127+'" style="text-align: center; margin: 8px 9px 0;"></div>';
if(!z9309f){template+='\n     <div style="text-align: center; margin: 0px; padding: 0px;"><table style="width: '+(this.size*8)+'px; margin: 0 11px 0 11px; border: 0px; padding: 0px;" cellpaddin="0" cellspacing="0"><tr>';template+='\n       <td id="'+this.z6bf94+'" style="width: '+(this.size*2)+'px; padding: 8px 0 8px 0; text-align: left;">';template+='\n         <a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.toggleFenPgnBox(); return false;" class="chess_redbutton">FEN/PGN</a>';template+='\n       </td>';
var z5f93d=Math.floor(this.size/3-7)+"px";
var zd0752="1px "+z5f93d+" 1px "+z5f93d;
if(this.setup.zb4ad2!="simpleDiagram"){template+='\n 	  <td id="'+this.z29754+'" style="padding: 8px 0 8px 0; text-align: center;'+((this.setup.zb4ad2=="chessProblem"&&!this.zf0866)?'':' display: none;')+'">';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleHint(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">HELP</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleStart(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">RESTART</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleSolution(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">SOLUTION</a>';template+='\n 	  </td>';template+='\n 	  <td id="'+this.zaf7c7+'" style="width: '+(this.size*4)+'px; padding: 8px 0 8px 0; text-align: center;'+((this.setup.zb4ad2=="chessGame"||this.zf0866)?'':'display: none')+'">';template+='<a href="#" id="'+this.z6ba63+'" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.playpause(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">P</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'backwardBegin\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">|&lt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'backward10\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&lt;&lt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'backward1\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&lt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'forward1\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&gt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'forward10\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&gt;&gt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'forwardEnd\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&gt;|</a>';template+='</td>';template+='\n       <td id="'+this.z24e2b+'" style="width: '+(this.size*2)+'px; padding: 8px 0 8px 0; text-align: right;">';
if(!this.setup["moveListControl"])template+='\n         <a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.toggleMoveList(); return false;" class="chess_redbutton">MOVE&nbsp;LIST</a>';else template+='&nbsp;\n';template+='\n       </td>';}template+='\n     </tr></table></div>';template+='\n 	<div id="'+this.ze1249+'" class="large" style="text-align: center; margin-top: 5px; height: 16px;"></div>';template+='\n 	<div id="'+this.z45b1d+'" class="large" style="height: 25px; text-align: center; margin-top: 5px;"></div>';}else{template+='</div>';template+='<div style="float: left; width: 182px; height: '+height+'px;">';template+=zae145;template+='\n     <div style="text-align: center; margin: 0px; padding: 0px;"><table style="width: 182px; margin: 5px 0; border: 0px; padding: 0px;" cellpaddin="0" cellspacing="0"><tr>';
var z5f93d=Math.floor(this.size/3-7)+"px";
var zd0752="1px "+z5f93d+" 1px "+z5f93d;
if(this.setup.zb4ad2!="simpleDiagram"){template+='\n 	  <td id="'+this.z29754+'" style="padding: 8px 0 8px 0; text-align: center;'+((this.setup.zb4ad2=="chessProblem"&&!this.zf0866)?'':' display: none;')+'" colspan="4">';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleHint(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">HELP</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleStart(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">RESTART</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.showPuzzleSolution(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">SOLUTION</a>';template+='\n 	  </td>';template+='\n 	  <td id="'+this.zaf7c7+'" style="width: '+(this.size*4)+'px; padding: 8px 0 8px 0; text-align: center;'+((this.setup.zb4ad2=="chessGame"||this.zf0866)?'':'display: none')+'" colspan="4">';template+='<a href="#" id="'+this.z6ba63+'" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.playpause(); return false;" class="chess_gamenavbutton" style="'+zd0752+'">P</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'backwardBegin\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">|&lt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'backward10\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&lt;&lt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'backward1\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&lt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'forward1\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&gt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'forward10\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&gt;&gt;</a>';template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'forwardEnd\'); return false;" class="chess_gamenavbutton" style="'+zd0752+'">&gt;|</a>';template+='</td>';template+='\n</tr><tr>';}template+='\n       <td id="'+this.z6bf94+'" width="16%" style="padding: 8px 0 8px 0; text-align: left;">';template+='\n         <a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.flipBoard(); return false;" class="chess_redbutton">FLIP</a>';template+='\n       </td>';template+='\n       <td style="padding: 8px 0 8px 0; text-align: center;" width="30%">';template+='\n         <a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.toggleEmbed(); return false;" class="chess_redbutton">SHARE</a>';template+='\n       </td>';template+='\n		<td width="30%" style="padding: 8px 0 8px 0; text-align: center;">';template+='\n         <a href="'+Config.z688eb+'/analysis-board-editor.html?diagram_id='+zd6612+'" target="_blank" class="chess_redbutton">ANALYZE</a>';template+='\n		</td>';template+='\n       <td id="'+this.z24e2b+'" style="padding: 8px 0 8px 0; text-align: right;" width="18%">';
if(!this.setup["moveListControl"]){template+='\n 		<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.toggleFenPgnBox(); return false;" class="chess_redbutton">PGN</a>';}else{template+='&nbsp;\n';}template+='\n       </td>';template+='\n     </tr></table></div>';}
if(!this.setup["commentBox"]||z9309f){
if(!z9309f){template+='\n 	<div id="'+this.zd3182+'" class="normal" style="position: absolute; left: 10px; width: '+(this.size*8)+'px; text-align: center; background: #f5f5f5; border: 1px solid #cccccc; border-top: 2px solid #eeeeee; z-index: 100;">';template+='\n     <table style="border: 0px;">';template+='\n 	<tr style="height: 33px;"><td style="width: '+(!z9309f?(this.size*8):((this.size*8)+190))+'px; '+(z9309f?'text-align: left;':'text-align: center;')+'"><div id="'+this.z35a65+'" style="height: 33px; overflow: auto;"></div></td></tr>';template+='\n     <tr style="height: 25px;"><td valign="center" style="width: '+(!z9309f?(this.size*8):((this.size*8)+170))+'px; text-align: right;">';
if(this.setup.zb4ad2!="simpleDiagram"){template+='<a id="aPrevComment" href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'buttonMoveBackwardComment\'); return false;" class="chess_gamenavbutton">&lt;</a>';template+='<a id="aNextComment" href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'buttonMoveForwardComment\'); return false;" class="chess_gamenavbutton">&gt;</a>';}
if(!z9309f)template+='<a href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.zd3182+'\').style.display=\'none\'; return false;" class="chess_gamenavbutton" style="background: #c33;">X</a>';template+='</td></tr>';template+='\n     </table>';template+='\n 	</div>';}else{template+='</div>';template+='\n 	<div id="'+this.zd3182+'" class="normal" style="position: relative; width: '+((this.size*8)+190)+'px; margin: 11px; height: 63px; border: 1px solid #CCC; background: #FFF; clear: both; text-align: left; ">';template+='<div style="overflow: auto; height: 63px; ">';template+='<div id="'+this.z35a65+'" style="padding: 4px 4px 20px 4px;"></div>';template+='</div>';template+='<div style="position: absolute; top: 35px; left: 490px; padding: 5px; background: #FFFFFF; ">';template+='<a id="aPrevComment" href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'buttonMoveBackwardComment\'); return false;" class="chess_gamenavbutton">&lt;</a>';template+='<a id="aNextComment" href="#" onClick="return false;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.moveForwardBackward(\'buttonMoveForwardComment\'); return false;" class="chess_gamenavbutton">&gt;</a>';template+='</div></div>';}}
if(!z9309f){template+='\n     <div id="'+this.z26de6+'" style="position: absolute; left: 10px; width: '+(this.size*8)+'px; height: 100px; display: none; border: 1px solid #cccccc; border-top: 2px solid #eeeeee; z-index: 100;">';template+='\n       <textarea id="'+this.z7394e+'" type="text" readonly="yes" onFocus="this.select();" style="width: '+((this.size*8)-2)+'px; height: 98px; font-size: 8px; background: #ffd;  border: 0px;"></textarea>';template+='\n     </div>';}
if(this.setup.zb4ad2=="chessProblem"&&!this.zf0866){template+='\n     <div id="'+this.z18ecd+'" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 100;" onMouseUp="document.getElementById(\''+this.z85d5d+'\').diagramHandler.startPuzzle(); return false;">';template+='\n 	  <a href="#" onClick="return false;" style="position: absolute; width: '+(this.size*5)+'px; left: '+(this.size*1.5+5)+'px; top: '+(this.size*3.75)+'px; opacity: 0.9;" class="chess_boardprompt">Click here to begin this puzzle!</a>';template+='\n     </div>';}template+='\n </div>';insertContentAt(this.za31e4,template,"top");
var z222be=this.setup.z222be;
if(z222be=="center")z222be="none";this.za31e4.style.cssFloat=z222be;this.za31e4.style.styleFloat=z222be;
if(this.z85d5d.indexOf("chess_com_dailypuzzle")!=-1){this.za31e4.style.margin=this.setup.z222be=='center'?'0px auto 0px':'0px 15px 0px';}else{this.za31e4.style.margin=this.setup.z222be=='center'?'0px auto 15px':'0px 15px 15px';}},toggleMoveList:function(){
if(this.setup.zb4ad2!='chessGame'){
var div=document.getElementById(this.z48f02);
if(div.style.display=='none'){this.z9b3d8.show();div.style.display='block';}else{div.style.display='none';}}},toggleFenPgnBox:function(){
var zbe16e=document.getElementById(this.z7394e);
var div=document.getElementById(this.z26de6);
if(!zbe16e.value){
if(this.z9b3d8.z2e5e5.length>1){zbe16e.value=this.z9b3d8.z22aa7(this.setup.tags);}else{zbe16e.value=this.z9b3d8.z2e5e5[0].zd1deb;}}
if(div.style.display=='none'){
if(this.setup.zb4ad2=='chessGame'){document.getElementById(this.z48f02).style.display='none';document.getElementById(this.z7a0ec).style.display='none';}div.style.display='block';}else{div.style.display='none';
if(this.setup.zb4ad2=='chessGame'){document.getElementById(this.z7a0ec).style.display='none';document.getElementById(this.z48f02).style.display='block';}}},z57e03:function(){
var div=document.getElementById(this.z7a0ec);
if(div.style.display=='none'){
if(this.setup.zb4ad2=='chessGame'){document.getElementById(this.z48f02).style.display='none';document.getElementById(this.z26de6).style.display='none';}div.style.display='block';}else{div.style.display='none';
if(this.setup.zb4ad2=='chessGame'){document.getElementById(this.z26de6).style.display='none';document.getElementById(this.z48f02).style.display='block';}}},z1b515:function(){this.chessBoard.z02e31=!this.chessBoard.z02e31;this.chessBoard.refresh();},z2d27f:function(zfb82d){
var obj=zfb82d.za31e4.parentNode.parentNode.viewer;
if(!obj)obj=zfb82d.za31e4.parentNode.parentNode.parentNode.viewer;
var z00704=zfb82d.z9b3d8.zdf569.z2e5e5[zfb82d.z9b3d8.z3ac0a];
var z80123="";
if(z00704.z80123)z80123+=z00704.z80123;
var zbef97="";
var z1f9e1=zfb82d.z9b3d8.zdf569.z193c4?zfb82d.z9b3d8.z3ac0a%2==0:zfb82d.z9b3d8.z3ac0a%2==1;
if(z00704.z03a92){zbef97+="<b>";
var ze4630=zfb82d.z9b3d8.z193c4?zfb82d.z9b3d8.zdf569.z8ec4b+Math.floor((zfb82d.z9b3d8.z3ac0a)/2):zfb82d.z9b3d8.zdf569.z8ec4b+Math.floor((zfb82d.z9b3d8.z3ac0a-1)/2);
if(z1f9e1)zbef97+=ze4630+". ";else zbef97+=ze4630+"... ";zbef97+=z00704.z03a92;
if(z00704.zf98c9>0)zbef97+=z3717b(z00704.zf98c9);zbef97+="</b>";}
if(!obj.setup["commentBox"]){
if(obj.setup.zb4ad2!='chessGame')document.getElementById(obj.zd3182).style.display='none';
if(document.getElementById(obj.z35a65).innerHTML=z80123)
if(obj.setup.zb4ad2=="simpleDiagram"||obj.setup.zb4ad2=="chessGame"||obj.zf0866){document.getElementById(obj.zd3182).style.display='block';}}
if(document.getElementById(obj.z45b1d)){document.getElementById(obj.z45b1d).innerHTML=zbef97;
if(document.getElementById(obj.ze1249).innerHTML=(z1f9e1?"<b>Black to move</b>":"<b>White to move</b>"))document.getElementById(obj.ze1249).style.display='block';}},refresh:function(){this.chessBoard.refresh();this.z2d27f(this.chessBoard);
if(this.setup.zb4ad2!="simpleDiagram"){
var z6bf94=false;
var ze4596=false;
var zfcf85=false;
var z17070=false;z6bf94=this.setup.zb4ad2=='chessGame'||this.zf0866;zfcf85=z17070=((this.setup.zb4ad2=="chessGame"||this.zf0866)&&(this.z9b3d8.z2e5e5.length>1));ze4596=(this.setup.zb4ad2=="chessProblem"&&!this.zf0866);
if(this.z9b3d8.z2e5e5.length<2)z17070=false;document.getElementById(this.z6bf94).style.display='none';document.getElementById(this.z29754).style.display='none';document.getElementById(this.zaf7c7).style.display='none';document.getElementById(this.z24e2b).style.display='none';
if(navigator.userAgent.indexOf('MSIE')!=-1){
if(z6bf94)document.getElementById(this.z6bf94).style.display='block';
if(ze4596)document.getElementById(this.z29754).style.display='block';
if(zfcf85)document.getElementById(this.zaf7c7).style.display='block';
if(z17070)document.getElementById(this.z24e2b).style.display='block';}else{
if(z6bf94)document.getElementById(this.z6bf94).style.display='table-cell';
if(ze4596)document.getElementById(this.z29754).style.display='table-cell';
if(zfcf85)document.getElementById(this.zaf7c7).style.display='table-cell';
if(z17070)document.getElementById(this.z24e2b).style.display='table-cell';}}
var z9309f=(this.setup.zb4ad2=='chessGame');
if(!z9309f){this.za31e4.style.height='auto';this.za31e4.style.width=(this.size*8+22)+'px';}else{this.za31e4.style.height='auto';this.za31e4.style.width='574px';
if(document.getElementById(this.zd3182)&&!this.zc8cbd(this.z9b3d8)){document.getElementById(this.zd3182).style.display='none';}}},zc8cbd:function(obj){for(
var n=0;n<obj.z2e5e5.length;n++){
if(obj.z2e5e5[n].z80123)return true;
if(obj.z2e5e5[n].z4549b){for(
var a=0;a<obj.z2e5e5[n].z4549b.length;a++){
if(this.zc8cbd(obj.z2e5e5[n].z4549b[a]))return true;}}}return false;},moveForwardBackward:function(action){
if(this.zb0267)this.zfe67b();
if(action=="buttonMoveForwardComment"){
if(this.z9b3d8.z3ac0a<this.z9b3d8.zdf569.z2e5e5.length-1){for(
var n=this.z9b3d8.z3ac0a+1;n<this.z9b3d8.zdf569.z2e5e5.length;n++){
if(this.z9b3d8.zdf569.z2e5e5[n].z80123){this.z9b3d8.z77fdf(n);z9689c(this.chessBoard.z7834f,this.z9b3d8.z33622());this.chessBoard.refresh();break;}}}}else
if(action=="buttonMoveBackwardComment"){
if(this.z9b3d8.z3ac0a>1){for(
var n=this.z9b3d8.z3ac0a-1;n>0;n--){
if(this.z9b3d8.zdf569.z2e5e5[n].z80123){this.z9b3d8.z77fdf(n);z9689c(this.chessBoard.z7834f,this.z9b3d8.z33622());this.chessBoard.refresh();break;}}}}else{this.z9b3d8.zb5312(action);}},za1c34:function(z3d228){new Form.Element.EventObserver(document.getElementById(z3d228),this.z0bd82).parent=this;},zdba53:function(element,callback){new Form.Element.EventObserver(document.getElementById(element),callback).parent=this;},z8769b:function(z28335,callback){document.getElementById(z28335).parent=this;Event.observe(document.getElementById(z28335),"click",callback,false);},ze519b:function(){this.chessBoard.zba7a5=this.setup.zba7a5;this.chessBoard.z70c6b=this.setup.z70c6b;this.chessBoard.z222be=this.setup.z222be;this.chessBoard.z02e31=this.setup.z02e31;this.chessBoard.z06098=!this.setup.z02e31;this.chessBoard.z6a56d=this.setup.z6a56d;},z348a8:function(context,zea6ec,zcc2ef){
var zdbb15=zea6ec.id.substring(zea6ec.id.lastIndexOf("_")+1);
var z70602=context.z7834f.areas[zdbb15].zad85d[0];
var viewer=context.z551de;
if(viewer.setup.zb4ad2=="chessProblem"){
if(viewer.zf0866)return;
if(viewer.z17d1d)return;
if(context.z9b3d8.z2e5e5.length==context.z9b3d8.z3ac0a+1)return;
if(!context.z074d9)return;viewer.zcd559.zea856(false);
var zf8bdb=viewer.zcd559.z31a2a(z70602,zcc2ef,context.z7834f);
var z49dd9=(zf8bdb)?true:false;
if(z49dd9){
if(zf8bdb.z4e2bd)context.zae48c(context,viewer.z8145f,zdbb15,zcc2ef);else viewer.zf5466(context,zdbb15,zcc2ef);}else{viewer.refresh();}}},z8145f:function(context,z02256,zdbb15,z098d0){context.z551de.zf5466(context,zdbb15,z098d0,z02256);},zf5466:function(context,zdbb15,z098d0,z2ba00){
var z70602=context.z7834f.areas[zdbb15].zad85d[0];
var viewer=context.z551de;viewer.zcd559.zf5466(z70602,z098d0,context.z7834f,z2ba00,false,null);viewer.z9b3d8.z77fdf(viewer.z9b3d8.z3ac0a+1);viewer.refresh();
var zd1deb=zbb170(context.z7834f,viewer.zcd559);
if(zd1deb==context.z9b3d8.z2e5e5[context.z9b3d8.z3ac0a].zd1deb){viewer.z17d1d=true;
if(this.z9b3d8.z3ac0a+1<this.z9b3d8.z2e5e5.length-1){document.getElementById(viewer.ze1249).innerHTML='<img src="'+Config.DocumentRoot+'/images/icons/fam/accept.gif" align="top"> Correct!';
if(viewer.z52c71)clearTimeout(viewer.z52c71);viewer.z52c71=setTimeout('document.getElementById("'+viewer.z85d5d+'").viewer.move();',1000);}else{
if(viewer.z52c71)clearTimeout(viewer.z52c71);viewer.zf0866=true;viewer.refresh();document.getElementById(viewer.ze1249).innerHTML='You have solved this problem!';}}else{viewer.z9b3d8.z77fdf(viewer.z9b3d8.z3ac0a-1);z9689c(context.z7834f,viewer.z9b3d8.z33622());viewer.refresh();document.getElementById(viewer.ze1249).innerHTML='<img src="'+Config.DocumentRoot+'/images/icons/fam/exclamation.gif" align="top"> Incorrect! Try again...';
if(viewer.z52c71)clearTimeout(viewer.z52c71);viewer.z52c71=setTimeout('document.getElementById("'+viewer.z85d5d+'").viewer.refresh();',2000);}},startPuzzle:function(){document.getElementById(this.z18ecd).style.display='none';},showPuzzleHint:function(){
if(this.z17d1d)return;this.move();
if(this.z9b3d8.z2e5e5.length>this.z9b3d8.z3ac0a+1){this.z17d1d=true;
if(this.z52c71)clearTimeout(this.z52c71);this.z52c71=setTimeout('document.getElementById("'+this.z85d5d+'").viewer.move();',1000);}else{this.showPuzzleSolution();}},showPuzzleStart:function(){
if(this.z17d1d)return;this.z9b3d8.zb5312("backwardBegin");this.refresh();},showPuzzleSolution:function(){
if(this.z17d1d)return;this.zf0866=true;this.refresh();}}})();window['fillChessDiagramDivs']=function(){
var za6476=document.getElementsByClassName("chessDiagramDiv");
var z13560=document.getElementsByClassName("dailyPuzzleDiv");
var z47c36=function(n){new zba130(this[n]);this[n].style.padding='0';};for(
var n=0;n<za6476.length;n++){
if(!za6476[n].z975c1)setTimeout(bind(z47c36,za6476,n),1);}for(
var n=0;n<z13560.length;n++){
if(!z13560[n].z975c1)setTimeout(bind(z47c36,z13560,n),1);}};window['fillChessDiagramDivs']();
