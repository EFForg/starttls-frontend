
/*
 * Form interactions for POST to /api/validate
 */
$(function() {
  if (!window.location.pathname.match(/\/validate.$/)) {
    return;
  }
  var hostname = $('html').data('api-hostname') || "";
  var token = window.location.search.substring(1);

  $.ajax({
      type: 'POST',
      url:  hostname + '/api/validate',
      data: {
        token: token,
      },
  })
  .done(handle_token)
  .fail(handle_validate_error);
});

function handle_token(data) {
  $('#validation-success').show();
}

function handle_validate_error(data) {
  if (data.readyState === 0) {
    $('#validation-network-error').show();
  } else if (data.readyState === 4) {
    $('#validation-failed').show();
  } else {
    $('#validation-unknown-error').show();
  }
}
