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

  // share link social media icon in footer
  $(".copy-url").click(function(){
    urlCopied.innerHTML = window.location.href;
  });

  //select menu for Do you manage this email server
  /*
  Reference: http://jsfiddle.net/BB3JK/47/
  */

  $('#manage').each(function () {
    var $this = $(this),
    numberOfOptions = $(this).children('option').length;
    $this.addClass('s-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="styledSelect"></div>');
    var $styledSelect = $this.next('div.styledSelect');
    $styledSelect.text($this.children('option').eq(0).text());
    var $list = $('<ul />', {
      'class': 'options'
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');
    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.styledSelect.active').each(function () {
        $(this).removeClass('active').next('ul.options').hide();
      });
      $(this).toggleClass('active').next('ul.options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });

  });

});
