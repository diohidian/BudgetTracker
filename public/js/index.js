flatpickr("#datepicker", {
  dateFormat: "Y-m-d", // format output (contoh: 2026-05-15)
  minDate: "today", // tidak bisa pilih sebelum hari ini
  maxDate: "2026-12-31", // batas maksimal
  locale: "id", // bahasa Indonesia
  disableMobile: true, // paksa tampil versi desktop di HP
});

const ctx = document.getElementById("spendingChart").getContext("2d");

const spendingChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Food", "Transport", "Entertainment", "Other"],
    datasets: [
      {
        data: [100, 25, 20, 15], // contoh data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ": " + context.raw + "%";
          },
        },
      },
    },
  },
});
