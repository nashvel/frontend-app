(function() {
    "use strict"

    var options = {
        series: [{
            type: 'bar',
            name: "Buy",
            data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        }, {
            type: 'line',
            name: "Sell",
            data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
        }],
        chart: {
            height: 340,
            type: 'line',
            zoom: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "28%",
                borderRadius: 2
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: -15,
            fontWeight: "bold",
        },
        stroke: {
            curve: 'smooth',
            width: ["1","1"],
        },
        markers: {
            size: 4,
            hover: {
                size: 6
            },
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        colors: ["rgb(84, 109, 254)", "rgba(227, 84, 212, 1)"],
        yaxis: {
            title: {
                text: 'Statistics',
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    document.getElementById('buy_sell-statistics').innerHTML = ''
    var chart = new ApexCharts(document.querySelector("#buy_sell-statistics"), options);
    chart.render();

})()