buildChart = function(theID, theTitle, theInsertionSortResult, theQuickSortResult) {
    var chart = new CanvasJS.Chart(theID, {
        title: {
            text: theTitle,
            fontSize: 30
        },
        animationEnabled: true,
        axisX: {
            gridColor: "Silver",
            tickColor: "silver",
            valueFormatString: 'n=' + "0"
        },
        toolTip: {
            shared: true
        },
        theme: "theme2",
        axisY: {
            gridColor: "Silver",
            tickColor: "silver",
            valueFormatString: "0" + 'ms'
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [
        {
            type: "spline",
            showInLegend: true,
            lineThickness: 2,
            name: "Insertion Sort",
            markerType: "square",
            color: "#F08080",
            dataPoints: theInsertionSortResult

        },
        {
            type: "spline",
            showInLegend: true,
            name: "Quick Sort",
            color: "#20B2AA",
            lineThickness: 2,

            dataPoints: theQuickSortResult
        }
        ],
        legend: {
            cursor: "pointer",
            itemclick: function (e) {
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                }
                else {
                    e.dataSeries.visible = true;
                }
                chart.render();
            }
        }
    });
    return chart;
};

