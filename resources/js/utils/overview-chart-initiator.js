import Chart from 'chart.js';

const OverviewChartInitiator = {
    async init({ canvas, data, dropdown, index, oldChart }) {
        this._renderChart(canvas, data);

        dropdown.addEventListener('change', async () => {
            this._updateData(oldChart[index], this._dataLabels(data), this._realData(data, dropdown.value), dropdown.value)
        })
    },

    async _renderChart(canvas, data, onChangeValue = "ph") {
        const overviewChart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: this._dataLabels(data),
                datasets: [{
                    label: onChangeValue,
                    data: this._realData(data, onChangeValue),
                    backgroundColor: '#3FA9F5',
                }]
            },
            options: {
                responsive: true,
                tooltips: {enabled: false},
                hover: {mode: null},
                scales: {
                    xAxes: [{
                        maxBarThickness: 40,
                    }],
                    yAxes: [{
                        ticks: {
                            min: (Math.min.apply( Math, this._realData(data, onChangeValue) )) - 0.5,
                            max: (Math.max.apply( Math, this._realData(data, onChangeValue) )) + 0.5
                        }
                    }]
                }
            }
        })

        this._chart = overviewChart
    },

    _dataLabels(data) {
        const dataName = Object.keys(data)

        return dataName.slice(dataName.length - 8)
    },

    _realData(data, onChangeValue) {
        return this._dataLabels(data).map(hari => {
            return data[hari][onChangeValue]
        })
    },

    _updateData(chart, label, data, onChangeValue) {
        chart.data.labels = label
        chart.data.datasets = [{
            label: onChangeValue,
            data: data,
            backgroundColor: '#3FA9F5'
        }]

        chart.options.scales.yAxes = [{
            ticks: {
                min: (Math.min.apply( Math, data )) - 1,
                max: (Math.max.apply(Math, data)) + 1
            }
        }]

        chart.update()
    },

    returningChart() {
        return this._chart
    }
};

export default OverviewChartInitiator;