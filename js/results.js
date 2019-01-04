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
  .fail(handle_scan_error)
  .done(handle_scan)

  $('#manage').on('change', toggle_add_domain_actions);
  var manage_href = $('.add-domain-action.submit').attr('href');
  $('.add-domain-action.submit').attr('href', manage_href + '?' + $.param({domain: domain}));
});

function handle_scan_error() {
  $('#loading-results').hide()
  $('#scan-request-failed').show()
}

function handle_scan(data) {
  var scan = data.response.scandata;
  if (scan.status !== 0)
    $('.policy-check-header').hide();
  $.each(scan.preferred_hostnames, function(i, hostname) {
    if (scan.results[hostname])
      showHostnameResult(hostname, scan.results[hostname])
  });
  // If there's only one hostname, the result for that hostname should be open by default.
  if ($('.hostname-result').length == 1) {
    $('.hostname-result .accordion-title').addClass('active')
  }
  $('.' + status_string(scan)).show()
  $('#loading-results').hide()
  $('#results-wrapper').show()
  var resultsTop = document.getElementById("results-wrapper")
  resultsTop.scrollIntoView()
  window.scrollBy(0,-50) // move to top of results, then move it below the nav
}

function showHostnameResult(hostname, result) {
  var $result = $('#hostname-result-template').clone();
  $result.removeAttr('id').addClass('hostname-result');
  $result.find('.hostname').text(hostname);

  // result.status == 0 if the check succeeded
  $result.addClass(result.status ? 'fail' : 'success');

  $.each(result.checks, function(name, check) {
    var $check = $result.find('.' + name);
    if (check.messages) {
      var $messages = $check.find('.message');
      $.each(check.messages, function(_, message) {
        $('<p/>').text(message).appendTo($messages);
      });
    }
    if (name === "connectivity" && check.status === 0)
      return; // Only show the connectivity check when it fails.
    $check.addClass(check.status ? 'fail' : 'success');
  });
  $result.appendTo( $('.domain-results') );
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
