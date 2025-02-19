var options = {
  series: [
    {
      data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
    },
  ],
  chart: {
    type: "bar",
    width: 70,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "80%",
      borderRadius: "2",
    },
  },
  stroke: {
    curve: "smooth",
    width: "2",
  },
  labels:[1,2,3,4,5,6,7,8,9,10,11,12],
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
var chart = new ApexCharts(document.querySelector("#Projects-1"), options);
chart.render();

var options2 = {
  series: [
    {
      data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
    },
  ],
  chart: {
    type: "bar",
    width: 70,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "80%",
      borderRadius: "2",
    },
  },
  stroke: {
    curve: "smooth",
    width: "2",
  },
  labels:[1,2,3,4,5,6,7,8,9,10,11,12],
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
var chart2 = new ApexCharts(document.querySelector("#Projects-2"), options2);
chart2.render();

var options3 = {
  series: [
    {
      data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
    },
  ],
  chart: {
    type: "bar",
    width: 70,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "80%",
      borderRadius: "2",
    },
  },
  stroke: {
    curve: "smooth",
    width: "2",
  },
  labels:[1,2,3,4,5,6,7,8,9,10,11,12],
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
var chart3 = new ApexCharts(document.querySelector("#Projects-3"), options3);
chart3.render();

var options4 = {
  series: [
    {
      data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
    },
  ],
  chart: {
    type: "bar",
    width: 70,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "80%",
      borderRadius: "2",
    },
  },
  stroke: {
    curve: "smooth",
    width: "2",
  },
  labels:[1,2,3,4,5,6,7,8,9,10,11,12],
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
var chart4 = new ApexCharts(document.querySelector("#Projects-4"), options4);
chart4.render();


// Project Statistics Chart
var options = {
  series: [
    {
      name: "Projects",
      type: "area",
      data: [15, 28, 23, 23, 41, 58, 48, 50, 22, 31, 40, 45],
    },
    {
      name: "Revenue",
      type: "bar",
      data: [20, 29, 37, 35, 44, 43, 50, 20, 20, 45, 45, 52],
    },
  ],
  chart: {
    type: "area",
    height: 360,
    animations: {
      speed: 500,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 8,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  colors: [ "rgb(227, 84, 212)","rgba(var(--primary-rgb))"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 3,
  },
  fill: {
    type: ['gradient','solid'],
    gradient:{
        opacityFrom: 0.1,
        opacityTo: 0.2,
        shadeIntensity: 0.1,
    },
  },
  stroke: {
    curve: ["smooth","smooth"],
    width: [2, 1.5],
    dashArray: [4, 5],
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value;
      },
    },
  },
  legend: {
    show: true,
    position: "bottom",
    inverseOrder: true,
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      borderRadius: 3,
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
};
var chart1 = new ApexCharts(document.querySelector("#project-statistics"),options);
chart1.render();
// Project Statistics Chart

  /* Monthly Target */
  var options = {
    series: [86, 80, 60],
    chart: {
      height: 285,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
            offsetY: 0
          },
          value: {
            fontSize: '14px',
            offsetY: 5
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              return 249
            }
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    },
    grid: {
        padding: {
            bottom: -10,
            top: -10
        }
    },
    colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)", "rgba(255, 93, 159, 0.4)"],
    labels: ['New Projects', 'Completed', 'Pending'],
  };
  var chart = new ApexCharts(document.querySelector("#monthly-target"), options);
  chart.render();
  /* Monthly Target */

      /* earnings report */
      var options = {
        series: [{
            name: 'This Week',
            data: [44, 42, 57, 86, 58, 55, 70],
        }, {
            name: 'Last Week',
            data: [34, 22, 42, 56, 21, 86, 60],
        }],
        chart: {
            type: 'line',
            height: 340,
            toolbar: {
              show: false,
            },
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        stroke: {
            width: 2,
            curve: 'smooth',
            dashArray: [0, 3],
        },
        colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212)"],
        plotOptions: {
            bar: {
                borderRadius: 2,
                colors: {
                    ranges: [{
                        from: -100,
                        to: -46,
                        color: '#ebeff5'
                    }, {
                        from: -45,
                        to: 0,
                        color: '#ebeff5'
                    }]
                },
                columnWidth: '50%',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 1,
                    left: 1,
                    blur: 2,
                    opacity: 0.5,
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'top',
        },
        tooltip: {
            enabled: true,
            theme: "dark",
        },
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                }
            }
        },
        xaxis: {
            type: 'day',
            categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        }
    };
    var chart2 = new ApexCharts(document.querySelector("#tasks-report"), options);
    chart2.render();
    /* earnings report */