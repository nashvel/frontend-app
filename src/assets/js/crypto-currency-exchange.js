(function () {
  "use strict";

  /* BTC Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ['rgb(227, 84, 212)'],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("btc-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#btc-currency-chart"),
    total
  );
  total.render();
  /* BTC Chart */

  /* ETH Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(106, 78, 237,0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("eth-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#eth-currency-chart"),
    total
  );
  total.render();
  /* ETH Chart */

  /* Dash Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(10, 145, 81,0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("dash-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#dash-currency-chart"),
    total
  );
  total.render();
  /* Dash Chart */

  /* LTC Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(227, 192, 11, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("ltc-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#ltc-currency-chart"),
    total
  );
  total.render();
  /* LTC Chart */

  /* XRS Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(252, 108, 133, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("xrs-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#xrs-currency-chart"),
    total
  );
  total.render();
  /* XRS Chart */

  /* GLM Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(227, 84, 212, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("glm-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#glm-currency-chart"),
    total
  );
  total.render();
  /* GLM Chart */

  /* Monero Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(237, 78, 131, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("monero-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#monero-currency-chart"),
    total
  );
  total.render();
  /* Monero Chart */

  /* Eos Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(70, 178, 201, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("eos-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#eos-currency-chart"),
    total
  );
  total.render();
  /* Eos Chart */
  /* Stratis Chart */
  var total = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
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
    colors: ["rgba(70, 178, 201, 0.5)"],
    tooltip: {
      enabled: false,
    },
  };
  document.getElementById("strax-currency-chart").innerHTML = "";
  var total = new ApexCharts(
    document.querySelector("#strax-currency-chart"),
    total
  );
  total.render();
  /* Stratis Chart */

})();
