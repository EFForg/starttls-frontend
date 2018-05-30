/*
 * Form interactions for POST to /api/scan
 */
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
        // remove overview and any past search results.
        $('.checks-overview').hide();
        $('#add-your-domain').hide();
        $('.result').remove();

        $.each(data.preferred_hostnames, function(i, hostname) {
          var result = data.results[hostname];
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
