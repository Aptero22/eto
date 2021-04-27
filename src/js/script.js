$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: false,
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

    const get = document.getElementById.bind(document);
    const query = document.querySelector.bind(document);



    const overlay_review = get('overlay_review');
    const overlay_consultation = get('overlay_consultation');
    const button_review = document.querySelectorAll('.open_review');
    const button_consultation = document.querySelectorAll('.open_consultation');
    const modal_review = query('.overlay .modal_review');
    const modal_consultation = query('.overlay .modal_consultation');

    // Menu 320px

    const menu = get('menu');
    const hamburger = get('hamburger');
    const menu_overlay = get('menu_overlay');

    menu_overlay.addEventListener('click', menu_overlayClick);
    
    hamburger.addEventListener('click', function (event) {
            menu_overlay.classList.add('active');
    });

    menu.addEventListener('click', modalClick);

    overlay_review.addEventListener('click', overlay_reviewClick);
    overlay_consultation.addEventListener('click', overlay_consultationClick);
    button_review.forEach(function (entry) { 
        entry.addEventListener('click', function (event) {
            overlay_review.classList.add('visible');
        });
    });
    button_consultation.forEach(function (entry) {
        entry.addEventListener('click', function (event) {
            overlay_consultation.classList.add('visible');
        });
    });
    modal_review.addEventListener('click', modalClick);
    modal_consultation.addEventListener('click', modalClick);

    function overlay_reviewClick() {
        overlay_review.classList.remove('visible');
    }
    function menu_overlayClick() {
        menu_overlay.classList.remove('active');
    }

    function overlay_consultationClick() {
        overlay_consultation.classList.remove('visible');
    }

    function modalClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    }

    $('.modal__top-close').on('click', function() {
        overlay_review.classList.remove('visible');
        overlay_consultation.classList.remove('visible');
    });

    $('.menu__close').on('click', function() {
        menu_overlay.classList.remove('active');
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

    // Slider2
    document.documentElement.classList.add('js');

/// ----------------------------

const $rootSingle = $('.cSlider--single');
const $rootNav = $('.cSlider--nav');

 $rootSingle.slick({
	slide: '.cSlider__item',
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: false,
 	fade: false,
 	adaptiveHeight: true,
 	infinite: false,
	useTransform: true,
 	speed: 400,
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $rootNav.on('init', function(event, slick) {
 		$(this).find('.slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
	 	slide: '.cSlider__item',
 		slidesToShow: 5,
 		slidesToScroll: 5,
 		dots: false,
 		focusOnSelect: false,
 		infinite: false,
        prevArrow: $(".slider__nav-prev"),
        nextArrow: $(".slider__nav-next"),
        adaptiveHeight: true,
 		responsive: [{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 4,
 				slidesToScroll: 4,
 			}
 		}, {
 			breakpoint: 640,
 			settings: {
 				slidesToShow: 3,
 				slidesToScroll: 3,
			}
 		}, {
 			breakpoint: 420,
 			settings: {
 				slidesToShow: 2,
 				slidesToScroll: 2,
		}
 		}]
 	});

    $rootSingle.on('afterChange', function(event, slick, currentSlide) {
        $rootNav.slick('slickGoTo', currentSlide);
        $rootNav.find('.slick-slide.is-active').removeClass('is-active');
        $rootNav.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('is-active');
    });

    $rootNav.on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $rootSingle.slick('slickGoTo', goToSingleSlide);
    });
});

