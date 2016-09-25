/**
 * Created by superMoon on 2016-09-25.
 * 허정문에 의해 수정된 js 파일입니다
 */

// notice 줄바꿈처리 jquery
$(document).ready(function(){
    $('.box').dotdotdot();
});

// Material Layout
$('.parallax').parallax();
$(function () {
    var hBanner = $('#short-banner').height();
    // var cbHeight = hBanner - 56;
    var cbHeight = hBanner - 56;
    // var hHeight = hBanner - 86; // for Title
    var hHeight = hBanner -56; // for Title
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= cbHeight) {
            $(".halo-nav").addClass('h-bg');
        }
        if (scroll <= cbHeight) {
            $(".halo-nav").removeClass('h-bg');
        }
        // For heading Title
        if (scroll >= hHeight) {
            // $(".banner-title").hide();
            $("#short-banner-title").hide();
            $(".halo-nav .title").show();
        }
        if (scroll <= hHeight) {
            // $(".banner-title").show();
            $("#short-banner-title").show();
            $(".halo-nav .title").hide();
        }
    });
    // opacity Plush button
    var fadeStart = 50 // 100px scroll or less will equiv to 1 opacity
    fadeUntil = 150 // 150px scroll or more will equiv to 0 opacity
    fading = $('.resize');
    $(window).on('scroll', function () {
        var offset = $(document).scrollTop(),
            opacity = 0;
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        }
        fading.css({
            'transform': 'scale(' + opacity + ')'
        });
    });
});


