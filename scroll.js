$(function(){   
	var nav = $('#menuHeader');   
	$(window).scroll(function () { 
		if ($(this).scrollTop() > 150) { 
			nav.addClass("menu-fixo");
			$('body').css('padding-top', 70);
		} else { 
			nav.removeClass("menu-fixo"); 
			$('body').css('padding-top', 0);
		} 
	});  
});