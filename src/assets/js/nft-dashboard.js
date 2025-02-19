var options = {
    series: [
        {
            name: 'Last Year',
            type: 'line',
            data: [47, 43, 55, 55, 41, 41, 53, 42, 47, 41, 50, 35]
            // 35, 60, 41, 57, 52, 63, 41, 41, 65, 65, 53, 57
        },
        {
            name: 'This Year',
            type: 'area',
            data: [35, 60, 41, 57, 52, 63, 41, 41, 65, 65, 53, 57]
        },
    ],
    chart: {
        toolbar: {
            show: false
        },
        type: 'line',
        height: 285,
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 0,
            blur: 1,
            color: ["rgba(var(--primary-rgb))",  'rgb(227, 84, 212)'],
            opacity: 0.05,
          },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1.5, 2],
        curve: ['smooth', 'smooth'],
        dashArray: [0, 5],
    },
    fill: {
        type: ['soild', 'gradient'],
        gradient:{
            opacityFrom: 0.23,
            opacityTo: 0.23,
            shadeIntensity: 0.3,
        },
    },
    legend: {
        show: false,
        position: 'top',
    },
    xaxis: {
        axisBorder: {
            color: '#e9e9e9',
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
            borderRadius: 2
        }
    },
    colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)"],
};
document.querySelector("#nft-statistics").innerHTML = ""
var chart2 = new ApexCharts(document.querySelector("#nft-statistics"), options);
chart2.render();