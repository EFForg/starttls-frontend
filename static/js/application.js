$(function() {
  $('.js-no').hide();
  $('.js-yes').show();
  $(".add-another").click(function(){
    $(".add-domains").prepend('<input type="text" value="mx.domain.org"></input>');
});

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
        var reports = data.CheckResults.starttls.Reports;
        $.each(reports, function(name, result) {
          if (result.Status === 0) {
            $('#' + name).addClass('success');
          } else {
            $('#' + name).addClass('failure');
          }
        });

      }
    });


  });
});
