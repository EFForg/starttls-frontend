/*
 * Form interactions for POST to /api/queue
 */
$(function() {
  var $form = $("#queue");
  init_add_another_mx_hostname();
});

function init_add_another_mx_hostname() {
  var $add_another = $("#queue .add-another"),
    $mx_domains = $("#queue .mx-domain");

  // Hide all but the first mx-domain field
  $mx_domains.slice(1).hide();

  $add_another.click(function() {
    var $hidden_fields = $mx_domains.filter(":hidden");
    $hidden_fields.first().show();
    if ($hidden_fields.length <= 1)
      // Showed the last field, no more to show
      $add_another.hide()
  });
}
