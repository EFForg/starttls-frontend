$(function() {
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
    var linkhref = $(this).attr("href");
    $(linkhref).parent().next().css({
               "max-height" : "3000px",
               "margin-top" : "0" });
  });

  function remoteFaq() {
    $(".faq-open").click(function(){
      var linkhref = $(this).attr("href");
      linkhref = linkhref.replace('/faq/', '');
      alert(linkhref);
      openFaq(linkhref);
    });
  }
  function openFaq(thehref) {
    setTimeout(function(){
      alert(linkhref);
      $(linkhref).parent().next().css({
        "display": "block",
        "max-height": "3000px"});
      }, 2000);
    }
  remoteFaq();

});
