$(document).ready(function () {
  AOS.init({ once: true });

  // Load頁面
  var star = 50;
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

    // Nav Fix
    if (nowTop > 60) {
      $('nav').addClass('fixed-bg');
    } else if (nowTop <= 10) {
      $('nav').removeClass('fixed-bg');
    }
    if (nowTop >= $('#fish_graphic h2').offset().top - 10) {
      $('.circle span.circle_ball').addClass('circle_ball_ani');
      $('.bar_inner').addClass('bar_inner_ani');
      $('.text01').addClass('text_ani');
      $('img.tree, img.grid, img.thanks').addClass('circle_see');
      $('img.graphic_pic01_help, img.warn').addClass('circle_none');
    }
    if (nowTop >= $('#fish_graphic h2').offset().top - 10 && nowWidth <= 637) {
      // alert('asdasdas');
      $('.text01').removeClass('text_ani');
      $('.text01').addClass('text_ani02');
    }
    //back to top
    if (nowTop >= $('#dashboard').offset().top) {
      $('.top').fadeIn(1000);
    } else {
      $('.top').fadeOut(1000);
    }

    if (nowTop >= $('#offer').offset().top - 10) {
      $('img.diver').css('transform', 'rotate(180deg)');
      $('img.diver').css('transition', '0.5s');
    } else {
      $('img.diver').css('transform', 'rotate(0deg)');
      $('img.diver').css('transition', '0.5s');
    }
  });
  // back top click
  $('.top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, '500');
  });
  // Tab_Click
  // list01
  $('.list-group-item:nth-of-type(1)').click(function () {
    $('.list-group-item:nth-of-type(1)').css('color', '#49B5C7');
    $(
      '.list-group-item:nth-of-type(2),.list-group-item:nth-of-type(3),.list-group-item:nth-of-type(4)'
    ).css('color', '#ccd6d9');
    $(
      '.list-group-item:nth-of-type(1) .icon_on, .list-group-item:nth-of-type(2) .icon_off, .list-group-item:nth-of-type(3) .icon_off, .list-group-item:nth-of-type(4) .icon_off'
    ).css('display', 'block');
    $(
      '.list-group-item:nth-of-type(1) .icon_off,.list-group-item:nth-of-type(2) .icon_on,.list-group-item:nth-of-type(3) .icon_on,.list-group-item:nth-of-type(4) .icon_on'
    ).css('display', 'none');
  });
  // list02
  $('.list-group-item:nth-of-type(2)').click(function () {
    $('.list-group-item:nth-of-type(2)').css('color', '#AC69A7');
    $(
      '.list-group-item:nth-of-type(1),.list-group-item:nth-of-type(3),.list-group-item:nth-of-type(4)'
    ).css('color', '#ccd6d9');
    $(
      '.list-group-item:nth-of-type(2) .icon_on, .list-group-item:nth-of-type(1) .icon_off, .list-group-item:nth-of-type(3) .icon_off, .list-group-item:nth-of-type(4) .icon_off'
    ).css('display', 'block');
    $(
      '.list-group-item:nth-of-type(2) .icon_off,.list-group-item:nth-of-type(1) .icon_on,.list-group-item:nth-of-type(3) .icon_on,.list-group-item:nth-of-type(4) .icon_on'
    ).css('display', 'none');
  });
  // list03
  $('.list-group-item:nth-of-type(3)').click(function () {
    $('.list-group-item:nth-of-type(3)').css('color', '#3388C3');
    $(
      '.list-group-item:nth-of-type(1),.list-group-item:nth-of-type(2),.list-group-item:nth-of-type(4)'
    ).css('color', '#ccd6d9');
    $(
      '.list-group-item:nth-of-type(3) .icon_on, .list-group-item:nth-of-type(1) .icon_off, .list-group-item:nth-of-type(2) .icon_off, .list-group-item:nth-of-type(4) .icon_off'
    ).css('display', 'block');
    $(
      '.list-group-item:nth-of-type(3) .icon_off,.list-group-item:nth-of-type(1) .icon_on,.list-group-item:nth-of-type(2) .icon_on,.list-group-item:nth-of-type(4) .icon_on'
    ).css('display', 'none');
  });
  // list04
  $('.list-group-item:nth-of-type(4)').click(function () {
    $('.list-group-item:nth-of-type(4)').css('color', '#E19149');
    $(
      '.list-group-item:nth-of-type(1),.list-group-item:nth-of-type(2),.list-group-item:nth-of-type(3)'
    ).css('color', '#ccd6d9');
    $(
      '.list-group-item:nth-of-type(4) .icon_on, .list-group-item:nth-of-type(1) .icon_off, .list-group-item:nth-of-type(2) .icon_off, .list-group-item:nth-of-type(3) .icon_off'
    ).css('display', 'block');
    $(
      '.list-group-item:nth-of-type(4) .icon_off,.list-group-item:nth-of-type(1) .icon_on,.list-group-item:nth-of-type(2) .icon_on,.list-group-item:nth-of-type(3) .icon_on'
    ).css('display', 'none');
  });
  // 排放遞增
  var counter = 0;
  var dollar = 2000;
  var CO2kg = 1400;
  var count01 = setInterval(function () {
    $('.text04 .dollar').html(dollar);

    counter++;
    dollar++;
    CO2kg++;
    if (dollar == 2588) {
      clearInterval(count01);
    }
  }, 1000);
  var count02 = setInterval(function () {
    $('.text04 .co2').html(CO2kg);

    counter += 2;
    CO2kg++;
    if (dollar == 1542) {
      clearInterval(count02);
    }
  }, 1000);

  $('.carousel').carousel({
    interval: 3000,
  });
  //dashboard-01
  $('.sensor-01').mouseover(function () {
    $('.sensor-01-content').fadeIn('fast');
  });
  $('.sensor-01').mouseleave(function () {
    $('.sensor-01-content').fadeOut('fast');
  });
  //dashboard-02
  $('.sensor-02').mouseover(function () {
    $('.sensor-02-content').fadeIn('fast');
  });
  $('.sensor-02').mouseleave(function () {
    $('.sensor-02-content').fadeOut('fast');
  });
  //dashboard-03
  $('.sensor-03').mouseover(function () {
    $('.sensor-03-content').fadeIn('fast');
  });
  $('.sensor-03').mouseleave(function () {
    $('.sensor-03-content').fadeOut('fast');
  });
  //dashboard-04
  $('.sensor-04').mouseover(function () {
    $('.sensor-04-content').fadeIn('fast');
  });
  $('.sensor-04').mouseleave(function () {
    $('.sensor-04-content').fadeOut('fast');
  });
  //dashboard-05
  $('.sensor-05').mouseover(function () {
    $('.sensor-05-content').fadeIn('fast');
  });
  $('.sensor-05').mouseleave(function () {
    $('.sensor-05-content').fadeOut('fast');
  });
  //dashboard-06
  $('.sensor-06').mouseover(function () {
    $('.sensor-06-content').fadeIn('fast');
  });
  $('.sensor-06').mouseleave(function () {
    $('.sensor-06-content').fadeOut('fast');
  });
  //dashboard-07
  $('.sensor-07').mouseover(function () {
    $('.sensor-07-content').fadeIn('fast');
  });
  $('.sensor-07').mouseleave(function () {
    $('.sensor-07-content').fadeOut('fast');
  });
  //dashboard-08
  $('.sensor-08').mouseover(function () {
    $('.sensor-08-content').fadeIn('fast');
  });
  $('.sensor-08').mouseleave(function () {
    $('.sensor-08-content').fadeOut('fast');
  });
  //dashboard-09
  $('.sensor-09').mouseover(function () {
    $('.sensor-09-content').fadeIn('fast');
  });
  $('.sensor-09').mouseleave(function () {
    $('.sensor-09-content').fadeOut('fast');
  });
});
