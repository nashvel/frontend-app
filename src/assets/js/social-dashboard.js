/* Audience */
var options = {
  series: [{
      name: "Followers",
      data: [30, 58, 25, 42, 35, 33, 63, 25, 53, 57, 38, 40],
      type: 'column',
  },
  {
      name: "Total Views",
      data: [20, 38, 38, 72, 55, 73, 43, 55, 33, 45, 30, 60],
      type: 'line',
  }],
  chart: {
      type: 'line',
      height: 330,
      toolbar: {
        show: false,
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 7,
          left: 0,
          blur: 1,
          color: ["rgb(227, 84, 212)",  'rgb(227, 84, 212)', 'transparent' , 'transparent'],
          opacity: 0.05,
        },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      borderRadius: 6
    },
  },
  grid: {
      borderColor: 'rgba(167, 180, 201 ,0.2)',
  },
  colors: ['rgba(var(--primary-rgb))', "rgb(227, 84, 212)"],
  stroke: {
      width: [0, 2],
      curve: ["smooth", "straight"],
      dashArray: [0, 4], 
    },
  dataLabels: {
      enabled: false,
  },fill: {
      opacity: 1
    },
  legend: {
      show: true,
      position: 'top',
      labels: {
          colors: '#74767c',
      },
  },
  yaxis: {
      labels: {
          formatter: function (y) {
              return y.toFixed(0) + "";
          }
      },
      labels: {
          style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
          },
      }
  },
  xaxis: {
      type: 'month',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
      axisBorder: {
          show: true,
          color: 'rgba(167, 180, 201 ,0.2)',
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(167, 180, 201 ,0.2)',
          width: 6,
          offsetX: 0,
          offsetY: 0
      },
      labels: {
          rotate: -90,
          style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
          },
      }
  }
};
var chart2 = new ApexCharts(document.querySelector("#audience"), options);
chart2.render();
/* Audience */
    /* Follow-on  device */
    var options = {
      series: [1754, 1234, 878],
      labels: ["Mobile", "Tablet", "Desktop"],
      chart: {
          height: 197,
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
      plotOptions: {
          pie: {
              expandOnClick: false,
              donut: {
                  size: '80%',
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
      colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)", "rgba(14, 165, 232, 1)"],
  };
  var chart = new ApexCharts(document.querySelector("#follow-on-device"), options);
  chart.render();
  /* Follow-on  device */