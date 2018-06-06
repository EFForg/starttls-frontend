/**
* Copy url to clipboard.
*/
$(function() {
  $(".copy-url").click(copy_url);
});

function copy_url() {
  var textArea = document.createElement("textarea");
  textArea.value = window.location.href;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    $(".copy-confirm").css({
      opacity       : "1",
      transition : 'opacity 0.2s ease-in-out'
    });
  } catch (err) {
    // IE9 and earlier
    alert('Failed to copy to clipboard');
    console.error('Failed to copy to clipboard', err);
  }

  document.body.removeChild(textArea);
}
