 //active customers//
    var options = {
      series: [1754, 634],
      labels: ["Male", "Female"],
      chart: {
          height: 225,
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
          width: 1,
          dashArray: 0,
      },
      plotOptions: {
          pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              expandOnClick: false,
              donut: {
                  size: '70%',
                  background: 'transparent',
                  labels: {
                      show: true,
                      name: {
                          show: true,
                          fontSize: '20px',
                          color: '#495057',
                          offsetY: -25
                      },
                      value: {
                          show: true,
                          fontSize: '12px',
                          color: undefined,
                          offsetY: -25,
                          formatter: function (val) {
                              return val + "%"
                          }
                      },
                      total: {
                          show: true,
                          showAlways: true,
                          label: 'Total',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#495057',
                      }

                  }
              }
          }
      },
      grid: {
          padding: {
              bottom: -100
          }
      },
      colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)"],
  };
  var chart = new ApexCharts(document.querySelector("#job-acceptance"), options);
  chart.render();
  //active customers//

    /* job stats */
    var options = {
      series: [
        {
          name: "Applications",
          data: [30, 25, 36, 30, 45, 35, 64],
        },
        {
          name: "Shortlisted",
          data: [33, 21, 32, 37, 23, 32, 47],
        },
        {
          name: "Rejected",
          data: [30, 25, 36, 30, 45, 35, 64],
        },
        {
          name: "On-Hold",
          data: [44, 55, 41, 42, 22, 43, 21],
        },
      ],
      chart: {
        type: "bar",
        height: 325,
        fontFamily: "Montserrat, sans-serif",
        foreColor: "#d4d7d9",
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "top",
        markers: {
          shape: "circle",
          size: "6",
          strokeWidth: 0
        }
      },
      tooltip: {
        enabled: true,
        theme: "dark",
        shared: true,
        intersect: false,
      },
      colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)", "rgba(255, 93, 159, .4)", "rgba(255, 142, 111, .3)"],
      labels: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      plotOptions: {
        bar: {
          columnWidth: "25%",
          borderRadius: 5,
        },
      },
      xaxis: {
        show: false,
  
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector("#jobs-statistics"), options);
    chart.render();
    /* job stats */