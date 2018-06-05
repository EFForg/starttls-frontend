/*
 * Form interactions for POST to /api/scan
 */
$(function() {
  var $form = $("#scan");

  $form.submit(function(e) {
    e.preventDefault();
    var domain = $form.find('input[name="domain"]').val();
    window.location = "/results?" + encodeURIComponent(domain);
  });
});
