'use strict';

// Document ready
$(document).on('ready', function(){

  $('#j_test_01').on('click', function(){ $('#appButtonStatus').toggle(); })
  $('#j_test_02').on('click', function(){ $('#youPharmacyLine').show(); $('#appModal1').show(); })
  $('#j_test_03').on('click', function(){ $('#appModal1').toggle(); })
  $('#j_test_04').on('click', function(){ $('#appModal1').show(); })
  $('#j_test_05').on('click', function(){ $('#appModal2').show(); })
  $('#j_test_06').on('click', function(){ $('#appModal2').hide(); })

});