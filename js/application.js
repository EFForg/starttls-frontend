$(function() {
  $('.js-no').hide();
  $('.js-yes').show();

  $(".add-another").click(function(){
    $(".add-domains").prepend('<input type="text" value="mx.domain.org"></input>');
  })


  //accordion
  $("body").on('click', '.accordion-title', function () {
    this.classList.toggle("active");
    var panel = $(this).next();
    if (panel.css("display") === "block") {
      panel.css("display","none");
    } else {
      panel.css("display","block");
    }
  });

});
