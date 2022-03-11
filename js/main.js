

$(function(){




// mainSwiper
var bullet = ['Hillside Villas', 'Versace Residencies', 'Library Lofts' ,'Our Story' , 'Serp & Molot', 'Eden Roc'];
var mainSwiper = new Swiper(".mainSwiper", {
    slidesPerView: 1,
    autoplay:{delay:8000},
    effect: "fade",
    loop:"true",
    pagination: {
      el: ".nav-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><span class="prog_bar"></span>' + '<a>' + (bullet[index]) + "</a>"  + "</span>";
      },
    },
   /*  pagination: {
      el: ".dot",
      clickable: true,
    }, */

    on:{
      init:function(){ //홈페이지 켜자마자 나온다 초기셋팅
        // alert("sd")
        $(".prog_bar").stop().css({width:0})//초기화 
        $(".swiper-pagination-bullet-active .prog_bar").animate({width:+100+"%"},8000) //애니메이션 8ㅊ동안 하기
      }
    }
  });

  mainSwiper.on('slideChangeTransitionStart', function () {
    $(".prog_bar").stop().css({width:0})//초기화
    $(".swiper-pagination-bullet-active .prog_bar").animate({width:+100+"%"},8000) //애니메이션 8ㅊ동안 하기//애니메이션 실행
    // alert('11');
  }); //슬라아드 바뀜과 동시에 시작하는거


  // $(".prog_bar").animate({width:+100+"%"},8000) //애니메이션 8ㅊ동안 하기
/*   
  mainSwiper.on('init', function () {
    
  }); */









// sectorsSwiper

var swiper = new Swiper(".sectorsSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 40,
    loop:"true",
    navigation: {
      nextEl: ".sectors_btn_next",
      prevEl: ".sectors_btn_prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 40
      },
      375: {
        slidesPerView: 1.2,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 40
      },
      // when window width is >= 480px
      1025: {
        slidesPerView: 3.2,
        spaceBetween: 40
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3.1,
        spaceBetween: 40
      }
    }
  });


// newsSwiper
var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      769: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  });



//srh_area

$(".srh_icon").click(function(e){
  e.preventDefault();
  $("body").addClass("hidden")
  $(".srh_area,.srh_back").addClass("open")
})

$(".close_btn").click(function(e){
  e.preventDefault();
  $("body").removeClass("hidden")
  $(".srh_area,.srh_back").removeClass("open")
})



// menu_icon
/* $(".menu_icon").click(function(e){
  e.preventDefault();

  $(this).addClass("open")
  $(".menu_area_outer").addClass("open")
  $(".header_area").addClass("open")
}) */

$(".menu_icon").click(function(e){
  e.preventDefault();

  if($(this).hasClass("open")){

    $(this).removeClass("open")
    $(".menu_area_outer").removeClass("open")
    $(".header_area").removeClass("open")
    $('body').removeClass('hide')
  }else{
    $(this).addClass("open")
    $(".menu_area_outer").addClass("open")
    $(".header_area").addClass("open")
    $('body').addClass('hide')
  }
})


//lang 스크롤
$(".lang_box .lang").scroll(function(){
  // alert("Ss")

  var scrT = $(".lang_box .lang").scrollTop();
  console.log(scrT)

  if(scrT > 0){
    $(".up_btn").addClass("show")
  }else{
    $(".up_btn").removeClass("show")
  }
})

$(".lang_box .lang").scroll(function(){
  // alert("Ss")

  var scrT2 = $(".lang_box .lang").scrollTop();
  console.log(scrT2)

  if(scrT2 == 350){
    $(".down_btn").addClass("hide")
  }else{
    $(".down_btn").removeClass("hide")
  }
})

$(".m_lang_area .wrap").click(function(e){
  e.preventDefault();

  $(".m_lang_content").addClass("on")
  $(".header_area").addClass('hide')
})
$(".m_lang_content .wrap .back").click(function(e){
  e.preventDefault();

  $(".m_lang_content").removeClass("on")
  $(".header_area").removeClass('hide')
})

// lang_box
/* var swiper = new Swiper(".lang_box", {
  cssMode: true,
  direction: "vertical",
  slidesPerView: 8.5,
  navigation: {
    nextEl: ".down_btn",
    prevEl: ".up_btn",
  },
  mousewheel: true,
}); */




// gsap

gsap.to(".news_slide .img_box img",{
  scrollTrigger:{
    trigger:".sc_news",
    // strat:"top top",
    strat:"top 80%",
    end:"bottom top",
    scrub:0.3,
    // markers:true,
  },
  yPercent:-15,
  ease: "none",
})








})