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
        $('.result').remove();

        var res = data.response;
        $.each(res.preferred_hostnames, function(i, hostname) {
          var result = res.results[hostname];
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

  $('#add-your-domain select').change(function(e) {
    $('.add-domain-action').hide();
    switch($(this).val()) {
      case 'yes':
        $(".add-domain-action.submit").show();
        break;
      case 'no':
        $(".add-domain-action.learn").show();
        break;
    }
  });
});
