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
