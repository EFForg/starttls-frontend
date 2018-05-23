$(function() {
  $('.js-no').hide();
  $('.js-yes').show();

  $('.accordion-checkbox').click(function(){
      if (this.checked) {
          $('.accordion-title h4').css('color', '#666');
          $('.accordion-title h4 a').css('color', '#666');
      }
      else {
          $('.accordion-title h4').css('color', '#000');
          $('.accordion-title h4 a').css('color', '#000');
      }
  })

  $(".add-another").click(function(){
    $(".add-domains").prepend('<input type="text" value="mx.domain.org"></input>');
  })
});
