var tpj=jQuery;
			
			var revapi1078;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_1078_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1078_1");
				}else{
					revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
						sliderType:"standard",
jsFileLocation:"revolution/js/",
						sliderLayout:"auto",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							
							
						},
						viewPort: {
							enable:true,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[600,600,500,400],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
							type:"mouse",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});
	
/* progress js */	
    window.onload=function(){
	$('.circleGraphic1').circleGraphic();
	$('.circleGraphic2').circleGraphic({'color':'#fff'});
	$('.circleGraphic3').circleGraphic({'color':'#fff'});

	$('.circleGraphic4').circleGraphic({'color':'#fff'});

}

/* gallery */
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
})

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


/* blog-single */
$('.blog-content').isotope({
  itemSelector: '.grid-content',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.blog-sizer'
  }
})

/* parallexie js */
$('.parallaxie').parallaxie();

//map js
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

//blog single reply section js
$(".reply-button1").click(function(){
	$(".post-media-1").slideToggle(1000);
})

$(".reply-button2").click(function(){
	$(".post-media-2").slideToggle(1000);
})

$(".reply-button3").click(function(){
	$(".post-media-3").slideToggle(1000);
})


//blog single media section js
 $(".media-hidden").slice(0, 3).show();
     
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".media-hidden:hidden").slice(0, 1).slideDown();
      if ($(".media-hidden:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
	
	
	
function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);
  
 //main meno color change js
 $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 600) {
	    $(".navbar").css({"background-color": "yellow", "transition": ".7s"});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
	  
	  if (scroll > 380) {
	    $(".blog-single-navbar").css({"background-color": "yellow", "transition": ".7s"});
	  }

	  else{
		  $(".blog-single-navbar").css("background" , "transparent");  	
	  }
  })
  //perloader js
  $(window).on("load",function(){
	  $(".loader-wrapper").fadeOut("slow");
  })
  
  
  //Scrollup js
  $(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});