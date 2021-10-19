$(document).scroll(function(){
    $('.navbar').toggleClass('onScrolled', $(this).scrollTop() > 0);
});

$('.wrapperBanner').slick({
slidesToShow: 1,
slidesToScroll: 1,
prevArrow : '.leftArrow',
nextArrow : '.rightArrow',
autoplay: true,
dots :false,
autoplaySpeed: 4000,
speed: 1000,
responsive: [
    {
    breakpoint: 600,
    settings: {
        dots :true,
    }
    },
]
});


$('.wrapperBenefit').slick({
infinite : false,
slidesToShow: 2.2,
slidesToScroll: 1,
prevArrow : '.note',
nextArrow : '.note',
dots :false,
speed: 1000,
prevArrow : '.prevArrow',
nextArrow : '.nextArrow',
responsive: [
    {
    breakpoint: 1400,
        settings: {
            slidesToShow: 3.2,
            slidesToScroll: 2,
        }
    },
    {
    breakpoint: 1024,
        settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
        }
    },
    {
    breakpoint: 600,
        settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
        }
    },
]
});