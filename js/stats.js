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
    load_chart('top-million-chart', resp.response.top_million, '#f938bd');
    load_chart('visitors-chart', resp.response.local, '#20c9c9');
  });
});

function load_chart(id, data, color) {
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
          type: 'time'
        }],
      }
    }
  });
}

