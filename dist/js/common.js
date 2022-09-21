'use strict';

// Document ready
$(document).on('ready', function(){

  $('#j_test_01').on('click', function(){ $('#appButtonStatus').toggle(); $('#checkoutButtonStatus').hide(); })
  $('#j_test_02').on('click', function(){ $('#youPharmacyLine').show(); $('#appModal1').show(); })
  $('.j-app-modal-close-03').on('click', function(){ $(this).parents('.app-modal').hide(); })
  $('#j_test_04').on('click', function(){ $('#appModal1').show(); })
  $('#j_test_05').on('click', function(){ $('#appModal2').show(); })
  $('#j_test_09').on('click', function(){ $('#appModal3').show(); })
  $('#j_test_11').on('click', function(){ $('#appModal4').show(); })
  $('#j_test_12').on('click', function(){ $('#appModal5').show(); })
  
  $('#j_test_25').on('click', function(){ $('#appModal6').show(); })
  $('#j_test_26').on('click', function(){ $('#appModal7').show(); })
  $('#j_test_27').on('click', function(){ $('#appModal8').show(); })
  $('#j_test_28').on('click', function(){ $('#appModal9').show(); })
  
  $('#j_test_07').on('click', function(){ $('#section1').hide(); $('#section2').show(); $('#j_test_14').focus(); })
  
  $('#j_test_14').on('click', function(){ $(this).val('Рас').next('.search2__btn-microphone').hide().next('.search2__btn-barcode').hide().next('.search2__btn-close').show(); $('#searchListItem1').hide(); $('#searchListItem2').hide(); $('#searchListItem3').hide(); $('#searchListItem4').show(); $('#searchListItem5').show(); $('#searchListHead').hide(); })
  $('#j_test_15').on('click', function(){ $(this).hide().prev('.search2__btn-barcode').show().prev('.search2__btn-microphone').show().prev().val('').focus(); $('#searchListItem1').show(); $('#searchListItem2').show(); $('#searchListItem3').show(); $('#searchListItem4').hide(); $('#searchListItem5').hide(); $('#searchListHead').show(); $('#section1').show(); $('#section2').hide(); })

  $('#j_test_16').on('click', function(){ $('#section2').hide(); $('#section4').show(); })
  $('#j_test_19').on('click', function(){ $('#section1').hide(); $('#section3').show(); })
  $('#j_test_17').on('click', function(){ $('#catalog2').hide(); $('#catalog1').show(); $('#j_test_18').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_18').on('click', function(){ $('#catalog1').hide(); $('#catalog2').show(); $('#j_test_17').removeClass('active'); $(this).addClass('active'); })

  $('#j_test_20').on('click', function(){ $('#catalog4').hide(); $('#catalog3').show(); $('#j_test_21').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_21').on('click', function(){ $('#catalog3').hide(); $('#catalog4').show(); $('#j_test_20').removeClass('active'); $(this).addClass('active'); })

  $('.j_test_22').on('click', function(){ $('.section').hide(); $('#section6').show(); })
  $('#j_test_23').on('click', function(){ $('#section3').hide(); $('#section2').show(); })
  $('#j_test_41').on('click', function(){ $('#section7').hide(); $('#section2').show(); })
  $('#categoryList1').on('click', function(){ $(this).hide(); $('#categoryList2').show(); })
  $('#categoryList2').on('click', function(){ $(this).hide(); $('#categoryList3').show(); })
  $('#categoryList3').on('click', function(){ $(this).hide(); $('#categoryList1').show(); $('#section3').hide(); $('#section5').show(); })

  $('.j_test_24 > *:not(.disabled)').on('click', function(){ $(this).parent().children().removeClass('active'); $(this).addClass('active'); })
  $('#j_test_29').on('click', function(){ $(this).toggleClass('active'); })
  $('#j_test_30').on('click', function(){ $(this).hide(); $('#reviewForm').show(); })
  $('#j_test_31').on('click', function(){ $('#j_test_30').show(); $('#reviewForm').hide(); })
  $('#j_test_32').on('click', function(){ $('#mssgSuccess').show(); $('#j_test_30').show(); $('#reviewForm').hide(); })
  $('.j_test_33').on('click', function(){ var _this = $(this); $(this).parent().find('.btn').removeClass('active'); setTimeout(function(){ _this.addClass('active'); }, 100) })
  $('#j_test_35').on('click', function(){ $('#appFilter').hide(); })
  $('#j_test_37').on('click', function(){ $('#appFilter2').hide(); })
  $('#j_test_36').on('click', function(){ $('#appFilter').show(); })
  $('#j_test_38').on('click', function(){ $('#appFilter2').show(); })
  $('.j_test_39').on('click', function(){ $(this).next().toggle(); })
  $('.j_test_40').on('click', function(){ $(this).hide(); })

  $(document).on('click', '.collapsible-heading', function(e){
    e.preventDefault();
    var _this = $(this);
    if (_this.hasClass('open-block')) {
      _this.removeClass('open-block');
      _this.next().attr('aria-expanded', false).slideUp();
    } else {
      _this.addClass('open-block');
      _this.next().attr('aria-expanded', true).slideDown();
    }
  });

  var swiper = new Swiper(".j-product-gallery", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  

  $("#j-range-slider").ionRangeSlider({
    min: 1,
    max: 5,
    step: 1,
    from: 4,
    skin: "round",
    grid: true,
    grid_margin: true,
    hide_min_max: true,
    onStart: function (data) {
      $('.review_rating').prop("value", data.from);
      $('.irs-with-grid').attr('data-number', data.from);
    },
    onChange: function (data) {
      $('.review_rating').prop("value", data.from);
      $('.irs-with-grid').attr('data-number', data.from);
    }
  });
  autosize($('textarea.field-text__input.css-input'));

  inputFocus();
  autosize();
  filterBlock();

  formCheckedTest();
  cartCountTest();

  $('.test-navigation__btn').on('click', function(){ 
    var _this = $(this);
    var _attr = $(this).is("[data-section='section7']");
    $('.section').hide(); $('#' + $(this).data('section')).show(); 
    $('.test-navigation__btn').removeClass('active'); 
    $(this).addClass('active'); 

    if (_attr) {
      setTimeout(function(){
        $('#appSaveCart').show();
      }, 400);
    }
  });

  $('.test-navigation__btn[data-section="section7"]').on('click', function(){ $('#appButtonStatus').hide(); $('#checkoutButtonStatus').show(); });
  $('.test-navigation__hide').on('click', function(){ $(this).parent().toggleClass('show'); });
  
  $('#j_test_43').on('click', function(){ $('#appSaveCart').hide(); });

  // var masterTimeline = new TimelineMax({ paused:true }), headerTl = new TimelineMax();
  // // headerTl.set(".search", {autoAlpha: 0});
  // masterTimeline.add([headerTl]);
  // masterTimeline
  //   // .to($('.loader'), 1, {autoAlpha:  0})
  //   .fromTo($('.search'), 0.35, {autoAlpha: 0, y: -35}, {autoAlpha: 1, y: 0})
  //   .fromTo($('.section1__navigation-round'), 0.35, {autoAlpha: 0, y: 35}, {autoAlpha: 1, y: 0})
  //   .staggerFromTo($('.section1__navigation-btn'), 0.35, {autoAlpha: 0, y: 35}, {autoAlpha: 1, y: 0}, 0.2);
              // .set(".search")
              // .from(".search", 1, {autoAlpha: 0, y: -100}, 1)
              // .staggerFrom(".section1__navigation-btn", 1, {autoAlpha: 0, y: 100}, 0.1);
            // .from(".main-text-home-cta h4", 1, {x:-100, opacity:0},0)
            // .from(".buttons-under-nested-rows", 1, {x:-100, opacity:0},0)
            // .from(".devices-chat-picture", 1, {x:100, opacity:0});
  
  $(window).on('load', function(){
    // $(".loader").delay(400).fadeOut("slow");
    // masterTimeline.play();

    var swiper2 = new Swiper(".j-main-slider", {
      loop: true,
      effect: 'slide',
      mousewheel: false,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      on: {
        slideChangeTransitionStart: function () {
            // Slide captions
            var swiper = this;
            setTimeout(function () {
              var currentImg = $(swiper.slides[swiper.activeIndex]).attr("data-img");
            }, 500);
            gsap.to($(".swiper-img img"), 0.4, {autoAlpha: 0, x: -240, ease: Power1.easeIn});
        },
        slideChangeTransitionEnd: function () {
            // Slide captions
            var swiper = this;
            var currentImg = $(swiper.slides[swiper.activeIndex]).attr("data-img");
            $(".swiper-img").html(function() {
              return "<img src='" + currentImg + "' width='360' height='360' alt='' />";
            });
            gsap.from($(".swiper-img img"), 0.4, {autoAlpha: 0, x: 140, ease: Power1.easeOut});
        }
      }
    });
  });

  
});

// $(window).on('load', function(){
//   $(".loader").delay(400).fadeOut("slow");
// });

function inputFocus() {
  var jinput = $(".css-input");

  jinput.each(function(){
    var _this = $(this);
    var val = _this.val();
    var field = _this.parents('.j-field-text');

    if (val.length > 0 && _this.is('input') || val.length > 0 && _this.is('textarea')) {
      field.addClass("active-full");
    } else {
      field.removeClass("active-full");
    }

    // input on focus
    _this.focus(function () {
      field.addClass("active");
    }).blur(function () {
      field.removeClass("active");
    })

    _this.on('change', function () {
      var val = _this.val();

      if (val == '') {
        field.removeClass("active-full");
      } else {
        field.addClass("active-full");
      }
    });
  })
}

function filterBlock() {
  var block = $('.j-filter');
  var btn = $('#j_test_34');

  block.each(function () {
    var _this = $(this);
    var head = _this.find('.filter__block-head');
    var body = _this.find('.filter__block-wrapper');

    if (_this.hasClass('is-active')) {
      body.attr('aria-expanded', false).show();
    } else {
      body.attr('aria-expanded', true).hide();
    }

    head.on('click', function(){
      var _parent = $(this).parent();
      if (_parent.hasClass('is-active')) {
        _parent.removeClass('is-active');
        body.attr('aria-expanded', false).slideUp('fast');
      } else {
        _parent.addClass('is-active');
        body.attr('aria-expanded', true).slideDown('fast');
      }
    });
  });

  btn.on('click', function(e){
    e.preventDefault();
    $(this).parent().prev().find('.field-checkbox').removeClass('checked');
  })
}

function formCheckedTest() {
  var block = $('.j-checked');
  block.on('click', function (e) {
    e.preventDefault();
    var _this = $(this);
    if (_this.hasClass('checked') && !_this.hasClass('disabled')) {
      _this.removeClass('checked')
    } else if (!_this.hasClass('checked') && _this.hasClass('disabled')) {
      _this.removeClass('checked')
    } else {
      _this.addClass('checked')
    }
  });
}

function cartCountTest() {
  var block = $('.j-cart-count');

  block.each(function(){
    var _this = $(this);
    var plus = _this.find('.block-count__plus');
    var minus = _this.find('.block-count__minus');
    var input = _this.find('.block-count__input');
    var value = input.val();

    plus.on('click', function(){
      value = parseFloat(value) + 1;
      input.val(value + ' ' + input.data('label'));
    });
  
    minus.on('click', function(){
      if (value <= 0) return;
      value = parseFloat(value) - 1;
      input.val(value + ' ' + input.data('label'));
    });
  })
}