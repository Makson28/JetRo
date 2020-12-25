$(function(){

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: $('.left'),
    nextArrow: $('.right'),
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    infinite: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
    responsive:[
      {breakpoint: 960,
        settings:{
          slidesToShow: 5,
          variableWidth: false,
        }
      },
      {breakpoint: 730,
        settings:{
          slidesToShow: 4,
          variableWidth: false,
        }
      },
      {breakpoint: 590,
        settings:{
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {breakpoint: 440,
        settings:{
          slidesToShow: 2,
          variableWidth: false,
        }
      }
    ]
  }); 

  // $('.responsive').slick({
  //   responsive:[
  //     {breakpoint: 960,
  //       settings:{
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //         variableWidth: false,
  //       }
  //     }
  //   ]
  // });

  $('.burger').on('click', function() {
    $('.menu').toggleClass('active');
    $('body').toggleClass('hidden');
  })

});

