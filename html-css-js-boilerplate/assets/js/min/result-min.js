$(document).ready(function(){var t={},r=parseInt($("#stage").attr("width")),a=parseInt($("#stage").attr("height")),e=[],o=[],n=$("#list-normal"),s=$(".js-print"),p,c=function(r){$.getJSON("/assets/js/data/data.json",function(r){t=r,o=$("#scheme").data("serie").split(","),e=orderArray(t.colors,o),l(),i(),s.on("click",function(t){return window.print(),t.preventDefault(),!1})})},l=function(){function e(t){return{x:t.x*n+r/2,y:t.y*n+a/2}}for(var o=t.colors.length,n=r/130;o--;)t.colors[o].x=t.colors[o].v*n+r/2,t.colors[o].y=t.colors[o].u*n+a/2;t.protan.from=e(t.protan.from),t.protan.to=e(t.protan.to),t.deutan.from=e(t.deutan.from),t.deutan.to=e(t.deutan.to),t.tritan.from=e(t.tritan.from),t.tritan.to=e(t.tritan.to)},i=function(){var e=$("#stage");e.attr("width",r).attr("height",a),e.empty();var n=10,s=2;for(p=0;p<t.colors.length;p++){var c=0==p?"P":p,l=$(document.createElementNS("http://www.w3.org/2000/svg","text")),i=-4,x=7>p?-14:24;l.text(c).css("font-size","12px").attr("x",t.colors[p].x+i).attr("y",t.colors[p].y+x),e.append(l);var d=$(document.createElementNS("http://www.w3.org/2000/svg","circle"));d.attr("cx",t.colors[p].x).attr("cy",t.colors[p].y).attr("r",n).attr("fill",t.colors[p].color),e.append(d)}var w=$(document.createElementNS("http://www.w3.org/2000/svg","line"));w.attr("x1",t.protan.from.x).attr("y1",t.protan.from.y).attr("x2",t.protan.to.x).attr("y2",t.protan.to.y).attr("stroke","#ffaaaa").attr("stroke-width",s);var f=pointInAngleDist(5,t.protan.from,t.protan.to),m=$(document.createElementNS("http://www.w3.org/2000/svg","text"));m.text("Protan").css({"font-size":"12px",transform:"translate("+f.x+"px, "+f.y+"px) rotate("+f.angle+"deg)"}).attr("x",0).attr("y",0);var g=$(document.createElementNS("http://www.w3.org/2000/svg","line"));g.attr("x1",t.deutan.from.x).attr("y1",t.deutan.from.y).attr("x2",t.deutan.to.x).attr("y2",t.deutan.to.y).attr("stroke","#aaffaa").attr("stroke-width",s);var f=pointInAngleDist(-10,t.deutan.from,t.deutan.to),u=$(document.createElementNS("http://www.w3.org/2000/svg","text"));u.text("Deutane").css({"font-size":"12px",transform:"translate("+f.x+"px, "+f.y+"px) rotate("+f.angle+"deg)"}).attr("x",0).attr("y",0);var y=$(document.createElementNS("http://www.w3.org/2000/svg","line"));y.attr("x1",t.tritan.from.x).attr("y1",t.tritan.from.y).attr("x2",t.tritan.to.x).attr("y2",t.tritan.to.y).attr("stroke","#aaaaff").attr("stroke-width",s);var f=pointInAngleDist(-10,t.tritan.from,t.tritan.to),v=$(document.createElementNS("http://www.w3.org/2000/svg","text"));v.text("Tritane").css({"font-size":"12px",transform:"translate("+f.x+"px, "+f.y+"px) rotate("+f.angle+"deg)"}).attr("x",0).attr("y",0);var h=$(document.createElementNS("http://www.w3.org/2000/svg","polyline"));h.attr("stroke","#666666").attr("fill","none").attr("stroke-width",s);var I="";for(I=parseInt(t.colors[0].x)+","+parseInt(t.colors[0].y)+" ",p=1;p<o.length;p++){var N=t.colors[parseInt(o[p])];I+=parseInt(N.x)+","+parseInt(N.y)+" "}h.attr("points",I),e.append(h),e.append(w),e.append(g),e.append(y),e.append(m),e.append(u),e.append(v)};$("#stage").length&&c()});