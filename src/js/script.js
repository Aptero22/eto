$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: $(".slick-prev"),
        nextArrow: $(".slick-next"),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    dots: false
                }
            },
        ]
    });


    $('[data-modal=new_review]').on('click', function() {
        $('.overlay, #new_review').fadeIn('slow');
    });
    $('.modal__top-close').on('click', function() {
        $('.overlay, #new_review').fadeOut('slow');
    });
});

