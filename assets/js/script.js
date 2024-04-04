// sticky menu bar //

function menuSticky() {
    if ($(".is-sticky-on").length > 0) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 250) {
                $('.is-sticky-on').addClass('is-sticky-menu');
            }
            else {
                $('.is-sticky-on').removeClass('is-sticky-menu');
            }
        });
    }
}
menuSticky()

// counter //


$(document).ready(function () {
    $('.top').hide(0)

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(300);
        }
    });
    $('.top').click(function () {
        event.preventDefault();

        $('html , body').animate({ scrollTop: 0 }, 500);
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// owl carousel //

$(document).ready(function () {

    $('.slider').owlCarousel({
        autoplay: true,
        loop: true,
        autoplay: true,
        slideBy: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        autoplay: 3000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3
            }
        }
    })
});




// top button //


$(document).ready(function () {
    $('.top').hide(0)

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(300);
        }
    });
    $('.top').click(function () {
        event.preventDefault();

        $('html , body').animate({ scrollTop: 0 }, 500);
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
