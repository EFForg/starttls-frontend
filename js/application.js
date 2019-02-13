$(function() {
  $('.js-no').hide();
  $('.js-yes').show();


  // Scroll past fixed header for anchor links.
  var offset = $(':target').offset();
  if (offset) {
    var scrollto = offset.top - 60;
    $('html, body').animate({scrollTop:scrollto}, 0);
  }
});
