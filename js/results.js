/*
 * Form interactions for POST to /api/scan
 */
$(function() {
  var hostname = $('#api-hostname').data('api-hostname');
  var domain = window.location.search.substring(1);

  $.ajax({
    type: 'POST',
    url: hostname + '/api/scan',
    data: {
      domain: domain
    },
    success: handle_scan
  });

  $('ul.options li').on('click', toggle_add_domain_actions);
});

function handle_scan(data) {
  if (data.status_code !== 200) {
    $form.append('<div>Something went wrong. Please try back later.</div>');
    return;
  }

  var scan = data.response.scandata;
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
        $check.addClass(check.status ? 'fail' : 'success');
      });
      $result.appendTo( $('article.accordion') );
    }

    $('.your-domain-name').text(data.response.domain);
    $('#' + status_string(scan)).show()
    $('#loading-results').hide()
    $('#results-wrapper').show()
  });
}

function status_string(scan) {
  var result = "";
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
    case 1:
      // This is pending server using distinct status code.
      return 'fail-not-secured';
    case 2:
      return 'fail-no-support';
  }
}

function toggle_add_domain_actions() {
  switch($(this).attr('rel')) {
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
