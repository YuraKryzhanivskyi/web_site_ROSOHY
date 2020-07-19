
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


    //---------------------------------tabs-----------------------------------    
    let tab = function () {

        let tabNav = document.querySelectorAll('.tabs-nav__item'),
            tabContent = document.querySelectorAll('.tab'),
            tabName;

        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
            })
        }

    };

    tab();

    let tabhref = window.location.href.split('=')[1];
    if (tabhref == '1') {
        document.getElementsByClassName('tabs-nav__item')[0].click();
    } else if (tabhref == '2') {
        document.getElementsByClassName('tabs-nav__item')[1].click();
    } else if (tabhref == '3') {
        document.getElementsByClassName('tabs-nav__item')[2].click();
    } else if (tabhref == '4') {
        document.getElementsByClassName('tabs-nav__item')[3].click();
    }

    //---------------------------------phone-mask----------------------------------  


    $("#phone").inputmask({ "mask": "+380 (99) 999-99-99" }); //specifying options

    //---------------------------------animation AOS-------------------------------

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    //---------------------------------fix AOS for lazy load ------------------------------- 

    document.querySelectorAll('img')
        .forEach((img) =>
            img.addEventListener('load', () =>
                AOS.refresh()
            )
        );


})
