$(function() {
  if (!window.location.pathname.match(/\/about.$/)) {
    return;
  }
  var hostname = $('html').data('api-hostname') || "";

  $.ajax({
    type: 'GET',
    url: hostname + '/api/stats',
  })
  .done(function(resp) {
    load_chart('top-million-chart', resp.response.TOP_DOMAINS, '#f938bd', function(item) {
      return item.value + ' domains';
    });
    load_chart('visitors-chart', resp.response.LOCAL, '#20c9c9', function(item) {
      return item.value + '% of scans';
    });
  });
});

function load_chart(id, data, color, label_cb) {
  var ctx = document.getElementById(id).getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: id,
          data: data,
          fill: false,
          borderColor: color
        },
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day',
            tooltipFormat: 'MMM D'
          },
        }],
      },
      tooltips: {
        custom: function(tooltip) {
          if (!tooltip) return;
          tooltip.displayColors = false;
        },
        callbacks: {
          label: label_cb
        }
      }
    }
  });
}

