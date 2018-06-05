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


});
