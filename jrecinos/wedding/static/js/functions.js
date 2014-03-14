

// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if (navigator.appVersion.indexOf("Mac") !== -1) {
	jQuery('html').addClass('osx');
}
// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";  


$('.animated').appear(function() {
  $(this).each(function(){ 
    $(this).css('visibility','visible');
    $(this).addClass($(this).data('type'));
  });
},{accY: -150});


/* 	PRETTYPHOTO */
$('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});
$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'normal', slideshow: 5000, autoplay_slideshow: false, social_tools: false}); 




/*  STICKY 	*/

$('.navbar').sticky({topSpacing:25});

 
  
$('.navbar, .select-menu').onePageNav({
  currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollOffset: 90,
	scrollThreshold: 0.1,
	filter: '',
	easing: 'swing',
});

/* 	MOBILE MENU	*/
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Navigation"
	}).appendTo(".select-menu");


	$(".nav a").each(function() {
	 var select = $(this);
	 $("<option />", {
	     "value"   : select.attr("href"),
	     "text"    : select.attr("title")
	 }).appendTo(".select-menu");
	});



/* SCROLL 	*/

  
$(".select-menu").change(function() {
	
		$('html, body').animate({
	        scrollTop: $($(this).find("option:selected").val()).offset().top
	    }, 750, function(){
	    	window.location.hash = $(this).find("option:selected").val();
	    });
	});



/* FITTEXT */		
    $(".fittext1").fitText(1, { minFontSize: '15px', maxFontSize: '30px' });
    $(".fittext2").fitText(0.4, { minFontSize: '30px', maxFontSize: '86px' });
    $(".fittext3").fitText(0.4, { minFontSize: '30px', maxFontSize: '86px' });
    $(".fittext4").fitText(1.5, { minFontSize: '15px', maxFontSize: '24px' });

/* 	External Links	*/	

	(function() {
	    $(window).load(function() {
			$('a[rel=external]').attr('target','_blank');	
		});                                            
	})();  


/* 	Flex Initialize	*/	

$(window).load(function() {
 
  /*header carousel slider */
  $('.slider1').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 300, 
    itemMargin: 0,
    slideshow: false,
    useCSS : false,
    directionNav: false
  });


  /* gallery slider */
  $('.flexslider').flexslider({ 
    animation: "slide",
    slideshow: false,
    useCSS : false,
    directionNav: false
  });
  
  $('.bottom-nav-content-slider').flexslider({
    animation: "slide",
    slideshow: false,
    useCSS : false,
    prevText: "",
    nextText: "",
    animationLoop: true 	
  });   
  

});

}); 