
/* Sales Report */
var options = {
  chart: {
    height: 398,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 10,
      left: 0,
      blur: 1,
      color: ["rgba(0, 0, 0, 0.1)"],
      opacity: 0.3,
    },
  },
  grid: {
    show: true,
    borderColor: "rgba(119, 119, 142, 0.1)",
    strokeDashArray: 4,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [1.5, 1.5, 1],
    curve: ["smooth","straight"],
    dashArray: [ 4, 4, 0],
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "center",
    fontWeight: 600,
    fontSize: "11px",
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        " - " +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ""
      );
    },
    labels: {
      colors: "#74767c",
    },
    markers: {
      strokeWidth: 0,
      size: 4,
      shape: "circle",
      radius: 12,
      offsetX: 0,
      offsetY: 0,
    },
  },
  series: [
    {
      name: "Sales",
      data: [20, 42, 28, 79, 68, 84, 48, 65, 45, 80, 25, 75],
      type: "line",
    },
    {
      name: "Profit",
      data: [10, 39, 25, 74, 58, 80, 42, 58, 31, 71, 10, 82],
      type: "area",
    },
    {
      name: "Expenses",
      data: [38, 53, 34, 33, 30, 28, 39, 36, 32, 40, 22, 74],
      type: "bar",
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      borderRadiusApplication: "all",
      borderRadiusWhenStacked: "last",
      columnWidth: "15%",
    },
  },
  fill: {
    type: ['soild','soild','soild'],
    gradient:{
        opacityFrom: 0.6,
        opacityTo: 1,
    },
  },
  colors: [ "rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 0.06)", "rgba(var(--primary-rgb))"],
  yaxis: {
    title: {
      style: {
        color: "#adb5be",
        fontSize: "14px",
        fontFamily: "poppins, sans-serif",
        fontWeight: 600,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  xaxis: {
    type: "day",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
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
      rotate: -90,
      style: {
        colors: "#8c9097",
        fontSize: "11px",
        fontWeight: 600,
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },
};
document.getElementById("sales-report").innerHTML = "";
var chart = new ApexCharts(document.querySelector("#sales-report"), options);
chart.render();
  
  /* Sales Report */

/* Total Orders *//* Sales Overview */
var options = {
  chart: {
      height: 330,
      type: 'radialBar',
      responsive: 'true',
      offsetX: 0,
      offsetY: 15,
  },
  plotOptions: {
      radialBar: {
          startAngle: -135,
          endAngle: 135,
          size: 120,
          imageWidth: 50,
          imageHeight: 50,
          track: {
            strokeWidth: '97%',
              // strokeWidth: "0",
          },
          dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              bottom: 0,
              blur: 3,
              opacity: 0.5
          },
          dataLabels: {
              name: {
                  fontSize: '16px',
                  color: undefined,
                  offsetY: 30,
              },
              hollow: {
                  size: "60%"
              },
              value: {
                  offsetY: -10,
                  fontSize: '22px',
                  color: undefined,
                  formatter: function (val) {
                      return val + "%";
                  }
              }
          }
      }
  },
  colors: ['rgba(var(--primary-rgb))'],
  fill: {
      type: "solid",
      gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: .5,
          gradientToColors: ["#b94eed"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      dashArray: 3
  },
  series: [92],
  labels: ["Orders"]
};
var chart1 = new ApexCharts(document.querySelector("#total-orders"), options);
chart1.render();
 /* Total Orders */


   /* newvisitors */
   var options = {
    series: [{
      name: 'Total Projects',
      data: [120, 200, 150, 300, 250, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1542],
    },],
    chart: {
      stacked: true,
      type: 'bar',
      height: 190,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      borderColor: '#f2f6f7',
    },
    colors: ["rgba(var(--primary-rgb))"],                        
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 2,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
        colors: {
          ranges: [{
            from: -100,
            to: -46,
            color: 'rgba(var(--primary-rgb))'
          }, {
            from: -45,
            to: 0,
            color: 'rgba(var(--primary-rgb))'
          }]
        },
        
      }
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      position: 'top',
    },
    yaxis: {
      Show: false,
      labels: {
        show: false,
      }
    },
    xaxis: {
      show: false,
      type: 'day',
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
    }
  };
  var chart = new ApexCharts(document.querySelector("#websitedesign"), options);
  chart.render();
    /* newvisitors */