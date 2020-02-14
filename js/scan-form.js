/*
 * Form interactions for POST to /api/scan
 */
$(function() {
  var $form = $("#scan");
  var $domain = $form.find('input[name="domain"]');

  $domain.blur(function() {
    var domain = $domain.val();
    if (domain.indexOf("@") >= 0) {
      domain = domain.substring(domain.indexOf("@") + 1);
      $domain.val(domain);
    }
  });

  $form.submit(function(e) {
    e.preventDefault();
    var domain = $domain.val().trim();
    window.location = "/results?" + encodeURIComponent(domain);
  });
});
