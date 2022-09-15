'use strict';

// Document ready
$(document).on('ready', function(){

  $('#j_test_01').on('click', function(){ $('#appButtonStatus').toggle(); })
  $('#j_test_02').on('click', function(){ $('#youPharmacyLine').show(); $('#appModal1').show(); })
  $('#j_test_03').on('click', function(){ $('#appModal1').toggle(); })
  $('#j_test_04').on('click', function(){ $('#appModal1').show(); })
  $('#j_test_05').on('click', function(){ $('#appModal2').show(); })
  $('#j_test_09').on('click', function(){ $('#appModal3').show(); })
  $('#j_test_11').on('click', function(){ $('#appModal4').show(); })
  $('#j_test_12').on('click', function(){ $('#appModal5').show(); })
  $('#j_test_06').on('click', function(){ $('#appModal2').hide(); })
  $('#j_test_08').on('click', function(){ $('#appModal3').hide(); })
  $('#j_test_10').on('click', function(){ $('#appModal4').hide(); })
  $('#j_test_13').on('click', function(){ $('#appModal5').hide(); })
  
  $('#j_test_07').on('click', function(){ $('#section1').hide(); $('#section2').show(); $('#j_test_14').focus(); })
  
  $('#j_test_14').on('click', function(){ $(this).val('Рас').next('.search2__btn-microphone').hide().next('.search2__btn-barcode').hide().next('.search2__btn-close').show(); $('#searchListItem1').hide(); $('#searchListItem2').hide(); $('#searchListItem3').hide(); $('#searchListItem4').show(); $('#searchListItem5').show(); $('#searchListHead').hide(); })
  $('#j_test_15').on('click', function(){ $(this).hide().prev('.search2__btn-barcode').show().prev('.search2__btn-microphone').show().prev().val('').focus(); $('#searchListItem1').show(); $('#searchListItem2').show(); $('#searchListItem3').show(); $('#searchListItem4').hide(); $('#searchListItem5').hide(); $('#searchListHead').show(); $('#section1').show(); $('#section2').hide(); })

  $('#j_test_16').on('click', function(){ $('#section2').hide(); $('#section3').show(); })
  $('#j_test_19').on('click', function(){ $('#section1').hide(); $('#section4').show(); })
  $('#j_test_17').on('click', function(){ $('#catalog2').hide(); $('#catalog1').show(); $('#j_test_18').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_18').on('click', function(){ $('#catalog1').hide(); $('#catalog2').show(); $('#j_test_17').removeClass('active'); $(this).addClass('active'); })

  $('#j_test_20').on('click', function(){ $('#catalog4').hide(); $('#catalog3').show(); $('#j_test_21').removeClass('active'); $(this).addClass('active'); })
  $('#j_test_21').on('click', function(){ $('#catalog3').hide(); $('#catalog4').show(); $('#j_test_20').removeClass('active'); $(this).addClass('active'); })

  $('.j_test_22').on('click', function(){ $('.section').hide(); $('#section6').show(); })
  $('#j_test_23').on('click', function(){ $('#section4').hide(); $('#section2').show(); })
});