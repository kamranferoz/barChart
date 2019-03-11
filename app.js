$(document).ready(function () {
    $.ajax({
        url: "http://localhost/test/barChart/index.php",
        method: "GET",
        success: function (data) {
            console.log(data);
            var rating = [];
            var variety = [];
            var quality = [];

            for (var i in data) {
                rating.push(data[i].ratingid);
                variety.push(data[i].variety);
                quality.push(data[i].quality);
            }

            var chartdata = {
                labels: rating,
                datasets: [{
                        label: 'Red',
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: variety
                    },
                    {
                        label: 'Blue',
                        backgroundColor: 'rgb(0, 0, 255)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: quality
                    }
                ]
            };

            var ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata,
                options: {
                    barValueSpacing: 20,
                    title: {
                        display: true,
                        text: 'Variety',
                        fontSize: 20
                    },
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Rating options'
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Amount'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },
        error: function (data) {
            console.log(data);
        }
    });
});