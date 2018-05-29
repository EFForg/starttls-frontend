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
});

/*
	Copy text from any appropriate field to the clipboard
  By Craig Buckler, @craigbuckler
  use it, abuse it, do whatever you like with it!
*/
$(function() {
	'use strict';
  document.body.addEventListener('click', copy, true);
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
