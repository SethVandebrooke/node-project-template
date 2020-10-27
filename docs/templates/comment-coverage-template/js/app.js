var app = new Vue({
    el: '#app',
    data: {
        stats: $commentCoverageResults.stats,
        files: $commentCoverageResults.files,
        page: {
            id: '',
            title: '',
            data: {}
        },
    }, methods: {
        openPage: function (id, title = '', data = {}) {
            this.page = {
                id: id,
                title: title,
                data: data
            };
            if (id == 'file') {
                window.pieChart3.config.data.datasets[0].data = [
                    data.needComments - data.uncommented,
                    data.uncommented,
                ];
				window.pieChart3.update();
                window.pieChart4.config.data.datasets[0].data = [
                    data.comments,
                    data.lines - data.comments,
				];
				window.pieChart4.update();
            }
        },
        generatePieChart: function(id, config) {
            var ctx = document.getElementById(id).getContext('2d');
			window[id] = new Chart(ctx, config);
        }
    },
    mounted: function () {
        this.openPage('home', 'Overview')
        var barChartData = {
            labels: this.files.reduce(function (arr, file) {
                arr.push(file.fileName);
                return arr;
            }, []),
            datasets: [{
                label: 'Commented',
                backgroundColor: 'rgb(54, 162, 235)',
                stack: 'Stack 0',
                data: this.files.reduce(function (arr, file) {
                    arr.push(file.needComments - file.uncommented);
                    return arr;
                }, [])
            }, {
                label: 'Uncommented',
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
                data: this.files.reduce(function (arr, file) {
                    arr.push(file.uncommented);
                    return arr;
                }, [])
            }, {
                label: 'Total comments',
                backgroundColor: 'rgb(75, 192, 192)',
                stack: 'Stack 1',
                data: this.files.reduce(function (arr, file) {
                    arr.push(file.comments);
                    return arr;
                }, [])
            }]

        };
        var ctx = document.getElementById('overview-chart').getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                title: {
                    display: true,
                    text: 'Overview'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
        this.generatePieChart('pieChart1', {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						this.stats.needComments - this.stats.uncommented,
						this.stats.uncommented,
					],
					backgroundColor: [
						'rgb(54, 162, 235)',
						'rgb(255, 99, 132)'
					],
					label: 'Dataset 1'
				}],
				labels: ['Commented', 'Uncommented']
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Lines that should (or can) be commented'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		});
        this.generatePieChart('pieChart2', {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						this.stats.comments,
						this.stats.lines - this.stats.comments,
					],
					backgroundColor: [
						'rgb(54, 162, 235)',
						'rgb(255, 99, 132)'
					],
					label: 'Dataset 1'
				}],
				labels: ['Comments', 'Lines']
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Comments vs Code'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
        });
        this.generatePieChart('pieChart3', {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						this.files[0].needComments - this.files[0].uncommented,
						this.files[0].uncommented,
					],
					backgroundColor: [
						'rgb(54, 162, 235)',
						'rgb(255, 99, 132)'
					],
					label: 'Dataset 1'
				}],
				labels: ['Commented', 'Uncommented']
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Comments vs Code'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
        });
        this.generatePieChart('pieChart4', {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						this.files[0].comments,
						this.files[0].lines - this.files[0].comments,
					],
					backgroundColor: [
						'rgb(54, 162, 235)',
						'rgb(255, 99, 132)'
					],
					label: 'Dataset 1'
				}],
				labels: ['Comments', 'Lines']
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Comments vs Code'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		});
    }
});