/**
* Copy text from any appropriate field to the clipboard
* By Craig Buckler, @craigbuckler
*/
'use strict';
$(function() {
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
