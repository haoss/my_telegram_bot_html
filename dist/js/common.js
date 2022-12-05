'use strict';

// Document ready
$(document).on('ready', function(){

  // $('#j_test_01').on('click', function(){ $('#appButtonStatus').toggle(); $('#checkoutButtonStatus').hide(); })
  $('.j_test_02').on('click', function(){ 
    $('#youPharmacyLine').show(); 
    $('#appModal1').show(); 
    $('.j_test_56').show(); 
  })
  $('#j_test_04').on('click', function(){ $('#appModal1').show(); })
  $('.j_test_05').on('click', function(){ $('#appModal2').show(); })
  $('#j_test_09').on('click', function(){ $('#appModal3').show(); })
  $('#j_test_11').on('click', function(){ $('#appModal4').show(); })
  $('#j_test_12').on('click', function(){ $('#appModal5').show(); })
  
  $('#j_test_25').on('click', function(){ $('#appModal6').show(); })
  $('#j_test_26').on('click', function(){ $('#appModal7').show(); })
  $('#j_test_27').on('click', function(){ $('#appModal8').show(); })
  $('#j_test_28').on('click', function(){ $('#appModal9').show(); })
  
  $('.j_test_07').on('click', function(){ 
    $('.section').hide(); $('#section2').show(); $('#j_test_14').focus(); 
    setTimeout(function(){
      $('#appSearchNo').show();
    }, 400);
  });
  
  $('#j_test_14').on('click', function(){ $(this).val('Рас').next('.search2__btn-microphone').hide().next('.search2__btn-barcode').hide().next('.search2__btn-close').show(); $('#searchListItem1').hide(); $('#searchListItem2').hide(); $('#searchListItem3').hide(); $('#searchListItem4').show(); $('#searchListItem5').show(); $('#searchListHead').hide(); })
  $('#j_test_15').on('click', function(){ $(this).hide().prev('.search2__btn-barcode').show().prev('.search2__btn-microphone').show().prev().val('').focus(); $('#searchListItem1').show(); $('#searchListItem2').show(); $('#searchListItem3').show(); $('#searchListItem4').hide(); $('#searchListItem5').hide(); $('#searchListHead').show(); $('#section1').show(); $('#section2').hide(); setTimeout(function(){ swiper2 = new Swiper(".j-main-slider", swiper2options); }, 400); })

  $('#j_test_16').on('click', function(){ $('.section').hide(); $('#section4').show(); })
  $('.j_test_19').on('click', function(){ $('.section').hide(); $('#section3').show(); })
  $('#j_test_17').on('click', function(){ $('.section').hide(); $('#catalog1').show(); $('#j_test_18').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_18').on('click', function(){ $('#catalog1').hide(); $('#catalog2').show(); $('#j_test_17').removeClass('active'); $(this).addClass('active'); })

  $('#j_test_20').on('click', function(){ $('#catalog4').hide(); $('#catalog3').show(); $('#j_test_21').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_52').on('click', function(){ $('#catalog2').hide(); $('#catalog1').show(); $('#j_test_53').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_21').on('click', function(){ $('#catalog3').hide(); $('#catalog4').show(); $('#j_test_20').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_53').on('click', function(){ $('#catalog1').hide(); $('#catalog2').show(); $('#j_test_52').removeClass('active'); $(this).addClass('active'); })

  $('.j_test_22').on('click', function(){ $('.section').hide(); $('#section6').show(); })
  $('.j_test_23').on('click', function(){ $('.section').hide(); $('#section2').show(); })
  $('#j_test_41').on('click', function(){ $('.section').hide(); $('#section2').show(); })
  $('#categoryList1').on('click', function(){ $(this).hide(); $('#categoryList2').show(); })
  $('#categoryList2').on('click', function(){ $(this).hide(); $('#categoryList3').show(); })
  $('#categoryList3').on('click', function(){ $(this).hide(); $('#categoryList1').show(); $('.section').hide(); $('#section5').show(); })

  $('.j_test_24 > *:not(.disabled)').on('click', function(){ $(this).parent().children().removeClass('active'); $(this).addClass('active'); })
  $('#j_test_29').on('click', function(){ $(this).toggleClass('active'); $('#appButtonStatus').show(); $('#checkoutButtonStatus').hide(); $('.section-bottom').css('bottom', '47px'); })
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
  $('.j_test_42').on('click', function(){ $(this).prev().removeClass('--more'); $(this).hide(); })
  $('.j_test_43').on('click', function(){ $(this).parents('.app-modal').hide(); });
  $('.j_test_44').on('click', function(){ $('.section').hide(); $('#section8').show(); });
  $('.j_test_45').on('click', function(e){
    e.stopPropagation();
    var _this = $(this);
    if (_this.hasClass('--is-active')) {
      _this.hide().prev().show();
    } else {
      _this.hide().next().show();
    }
    $('#checkoutButtonStatus').hide();
    $('#appButtonStatus').show();
    $('.section-bottom').css('bottom', '47px');
  });
  $('#appButtonStatus').on('click', function(){ $(this).hide(); $('.section').hide(); $('#section7').show(); $('.section-bottom').css('bottom', '0px'); });
  
  $('.j_test_46').on('click', function(){
    var _this = $(this);
    var dataCount = parseFloat(_this.data('count-test'));
    var count = parseFloat($('.j_test_46').length);
    $('.j_test_46').hide();
      
    if (dataCount < count) {
      _this.next().show();
    } else {
      $('.j_test_46').filter('[data-count-test="1"]').show();
    }

    // console.log('кол-во - ' + count + "; " + "текущий " + dataCount);
  });

  $('.j_test_47').on('click', function(e){ e.stopPropagation(); $('.test-navigation__btn[data-section="section1"]').trigger('click'); });
  $('.j_test_48').on('click', function(e){ e.stopPropagation(); $('#categoryList1').show(); $('#categoryList2').hide(); });
  $('.j_test_49').on('click', function(e){ e.stopPropagation(); $('#categoryList2').show(); $('#categoryList3').hide(); });
  $('.j_test_50').on('click', function(e){ e.stopPropagation(); $('#section3').show(); $('#categoryList1').hide(); $('#categoryList2').hide(); $('#categoryList3').show(); $('#section5').hide(); $('#section6').hide(); });
  $('#j_test_51').on('click', function(){ $('.section').hide(); $('#section2').show(); })
  $('.j_test_55').on('click', function(){ $(this).parents('.app-filter').hide(); })
  $('.j_test_57').on('click', function(){ 
    $(this).parent().find('.btn').addClass('--outline');
    $(this).removeClass('--outline');
  })
  $('.j_test_58').on('click', function(){
    $(this).hide().parent().find('.j_test_59').show();
    $(this).parent().find('.menu__wrapper').show();
  });
  $('.j_test_59').on('click', function(){
    $(this).hide().parent().find('.j_test_58').show();
    $(this).parent().find('.menu__wrapper').hide();
  });
  $('.j_test_60').on('click', function(){ 
    $('.section').hide(); 
    $('#section1').show(); 
    $('.menu__wrapper').hide();
    $('.j_test_58').show();
    $('.j_test_59').hide();
    swiper2.destroy();
    setTimeout(function(){
      swiper2 = new Swiper(".j-main-slider", swiper2options);
      // console.log('click');
      $('#appPreloader').hide();
    }, 1000);
  });
  $('.j_test_61').on('click', function(){ $('.section').hide(); $('#section9').show(); });
  $('.j_test_62').on('click', function(){ $(this).html('ул. Сумская, 11, г. Харьков. Харьквоская').parent().addClass('--filled'); });
  $('.j_test_63').on('click', function(){ 
    $('.j_test_63').removeClass('is-active'); 
    $(this).toggleClass('is-active'); 
    $('#section13_holder1').hide();
    $('#section13_app_wrapper2').show();
    $('#section13_map_modal1').css('bottom', '0');
    $('#section13ButtonStatus').hide();
  });
  $('.j_test_64').on('click', function(){ $('.tab__block').removeClass('is-active'); $(this).toggleClass('is-active'); $('#section11_block1').show(); $('#section11_block2').hide(); });
  $('.j_test_65').on('click', function(){ $('.tab__block').removeClass('is-active'); $(this).toggleClass('is-active'); $('#section11_block2').show(); $('#section11_block1').hide(); });
  $('.j_test_66').on('click', function(){ $('.section').hide(); $('#section10').show(); });
  $('.j_test_67').on('click', function(){ $('#appGeoSave').show(); });
  $('.j_test_68').on('click', function(){ $('#section13_app_wrapper1').show(); $('#section13_holder1').hide(); $('#section13ButtonStatus').hide(); $('#section13_map_modal1').css('bottom', '0'); });
  $('.j_test_69').on('click', function(){ $('#section13_app_wrapper1').hide(); $('#section13_holder1').show(); $('#section13ButtonStatus').show(); $('#section13_map_modal1').css('bottom', '47px'); });
  $('.j_test_70').on('click', function(){ $('.map-block__marker-test').removeClass('is-active'); $('#section13_holder1').show(); $('#section13_app_wrapper2').hide(); $('#section13ButtonStatus').show(); $('#section13_map_modal1').css('bottom', '47px'); });
  $('.j_test_71').on('click', function(){ $('.section').hide(); $('#section12').show(); $('#section12ButtonStatus').show(); });
  $('#section12ButtonStatus').on('click', function(){ $('.section').hide(); $('#section13').show(); $(this).hide(); $('#section13ButtonStatus').show(); });
  $('#section13ButtonStatus').on('click', function(){ $('.section').hide(); $('#section12').show(); $(this).hide(); $('#section12ButtonStatus').show(); });
  $('.j_test_72').on('click', function(){ 
    $('#section14_input1').val('Пушкинская').parent().addClass('active-full');
    $('#section14_input2').val('5').parent().addClass('active-full');
    $('#section14_btn1').prop('disabled',false);
  });
  $(document).on('click', '.j_test_73', function(){
    var _this = $(this); 
    $('#section14_mssg_alert1').show(); 
    _this.hide().removeClass('j_test_73').addClass('j_test_74');
    setTimeout(function(){
      $('#section14_mssg_alert1').hide();
      _this.show();
    }, 3000);
  });
  $(document).on('click', '.j_test_74', function(){
    var _this = $(this); 
    $('#section14_div1').show();
    _this.hide();
    $('#section14_greenBtn').show();
    $('#section14_map_modal1').css('bottom', '47px');
  });
  $('.j_test_75').on('click', function(){
    $('#section14_div1').hide();
    $('#section14_greenBtn').hide();
    $('#section14_btn1').show().addClass('j_test_73');
    $('#section14_map_modal1').css('bottom', '0px');
  });
  $('.j_test_76').on('click', function(){ $('.section').hide(); $('#section14').show(); });
  $('.j_test_77').on('click', function(){
    var _this = $(this);
    _this.parent().find('.j_test_77').removeClass('is-active');
    _this.addClass('is-active');
    _this.parents('.delivery').find('.delivery__wrapper-content').hide();
    $('#' + _this.data('tab')).show();
  });
  $('.j_test_78').on('click', function(){ $('#section19_promo_1').hide(); $('#section19_promo_2').show(); });
  $('.j_test_79').on('click', function(){ $('#section19_promo_2').hide(); $('#section19_promo_1').show(); $('#section19_foot_1').show(); });

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

  var swiper2options = {
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
          gsap.to($(".swiper-img img"), 0.4, {x: -240, ease: Power1.easeIn});
      },
      slideChangeTransitionEnd: function () {
          // Slide captions
          var swiper = this;
          var currentImg = $(swiper.slides[swiper.activeIndex]).attr("data-img");
          $(".swiper-img").html(function() {
            return "<img src='" + currentImg + "' width='240' height='280' alt='' />";
          });
          gsap.from($(".swiper-img img"), 0.4, {x: 140, ease: Power1.easeOut});
      }
    }
  };
  var swiper2 = new Swiper(".j-main-slider", swiper2options);

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
    var _attr1 = $(this).is("[data-section='section1']");
    var _attr2 = $(this).is("[data-section='section2']");
    var _attr7 = $(this).is("[data-section='section7']");
    var _attr8 = $(this).is("[data-section='section8']");
    var _attr12 = $(this).is("[data-section='section12']");
    var _attr13 = $(this).is("[data-section='section13']");
    $('.section').hide(); $('#' + $(this).data('section')).show(); 
    $('.test-navigation__btn').removeClass('active'); 
    $(this).addClass('active'); 
    swiper2.destroy();
    $('#section12ButtonStatus').hide();
    $('#section13ButtonStatus').hide();

    if (_attr13) {
      $('#section13ButtonStatus').show();
      $('#section12ButtonStatus').hide();
      $('#checkoutButtonStatus').hide();
    } else if (_attr12) {
      $('#section12ButtonStatus').show();
      $('#section13ButtonStatus').hide();
      $('#checkoutButtonStatus').hide();
    } else if (_attr7) {
      setTimeout(function(){
        $('#appSaveCart').show();
      }, 400);
      $('#appButtonStatus').hide(); 
      $('#checkoutButtonStatus').show();
      $('.section-bottom').css('bottom', '47px');
    } else if (_attr8) {
      $('#appButtonStatus').show(); 
      $('#checkoutButtonStatus').hide();
      $('.section-bottom').css('bottom', '47px');
    } else if (_attr1) {
      $('#appPreloader').show();
      setTimeout(function(){
        swiper2 = new Swiper(".j-main-slider", swiper2options);
        // console.log('click');
        $('#appPreloader').hide();
      }, 1000);
    } else if (_attr2) {
      setTimeout(function(){
        $('#appSearchNo').show();
      }, 400);
    }
  });

  $('.test-navigation__hide').on('click', function(){ $(this).parent().toggleClass('show'); });

  $('#backTop').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 800);
    return false;
  });
  
});

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