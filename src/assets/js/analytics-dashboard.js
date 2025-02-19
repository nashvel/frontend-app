  /*  Start::Followers */
var options = {
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 85,
      width: 100,
      type: 'area',
      zoom: {
          enabled: false
      },
      sparkline: {
          enabled: true
      }
  },
  tooltip: {
      enabled: true,
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  },
  dataLabels: {
      enabled: false
  },
  grid: {
      borderColor: 'transparent',
  },
  xaxis: {
      crosshairs: {
          show: false,
      }
  },
  yaxis: { 
    max: 65,
  },
  colors: ["rgba(var(--primary-rgb))"],
  stroke: {
      width: [.75],
  },
  fill: {
    opacity: 0.001,
    type: ['gradient'],
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ['rgba(var(--primary-rgb), 0.1)'],
      inverseColors: true,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 50, 100],
      colorStops: [
        [
            {
                offset: 0,
                color: "rgba(var(--primary-rgb), 0.4)",
                opacity: 1
            },
            {
                offset: 55,
                color: "rgba(var(--primary-rgb), 0.1)",
                opacity: 0.1
            },
            {
                offset: 100,
                color: "rgba(var(--primary-rgb), 0.5)",
                opacity: 0.3
            }
        ],
      ]
    }
  }
  };
  var chart = new ApexCharts(document.querySelector("#chart-21"), options);
  chart.render();
    /*  End::Followers */

    /*  Start::Session Rate */
  var options1 = {
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 85,
      width: 100,
      type: 'area',
      zoom: {
          enabled: false
      },
      sparkline: {
          enabled: true
      }
  },
  tooltip: {
      enabled: true,
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  },
  dataLabels: {
      enabled: false
  },
  grid: {
      borderColor: 'transparent',
  },
  xaxis: {
      crosshairs: {
          show: false,
      }
  },
  yaxis: { 
    max: 65,
  },
  colors: ["rgb(227, 84, 212)"],
  stroke: {
      width: [.75],
  },
  fill: {
    opacity: 0.001,
    type: ['gradient'],
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ['rgba(227, 84, 212, 0.1)'],
      inverseColors: true,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 50, 100],
      colorStops: [
        [
            {
                offset: 0,
                color: "rgba(227, 84, 212, 0.4)",
                opacity: 1
            },
            {
                offset: 55,
                color: "rgba(227, 84, 212, 0.1)",
                opacity: 0.1
            },
            {
                offset: 100,
                color: "rgba(227, 84, 212, 0.5)",
                opacity: 0.3
            }
        ],
      ]
    }
  }
  };
  var chart1 = new ApexCharts(document.querySelector("#chart-22"), options1);
  chart1.render();
    /*  End::Session Rate */

    /*  Start::Conversion Rate */
  var options2 = {
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 85,
      width: 100,
      type: 'area',
      zoom: {
          enabled: false
      },
      sparkline: {
          enabled: true
      }
  },
  tooltip: {
      enabled: true,
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  },
  dataLabels: {
      enabled: false
  },
  grid: {
      borderColor: 'transparent',
  },
  xaxis: {
      crosshairs: {
          show: false,
      }
  },
  yaxis: { 
    max: 65,
  },
  colors: ["rgb(255, 93, 159)"],
  stroke: {
      width: [.75],
  },
  fill: {
    opacity: 0.001,
    type: ['gradient'],
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ['rgba(255, 93, 159, 0.1)'],
      inverseColors: true,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 50, 100],
      colorStops: [
        [
            {
                offset: 0,
                color: "rgba(255, 93, 159, 0.4)",
                opacity: 1
            },
            {
                offset: 55,
                color: "rgba(255, 93, 159, 0.1)",
                opacity: 0.1
            },
            {
                offset: 100,
                color: "rgba(255, 93, 159, 0.5)",
                opacity: 0.3
            }
        ],
      ]
    }
  }
  };
  var chart2 = new ApexCharts(document.querySelector("#chart-23"), options2);
  chart2.render();
    /*  End::Conversion Rate */

    /*  Start::Review */
  var options3 = {
    series: [
      {
        data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
      },
    ],
    chart: {
      height: 85,
      width: 100,
      type: 'area',
      zoom: {
          enabled: false
      },
      sparkline: {
          enabled: true
      }
  },
  tooltip: {
      enabled: true,
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  },
  dataLabels: {
      enabled: false
  },
  grid: {
      borderColor: 'transparent',
  },
  xaxis: {
      crosshairs: {
          show: false,
      }
  },
  yaxis: { 
    max: 65,
  },
  colors: ["rgb(255, 142, 111)"],
  stroke: {
      width: [.75],
  },
  fill: {
    opacity: 0.001,
    type: ['gradient'],
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ['rgba(255, 142, 111, 0.1)'],
      inverseColors: true,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 50, 100],
      colorStops: [
        [
            {
                offset: 0,
                color: "rgba(255, 142, 111, 0.4)",
                opacity: 1
            },
            {
                offset: 55,
                color: "rgba(255, 142, 111, 0.1)",
                opacity: 0.1
            },
            {
                offset: 100,
                color: "rgba(255, 142, 111, 0.5)",
                opacity: 0.3
            }
        ],
      ]
    }
  }
  };
  var chart3 = new ApexCharts(document.querySelector("#chart-24"), options3);
  chart3.render();
    /*  End::Review */
  
  /*  Start::audienceMetric */
  var options4 = {
    series: [
      {
        type: "line",
        name: "Viewers",
        data: [
          {
            x: "Jan",
            y: 320,
          },
          {
            x: "Feb",
            y: 560,
          },
          {
            x: "Mar",
            y: 250,
          },
          {
            x: "Apr",
            y: 486,
          },
          {
            x: "May",
            y: 310,
          },
          {
            x: "Jun",
            y: 560,
          },
          {
            x: "Jul",
            y: 560,
          },
          {
            x: "Aug",
            y: 860,
          },
          {
            x: "Sep",
            y: 400,
          },
          {
            x: "Oct",
            y: 500,
          },
          {
            x: "Nov",
            y: 350,
          },
          {
            x: "Dec",
            y: 700,
          },
        ],
      },
      {
        type: "area",
        name: "Followers",
        data: [
          {
            x: "Jan",
            y: 680,
          },
          {
            x: "Feb",
            y: 800,
          },
          {
            x: "Mar",
            y: 680,
          },
          {
            x: "Apr",
            y: 840,
          },
          {
            x: "May",
            y: 980,
          },
          {
            x: "Jun",
            y: 720,
          },
          {
            x: "Jul",
            y: 900,
          },
          {
            x: "Aug",
            y: 1000,
          },
          {
            x: "Sep",
            y: 850,
          },
          {
            x: "Oct",
            y: 950,
          },
          {
            x: "Nov",
            y: 750,
          },
          {
            x: "Dec",
            y: 860,
          },
        ],
      },
      {
        type: "bar",
        name: "Sessions",
        chart: {
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        data: [
          {
            x: "Jan",
            y: 180,
          },
          {
            x: "Feb",
            y: 250,
          },
          {
            x: "Mar",
            y: 300,
          },
          {
            x: "Apr",
            y: 350,
          },
          {
            x: "May",
            y: 350,
          },
          {
            x: "Jun",
            y: 250,
          },
          {
            x: "Jul",
            y: 150,
          },
          {
            x: "Aug",
            y: 250,
          },
          {
            x: "Sep",
            y: 350,
          },
          {
            x: "Oct",
            y: 350,
          },
          {
            x: "Nov",
            y: 250,
          },
          {
            x: "Dec",
            y: 200,
          },
        ],
      },
    ],
    chart: {
      type: "area",
      height: 387,
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
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    colors: ["rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 0.25)", "rgba(var(--primary-rgb))"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
    },
    markers: {
      size: 6,
      hover: {
          size: 6
      },
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 0, 
        dataPointIndex: 3,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 7,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle" 
      },
      {
        seriesIndex: 0,
        dataPointIndex: 8,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9, 
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3, 
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 10,
        fillColor: '#fff',
        strokeColor: 'rgb(227, 84, 212)',
        size: 3, 
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 1,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3, 
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 2,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 3,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 4,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 6,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 7,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 8,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3,
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 9,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3, 
        shape: "circle"
      },
      {
        seriesIndex: 1,
        dataPointIndex: 10,
        fillColor: '#fff',
        strokeColor: 'rgb(255, 93, 159)',
        size: 3, 
        shape: "circle"
      },
      ],
    },
    fill: {
      type: ['soild','gradient','soild'],
      gradient:{
          opacityFrom: 0.05,
          opacityTo: 0.05,
          shadeIntensity: 0.1,
      },
    },
    stroke: {
      curve: ["smooth","stepline", "smooth"],
      width: [2, 2, 2],
      dashArray: [0, 0, 0, 0],
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value;
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        borderRadius: "2",
      },
    },
    tooltip: {
      y: [
        {
          formatter: function (e) {
            return void 0 !== e ? e.toFixed(0) : e;
          },
        },
        {
          formatter: function (e) {
            return void 0 !== e ? e.toFixed(0) : e;
          },
        },
        {
          formatter: function (e) {
            return void 0 !== e ? e.toFixed(0) : e;
          },
        },
      ],
    },
    legend: {
      show: true,
      position: "top",
      inverseOrder: true,
      markers: {
        size: 5,
        shape: "circle",
        strokeWidth: 0
      }
    },
  };
  document.getElementById("audienceMetric").innerHTML = "";
  var chart4 = new ApexCharts(document.querySelector("#audienceMetric"), options4);
  chart4.render();
  /*  End::audienceMetric */

  /* Start:: Sales growth */
  var options6 = {
    series: [{
        name: 'Last Year',
        data: [35, 36, 22, 44, 48, 37, 36, 26, 27, 33, 32, 36]
    },{
      name: 'This Year',
      data: [55, 53, 46, 40, 45, 38, 46, 37, 22, 34, 40, 44,]
  },
    ],
    chart: {
        type: 'line',
        height: 172,
        stacked: true,
        toolbar: {
          show: false,
        },
        sparkline: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 1,
            blur: 4,
            color: '#000',
            opacity: 0.12
        },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
            show: true
        }
    },   
    yaxis: {
        lines: {
            show: false
        }
    },  
    padding: {
      top:2,
      right:2,
      bottom:2,
      left:2
  },  
      borderColor: '#f1f1f1',
      strokeDashArray: 3
  },
    markers: {
      size: 4,
      hover: {
          size: 3
      },
    },
    colors: [ "rgba(227, 84, 212, 1)","rgba(var(--primary-rgb))"],
    stroke: {
        curve: 'straight',
        width: 2,
        dashArray: 2
    },
    legend: {
        show: true,
        position: "bottom",
        fontSize: '10px',
        fontFamily: 'Poppins',
        markers: {
          size: 3.5,
          shape: "circle",
          strokeWidth: 0
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
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
          show: false,
            formatter: function (y) {
                return y.toFixed(0) + "";
            }
        }
    },
    xaxis: {
        type: 'month',
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisBorder: {
          show: true,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
      },
      title: {
        style: {
            color: '#adb5be',
            fontSize: '5px',
            fontFamily: 'poppins, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-label',
        },
    },
    },
  };
  var chart11 = new ApexCharts(document.querySelector("#sales-growth"), options6);
  chart11.render();
/* End:: Sales growth */

  /*  referralsChart chart */
  var options5 = {
    series: [300, 450, 200, 150, 100],
    chart: {
      height: 290,
      type: "donut",
    },
    labels: ["Search Engines", "Social Media", "Direct", "Referral Sites", "Email"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: [
      "rgb(227, 84, 212)",
      "rgba(var(--primary-rgb))",
      "rgb(255, 93, 159)",
      "rgb(255, 142, 111)",
      "rgb(158, 92, 247)",
    ],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
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
  };
  var chart5 = new ApexCharts(document.querySelector("#referrals-chart"), options5);
  chart5.render();
  /* referralsChart */