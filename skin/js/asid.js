const h3list=document["querySelectorAll"](".post-content h2,.post-content h3");
let lista="";
let h3tops=[];h3list["forEach"](function(c,ce){lista+='<li onclick="toH3('+ce+')">'+c["innerHTML"]+"</li>";
h3tops["unshift"](c["offsetTop"])});
if(lista){list='<div class="block-wrap"><h2 class="block-title">文章目录<i class="mcico mico-right"></i></h2><ul class="directory">'+lista+"</ul></div>";
document["getElementById"]("directory")["innerHTML"]=list}function toH3(c){let ce=h3list[c]["offsetTop"]-98;
window["scrollTo"]({top:ce,behavior:"smooth"})}let t1=0;let t2=0;let timer=null;let indexList=document["querySelectorAll"]("#directory li");;
