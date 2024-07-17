$(document).ready(function() {

    new WOW().init();

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });




    $('.scroll-btn').on('click', function() {
        var scrollTo = $(this).attr('data-scroll');
        $('html, body').animate({
            scrollTop: $(scrollTo).offset().top
        }, 800);
        $('.header-bars').removeClass('active');
        $('.mob-menu').fadeOut(200);
        $('.header').removeClass('nav-active');
    });
    $('.header-shadow').click(function(){
        $('.header-bars').removeClass('active');
        $('.mob-menu').fadeOut(200);
        $('.header').removeClass('nav-active');
    });





    $('video').each(function() {
        this.volume = 0.2; // Встановлює гучність на 50%

        $(this).hover(
            function() {
                $(this).attr('controls', 'controls');
            },
            function() {
                $(this).removeAttr('controls');
            }
        );

        $(this).on('play', function() {
            $('video').each(function() {
                if (this !== event.target) {
                    this.pause();
                }
            });
        });
    });


    $('.reviews-slider').slick({
        slidesToShow: 3,
        prevArrow: $('.reviews-slider-arrow-left'),
        nextArrow: $('.reviews-slider-arrow-right'),
        dots: true,
        responsive: [{
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 574, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $(document).ready(function() {
        $('#phone').mask('+38 (000) 000-00-00');
    });

    $('.header-bars').click(function() {
        $(this).toggleClass('active');
        $('.mob-menu').fadeToggle(0);
        $('.header').toggleClass('nav-active');
    });


});