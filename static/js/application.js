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
        var reports = data.CheckResults.starttls.Reports;
        $.each(reports, function(name, result) {
          if (result.Status === 0) {
            $('#' + name).addClass('success')
            $('#' + name).removeClass('failure')
          } else {
            $('#' + name).addClass('failure')
            $('#' + name).removeClass('success')
          }
        });
      }
    });
  });

  $("#do-manage-server").change(function(e) {
    var manage = $(this).val();
    if (manage === "yes") {
      $("#add-your-domain").show();
      $("#learn-to-secure").hide();
    } else if (manage === "no") {
      $("#learn-to-secure").show();
      $("#add-your-domain").hide();
    }
  });
});
