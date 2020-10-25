import Chart from 'chart.js'

const ChartPagesInitiator = {
    init({ chartPh, chartKonduk, chartDo, chartSuhu, chartSisaPakan, data, dropdown, dateFrom, dateTo }){
        this._renderPh(chartPh, data)
        this._renderKonduk(chartKonduk, data)
        this._renderDo(chartDo, data)
        this._renderSisaPakan(chartSisaPakan, data)
        this._renderSuhu(chartSuhu, data)
        let storedDropDown = 'kolam1'

        dateFrom.addEventListener('change', () => {
            if (new Date(dateFrom.value) != 'Invalid Date' && new Date(dateTo.value) != 'Invalid Date') {
                this._updatePh(this._chartPh, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateKonduk(this._chartKonduk, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateDo(this._chartDo, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateSuhu(this._chartSuhu, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateSisaPakan(this._chartSisaPakan, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
            }
        })

        dateTo.addEventListener('change', () => {
            if (new Date(dateFrom.value) != 'Invalid Date' && new Date(dateTo.value) != 'Invalid Date') {
                this._updatePh(this._chartPh, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateKonduk(this._chartKonduk, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateDo(this._chartDo, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateSuhu(this._chartSuhu, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateSisaPakan(this._chartSisaPakan, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
            }
        })

        dropdown.addEventListener('change', () => {
            if (new Date(dateFrom.value) != 'Invalid Date' && new Date(dateTo.value) != 'Invalid Date') {
                this._updatePh(this._chartPh, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateKonduk(this._chartKonduk, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateDo(this._chartDo, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateSuhu(this._chartSuhu, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
                this._updateSisaPakan(this._chartSisaPakan, data, storedDropDown, new Date(dateFrom.value), new Date(dateTo.value))
            } else {
                this._updatePh(this._chartPh, data, dropdown.value)
                this._updateKonduk(this._chartKonduk, data, dropdown.value)
                this._updateDo(this._chartDo, data, dropdown.value)
                this._updateSuhu(this._chartSuhu, data, dropdown.value)
                this._updateSisaPakan(this._chartSisaPakan, data, dropdown.value)
            }
            storedDropDown = dropdown.value
        })
    },

    _renderPh( chartPh, data, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19'), onChangeKolam = 'kolam1' ) {
        const dataHarian = data[onChangeKolam].dataHarian

        const chartPhInit = new Chart( chartPh, {
            type: 'bar',
            data: {
                labels: this._labelsData(dataHarian, startDate, endDate),
                datasets: [{
                    label: 'pH',
                    data: this._dataPh(data, startDate, endDate),
                    backgroundColor: '#3FA9F5',
                }]
            },
            options: {
                responsive: true,
                tooltips: {enabled: false},
                hover: {mode: null},
                scales: {
                    yAxes: [{
                        ticks: {
                            min: (Math.min.apply( Math, this._dataPh(data, startDate, endDate) )) - 0.5,
                            max: (Math.max.apply( Math, this._dataPh(data, startDate, endDate) )) + 0.5
                        }
                    }]
                }
            }
        })

        this._chartPh = chartPhInit
    },

    _renderKonduk(chartKonduk, data, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19'), onChangeKolam = 'kolam1'){
        const dataHarian = data[onChangeKolam].dataHarian

        const chartKondukInit = new Chart( chartKonduk, {
            type: 'bar',
            data: {
                labels: this._labelsData(dataHarian, startDate, endDate),
                datasets: [{
                    label: 'Konduktivitas',
                    data: this._dataKonduk(data, startDate, endDate),
                    backgroundColor: '#3FA9F5',
                }]
            },
            options: {
                responsive: true,
                tooltips: {enabled: false},
                hover: {mode: null},
                scales: {
                    yAxes: [{
                        ticks: {
                            min: (Math.min.apply( Math, this._dataKonduk(data, startDate, endDate) )) - 0.5,
                            max: (Math.max.apply( Math, this._dataKonduk(data, startDate, endDate) )) + 0.5
                        }
                    }]
                }
            }
        })

        this._chartKonduk = chartKondukInit
    },

    _renderDo(chartDo, data, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19'), onChangeKolam = 'kolam1') {
        const dataHarian = data[onChangeKolam].dataHarian

        const chartDoInit = new Chart( chartDo, {
            type: 'bar',
            data: {
                labels: this._labelsData(dataHarian, startDate, endDate),
                datasets: [{
                    label: 'DO',
                    data: this._dataDo(data, startDate, endDate),
                    backgroundColor: '#3FA9F5',
                }]
            },
            options: {
                responsive: true,
                tooltips: {enabled: false},
                hover: {mode: null},
                scales: {
                    yAxes: [{
                        ticks: {
                            min: (Math.min.apply( Math, this._dataDo(data, startDate, endDate) )) - 0.5,
                            max: (Math.max.apply( Math, this._dataDo(data, startDate, endDate) )) + 0.5
                        }
                    }]
                }
            }
        })

        this._chartDo = chartDoInit
    },

    _renderSuhu(chartSuhu, data, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19'), onChangeKolam = 'kolam1') {
        const dataHarian = data[onChangeKolam].dataHarian

        const chartSuhuInit = new Chart( chartSuhu, {
            type: 'bar',
            data: {
                labels: this._labelsData(dataHarian, startDate, endDate),
                datasets: [{
                    label: 'Suhu',
                    data: this._dataSuhu(data, startDate, endDate),
                    backgroundColor: '#3FA9F5',
                }]
            },
            options: {
                responsive: true,
                tooltips: {enabled: false},
                hover: {mode: null},
                scales: {
                    yAxes: [{
                        ticks: {
                            min: (Math.min.apply( Math, this._dataSuhu(data, startDate, endDate) )) - 0.5,
                            max: (Math.max.apply( Math, this._dataSuhu(data, startDate, endDate) )) + 0.5
                        }
                    }]
                }
            }
        })

        this._chartSuhu = chartSuhuInit
    },

    _renderSisaPakan(chartSisaPakan, data, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19'), onChangeKolam = 'kolam1'){
        const dataHarian = data[onChangeKolam].dataHarian

        const chartSisaPakanInit = new Chart( chartSisaPakan, {
            type: 'bar',
            data: {
                labels: this._labelsData(dataHarian, startDate, endDate),
                datasets: [{
                    label: 'SisaPakan',
                    data: this._dataSisaPakan(data, startDate, endDate),
                    backgroundColor: '#3FA9F5',
                }]
            },
            options: {
                responsive: true,
                tooltips: {enabled: false},
                hover: {mode: null},
                scales: {
                    yAxes: [{
                        ticks: {
                            min: (Math.min.apply( Math, this._dataSisaPakan(data, startDate, endDate) )) - 0.5,
                            max: (Math.max.apply( Math, this._dataSisaPakan(data, startDate, endDate) )) + 0.5
                        }
                    }]
                }
            }
        })
        
        this._chartSisaPakan = chartSisaPakanInit
    },

    _dataPh(data, startDate, endDate, onChangeKolam = 'kolam1') {
        const dataHarian = data[onChangeKolam].dataHarian
        const filteredDateName = this._labelsData(dataHarian, startDate, endDate)

        const filteredDataPh = filteredDateName.map( date => {
            return dataHarian[date].ph
        })

        return filteredDataPh
    },

    _dataKonduk(data, startDate, endDate, onChangeKolam = 'kolam1'){
        const dataHarian = data[onChangeKolam].dataHarian
        const filteredDateName = this._labelsData(dataHarian, startDate, endDate)

        const filteredDataKonduk = filteredDateName.map( date => {
            return dataHarian[date].konduktivitas
        })

        return filteredDataKonduk
    },

    _dataDo(data, startDate, endDate, onChangeKolam = 'kolam1') {
        const dataHarian = data[onChangeKolam].dataHarian
        const filteredDateName = this._labelsData(dataHarian, startDate, endDate)

        const filteredDataDo = filteredDateName.map( date => {
            return dataHarian[date].do
        })

        return filteredDataDo
    },

    _dataSuhu(data, startDate, endDate, onChangeKolam = 'kolam1') {
        const dataHarian = data[onChangeKolam].dataHarian
        const filteredDateName = this._labelsData(dataHarian, startDate, endDate)

        const filteredDataSuhu = filteredDateName.map( date => {
            return dataHarian[date].suhu
        })

        return filteredDataSuhu
    },

    _dataSisaPakan(data, startDate, endDate, onChangeKolam = 'kolam1'){
        const dataHarian = data[onChangeKolam].dataHarian
        const filteredDateName = this._labelsData(dataHarian, startDate, endDate)

        const filteredDataSisaPakan = filteredDateName.map( date => {
            return dataHarian[date].sisaPakan
        })

        return filteredDataSisaPakan
    },

    _updatePh(chart, data, onChangeKolam, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19')) {
        const dataHarian = data[onChangeKolam].dataHarian

        chart.data.labels = this._labelsData(dataHarian, startDate, endDate)
        chart.data.datasets = [{
            label: 'pH',
            data: this._dataPh(data, startDate, endDate, onChangeKolam),
            backgroundColor: '#3FA9F5'
        }]

        chart.options.scales.yAxes = [{
            ticks: {
                min: (Math.min.apply( Math, this._dataPh(data, startDate, endDate, onChangeKolam))) - 1,
                max: (Math.max.apply(Math, this._dataPh(data, startDate, endDate, onChangeKolam))) + 1
            }
        }]

        chart.update()
    },

    _updateKonduk(chart, data, onChangeKolam, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19')){
        const dataHarian = data[onChangeKolam].dataHarian

        chart.data.labels = this._labelsData(dataHarian, startDate, endDate)
        chart.data.datasets = [{
            label: 'Konduktivitas',
            data: this._dataKonduk(data, startDate, endDate, onChangeKolam),
            backgroundColor: '#3FA9F5'
        }]

        chart.options.scales.yAxes = [{
            ticks: {
                min: (Math.min.apply( Math, this._dataKonduk(data, startDate, endDate, onChangeKolam))) - 1,
                max: (Math.max.apply(Math, this._dataKonduk(data, startDate, endDate, onChangeKolam))) + 1
            }
        }]

        chart.update()
    },

    _updateDo(chart, data, onChangeKolam, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19')) {
        const dataHarian = data[onChangeKolam].dataHarian

        chart.data.labels = this._labelsData(dataHarian, startDate, endDate)
        chart.data.datasets = [{
            label: 'DO',
            data: this._dataDo(data, startDate, endDate, onChangeKolam),
            backgroundColor: '#3FA9F5'
        }]

        chart.options.scales.yAxes = [{
            ticks: {
                min: (Math.min.apply( Math, this._dataDo(data, startDate, endDate, onChangeKolam))) - 1,
                max: (Math.max.apply(Math, this._dataDo(data, startDate, endDate, onChangeKolam))) + 1
            }
        }]

        chart.update()
    },

    _updateSuhu(chart, data, onChangeKolam, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19')) {
        const dataHarian = data[onChangeKolam].dataHarian

        chart.data.labels = this._labelsData(dataHarian, startDate, endDate)
        chart.data.datasets = [{
            label: 'Suhu',
            data: this._dataSuhu(data, startDate, endDate, onChangeKolam),
            backgroundColor: '#3FA9F5'
        }]

        chart.options.scales.yAxes = [{
            ticks: {
                min: (Math.min.apply( Math, this._dataSuhu(data, startDate, endDate, onChangeKolam))) - 1,
                max: (Math.max.apply(Math, this._dataSuhu(data, startDate, endDate, onChangeKolam))) + 1
            }
        }]

        chart.update()
    },

    _updateSisaPakan(chart, data, onChangeKolam, startDate = new Date('2020-10-09'), endDate = new Date('2020-10-19')){
        const dataHarian = data[onChangeKolam].dataHarian

        chart.data.labels = this._labelsData(dataHarian, startDate, endDate)
        chart.data.datasets = [{
            label: 'Sisa Pakan',
            data: this._dataSisaPakan(data, startDate, endDate, onChangeKolam),
            backgroundColor: '#3FA9F5'
        }]

        chart.options.scales.yAxes = [{
            ticks: {
                min: (Math.min.apply( Math, this._dataSisaPakan(data, startDate, endDate, onChangeKolam))) - 1,
                max: (Math.max.apply(Math, this._dataSisaPakan(data, startDate, endDate, onChangeKolam))) + 1
            }
        }]

        chart.update()
    },

    _labelsData(dataHarian, startDate, endDate) {
        return Object.keys(dataHarian).filter((date) => {
            const aDate = new Date(date)
            return aDate >= startDate && aDate <= endDate;
        });
    }
}

export default ChartPagesInitiator;