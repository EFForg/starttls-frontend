$(function() {
  $('.js-no').hide();
  $('.js-yes').show();

  //accordion
  $("body").on('click', '.accordion-title', function () {
    this.classList.toggle("active");
    var panel = $(this).next();
    if (panel.css("max-height") === "0px") {
      panel.css({"max-height" : "3000px",
                 "margin-top" : "0" });
    } else {
      panel.css({"max-height" : "0px",
                 "margin-top" : "-2rem" });
    }
  });

  // open accordion panel when anchor link clicked elsewhere
  $(".accordion-content p a").click(function(){
    linkhref = $(this).attr("href");
    console.log(linkhref);
    $(linkhref).parent().next().css("display","block");
  });
});
