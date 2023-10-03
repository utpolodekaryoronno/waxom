$('document').ready(function(){

    $('.menu-bar').click(function(){
        $('.menu').slideToggle();
        // $(this).hide();
        // $('.menu').addClass('open');
       
    });

    // all-Selection
    // wow.js
    new WOW().init();  


    // Banner owlCarousel
    $(".banner_main").owlCarousel({
        responsive: true,
        loop:true,
        nav:true,
        dots:true,
        // autoplay:true,
        slideSpeed : 200,
        items:1,
       

    });

    // service-area
    // owlCarousel
    $(".service").owlCarousel({
        responsive: true,
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        margin: 30,
        slideSpeed : 200,
        responsive:{
            320:{
                items:1,
            },
            450:{
                items:2,
            },
            767:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });


    // recent-post-area
    // owlCarousel
    $(".post").owlCarousel({
        responsive: true,
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        margin: 30,
        slideSpeed : 200,
        responsive:{
            320:{
                items:1,
            },
            575:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });

    // mixitup plugin
    var containerEl = document.querySelector('.project-items'); 
    var mixer = mixitup(containerEl, {
        load: {
            filter: 'all'
        },
        animation: {
            effectsIn: 'fade translateY(-100%)',
            effects: 'fade translateZ(-100px)'
        }
    });

    // fun-fact-area 
    $('.count-num').rCounter({
        duration: 30
      });
    
});


