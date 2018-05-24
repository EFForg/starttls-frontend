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

        $.each(data.results, function(hostname, result) {
          var $result = $('#result-template').clone();
          $result.removeAttr('id').addClass('result');
          $result.find('.hostname').text(hostname);

          $.each(result.checks, function(key, check) {
            $check = $result.find('.' + key);
            // check.status == 0 if the check succeeded
            $check.addClass(check.status ? 'fail' : 'success')
          });
          $result.appendTo( $('article.accordion') );

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
