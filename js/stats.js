$(function() {
  if (!window.location.pathname.match(/\/about.$/)) {
    return;
  }
  var hostname = $('html').data('api-hostname') || "";

  $.ajax({
    type: 'GET',
    url: hostname + '/api/stats',
  })
  .done(load_chart)
});

function load_chart(data) {
  var ctx = document.getElementById('adoption-chart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: "Top Million",
          data: data.response.top_million,
          fill: false,
          borderColor: '#f938bd'
        },
        {
          label: "Visitors to starttls-everywhere.org",
          data: data.response.local,
          fill: false,
          borderColor: '#20c9c9'
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time'
        }]
      }
    }
  });
}

