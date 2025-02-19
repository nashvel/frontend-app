var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgba(var(--primary-rgb))",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(var(--primary-rgb), 0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(var(--primary-rgb), 0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgba(var(--primary-rgb))"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#employees"), options);
chart.render();

var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgb(227, 84, 212)",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(227, 84, 212, 0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(227, 84, 212, 0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgb(227, 84, 212)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
};
var chart2 = new ApexCharts(document.querySelector("#job-applied"), options);
chart2.render();

var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgb(255, 93, 159)",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(255, 93, 159, 0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(255, 93, 159, 0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgb(255, 93, 159)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
};
var chart3 = new ApexCharts(document.querySelector("#total-payouts"), options);
chart3.render();

var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgb(255, 142, 111)",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(255, 142, 111, 0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(255, 142, 111, 0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgb(255, 142, 111)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
};
var chart4 = new ApexCharts(document.querySelector("#gross-salary"), options);
chart4.render();

/* Project Analysis Chart */
var options = {
  series: [
    {
      type: "bar",
      name: "New Projects",
      data: [45, 30, 49, 45, 36, 42, 30, 35, 35, 54, 29, 36],
    },
    {
      type: "bar",
      name: "Inprogress Projects",
      data: [30, 35, 25, 20, 35, 25, 36, 54, 36, 29, 49, 42],
    },
    {
    type: "line",
    name: "Completed Projects",
      data: [15, 30, 19, 30, 34, 25, 36, 45, 36, 29, 49, 42],
    },
    {
      type: "area",
      name: "Onhold Projects",
      data: [15, 20, 20, 15, 25, 25, 15, 15, 45, 30, 45, 20],
    },
  ],
  chart: {
    type: "bar",
    height: 330,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "33%",
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "all",
      borderRadius: 3,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    width: [5, 5, 2, 2],
    dashArray: [0, 0, 3, 3],
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
  colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.4)", "rgba(255, 93, 159, 0.2)", "rgba(255, 142, 111, 0.1)"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    position: "bottom",
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
document.getElementById("project-analysis").innerHTML = "";
var chart = new ApexCharts(
  document.querySelector("#project-analysis"),
  options
);
chart.render();
/*  Project Analysis chart */

/*  Gender chart */
var options = {
  series: [500, 350, 150],
  chart: {
  height: 283,
  type: 'polarArea'
},
labels: ['Total','Male', 'Female'],
fill: {
  opacity: 0.9
},
stroke: {
  width: 1,
  colors: undefined
},
colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)", "rgb(255, 93, 159)"],
yaxis: {
  show: false
},
legend: {
  position: 'bottom'
},
};

var chart07 = new ApexCharts(document.querySelector("#gender-chart"), options);
chart07.render();
/*  Gender chart */