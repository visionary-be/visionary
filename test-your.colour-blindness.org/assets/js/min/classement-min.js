$(document).ready(function(){var e={},t=[],a=[],i=$("#list-normal"),n="",o={},r=!0,s=!1,d,l,c={succeed:"Aucun",protan:"Protane (Rouge - bleu vert)",deutan:"Deutan (Vert - rouge pourpre)",tritan:"Tritane (Violet - jaune vert)"},u=function(a){$.getJSON("/assets/js/data/data.json",function(i){e=i,t=shuffleArray(e.colors),p(),$("#choices .pick").shuffle(),$("#choices .pick").each(function(e,t){$(this).find("a").text(e+1)}),$("html").addClass("js-testDeClassement"),$(window).trigger("resize"),a&&a()})},m=function(){a=[],i.find("li").each(function(){void 0!==$(this).data("item")&&a.push(parseInt($(this).data("item")))}),$("#diag_serie").val(a.join(",")),t=orderArray(e.colors,a),r?s||($("#list-normal").addClass("sortable").sortable({disabled:!1,cancel:".ignore",unmove:".ignore",constraint:"x",updateHandler:function(e,t){return!0}}).on("sortable:start",function(e,t){t.item.addClass("dragging")}).on("sortable:stop",function(e,t){t.item.removeClass("dragging"),m()}),$(".color-item").first().addClass("pilot ignore"),s=!0):($("#list-normal").removeClass("sortable").sortable({disabled:!0}),$(".color-item").first().removeClass("pilot ignore")),$(window).trigger("resize"),o=new MomentOfInertia(t),g()},p=function(){for(i.empty(),d=0;d<t.length;d++)n=$("<li></li>").data("item",t[d].id).addClass("color-item").css("background-color",t[d].color),i.append(n);i.find("li").velocity("transition.slideDownIn",{duration:400,stagger:20}),m()},g=function(){var e="fail";o.c_index<=1.6?($(".cvd_type").html("n'êtes pas daltonien"),e="succeed"):o.majorAngle>=.7?($(".cvd_type").html("êtes daltonien de type protanope"),e="protan"):o.majorAngle<-65?($(".cvd_type").html("êtes daltonien de type tritanope"),e="tritan"):($(".cvd_type").html("êtes daltonien de type deuteranope"),e="deutan");var t=o.c_index;1.6>t&&(t=1.6),t>4.2&&(t=4.2),o.serie=a,o.result=e,o.ratio=Math.round(100*(t-1.6)/2.6)+"%";for(var i in o){var n,r=parseFloat(o[i]);switch(i){case"angle":n=r.toFixed(1);break;case"c_index":n=r.toFixed(2);break;case"majorAngle":n=r.toFixed(1);break;case"majorRadius":n=r.toFixed(1);break;case"minorRadius":n=r.toFixed(1);break;case"s_index":n=r.toFixed(2);break;case"tes":n=r.toFixed(1);break;case"serie":n=o[i].join(",");break;case"result":n=o[i];break;case"ratio":n=o[i]}$("#"+i).val(n)}};$("#test").length&&u(function(){$("#test").removeClass("hide").velocity("transition.slideUpIn",{duration:420})})});