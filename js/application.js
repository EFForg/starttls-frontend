$(function() {
  $('.js-no').hide();
  $('.js-yes').show();

  // accordion
  $(".accordion-title").click(function(){
    this.classList.toggle("active");
    var panel = $(this).next();
    if (panel.css("display") === "block") {
      panel.css("display", "none");
    } else {
      panel.css("display", "block");
    }
  });

  // open accordion panel when anchor link clicked elsewhere
  $(".accordion-content p a").click(function(){
    linkhref = $(this).attr("href");
    console.log(linkhref);
    $(linkhref).parent().next().css("display","block");
  });


  // add another domain name to the add domain page
  $(".add-another").click(function(){
    $(".add-domains").prepend('<input type="text" value="mx.domain.org"></input>');
  });

  // share link social media icon in footer
  $(".copy-url").click(function(){
    urlCopied.innerHTML = window.location.href;
  });


  $(".copy-url").click(function() {
    urlCopied.innerHTML = window.location.href;
  });

  /*
  	Copy text from any appropriate field to the clipboard
    By Craig Buckler, @craigbuckler
  */

  'use strict';
  document.body.addEventListener('click', copy, true);
  var theUrl = window.location.href;
  $("#urlCopied").val(theUrl);
  function copy(e) {
    // find target element
    var
      t = e.target,
      c = t.dataset.copytarget,
      inp = (c ? document.querySelector(c) : null);

    // is element selectable?
    if (inp && inp.select) {
      inp.select();
      try {
        document.execCommand('copy');
        inp.blur();
        // copied animation
        $(".copy-confirm").css({
          opacity       : "1",
          transition : 'opacity 0.2s ease-in-out'
        });
      }
      catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }
    }
  }

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
