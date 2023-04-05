let barChart = new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "NYC Water Consumption by Year (Million gallons per day)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [990.2, 1008, 987.4, 981, 979],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "NYC Water Consumption by Year (Million gallons per day)",
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  },
});

new Chart(document.getElementById("donut-chart"), {
  type: "doughnut",
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "NYC Water Consumption by Year (Million gallons per day)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [990.2, 1008, 987.4, 981, 979],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "NYC Water Consumption by Year (Million gallons per day)",
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  },
});
