$(document).ready(function(){
/*Header typer*/
 new Typed('.header_typer', {
    strings: [
        "Sohel Rana.",
         "a Web Designer.",
         "a Freelancer.",
         "a Web Developer.",
         "a Graphic Designer.",
        ],
    typeSpeed:40,
    backSpeed:40,
    loop:true
  });

/* happy clients counterUp plugin*/
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/* Portfolio LightBox*/
lightbox.option({
    'resizeDuration':500,
    'wrapAround': true,
    'maxWidth':1000,
});

/*Portfolio Mixitup*/
 mixitup('.portfolio_grid');

/*testimonial Carousel*/
$('.owl-carousel').owlCarousel({
    autoplay:true,
    items:3,
    loop:Infinity,
    nav:true,
    responsive:{
        0:{
            items:1,
            responsiveRefreshRate:400,
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

/*Sticky menu*/
$(window).on('scroll', function(){
    if($(this).scrollTop() >500){
        $('.header_top').addClass('sticky_nav');
    }else{
        $('.header_top').removeClass('sticky_nav');
    }
});
/* Mobile menu */
$('.mobile_menu .open_nav').click(function(){
    $('nav').slideDown(1000);
    $(this).fadeOut();
    $('.close_nav').fadeIn();
});

$('.mobile_menu .close_nav').click(function(){
    $('nav').slideUp(1000);
    $(this).fadeOut();
    $('.open_nav').fadeIn();
});

/*scroll top btn*/
$(window).on('scroll', function(){
    if($(this).scrollTop() >600){
        $('.scroll_top_btn span').fadeIn();
    }else{
        $('.scroll_top_btn span').fadeOut();
    }
});
$('.scroll_top_btn span').click(function(){
    $(Window).scrollTop(0);
});

/*preloader*/
$(window).on('load', function(){
    $('.preloader').addClass('preloader_hide');
     $('.preloader').fadeOut();
})










});