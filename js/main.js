/*--------slider hero------*/
$('.hero-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  autoplay: true
});

/*--------slider product------*/
$('.product-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: '<i class="fas fa-chevron-left prev-arrow"></i>',
  prevArrow: '<i class="fas fa-chevron-right next-arrow"></i>'
});

/*--------subscrime form validation------*/
$('.subscribe-form').validate({
  rules: {
    name: {
      required: true,
      minlength: 1
    },
    company: {
      required: false,
      minlength: 1
    },
    email: {
      required: true,
      email: true
    }
  }
});

jQuery.validator.setDefaults({
  debug: true
});

$('.subscribe-form__button').click(function() {
  $('.subscribe-form').valid();
});
