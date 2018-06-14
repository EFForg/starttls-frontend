/*
 * Form interactions for POST to /api/scan
 */
$(function() {
  if (!window.location.pathname.match(/\/results.$/)) {
    return;
  }
  var hostname = $('#api-hostname').data('api-hostname') || "";
  var domain = window.location.search.substring(1);

  $('.your-domain-name').text(domain);

  $.ajax({
    type: 'POST',
    url: hostname + '/api/scan',
    data: {
      domain: domain
    }
  })
  .done(handle_scan)
  .fail(handle_error);

  $('#manage').on('change', toggle_add_domain_actions);
});

function handle_error(data) {
  $('#loading-results').hide()
  $('#scan-request-failed').show()
}

function handle_scan(data) {
  var scan = data.response.scandata;
  show_policy_check(scan);
  $.each(scan.preferred_hostnames, function(i, hostname) {
    var result = scan.results[hostname];
    if (result) {
      var $result = $('#result-template').clone();
      $result.removeAttr('id').addClass('result');
      $result.find('.hostname').text(hostname);

      // result.status == 0 if the check succeeded
      $result.addClass(result.status ? 'fail' : 'success');

      $.each(result.checks, function(key, check) {
        var $check = $result.find('.' + key);
        if (check.messages) {
          var $messages = $check.find('.message');
          $.each(check.messages, function(_, message) {
            $('<p/>').text(message).appendTo($messages);
          });
        }
        if (key === "connectivity" && check.status === 0)
          return; // Only show the connectivity check when it fails.
        $check.addClass(check.status ? 'fail' : 'success');
      });
      $result.appendTo( $('.domain-results') );
    }
  });
  $('.' + status_string(scan)).show()
  $('#loading-results').hide()
  $('#results-wrapper').show()
}

function show_policy_check(scan) {
  if (scan.status !== 0)
    var status_class = 'fail'
  else
    var status_class = status_string(scan)
  console.log(status_class);
  $('.check.policy-list.' + status_class).show();
}

function status_string(scan) {
  switch(scan.status) {
    case 0:
      switch (scan.extra_results.policylist.status) {
        case 0:
          return 'perfect'
        case 1:
          return 'pending'
        case 2:
          return 'not-submitted'
      }
    case 2:
      return 'fail-not-secured';
    case 3:
      return 'no-mxs';
    case 4:
      return 'fail-no-support';
    case 5:
      return 'could-not-connect';
  }
}

function toggle_add_domain_actions() {
  switch($(this).val()) {
    case 'yes':
      $('.add-domain-action.submit').show();
      $('.add-domain-action.learn').hide();
      break;
    case 'no':
      $('.add-domain-action.submit').hide();
      $('.add-domain-action.learn').show();
      break;
  }
}
