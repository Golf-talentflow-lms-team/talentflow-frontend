const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      data: [7000, 8000, 11000, 9000],
      backgroundColor: '#facc15',
      borderRadius: 10, 
      borderSkipped: false,
      barThickness: 40
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e7eb'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
});


