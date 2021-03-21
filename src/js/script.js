$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 3000,
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

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__top-close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });

    function valideForms(form) {
            $(form).validate({
            rules: {
                phone: "required",
            },
            messages: {
                phone: "Введите номер телефона"
            }
        });
    };

    valideForms('#consultation form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});

