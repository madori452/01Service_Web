$(document).ready(function () {
  AOS.init({ once: true });

  // Load頁面
  var star = 60;
  var end = 100;
  var load_count = setInterval(function () {
    $('.pageload #count').html(star);
    star++;
    if (star == 101) {
      clearInterval(load_count);
      $('.pageload').fadeOut(2000);
    }
  }, 60);

  // 捲軸觸發graphic
  $(window).on('scroll', function () {
    var nowTop = $(window).scrollTop();
    var nowWidth = $(window).width();
    // console.log(nowWidth);
    if (nowTop >= $('#Road').offset().top - 10) {
      // alert('Road');
      $('.path').addClass('move_line');
      $('.path02').addClass('move_line_02');
      $('img.cloud_road01').addClass('cloud_show');
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
$('.carousel').carousel({
  interval: false,
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
