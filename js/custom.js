$(document).ready(function(){
	"use strict";
        /*
    ==============================================================
       STICKY HEADER  Script Start
    ==============================================================
     */
     $(window).scroll(function() {
          if ($(this).scrollTop() > 400){  
              $('header').addClass("sticky");
          }
          if ($(this).scrollTop() > 200){  
              $('header.header2').addClass("sticky");
          }
          if ($(this).scrollTop() > 50){  
              $('.header-3').addClass("sticky");
          }
          else{
              $('header').removeClass("sticky");
          }
      });
      /*
    ==============================================================
       SLECTRIC  Script Start
    ==============================================================
     */

   	if($("#select-menu").length){
  		$("#select-menu").selectbox();
  	}
  	if($("select").length){
  		$('select').selectric();
  	}

      /*
    ==============================================================
       COUNTDOWN  Script Start
    ==============================================================
     */
    if($('.countdown').length){
      $('.countdown').downCount({ date: '08/08/2016 12:00:00', offset: +1 });
    }
      /*
    ==============================================================
       COUNTER  Script Start
    ==============================================================
     */
    if($('.counter').length){
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
    }
      /*
    ==============================================================
       SEARCH BAR TOGGLE  Script Start
    ==============================================================
     */
    $(document).ready(function(){
      $(".show").click(function(){
        $(".searchform").toggle();
      });
    });
          /*
    ==============================================================
       Shopping Crat TOGGLE  Script Start
    ==============================================================
     */
      $(document).ready(function(){
        $(".cart").click(function(){
          $(".shoppingform").toggle();
        });
      });
        /*
      ==============================================================
           Banner Bx-Slider Script Start
      ==============================================================
       */
      if($('.bxslider').length){
            jQuery('.bxslider').bxSlider({
                auto: true,
                mode: 'fade',
                pager: false,
                speed: 1000,
                easing:'ease',
                autoDelay: 1000
             });
        }  
        /*
      ==============================================================
           Time Picker Script Start
      ==============================================================
       */

  		if($("input.timepicker").length){
  		    $('input.timepicker').timepicker({});
  		}
        /*
      ==============================================================
           TESTIMONIAL SLIDER Script Start
      ==============================================================
       */

      if($('#owlslider-testimonia').length){
        var owl = $("#owlslider-testimonia");
        owl.owlCarousel({ 
         autoPlay: 5000, //Set AutoPlay to 3 seconds
          itemsCustom : [
          [0, 1],
          [450, 1],
          [600, 1],
          [700,1],
          [1000, 2],
          [1200, 2]
          ],
          navigation : false

        });
      } 
        /*
      ==============================================================
           BRAND PARTNER SLIDER Script Start
      ==============================================================
       */




      if($('#brand').length){
        var owl = $("#brand");
        owl.owlCarousel({ 
         autoPlay: 5000, //Set AutoPlay to 3 seconds
          itemsCustom : [
          [0, 2],
          [450, 3],
          [600, 6],
          [700, 6],
          [1000, 6],
          [1200, 6]
          ],
          navigation : false

        });
      } 

        /*
      ==============================================================
          Blog Thumb Bx-Slider Script Start
      ==============================================================
       */
	  if($(".bxslider-thumb").length){ 
		  $('.bxslider-thumb').bxSlider({
			pagerCustom: '#bx-pager'
		  });
	  }

        /*
      ==============================================================
          Blog Detail Owl-Slider Script Start
      ==============================================================
       */
          if($("#owl-demo-6").length){ 
     
          var owl = $("#owl-demo-6");
         
          owl.owlCarousel({
             
              itemsCustom : [
                [0, 1],
                [450, 1],
                [600, 1],
                [700, 1],
                [1000, 1],
                [1200, 1],
                [1400, 1],
                [1600, 1]
              ],
              navigation : false
         
          });
         
		  }

  /* ---------------------------------------------------------------------- */
  /*  Google Map Function for Custom Style
  
  /* ---------------------------------------------------------------------- */
  
    if($('#map-canvas').length){
      google.maps.event.addDomListener(window, 'load', initialize);
    }
    
  /* ---------------------------------------------------------------------- */
  /*  DL Responsive Menu
  /* ---------------------------------------------------------------------- */
  if(typeof($.fn.dlmenu) == 'function'){
    $('#kode-responsive-navigation').each(function(){
      $(this).find('.dl-submenu').each(function(){
        if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
          var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
          parent_nav.append($(this).siblings('a').clone());
          
          $(this).prepend(parent_nav);
        }
      });
      $(this).dlmenu();
    });
  }
  /* ---------------------------------------------------------------------- */
  /*  FILTERABLE SCRIPT
  /* ---------------------------------------------------------------------- */
    if($(".isotope").length){

      // filter functions
      var filterFns = {
        greaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        even: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) % 2 === 0;
        }
      };

      // init Isotope
      var $container = $('.isotope').isotope({
        itemSelector: '.color-shape',
        filter: function() {
          var isMatched = true;
          var $this = $(this);
          
          for ( var prop in filters ) {
            var filter = filters[ prop ];
            // use function if it matches
            filter = filterFns[ filter ] || filter;
            // test each filter
            if ( filter ) {
              isMatched = isMatched && $(this).is( filter );
            }
            // break if not matched
            if ( !isMatched ) {
              break;
            }
          }
          return isMatched;
        }
      });

      // store filter for each group
      var filters = {};

      $('#filters').on( 'click', '.button', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[ filterGroup ] = $this.attr('data-filter');
        // arrange, and use filter fn
        $container.isotope('arrange');
      });

      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
      
    }

  /*
    =======================================================================
            Pretty Photo Script
    =======================================================================
  */
    if($("a[data-rel^='prettyPhoto']").length){
      $("a[data-rel^='prettyPhoto']").prettyPhoto();
    }


  /*
==============================================================
   DATE PICKER  Script Start
==============================================================
 */

   $('#cal2').click(function(){
       $(document).ready(function(){
           $("#my-datepicker").datepicker().focus();
       });
   });

   $('#cal3').click(function(){
       $(document).ready(function(){
           $("#my-datepicker2").datepicker().focus();
       });
   });

  if($("#calendar-sidebar").length){

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var events_array = [
        {
        title: 'Test1',
        start: new Date(2012, 8, 20),
        tip: 'Personal tip 1'},
    {
        title: 'Test2',
        start: new Date(2012, 8, 21),
        tip: 'Personal tip 2'}
    ];

    $('#calendar-sidebar').fullCalendar({
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        selectable: true,
        events: events_array,
        eventRender: function(event, element) {
            element.attr('title', event.tip);
        }
    });
  }
    /*
  ==============================================================
     Back to Top  Script Start
  ==============================================================
   */
  $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
          $('.go-up').fadeIn();
      } else {
          $('.go-up').fadeOut();
      }
  });
  $('.go-up').on('click', function () {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });

});
function initialize() {
  var MY_MAPTYPE_ID = 'custom_style';
  var map;
  var brooklyn = new google.maps.LatLng(53.925894, -106.1505673);
  var featureOpts = [
	{
	  stylers: [
	  { hue: '#f9f9f9' },     
	  { visibility: 'simplified' },
	  { gamma: 0.7 },
	  { saturation: -211 },
	  { lightness: 10 },
	  { weight: 0.6 }
	  ]
	},
	{
	featureType: "road",
	  elementType: "geometry",
	  stylers: [
	  { lightness: 30 },
	  { visibility: "simplified" }
	  ]
	},
	{
	  elementType: 'labels',
	  stylers: [      
	  { visibility: 'on' }
	  ]
	},
	{
	  featureType: 'water',
	  stylers: [
	  { color: '#a0c4fe' }
	  ]
	}
  ];  

  var mapOptions = {
	zoom: 9,
	scrollwheel: false,
	center: brooklyn,
	mapTypeControlOptions: {
	  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	},
	mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
	  mapOptions);

  var styledMapOptions = {
	name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}