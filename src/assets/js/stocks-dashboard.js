/* stocks swiper */
var swiper = new Swiper(".swiper-basic", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
      delay: 1000,
      disableOnInteraction: false,
  },
  breakpoints: {
      500: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
      1400: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
      1600: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
      1800: {
          slidesPerView: 5,
          spaceBetween: 20,
      },
  },
});
  /* stocks swiper */
  
  var options = {
      series: [1624, 1267, 1153],
      labels: ["Stocks", "Funds", "Bond"],
      chart: {
        height: 295,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
      },
      fill: {
        type: 'solid',
      },
      plotOptions: {
  
        pie: {
          expandOnClick: false,
          donut: {
            size: '78%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '20px',
                color: '#495057',
                offsetY: -4
              },
              value: {
                show: true,
                fontSize: '18px',
                color: undefined,
                offsetY: 8,
                formatter: function (val) {
                  return val + "%"
                }
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                fontSize: '22px',
                fontWeight: 600,
                color: '#495057',
              }
    
            }
          }
        }
      },
      colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)", "rgb(255, 93, 159)"],
    };
    document.querySelector("#portfolio").innerHTML = " ";
    var chart = new ApexCharts(document.querySelector("#portfolio"), options);
    chart.render();

    //apple-change start
    var spark01 = {
      chart: {
        type: "line",
        height: 30,
        width: 50,
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
          opacity: 0.1,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.2,
        dashArray: 0,
      },
      fill: {
        opacity: 0.2,
        gradient:{
          opacityFrom: 0.00,
          opacityTo: 0.0,
          shadeIntensity: 0.0,
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46,
        ],
      }, ],
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(227, 84, 212, 1)"],
    };
    var spark01 = new ApexCharts(document.querySelector("#apple-change"), spark01);
    spark01.render();
    //apple-change end

    //google-change start
    var spark02 = {
      chart: {
        type: "line",
        height: 30,
        width: 50,
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
          opacity: 0.1,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.2,
        dashArray: 0,
      },
      fill: {
        opacity: 0.2,
        gradient:{
          opacityFrom: 0.05,
          opacityTo: 0.05,
          shadeIntensity: 0.1,
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46,
        ],
      }, ],
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(255, 93, 159, 1)"],
    };
    var spark02 = new ApexCharts(document.querySelector("#google-change"), spark02);
    spark02.render();
    //google-change end

    //facebook-change start
    var spark03 = {
      chart: {
        type: "line",
        height: 30,
        width: 50,
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
          opacity: 0.1,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.2,
        dashArray: 0,
      },
      fill: {
        opacity: 0.2,
        gradient:{
          opacityFrom: 0.05,
          opacityTo: 0.05,
          shadeIntensity: 0.1,
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46,
        ],
      }, ],
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(255, 142, 111, 1)"],
    };
    var spark03 = new ApexCharts(document.querySelector("#facebook-change"), spark03);
    spark03.render();
    //facebook-change end

    //tesla-change start
    var spark04 = {
      chart: {
        type: "line",
        height: 30,
        width: 50,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "rgb(158, 92, 247)",
          opacity: 0.1,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.2,
        dashArray: 0,
      },
      fill: {
        opacity: 0.2,
        gradient:{
          opacityFrom: 0.05,
          opacityTo: 0.05,
          shadeIntensity: 0.1,
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46,
        ],
      }, ],
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(158, 92, 247, 1)"],
    };
    var spark04 = new ApexCharts(document.querySelector("#tesla-change"), spark04);
    spark04.render();
    //tesla-change end

    //amazon-change start
    var spark05 = {
      chart: {
        type: "line",
        height: 30,
        width: 50,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "rgb(255, 198, 8)",
          opacity: 0.1,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.2,
        dashArray: 0,
      },
      fill: {
        opacity: 0.2,
        gradient:{
          opacityFrom: 0.05,
          opacityTo: 0.05,
          shadeIntensity: 0.1,
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46,
        ],
      }, ],
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(255, 198, 8, 1)"],
    };
    var spark05 = new ApexCharts(document.querySelector("#amazon-change"), spark05);
    spark05.render();
    //amazon-change end

    //microsoft-change start
    var spark06 = {
      chart: {
        type: "line",
        height: 30,
        width: 50,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "rgb(14, 165, 232)",
          opacity: 0.1,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.2,
        dashArray: 0,
      },
      fill: {
        opacity: 0.2,
        gradient:{
          opacityFrom: 0.05,
          opacityTo: 0.05,
          shadeIntensity: 0.1,
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46,
        ],
      }, ],
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(14, 165, 232, 1)"],
    };
    var spark06 = new ApexCharts(document.querySelector("#microsoft-change"), spark06);
    spark06.render();
    //microsoft-change end

    //nvidia-change start
    var spark07 = {
      chart: {
        type: "line",
        height: 30,
        width: 50,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "rgb(33, 206, 158)",
          opacity: 0.1,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.2,
        dashArray: 0,
      },
      fill: {
        opacity: 0.2,
        gradient:{
          opacityFrom: 0.05,
          opacityTo: 0.05,
          shadeIntensity: 0.1,
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46,
        ],
      }, ],
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: ["rgba(33, 206, 158, 1)"],
    };
    var spark07 = new ApexCharts(document.querySelector("#nvidia-change"), spark07);
    spark07.render();
    //nvidia-change end
  /* Visitors Report */
  var options = {
    series: [
      {
        name: "This Week",
        data: [25, 50, 30, 55, 20, 45, 30],
        type: 'column',
      },
      {
        name: "Last Week",
        data: [35, 25, 40, 30, 45, 35, 60],
        type: 'column',
      }
    ],
    chart: {
      height: 267,
      type: 'line',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 7,
        left: 0,
        blur: 1,
        color: ["transparent", "rgb(227, 84, 212)"],
        opacity: 0.05,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '35%',
        borderRadius: [2],
      }
    },
    colors: ['rgba(var(--primary-rgb))', 'rgb(227, 84, 212)'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      dashArray: [0, 0],
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false,
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: 'solid',
        color: 'rgba(119, 119, 142, 0.05)',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        rotate: -90,
      }
    },
    legend: {
      show: true,
      position: "bottom",
      offsetX: 0,
      offsetY: 8,
      markers: {
        size: 5,
        shape: "circle",
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
  };
  var chart = new ApexCharts(document.querySelector("#visitors-report"), options);
  chart.render();
  /* Visitors Report */

 /* stocks chart */
  var data = generateDayWiseTimeSeries(new Date("22 Apr 2024").getTime(), 115, {
    min: 30,
    max: 90
  });
  var options1 = {
    chart: {
      id: "chart2",
      type: "area",
      height: 200,
      foreColor: "#ccc",
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    colors: ["rgba(var(--primary-rgb))"],
    stroke: {
      width: 3
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.1,
        opacityTo: 0
      }
    },
    markers: {
      size: 3,
      colors: ["#fff"],
      strokeColor: "rgb(227, 84, 212)",
      strokeWidth: 2
    },
    series: [
      {
        name: 'Investment',
        data: data
      }
    ],
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      min: 0,
      tickAmount: 4
    }
  };
  
  var chart1 = new ApexCharts(document.querySelector("#stockCap-area"), options1);
  
  chart1.render();
  
  var options2 = {
    chart: {
      id: "chart1",
      height: 130,
      type: "bar",
      foreColor: "#ccc",
      brush: {
        target: "chart2",
        enabled: true
      },
      selection: {
        enabled: true,
        fill: {
          color: "#fff",
          opacity: 0.4
        },
        xaxis: {
          min: new Date("24 Jun 2024 10:00:00").getTime(),
          max: new Date("10 Jul 2024 10:00:00").getTime()
        }
      }
    },
    colors: ["rgba(227, 84, 212, 0.7)"],
    series: [
      {
        name: 'Market Cap',
        data: data
      }
    ],
    stroke: {
      width: 2
    },
    grid: {
      borderColor: "#444"
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 2
    }
  };
  
  var chart88 = new ApexCharts(document.querySelector("#stockCap"), options2);
  
  chart88.render();
  
  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push([x, y]);
      baseval += 76400000;
      i++;
    }
    return series;
  }
   /* stocks chart */

   /* stock-1 chart */
