$(function() {
  $('.js-no').hide();
  $('.js-yes').show();
  $('.accordion-checkbox').click(function(){
      if (this.checked) {
          $('.accordion-title h4').css('color', '#666');
          $('.accordion-title h4 a').css('color', '#666');
      }
      else {
          $('.accordion-title h4').css('color', '#000');
          $('.accordion-title h4 a').css('color', '#000');
      }
  })
  $(".add-another").click(function(){
    $(".add-domains").prepend('<input type="text" value="mx.domain.org"></input>');
  })


  $('#how-secure').submit(function(e) {
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
