var options = {
  chart: {
    height: 344,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 1,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.1,
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
    width: [1.5, 2],
    curve: "straight",
    dashArray: [0, 5],
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
      width: 8,
      height: 8,
      strokeWidth: 0,
      radius: 12,
      offsetX: 0,
      offsetY: 0,
    },
  },
  series: [
    {
      name: "Last Year",
      data: [44, 55, 41, 67, 42, 22, 43, 21, 41, 56, 27, 43],
      type: "area",
    },
    {
      name: "This Year",
      data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
      type: "line",
    },
  ],
  fill: {
    opacity: 1,
    type: ['gradient','soild'],
    gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.01,
        opacityFrom: 0.02,
        opacityTo: 0.02,
    },
  },
  colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)"],
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
    labels: {
      show: true,
      style: {
        colors: "#8c9097",
        fontSize: "11px",
        fontWeight: 600,
        cssClass: "apexcharts-xaxis-label",
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
document.getElementById("earning").innerHTML = "";
var chart = new ApexCharts(document.querySelector("#earning"), options);
chart.render();

/* courses swiper */
var swiper = new Swiper(".swiper-basic", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: {
	  delay: 2300,
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
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});
/* courses swiper */