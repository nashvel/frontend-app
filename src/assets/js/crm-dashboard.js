/*  Sales Overview Crm chart */
var options = {
  series: [
      {
          name: "Total Income",
          data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
      },
      {
          name: "Total Revenue",
          data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480],
      },
      {
          name: "Average Profit",
          data: [740, 590, 320, 730, 340, 580, 890, 654, 410, 638, 230, 675],
      }
  ],
  chart: {
      type: "area",
      height: 270,
      toolbar: {
          show: false
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 4,
          color: '#000',
          opacity: 0.3
      }
  },
  colors: [
      "rgba(var(--primary-rgb))",
      "rgba(227, 84, 212, .4)",
      "rgba(255, 93, 159, .4)",
  ],
  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [
              [
                  {
                      offset: 0,
                      color: "rgba(var(--primary-rgb))",
                      opacity: 0.3
                  },
                  {
                      offset: 50,
                      color: "rgba(var(--primary-rgb))",
                      opacity: 0.2
                  },
                  {
                      offset: 100,
                      color: "rgba(var(--primary-rgb))",
                      opacity: 0.0
                  }
              ],
              [
                  {
                      offset: 0,
                      color: "rgba(227, 84, 212, .5)",
                      opacity: 0.2
                  },
                  {
                      offset: 50,
                      color: "rgba(227, 84, 212, .5)",
                      opacity: 0.2
                  },
                  {
                      offset: 100,
                      color: "rgba(227, 84, 212, .5)",
                      opacity: 0.0
                  }
              ],
              [
                  {
                      offset: 0,
                      color: "rgba(255, 93, 159, .6)",
                      opacity: 0.08
                  },
                  {
                      offset: 50,
                      color: "rgba(255, 93, 159, .6)",
                      opacity: 0.06
                  },
                  {
                      offset: 100,
                      color: "rgba(255, 93, 159, .6)",
                      opacity: 0.0
                  }
              ],
          ]
      }
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
          size:5,
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
  stroke: {
      curve: ['smooth', 'smooth', 'smooth'],
      width: [2, 0, 2],
      lineCap: 'round',
      dashArray: [0, 0, 4]
  },
  grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3
  },
  yaxis: {
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
          // show: false,
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
var chart4 = new ApexCharts(document.querySelector("#sales-overview-crm"), options);
chart4.render();
/*  Sales Overview Crm chart */
  
  /* Leads-overview chart */
  var options = {
    series: [
      {
        name: "Hot Leads",
        data: [80, 50, 100, 40, 100, 20],
      },
      {
        name: "Warm Leads",
        data: [20, 100, 20, 80, 20, 80],
      },
      {
        name: "Cold Leads",
        data: [60, 30, 60, 30, 60, 30],
      },
      {
        name: "Qualified",
        data: [5, 76, 78, 13, 43, 10],
      },
    ],
    chart: {
      height: 335,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(var(--primary-rgb),0.9)", "rgba(227, 84, 212,0.5)", "rgba(255, 93, 159, .4)", "rgba(255, 142, 111, .5)"],
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    legend: {
      fontSize: "12px",
      markers: {
        size:4,
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
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
      axisBorder: { show: false },
    },
    yaxis: {
      axisBorder: { show: false },
    },
  };
  var chart = new ApexCharts(document.querySelector("#Leads-overview"), options);
  chart.render();
  /* Leads-overview chart */

/* profit Report */
var options6 = {
  series: [{
      name: 'Profit',
      data: [35, 36, 22, 44, 48, 37, 36, 26, 27, 33, 32, 36, 55, 53, 46, 40, 45, 38, 46, 37, 22, 34, 40, 44, 28, 33, 34, 36, 58, 56, 45, 34, 33, 22, 45, 50]
  }
  ],
  chart: {
      type: 'area',
      height: 130,
      stacked: true,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 7,
          left: 1,
          blur: 3,
          color: '#000',
          opacity: 0.2
      },
  },
  grid: {
      borderColor: '#f2f6f7',
  },
  colors: ["rgba(33, 206, 158, .55)"],
  dataLabels: {
      enabled: false,
  },
  plotOptions: {
      bar: {
          columnWidth: '40%'
      }
  },
  stroke: {
      curve: 'smooth',
      width: 2,
  },
  legend: {
      show: false,
      position: 'top',
      fontFamily: "Montserrat",
  },
  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [
              [
                  {
                      offset: 0,
                      color: "rgba(225,255,255,0.2)",
                      opacity: 0.1
                  },
                  {
                      offset: 75,
                      color: "rgba(225,255,255,0.2)",
                      opacity: 0.1
                  },
                  {
                      offset: 100,
                      color: "rgba(225,255,255,0.15)",
                      opacity: 0.1
                  }
              ]
          ]
      }
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
      type: 'month',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
  },
  tooltip: {
      enabled: false,
  }
};
var chart1 = new ApexCharts(document.querySelector("#profit-report"), options6);
chart1.render();
/* profit Report */

/* revenue Report */
var options5 = {
  series: [{
      name: 'Revenue',
      data: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46, 55, 62, 55, 23, 20, 22, 33, 35, 23, 15, 16, 17, 12, 14, 23],
  },
  ],
  chart: {
      type: 'bar',
      height: 130,
      stacked: true,
      sparkline: {
          enabled: true,
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          left: 1,
          blur: 3,
          color: '#000',
          opacity: 0.1
      },
  },
  grid: {
      borderColor: '#f2f6f7',
  },
  stroke: {
      curve: 'smooth',
      width: 1.5,
  },
  colors: ["rgba(225,255,255,0.1)"],
  plotOptions: {
      bar: {
          columnWidth: '50%'
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
      type: 'month',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
  },
  tooltip: {
      enabled: false,
  }
};
var chart2 = new ApexCharts(document.querySelector("#revenue-report"), options5);
chart2.render();
/* revenue Report */