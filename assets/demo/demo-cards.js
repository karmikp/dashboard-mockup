$(function() {
    var data = {
        series: [1, 1]
    };

    var data2 = {
        series: [1, 2]
    };

    var data3 = {
        series: [1, 5]
    };

    var data4 = {
        series: [1, 3, 5, 2]
    };

    var sum = function(a, b) { return a + b };


    new Chartist.Pie('#chartistPie', data, {
        labelInterpolationFnc: function(value) {
            return '';
        }
    });

    new Chartist.Pie('#chartistPie1', data, {
        labelInterpolationFnc: function(value) {
            return '';
        }
    });

    new Chartist.Pie('#chartistPie2', data2, {
        labelInterpolationFnc: function(value) {
            return '';
        }
    });

    new Chartist.Pie('#chartistPie3', data3, {
        labelInterpolationFnc: function(value) {
            return '';
        }
    });

    new Chartist.Pie('#chartistPie4', data4, {
        labelInterpolationFnc: function(value) {
            return '';
        }
    });

    new Chartist.Line('#areaChart2', {
        labels: [1, 2, 3, 4, 5, 6, 7],
        series: [
            [5, 9, 7, 8, 5, 3, 5]
        ]
    }, {
    low: 0,
    showArea: true,
    fullWidth: true,
    fullWidth: true,        
    showPoint: false,
    colors:["#9c27b0"],
    axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
        axisX:{
        showGrid: false,
        showLabel: false,
        offset: 0
      },

        lineSmooth: true,
    });
})