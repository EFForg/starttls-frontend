$(function() {
  $('.js-no').hide();
  $('.js-yes').show();

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
          if (result.Status === 0)
            $('#' + name).addClass('success')
          else
            $('#' + name).addClass('failure')
        });

        $("#policy_list .overview").hide();
        $("#policy_list .fail-content").show();
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
