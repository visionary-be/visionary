$(document).ready(function(){$("#js-revoir-content").hide(),$("#js-revoir").prepend('<p><button id="js-revoir-trigger" href="#js-revoir" class="button-secondary"><i class="fa fa-chevron-down" aria-hidden="true"></i> <span class="label">Cliquez ici pour revoir votre test</span></button></p>'),$("#js-revoir-trigger").on("click",function(e){e.preventDefault(),$("#js-revoir-content").stop().slideToggle(),$("i.fa",this).stop().toggleClass("fa-rotate-180")}),$("#subscribe-mail").on("click",function(e){e.preventDefault(),$("#connexion-form").addClass("hidden"),$("#register-form").fadeIn().removeClass("hidden")}),$("#login-mail").on("click",function(e){e.preventDefault(),$("#register-form").addClass("hidden"),$("#connexion-form").fadeIn().removeClass("hidden")});var e=/^(.+?)\[(.+)\]$/,i=/^[0-9]+$/,n=/^\-?[0-9]+$/,a=/^\-?[0-9]*\.?[0-9]+$/,t=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,r=/^[a-z]+$/i,s=/^[a-z0-9]+$/i,o=/^[a-z0-9_\-]+$/i,l=/^[0-9]+$/i,d=/^[1-9][0-9]*$/i,u=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,c=/[^a-zA-Z0-9\/\+=]/i,v=/^[\d\-\s]+$/,p=/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,f=/\d{4}-\d{1,2}-\d{1,2}/;$("#auth-register").submit(function(e){var i=$("input[name*='name']"),n=$("input[name*='email']"),a=$("input[name*='password']"),r=$("select[name*='countries_iso']"),s=$("input[name*='postcode']"),o=$("select[name*='birth_date']"),d=$("input[name*='gender']"),u=[];if(i.val().length<2&&u.push([i,"Votre nom est trop court"]),t.test(n.val())&&n.val().indexOf(".")!=-1||u.push([n,"Veuillez indiquer une adresse email valide."]),(0===a.val().length||a.val().length<8)&&u.push([a,"Veuillez indiquer un mot de passe valide."]),l.test(o.val())||u.push([o,"Veuillez indiquer votre année de naissance."]),u.length){e.preventDefault(),$(".voice--error").each(function(){$(this).remove()});for(var c=0;c<u.length;c++){var v=u[c][0],p=u[c][1];v.after("<p class='voice--error'>"+p+"</p>")}}})});