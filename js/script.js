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



  $(window).on('load', function(){
       var addressString = '230 Broadway, NY, New York 10007, USA';
       var myLating = {lat: 40.712865, lng: -74.005920}

       // Render Map

       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 11,
         center: myLating
       });

          var marker = new google.maps.Maker({
            position : myLating,
            map: map
          });
       
      var infowindow = new google.maps.InfoWindow({
        content: addressString
      });

      maker.addListener('click', function() { 
         infowindow.open(map, marker);
      });

  });    



             /* Nav Bar */
     
$(function() {

     /*Show Hide Nav On load*/
  showHideNav();
    
    $(window).scroll(function(){

      /*Show Hide Nav On Windows Scroll*/
   
      showHideNav();
        
    });

    function showHideNav() {
      
      if ( $(window).scrollTop() > 50) {
          
        $("nav").addClass("white-nav-top");

        /* For Dark Logo  */

        $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
         
        // Show Back To Top Button

       $("#back-to-top").fadeIn()

      }   else{
          
        $("nav").removeClass("white-nav-top");  

        /* For Normal Logo  */

        $(".navbar-brand img").attr("src", "img/logo/logo.png");
              
           // Hide Back To Top Button

       $("#back-to-top").fadeOut()

      }

    }

});



    /* Smooth Scrolling */


    $(function(){
         
       $("a.smooth-scroll").click(function(Event){

        Event.preventDefault();
       
          // get Section id like #about, #work, etc
          
          var section_id = $(this).attr("href");

          $("html, body").animate({

            scrollTop: $(section_id).offset().top - 64


          }, 1250, "easeInOutExpo");

       });

    });