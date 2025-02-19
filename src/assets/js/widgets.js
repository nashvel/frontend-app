(function () {
    'use strict';

    /* Total Sales */
    var spark1 = {
        chart: {
            type: 'area',
            height: 50,
            width: 120,
            sparkline: {
                enabled: true
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "rgba(var(--primary-rgb))",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgba(var(--primary-rgb))",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgba(var(--primary-rgb))",
                            opacity: 0.08
                        },
                        {
                            offset: 90,
                            color: "rgba(var(--primary-rgb))",
                            opacity: 0.08
                        }
                    ]
                ]
            }
        },
        series: [{
            name: 'Value',
            data: [14, 48, 26, 36, 26, 75, 45, 20, 55]
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
        colors: ['rgba(var(--primary-rgb))'],

    }
    var spark1 = new ApexCharts(document.querySelector("#chart-01"), spark1);
    spark1.render();
    /* Total Sales */

    /* Profit By Sale */
    var spark2 = {
        chart: {
            type: 'area',
            height: 50,
            width: 120,
            sparkline: {
                enabled: true
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "rgb(227, 84, 212)",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgb(227, 84, 212)",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(227, 84, 212)",
                            opacity: 0.08
                        },
                        {
                            offset: 90,
                            color: "rgb(227, 84, 212)",
                            opacity: 0.08
                        }
                    ]
                ]
            }
        },
        series: [{
            name: 'Value',
            data: [14, 48, 26, 36, 26, 75, 45, 20, 55]
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
        colors: ['rgb(227, 84, 212)'],

    }
    var spark2 = new ApexCharts(document.querySelector("#chart-2"), spark2);
    spark2.render();
    /* Profit By Sale */

    /* Total Revenue */
    var spark3 = {
        chart: {
            type: 'area',
            height: 50,
            width: 120,
            sparkline: {
                enabled: true
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "rgb(255, 142, 111)",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgb(255, 142, 111)",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(255, 142, 111)",
                            opacity: 0.08
                        },
                        {
                            offset: 90,
                            color: "rgb(255, 142, 111)",
                            opacity: 0.08
                        }
                    ]
                ]
            }
        },
        series: [{
            name: 'Value',
            data: [14, 48, 26, 36, 26, 75, 45, 20, 55]
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
        colors: ['rgb(255, 142, 111)'],

    }
    var spark3 = new ApexCharts(document.querySelector("#chart-3"), spark3);
    spark3.render();
    /* Total Revenue */

    /* Total Customers */
    var spark4 = {
        chart: {
            type: 'area',
            height: 50,
            width: 120,
            sparkline: {
                enabled: true
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "horizontal",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "rgb(255, 93, 159)",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "rgb(255, 93, 159)",
                                opacity: 1
                            },
                        ]
                    ]
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "horizontal",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgb(255, 93, 159)",
                            opacity: 0.08
                        },
                        {
                            offset: 90,
                            color: "rgb(255, 93, 159)",
                            opacity: 0.08
                        }
                    ]
                ]
            }
        },
        series: [{
            name: 'Value',
            data: [14, 48, 26, 36, 26, 75, 45, 20, 55]
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
        colors: ['rgb(255, 93, 159)'],

    }
    var spark4 = new ApexCharts(document.querySelector("#chart-4"), spark4);
    spark4.render();
    /* Total Customers */

    /* Sales Overview */
    var options = {
        chart: {
            height: 275,
            type: 'radialBar',
            responsive: 'true',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 0,
                    size: '60%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                },

                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: 'var(--text-muted)',
                        fontSize: '14px',
                        fontWeight: '400'
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val);
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        colors: ["rgb(227, 84, 212)", "rgb(92, 103, 247)"],
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            colors: "#fff",
            width: 0,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['rgb(92, 103, 247)'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        series: [85],
        labels: ["Total Sales"]
    };
    var chart1 = new ApexCharts(document.querySelector("#circlechart"), options);
    chart1.render();
    /* Sales Overview */

    /* recent orders */
    var options = {
        series: [88, 85, 75, 60],
        labels: ["Delivered", "Returned", "Cancelled", "Pending"],
        chart: {
            height: 215,
            type: 'radialBar',
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
            radialBar: {
              dataLabels: {
                name: {
                    offsetY: -3,
                    show: true,
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    fontWeight: '400'
                },
                value: {
                    color: '#111',
                    fontSize: '14px',
                    offsetY: 2,
                    show: true,
                },
                total: {
                  show: true,
                  label: 'Total',
                  color: 'var(--text-muted)',
                  formatter: function (w) {
                    return 380
                  }
                }
              }
            }
          },
        colors: ["rgba(var(--primary-rgb),0.8)", "rgba(227, 84, 212, 0.8)", "rgba(255, 93, 159, 0.8)", "rgba(255, 142, 111, 0.8)"],
    };
    var chartorders = new ApexCharts(document.querySelector("#recent-orders"), options);
    chartorders.render();
    /* recent orders */

    /* Sales Revenue */
    
    var options = {
        series: [{
            name: "Revenue",
            data: [34, 84, 15, 36, 18, 19, 38, 65, 21]
        },
        {
            name: "Profit",
            data: [14, 65, 24, 88, 12, 65, 89, 65, 48]
        }],
        chart: {
            height: 300,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 2,
                left: 0,
                blur: 6,
                color: ['rgb(227, 84, 212)',"rgba(var(--primary-rgb))"],
                opacity: 0.3
            },
            toolbar: { show: false }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            position: "top",
            offsetX: 0,
            offsetY: 8,
            markers: {
                width: 5,
                height: 5,
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
            curve: 'smooth',
            width: ['2','2'],
            dashArray: [2 , 1]
        },
        grid: {
            borderColor: '#f5f4f4',
            strokeDashArray: 3
        },
        colors: ["rgb(227, 84, 212)","rgba(var(--primary-rgb))"],
        yaxis: {
        },
        xaxis: {
            type: 'week',
            categories: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1', '1.1', '1.2', '1.3', '1.4'],
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
    var salerevenue1 = new ApexCharts(document.querySelector("#salerevenue1"), options);
    salerevenue1.render();
    /* Sales Revenue */

    /* Total Sales */
    var spark1 = {
        chart: {
            type: 'bar',
            height: 80,
            width: 100,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                bottom: -50,
                left: 0,
                blur: 3,
                color: 'rgba(var(--primary-rgb))',
                opacity: 0.3
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 3,
        },
        series: [{
            name: 'Value',
            data: [14, 20, 15, 25, 33, 58]
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
        colors: ['rgba(var(--primary-rgb))'],
    }
    var spark1 = new ApexCharts(document.querySelector("#chart-5"), spark1);
    spark1.render();
    /* Total Sales */

    /* Total Revenue */
    var spark2 = {
        chart: {
            type: 'bar',
            height: 80,
            width: 100,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                bottom: -50,
                left: 0,
                blur: 3,
                color: 'rgb(227, 84, 212)',
                opacity: 0.3
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 3,
        },
        series: [{
            name: 'Value',
            data: [14, 20, 15, 25, 33, 58]
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
        colors: ['rgb(227, 84, 212)'],
    }
    var spark2 = new ApexCharts(document.querySelector("#chart-6"), spark2);
    spark2.render();
    /* Total Revenue */

    /* Total user */
    var spark3 = {
        chart: {
            type: 'bar',
            height: 80,
            width: 100,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                bottom: -50,
                left: 0,
                blur: 3,
                color: 'rgb(255, 93, 159)',
                opacity: 0.3
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 3,
        },
        series: [{
            name: 'Value',
            data: [14, 20, 15, 25, 33, 58]
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
        colors: ['rgb(255, 93, 159)'],
    }
    var spark3 = new ApexCharts(document.querySelector("#chart-7"), spark3);
    spark3.render();
    /* Total user */

    /* Total profit */
    var spark4 = {
        chart: {
            type: 'bar',
            height: 80,
            width: 100,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                bottom: -50,
                left: 0,
                blur: 3,
                color: 'rgb(255, 142, 111)',
                opacity: 0.3
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
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
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.9,
            dashArray: 3,
        },
        series: [{
            name: 'Value',
            data: [14, 20, 15, 25, 33, 58]
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
        colors: ['rgb(254, 124, 88)'],
    }
    var spark4 = new ApexCharts(document.querySelector("#chart-8"), spark4);
    spark4.render();
    /* Total profit */

    var chart = {
        series: [
            {
                name: "This Week",
                data: [88, 42, 65, 44, 57, 35,33],
            },
            {
                name: "Last Week",
                data: [-24, -38, -31, -57, -37, -22, -14],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["rgb(158, 92, 247)", "rgba(var(--primary-rgb))"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "45%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        },
    };
    var chart1 = new ApexCharts(document.querySelector("#chart-10"), chart);
    chart1.render();

    var chart = {
        series: [
            {
                name: "This Week",
                data: [68, 44, 87, 35, 22, 10, 88],
            },
            {
                name: "Last Week",
                data: [-45, -57, -88, -22, -45, -45, -12],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["#AB54E3", "rgb(227, 84, 212)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "45%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        },
    };
    var chart1 = new ApexCharts(document.querySelector("#chart-11"), chart);
    chart1.render();

    var chart = {
        series: [
            {
                name: "This Week",
                data: [87, 45, 12, 23, 56, 89, 45],
            },
            {
                name: "Last Week",
                data: [-11, -56, -44, -89, -33, -44, -88],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["#FF6C5D", "rgb(255, 93, 159)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "45%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        },
    };
    var chart1 = new ApexCharts(document.querySelector("#chart-12"), chart);
    chart1.render();

    var chart = {
        series: [
            {
                name: "This Week",
                data: [77, 42, 88, 14, 89, 44, 45],
            },
            {
                name: "Last Week",
                data: [-65, -45, -11, -12, -25, -36, -14],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "bar",
            width: 100,
            height: 100,
            stacked: true,
        },
        colors: ["#FF663C", "rgb(255, 142, 111)"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "45%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                show: false,
            },
        },
    };
    var chart1 = new ApexCharts(document.querySelector("#chart-13"), chart);
    chart1.render();

    var options1 = {
        series: [
          {
            name: "Revenue",
            data: [144, 155, 141, 142, 122, 143, 121, 135, 156, 127, 143, 127],
          },
          {
            name: "Profit",
            data: [133, 21, 32, 37, 123, 32, 47, 131, 54, 132, 20, 138],
          },
          {
            name: "Income",
            data: [30, 125, 36, 30, 45, 135, 64, 51, 59, 136, 39, 51],
          },
          {
            name: "Income",
            data: [30, 125, 36, 30, 45, 135, 64, 51, 59, 136, 39, 51],
          },
        ],
        chart: {
          toolbar: {
            show: false,
          },
          type: "bar",
          fontFamily: "'Roboto', sans-serif",
          fontWeight:'600',
          height: 322,  
          stacked: true,
        },
        colors: [ "rgba(var(--primary-rgb))", "rgb(227, 84, 212)", "rgb(255, 142, 111)", "rgb(255, 93, 159)"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            borderRadius: "4"
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          position: "top",
          offsetX: 0,
          offsetY: 8,
          fontSize:'14px',
          markers: {
            width: 9,
            height: 9,
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
        grid: {
          borderColor: "rgba(0,0,0,0.1)",
          strokeDashArray: 3,
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
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
      
        },
        yaxis: {
          tickAmount: 4,
        },
      };
    
      var salerevenue = new ApexCharts(document.querySelector("#salerevenue"), options1);
    salerevenue.render();

    var options = {
        series: [
            {
                name: "Orders",
                data: [24, 57, 55, 18, 44, 88, 65, 88, 66, 55, 25, 88],
            },
            {
                name: "Delivered",
                data: [-8, -40, -15, -32, -45, -30, -20, -35, -28, -43, -65, -35],
            },
            {
                name: "Cancelled",
                data: [18, 40, 32, 65, 45, 30, -20, 35, 28, 43, -30, -40],
            }
        ],
        chart: {
            type: "line",
            height: 288,
            toolbar: {
                show: false
            },
        },
        colors: [
            "rgba(var(--primary-rgb))",
            "rgb(227, 84, 212)",
            "rgb(255, 93, 159)"
        ],
        markers: {
            size: 3,
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
                width: 5,
                height: 5,
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
            curve: 'stepline',
            width: [2, 2, 2],
            lineCap: 'round',
        },
        grid: {
            borderColor: "#edeef1",
            strokeDashArray: 2,
        },
        yaxis: {
            axisBorder: {
                show: true,
                color: "rgba(227, 84, 212, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: "solid",
                color: "rgba(227, 84, 212, 0.05)",
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
                show: false,
                color: "rgba(227, 84, 212, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: "solid",
                color: "rgba(227, 84, 212, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
            },
        },
    };
    var chart4 = new ApexCharts(document.querySelector("#salerevenue2"), options);
    chart4.render();

    var options = {
        series: [{
            type: 'area',
            name: 'Sales',
            data: [14, 35, 85, 88, 45, 56, 25, 36, 14, 85, 96, 74],
        },
        {
            type: 'bar',
            name: 'Revenue',
            data: [47, 55, 56, 33, 33, 48, 48, 22, 22, 86, 88, 99],
        }
        ],
        chart: {
            type: 'line',
            height: 290,
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 7,
                left: 1,
                blur: 3,
                color: ["#000", "#000"],
                opacity: 0.1
            },
        },
        grid: {
            show: false,
            borderColor: '#f2f6f7',
        },
        colors: ["rgb(227, 84, 212)", "rgba(var(--primary-rgb))"],
        fill: {
            type: ['gradient', 'none'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100],
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgba(227, 84, 212,0.05)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "rgba(227, 84, 212,0.05)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "rgba(227, 84, 212,0.05)",
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "var(--primary005)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "var(--primary005)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "var(--primary005)",
                            opacity: 1
                        }
                    ]
                ]
            }
        },
        plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "35%",
              borderRadius: "4"
            },
          },
        stroke: {
            curve: 'smooth',
            width: [1.5, 1.5],
            lineCap: 'round',
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "bottom",
            offsetX: 0,
            offsetY: 8,
            markers: {
                width: 8,
                height: 8,
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
        yaxis: {
            Show: true,
            labels: {
                show: true,
            }
        },
        xaxis: {
            show: false,
            type: 'day',
            categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            axisBorder: {
                show: false,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
        }
    };
    var chart1 = new ApexCharts(document.querySelector("#top-sales"), options);
    chart1.render();

    var options = {
        series: [90, 80 ,75],
        chart: {
            height: 265,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -180,
                endAngle: 180,
                hollow: {
                    margin: 10,
                    size: '60%',
                },
                dataLabels: {
                    name: {
                        fontSize: '25px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 358
                        }
                    }
                }
            }
        },
        stroke: {
            dashArray: [0, 3, 1]
        },
        colors: [
            "rgba(var(--primary-rgb))",
            "rgb(227, 84, 212)", "rgb(255, 93, 159)"
        ],
        labels: ['Apps', 'Offline', 'Website'],
    };
    var chart = new ApexCharts(document.querySelector("#activecustomers"), options);
    chart.render();

})();