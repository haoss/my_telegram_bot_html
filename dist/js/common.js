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
  
  $('#j_test_07').on('click', function(){ $('#section1').hide(); $('#section2').show(); })
  
  $('#j_test_14').on('click', function(){ $(this).val('Рас').next('.search2__btn-microphone').hide().next('.search2__btn-barcode').hide().next('.search2__btn-close').show(); })
  $('#j_test_15').on('click', function(){ $(this).hide().prev('.search2__btn-barcode').show().prev('.search2__btn-microphone').show().prev().val('').focus(); })
});