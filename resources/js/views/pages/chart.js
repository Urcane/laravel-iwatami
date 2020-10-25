import { drop } from "lodash";
import SourceIwatami from "../../data/source-iwatami";
import ChartPagesInitiator from "../../utils/chart-chart-initiator";

const Chart = {
    render() {
        return `
            <div class="row">
                <nav class="col-sm-10">
                    <div class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="harian-tab" data-toggle="tab" href="#harian" role="tab" aria-controls="harian" aria-selected="true">Data Harian</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link disabled" id="disabled-tab-jam" data-toggle="tab" href="#" role="tab" aria-controls="no-data" aria-selected="false">Data Per Jam</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link disabled" id="disable-tab-menit" data-toggle="tab" href="#" role="tab" aria-controls="no-data-2" aria-selected="false">Data Per Menit</a>
                        </li>
                    </div>
                </nav>
            </div>
        `
    },

    async afterRender() {
        // const overviewContainer = document.querySelector('#overviewContainer')
        const data = await SourceIwatami.getAllData()

        ChartPagesInitiator.init({
            chartPh: document.querySelector('#chartPagesPh'),
            chartKonduk: document.querySelector('#chartPagesKondutivitas'),
            chartDo: document.querySelector('#chartPagesDo'),
            chartSuhu: document.querySelector('#chartPagesSuhu'),
            chartSisaPakan: document.querySelector('#chartPagesSisaPakan'),
            data: data,
            dropdown: document.querySelector('#kolam-selector-chart'),
            dateFrom: document.querySelector('#date-picker-chart-from'),
            dateTo: document.querySelector('#date-picker-chart-to'),
        })


        
    }
};

export default Chart;