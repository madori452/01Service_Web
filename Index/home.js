$(document).ready(function () {
  AOS.init({ once: true });
  // Load頁面
  setTimeout(function () {
    $('.pageload').fadeOut(1000);
  }, 3000);
  // 捲軸觸發graphic
  $(window).on('scroll', function () {
    var nowTop = $(window).scrollTop();
    // Nav
    if (nowTop > 60) {
      $('nav').addClass('fixed-bg');
    } else if (nowTop <= 10) {
      $('nav').removeClass('fixed-bg');
    }
    if (nowTop > $('#Works').offset().top + 200) {
      $('img.bus_car').addClass('bus_run');
      $('img.sun_rise').addClass('sun_rise_ani');
    }
    if (nowTop > $('#Works').offset().top - 300) {
      $('img.sun_rise').addClass('sun_rise_ani');
    }
    //back to top
    if (nowTop >= $('#Usecase').offset().top) {
      $('.top').fadeIn(1000);
    } else {
      $('.top').fadeOut(1000);
    }
  });
});
// back top click
$('.top').click(function () {
  $('html,body').animate({ scrollTop: 0 }, '500');
});
//案例遞增
var time01 = 490;
var time02 = 0;
var time03 = 1372;
var time04 = 0;
function count01() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos >= $('#Map').offset().top) {
    time01 += 1;
    $('.count-01').text(time01);
    if (time01 >= 500) {
      clearInterval(timer1);
    }
  }
}
function count02() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos >= $('#Map').offset().top) {
    time02 += 1;
    $('.count-02').text(time02);
    if (time02 >= 10) {
      clearInterval(timer2);
    }
  }
}
function count03() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos >= $('#Map').offset().top) {
    time03 += 1;
    $('.count-03').text(time03);
    if (time03 >= 1382) {
      clearInterval(timer3);
    }
  }
}
function count04() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos >= $('#Map').offset().top) {
    time04 += 1;
    $('.count-04').text(time04);
    if (time04 >= 10) {
      clearInterval(timer4);
    }
  }
}
var timer1 = setInterval(count01, 50);
var timer2 = setInterval(count02, 50);
var timer3 = setInterval(count03, 50);
var timer4 = setInterval(count04, 50);

$('.carousel').carousel({
  interval: 6000,
});
//-------- slidesToShow
$('.tarkikComandSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  cssEase: 'linear',
  arrows: false,
  pauseOnHover: false,
  centerMode: true,
  centerPadding: 0,
  variableWidth: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        speed: 500,
        cssEase: 'ease-out',
        centerMode: false,
        variableWidth: false,
        arrows: true,
      },
    },
  ],
});
