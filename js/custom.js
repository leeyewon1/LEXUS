$(function () {
    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnActive: false,
    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
        $('.main_product_slide').slick('slickPrev');
    });

    $('.main_product_slide').slick({
        slidesToShow: 6,
        arrows: false,
        dotst: true,
    });

    $('.mainproduct .arrows .left').on('click', function () {
        $('.main_product_slide').slick('slickPrev');
    });
    $('.mainproduct .arrows .right').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });

})




// $(window).on('scroll', function () {
//     const sct = $(window).scrollTop();
//     if (sct > 300) {
//         $('.totop').addClass('on');
//         $('.Header').addClass('on');
//     } else {
//         $('.totop').removeClass('on');
//         $('.Header').removeClass('on');
//     }
// });

