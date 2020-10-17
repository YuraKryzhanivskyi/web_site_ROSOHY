
$(document).ready(function () {

    $('.link__gallery2').click(function (event) {
        $('.larg__slider').slick('goTo', 1)
    })
    //---------------------------------header fixed----------------------------------  

    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function () {
        scrollPos = $(this).scrollTop();

        if (scrollPos > headerH - 1) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    });

    //---------------------------------scroll----------------------------------

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockID = $(this).data('scroll')
        let blockOffset = $(blockID).offset().top;

        //---------------------------------burger----------------------------------

        $('.burger, nav').removeClass('active');
        $('body').removeClass('lock');

        $("html, body").animate({
            scrollTop: blockOffset - 70
        }, 700);
    });

    $('.burger').click(function (event) {
        $('.burger, nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    //---------------------------------slick slider-------------------------------- 

    $('.slider-1 ').slick({
        infinite: true,
        slidesToShow: 1,
    });


    $('.slider').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        easing: 'linear',
        draggable: false,
        touchThreshold: 10,
        touchMove: false,
        pauseOnFocus: false,
        pauseOnHover: false,

    });

    $('.slider-service').slick({

        infinite: true,
        arrows: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        easing: 'linear',
        //    draggable:false,
        touchThreshold: 10,
        //    touchMove:false,
        pauseOnFocus: false,
        pauseOnHover: false,

    });

    $('.slider__rooms').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        speed: 1000,
        dots: true,
        draggable: false,
        touchThreshold: 10,
        touchMove: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1030, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 570, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    $('.slider__reviews').slick({
        slidesToShow: 1,
        //        slidesToScroll:3,
        infinite: true,
        speed: 1000,
        dots: true,
        draggable: false,
        touchThreshold: 10,
        touchMove: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        adaptiveHeight: true,


    });



    //---------------------------------sep rooms----------------------------------  
    $('.larg__slider').slick({
        infinite: false,

        draggable: false,
        arrows: false,
        fade: true,
        asNavFor: '.small__slider',
    });

    $('.small__slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.larg__slider',
        enterMode: true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 570, // mobile breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]

    });





    //---------------------------------phone-mask----------------------------------  


    $("#phone").inputmask({ "mask": "+380 (99) 999-99-99" }); //specifying options




})
