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
        t.classList.add('copied');
        setTimeout(function() { t.classList.remove('copied'); }, 1500);
      }
      catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }
    }
  }
});
