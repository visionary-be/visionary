$("#js-revoir-content").hide(),$("#js-revoir").prepend('<p><button id="js-revoir-trigger" href="#js-revoir" class="button-secondary"><i class="fa fa-chevron-down" aria-hidden="true"></i> <span class="label">Cliquez ici pour revoir votre test</span></button></p>'),$("#js-revoir-trigger").on("click",function(e){e.preventDefault(),$("#js-revoir-content").stop().slideToggle(),$("i.fa",this).stop().toggleClass("fa-rotate-180")});