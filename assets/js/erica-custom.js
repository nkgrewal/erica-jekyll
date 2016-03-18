//MENU
var menu = $('.mobile');
var menuLinks = $('.mobile a');
var activeLink = $('.mobile .active');
var inactiveLinks = menuLinks.not('.active').not('.name');

//Hide menu items, show current selection
inactiveLinks.stop(true,true).slideUp('easeInCubic');

//Reveal menu on hover
menu.bind({
	mouseover: function(){
	  inactiveLinks.stop(true, true).delay(400).slideDown('easeInCubic');
	},
	mouseout: function(){
	  inactiveLinks.stop(true, true).delay(900).slideUp('easeOutCubic');
	}
});

//Reveal menu on-click
activeLink.bind({
	click: function(e){
	  e.preventDefault();
	  inactiveLinks.stop(true, true).delay(400).slideToggle('easeOutCubic');
	}
});

//Locks menu to top of the screen
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 114) {
        menu.addClass('fixed');
    } else {
        menu.removeClass('fixed');
    }
});


//CAROUSEL
if($('.carousel').length >0 ){
	$('.carousel').carousel('pause');
	$('.carousel').carousel({interval: false});
	$(".carousel-inner").swipe( {
		//Generic swipe handler for all directions
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
		  $(this).parent().carousel('next'); 
		},
		swipeRight: function() {
		  $(this).parent().carousel('prev'); 
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		threshold:0
	});
};