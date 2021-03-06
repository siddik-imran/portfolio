$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    //smooth Scroll
    $('nav a[href*="#"').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000 );
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0 
        }, 2000 );
    });

    //fade in fade out animation
    AOS.init({
        easing: 'ease',
        duration: 1000,
        once:true //animation work only one time
    });
});