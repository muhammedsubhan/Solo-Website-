$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
 
 });


 $(function(){
    $("#team-members").owlCarousel({
      items:2,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
      nav:true,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']


    });
  });



  $(function(){
    
     $("#progress-elements").waypoint(function(){

      $(".progress-bar").each(function(){

        $(this).animate({
          width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
  
      });
      this.destroyed(); 
     

     }, { offset: 'bottom-in-view'} );
  });

    
     $(function(){

        $("#services-tabs").responsiveTabs({
 
          animation: 'slide',
      });

     });



      /* ============================ 
       | | |    PORTFOLIO
         ============================*/
 

    $(window).on('load', function() {
        $(".isotope-container").isotope({
        
        });
        // filter items on button click
        $("#isotope-filters").on('click', 'button', function(){

            var filterValue = $(this).attr('data-filter');
            
            $(".isotope-container").isotope({
              
           filter: filterValue

            });
            $("#isotope-filters").find('.active').removeClass('.active');
            $(this).addClass('.active');
            
        });
    });  



       
    $(function(){
       
        $("#portfolio-wrapper").magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image'
         
        });
    });



    
 $(function(){
  $("#testimonial-slider").owlCarousel({
    items:1,
    autoplay:false,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']


  });
});



$(function (){

  $('.counter').counterUp({
    delay: 20,
    time: 3000
});
   });




   $(function(){
    $("#clients-list").owlCarousel({
      items:6,
      autoplay:false,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
      nav:true,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  
  
    });
  });

