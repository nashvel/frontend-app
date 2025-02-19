(function () {
    "use strict"

    // for invoice stats
    var options = {
        series: [{
            name: 'Total Invoices',
            data: [56, 55, 25, 65, 89, 45, 65, 56, 78, 45, 56, 48],
        }, {
            name: 'Paid Invoices',
            data: [56, 89, 45, 48, 44, 35, 48, 56, 89, 46, 75, 42],
        }, {
            name: 'Pending Invoices',
            data: [75, 86, 35, 24, 68, 57, 94, 95, 78, 48, 68, 99],
        }, {
            name: 'Overdue Invoices',
            data: [89, 44, 62, 77, 24, 65, 48, 39, 47, 46, 57, 88],
        }],
      chart: {
        type: "bar",
        height: 263,
        stacked: true,
        toolbar: {
            show: false,
        }
      },
      plotOptions: {
          bar: {
              columnWidth: '25%',
              borderRadius: 1,
          }
      },
      grid: {
          show: false,
          borderColor: '#f2f6f7',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["rgba(255, 142, 111, 1)", "rgba(255, 93, 159, 1)", "rgba(227, 84, 212, 1)", "rgba(var(--primary-rgb))"],
      stroke: {
        width: 0,
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        markers: {
          size:5,
          radius: 5,
        } 
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 500,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        title: {
          style: {
            color: "#8c9097",
          },
        },
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 500,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      }, 
    };
    var chart = new ApexCharts(
      document.querySelector("#invoice-list-stats"),
      options
    );
    chart.render();

    //delete Btn
    let invoicebtn = document.querySelectorAll(".invoice-btn");
    invoicebtn.forEach((eleBtn) => {
        eleBtn.onclick = () => {
            let invoice = eleBtn.closest(".invoice-list")
            invoice.remove();
        }
    })
    
})();
