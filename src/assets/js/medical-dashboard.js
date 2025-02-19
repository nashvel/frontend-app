/*  statistics chart */
var options = {
  series: [
      {
          name: "Old Patients",
          data: [30, 35, 35, 30, 45, 25, 36, 54, 36, 29, 49, 42],
      },
      {
          name: "New Patients",
          data: [45, 30, 49, 30, 45, 25, 36, 54, 36, 29, 49, 42],
      },
  ],
  chart: {
      type: "bar",
      height: 360,
      toolbar: {
          show: false,
      },
      dropShadow: {
          enabled: false,
      },
      stacked: true,
  },
  plotOptions: {
      bar: {
          columnWidth: "30%",
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "all",
          borderRadius: 3,
      },
  },
  stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      dashArray: 0,
  },
  grid: {
      borderColor: "#f5f4f4",
      strokeDashArray: 5,
      yaxis: {
          lines: {
              show: true, // Ensure y-axis grids are shown
          },
      },
  },
  colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 1)"],
  dataLabels: {
      enabled: false,
  },
  legend: {
      show: true,
      position: "top",
      markers: {
          size: 5,
          shape: "circle",
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 5,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
      },
  },
  yaxis: {
      title: {
          style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
          },
      },
      axisBorder: {
          show: true,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: true,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
      },
      labels: {
          formatter: function (y) {
              return y.toFixed(0) + "";
          },
      },
  },
  xaxis: {
      type: "month",
      categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "sep",
          "oct",
          "nov",
          "dec",
      ],
      axisBorder: {
          show: false,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: false,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
      },
      labels: {
          rotate: -90,
      },
  },
};
var chart = new ApexCharts(document.querySelector("#statistics"), options);
chart.render();
  /*  statistics chart */
  
  /*  Patients chart */
  var options1 = {
    series: [1754, 1234],
    labels: ["Male", "Female"],
    chart: {
      height: 260,
      type: "donut",
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: "#525050",
        opacity: 0.1,
      },
    },
    dataLabels: {
      enabled: false,
    },
  
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: "#fff",
      width: 0,
      dashArray: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "20px",
              color: "#495057",
              offsetY: -4,
            },
            value: {
              show: true,
              fontSize: "18px",
              color: undefined,
              offsetY: 8,
              formatter: function (val) {
                return val + "%";
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "22px",
              fontWeight: 600,
              color: "#495057",
            },
          },
        },
      },
    },
  
    colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)"],
  };
  document.querySelector("#patients-chart").innerHTML = " ";
  var chart1 = new ApexCharts(document.querySelector("#patients-chart"),options1);
  chart1.render();
  /*  Patients chart */

    /* Revenue */
    var options = {
      series: [230, 200, 178, 153],
      chart: {
        // width: 318,
        height: 290,
        type: 'polarArea',
      },
      colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 1)", "rgba(255, 142, 111, 1)"],
      labels: ["Revenue", "Income", "Profit", "Patients"],
      legend: {
        show: false,
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.8
      },
    };
    var chart1 = new ApexCharts(document.querySelector("#revenue-stats"), options);
    chart1.render();
    /* Revenue */

  /* staff-works Chart */
var options = {
  series: [
    {
      type: "area",
      name: "Day Shift",
      data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
    },
    {
      type: "line",
      name: "Night Shift",
      data: [8, 40, 15, 32, 45, 30, 20, 35, 28, 43, 30, 40],
    },
  ],
  chart: {
    type: "line",
    height: 330,
    toolbar: {
      show: false,
    },
  },
  colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)"],
  fill: {
    type: ["gradient", "solid"],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "rgba(var(--primary-rgb),0.1)",
            opacity: 50,
          },
          {
            offset: 75,
            color: "rgba(var(--primary-rgb),0.1)",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "transparent",
            opacity: 0.5,
          },
        ],
        [
          {
            offset: 0,
            color: "rgba(158, 92, 247, 0.1)",
            opacity: 1,
          },
          {
            offset: 75,
            color: "rgba(158, 92, 247, 0.1)",
            opacity: 0.3,
          },
          {
            offset: 100,
            color: "transparent",
            opacity: 1,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    offsetX: 0,
    offsetY: 8,
    markers: {
      size: 5,
      shape: "circle",
    }
  },
  stroke: {
    curve: "smooth",
    width: [2, 2],
    lineCap: "round",
  },
  grid: {
    borderColor: "#edeef1",
    strokeDashArray: 2,
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: "rgba(158, 92, 247, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(158, 92, 247, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
  xaxis: {
    type: "month",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    axisBorder: {
      show: false,
      color: "rgba(158, 92, 247, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: "solid",
      color: "rgba(158, 92, 247, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
};
document.getElementById("staff-work").innerHTML = "";
var chart4 = new ApexCharts(document.querySelector("#staff-work"), options);
chart4.render();
/* staff-works Chart */
  