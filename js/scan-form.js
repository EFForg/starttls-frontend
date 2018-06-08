/*
 * Form interactions for POST to /api/scan
 */
$(function() {
  var $form = $("#scan");

  $form.submit(function(e) {
    e.preventDefault();
    var domain = $form.find('input[name="domain"]').val().trim();
    window.location = "/results?" + encodeURIComponent(domain);
  });
});
