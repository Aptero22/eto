$(document).ready(function(){
    $('[data-modal=new_review]').on('click', function() {
        $('.overlay, #new_review').fadeIn('slow');
    });
    $('.modal__top-close').on('click', function() {
        $('.overlay, #new_review').fadeOut('slow');
    });
});

