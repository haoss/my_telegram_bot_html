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
  $('#j_test_06').on('click', function(){ $('#appModal2').hide(); })
  $('#j_test_08').on('click', function(){ $('#appModal3').hide(); })
  $('#j_test_10').on('click', function(){ $('#appModal4').hide(); })
  $('#j_test_07').on('click', function(){ $('#section1').hide(); $('#section2').show(); })

});