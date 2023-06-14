
window.onload = load;

function load() {
  $("#loading").fadeOut(1000);
}

$(".back").click(function(){
  history.go(-1);
});

$(function(){
   AOS.init({
      offset: 200,
      duration: 600,
      easing: 'linear'
  });
})

$(window).scroll(function(){
     last=$("body").height()-$(window).height()-50;
     if($(window).scrollTop()>=last){
     $( ".bg_bottom" ).fadeIn(1400);
     }else {
      $(".bg_bottom").fadeOut(1000);
    }
})

function goS(){
  $("#back_to_top").attr("class","back_to_top");
  $(".back_to_top").css('opacity','1');
  if ( $(document).scrollTop() <= 300 ){
      $(".back_to_top").hide();
    }else {
      $(".back_to_top").show();
  }

  $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
            $(".back_to_top").fadeIn();
        } else {
            $(".back_to_top").fadeOut();
        }
  });

  window.onresize = function(){
    if(document.body.clientWidth>768){
      document.getElementById("ham_btn").checked = false;
      goM();
    }
  }
}

function goM(){
  $("#back_to_top").removeAttr("class").css('display','none');
  window.onresize = function(){
    if(document.body.clientWidth<=768){
      goS();
    }
  }
}



$(function(){
  $("#back_to_top").click(function(){
    $("html,body").animate({ scrollTop: 0 }, "normal");  
    return false;
  });
  if(document.body.clientWidth<=768){
    goS();
  } else{
    goM();
  }   
});


 $('.main_box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.main_nav'
});
$('.main_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.main_box',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.dessert_box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.dessert_nav'
});
$('.dessert_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.dessert_box',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.drink_box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.drink_nav'
});
$('.drink_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.drink_box',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.other_nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});



$(function(){
  $('#tab_use').masonry({
    itemSelector : '.use_box',
    gutter: 0,
    columnWidth :285
  });
});

$(function(){
  var $li = $('ul.tab-title li');
  $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab_item').hide();
    
  $li.click(function(){
    $($(this).find('a'). attr ('href')).show().siblings('.tab_item').hide();
    $(this).addClass('active'). siblings ('.active').removeClass('active');
    $(function(){
      $('#tab_use').masonry({
        itemSelector : '.use_box',
        gutter: 0,
        columnWidth :285
      });
    });
    $(function(){
      $('#tab_eat').masonry({
        itemSelector : '.eat_box',
        gutter: 0,
        columnWidth :285
      });
    });
    $(function(){
      $('#tab_other').masonry({
        itemSelector : '.other_box',
        gutter: 0,
        columnWidth :285
      });
    });
  });
});

