$(document).ready(function() {
    $('#hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    
    $('#offers-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed: 1000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
          },
          {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
        ]
    });

    AOS.init();

    $('.menu').on('click', function() {
        $('.links').toggleClass('active');
        $('nav').toggleClass('active');
    });
});