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

  // open anchor links
  var faqUrl = window.location.href;
  var faqPage = "faq/";
  if(faqUrl.indexOf(faqPage) != -1){
    faqAnchor = "#";
      if(faqUrl.indexOf(faqAnchor) != -1){
        //get anchor link, open panel
        var n = faqUrl.lastIndexOf('#');
        var openPanel = faqUrl.substring(n);
        $(openPanel).parent().next().css({
                   "max-height" : "3000px",
                   "margin-top" : "0" });
      }
  }

});
