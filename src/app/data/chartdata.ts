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
}};

export var  allTimeChartData = [ { 
    chartData: [{
        data: [200, 301, 242, 312, 280, 345],
        label: 'All Time Poops',
    }],
    labels:  ['2015', '2016', '2017', '2018', '2019', '2020']
}];

export var  yearChartData = [{ 
        data: [40,32,67,23,31,55,62,21,13,45,68,11],
        label: 'Yearly Poops',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']

    }];

export var monthChartData = [{ 
        data: [10,15,11,13],
        label: 'Monthly Poops',
        labels: ['Week1', 'Week2', 'Week3', 'Week4']
    }];

export var weekChartData =  [{
        data: [1,2,3,3,2,4,1], 
        label: 'Weekly Poops',
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
    }];

export var dayChartData: [{
     data: [7,6,5,4,3,2,1], 
     label: 'Daily Poops' ,
     labels:  ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12']
    }];

