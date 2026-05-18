const ctxLong = document.getElementById('spendingChartLong').getContext('2d');

const spendingChartLong = new Chart(ctxLong, {
  type: 'line', // grafik garis
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Income',
        data: [2, 3, 4, 2, 5, 6, 4, 5, 6], // contoh data
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: false,
        tension: 0.3 // bikin garis agak melengkung
      },
      {
        label: 'Expenses',
        data: [1, 2, 2.5, 1.5, 3, 4, 2.5, 3, 4],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: false,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});