var spark1 = {
  chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  yaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ['rgba(33, 206, 158, 0.4)'],

}
document.getElementById('stock-1').innerHTML = '';
var spark1 = new ApexCharts(document.querySelector("#stock-1"), spark1);
spark1.render();

   /* stock-1 chart */

   /* stock-2 chart */
var spark2 = {
  chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  yaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ['rgba(251, 66, 66, 0.4)'],

}
document.getElementById('stock-2').innerHTML = '';
var spark2 = new ApexCharts(document.querySelector("#stock-2"), spark2);
spark2.render();

   /* stock-2 chart */

   /* stock-3 chart */
var spark3 = {
  chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  yaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ['rgba(33, 206, 158, 0.4)'],

}
document.getElementById('stock-3').innerHTML = '';
var spark3 = new ApexCharts(document.querySelector("#stock-3"), spark3);
spark3.render();

   /* stock-3 chart */

   /* stock-4 chart */
var spark4 = {
  chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  yaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ['rgba(251, 66, 66, 0.4)'],

}
document.getElementById('stock-4').innerHTML = '';
var spark4 = new ApexCharts(document.querySelector("#stock-4"), spark4);
spark4.render();

   /* stock-4 chart */

   /* stock-5 chart */
var spark5 = {
  chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  yaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ['rgba(33, 206, 158, 0.4)'],

}
document.getElementById('stock-5').innerHTML = '';
var spark5 = new ApexCharts(document.querySelector("#stock-5"), spark5);
spark5.render();

   /* stock-5 chart */

   /* stock-6 chart */
var spark6 = {
  chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  yaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ['rgba(33, 206, 158, 0.4)'],

}
document.getElementById('stock-6').innerHTML = '';
var spark6 = new ApexCharts(document.querySelector("#stock-6"), spark6);
spark6.render();

   /* stock-6 chart */

   /* stock-7 chart */
var spark7 = {
  chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  yaxis: {
      axisBorder: {
          show: false
      },
  },
  colors: ['rgba(251, 66, 66, 0.4)'],

}
document.getElementById('stock-7').innerHTML = '';
var spark7 = new ApexCharts(document.querySelector("#stock-7"), spark7);
spark7.render();

   /* stock-7 chart */