$(function() {
  //accordion
  $('.accordion-title:not(.js-default-open)').removeClass('active');
  $('body').on('click', '.accordion-title', function () {
    this.classList.toggle('active');
  });

  // open anchor links
  var faqUrl = window.location.href;
  var faqPage = "faq/";
  if(faqUrl.indexOf(faqPage) != -1){
    var faqAnchor = "#";
    if(faqUrl.indexOf(faqAnchor) != -1){
      //get anchor link, open panel
      var n = faqUrl.lastIndexOf('#');
      var openPanel = faqUrl.substring(n);
      $(openPanel).parent().toggleClass('active');
    }
  }
});
