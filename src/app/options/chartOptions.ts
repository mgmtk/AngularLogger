export var chartOptions = {
    responsive: true,
    plugins: {
        datalabels: {
                display: true,
                align: 'top',
                anchor: 'end',
                color: "#222",
                font: {
                family: 'FontAwesome',
                size: 14
            },
        },
        deferred: false
    },
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'month'
                }
            }]
        }
    }

};