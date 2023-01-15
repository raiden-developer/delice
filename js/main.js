$(function(){

  $('.slider__inner').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
  });

  $('.partners-slider').slick({
    slidesToShow: 5,
    // slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
          centerMode: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // $('.slider__inner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   var img_bg = $('.slider__item:eq('+ (nextSlide+1) +')').attr("data-bgstyle");
  //   console.log(img_bg, $("#slider").length);
  //   $("#slider").attr("style", img_bg);
  // });

  // Меню
  $('.menu-burger').on('click', function () {
    $('.menu__list').toggleClass('active');
  });
  $('.menu__list-close').on("click", function () {
    $('.menu__list').removeClass('active');
  });

  // Слайдер на странице о нас, наша команда
  $('.about-team__inner').slick({
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    infinite: true,
  });

  // Скрипт для плавного скролла якорей
  $("body").on('click', '.anchor-scroll', function(e){
		var fixed_offset = 140;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});


});