/* earnings report */
var options = {
    series: [
      {
        type: "area",
        name: "Staff",
        data: [
          {
            x: "Jan",
            y: 100,
          },
          {
            x: "Feb",
            y: 210,
          },
          {
            x: "Mar",
            y: 180,
          },
          {
            x: "Apr",
            y: 454,
          },
          {
            x: "May",
            y: 230,
          },
          {
            x: "Jun",
            y: 320,
          },
          {
            x: "Jul",
            y: 656,
          },
          {
            x: "Aug",
            y: 830,
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
            y: 210,
          },
          {
            x: "Dec",
            y: 410,
          },
        ],
      },
      {
        type: "area",
        name: "Students",
        data: [
          {
            x: "Jan",
            y: 180,
          },
          {
            x: "Feb",
            y: 620,
          },
          {
            x: "Mar",
            y: 476,
          },
          {
            x: "Apr",
            y: 220,
          },
          {
            x: "May",
            y: 520,
          },
          {
            x: "Jun",
            y: 780,
          },
          {
            x: "Jul",
            y: 435,
          },
          {
            x: "Aug",
            y: 515,
          },
          {
            x: "Sep",
            y: 738,
          },
          {
            x: "Oct",
            y: 454,
          },
          {
            x: "Nov",
            y: 525,
          },
          {
            x: "Dec",
            y: 230,
          },
        ],
      },
      {
        type: "column",
        name: "Teachers",
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
            y: 210,
          },
          {
            x: "Feb",
            y: 380,
          },
          {
            x: "Mar",
            y: 400,
          },
          {
            x: "Apr",
            y: 250,
          },
          {
            x: "May",
            y: 300,
          },
          {
            x: "Jun",
            y: 420,
          },
          {
            x: "Jul",
            y: 380,
          },
          {
            x: "Aug",
            y: 280,
          },
          {
            x: "Sep",
            y: 380,
          },
          {
            x: "Oct",
            y: 350,
          },
          {
            x: "Nov",
            y: 230,
          },
          {
            x: "Dec",
            y: 250,
          },
        ],
      },
    ],
    chart: {
      height: 336,
      animations: {
        speed: 500,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["rgb(158, 92, 247)", "rgb(255, 93, 159)", "rgba(var(--primary-rgb))"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
    },
  
    fill: {
      type: ["gradient", "gradient", "solid"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        colorStops: [
          [
            {
              offset: 0,
              color: "rgb(158, 92, 247)",
              opacity: 0.05,
            },
            {
              offset: 100,
              color: "rgb(158, 92, 247)",
              opacity: 0.05,
            },
          ],[
              {
                offset: 0,
                color: "rgb(255, 93, 159)",
                opacity:0.05,
              },
              {
                offset: 100,
                color: "rgb(255, 93, 159)",
                opacity: 0.05,
              },
            ],
        ],
      },
    },
    stroke: {
      curve: "smooth",
      width: [1, 1, 0],
      dashArray: [4, 0, 0, 0],
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
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: "2",
      },
    },
    legend: {
      show: false,
      position:"bottom",
      customLegendItems: ["Staff", "Students", "Teachers"],
      inverseOrder: true,
    },
    markers: {
      hover: {
        sizeOffset: 5,
      },
    },
  };
  document.getElementById("attendance").innerHTML = "";
  var chart = new ApexCharts(document.querySelector("#attendance"), options);
  chart.render();
  /* earnings report */
  
  /* For Inline Calendar */
  flatpickr("#Eventscalendar", {
    inline: true,
  });
  /* For Inline Calendar */
  
  /* Students statistics */
  var options = {
    series: [{
        name: 'Projects',
        type: 'line',
        data: [26, 58,44, 42, 57, 55, 45],
    }, {
        name: 'Tasks',
        type: 'line',
        data: [56, 41, 55, 34, 54, 42, 57],
    }],
    chart: {
        height: 282,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 0,
            blur: 3,
            color: ["rgba(var(--primary-rgb))", "rgb(215, 124, 247)", "rgb(12, 215, 177)"],
            opacity: 0.1
        },
    },
    colors: ["rgba(var(--primary-rgb))", "rgb(215, 124, 247)", "rgb(12, 215, 177)"],
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    stroke: {
        width: [2, 2, 2],
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            borderRadius: 5,
        }
    },
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    markers: {
        size: 0,
    },
    legend: {
        show: true,
        position: 'top',
        fontFamily: "Montserrat",
        markers: {
            size: 5,
            shape: "circle", 
            strokeWidth: 0
        }
    },
    xaxis: {
        type: 'week',
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
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'Mulish, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    tooltip: {
        shared: true,
        theme: "dark",
    }
};
  document.getElementById("students-applicants").innerHTML = "";
  var chart = new ApexCharts(
    document.querySelector("#students-applicants"),
    options
  );
  chart.render();
  /* Students statistics */