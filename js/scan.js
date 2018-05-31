$(function() {
  $('#scan').submit(function(e) {
    e.preventDefault();

    var $form = $(this),
    domain = $form.find('input[name="domain"]').val(),
    url = $form.attr('action');

    $.ajax({
      type: 'POST',
      url: url,
      data: {
        domain: domain
      },
      success: function(data) {
        if (data.status_code !== 200) {
          $form.append("<div>Something went wrong. Please try back later.</div>");
          return;
        }

        // remove overview and any past search results.
        $('.checks-overview').hide();
        $('#add-your-domain').hide();
        $('#share-results').hide();
        $('.result').remove();

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
              $check = $result.find('.' + key);
              $check.addClass(check.status ? 'fail' : 'success');
            });
            $result.appendTo( $('article.accordion') );
          }

          $('#share-results').show();
          // TODO conditional on qualifying for list
          $('#add-your-domain').show();
        });
      }
    });
  });

  $('ul.options li').on('click', function () {
    switch($(this).attr('rel')) {
      case 'yes':
      $(".add-domain-action.submit").show();
      $(".add-domain-action.learn").hide();
      break;
      case 'no':
      $(".add-domain-action.submit").hide();
      $(".add-domain-action.learn").show();
      break;
    }
  });

});
