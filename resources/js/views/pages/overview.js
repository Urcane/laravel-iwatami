import SourceIwatami from "../../data/source-iwatami";
import OverviewChartInitiator from "../../utils/overview-chart-initiator";
import { overviewCardTemplates } from "../templates/create-templates";

const Overview = {
    async render() {
        return `<div id="overviewContainer" class="row"></div>`
    },

    async afterRender() {
        const overviewContainer = document.querySelector('#overviewContainer')
        const data = await SourceIwatami.getAllData()
        const loopedChart = []

        Object.keys(data).forEach((kolam, i) => {
            var dataHarian = data[kolam].dataHarian

            const overviewInnerContainer = document.createElement('div')
            overviewInnerContainer.classList = 'col-sm-12 col-lg-6'
            overviewInnerContainer.innerHTML = overviewCardTemplates(data[kolam], kolam)
            overviewContainer.appendChild(overviewInnerContainer)

            OverviewChartInitiator.init({
                canvas: document.querySelector(`#overviewChart-${kolam}`).getContext('2d'),
                data: dataHarian,
                dropdown: document.querySelector(`#kondisi-selector-${kolam}`),
                index: i,
                oldChart: loopedChart
            })

            loopedChart.push(OverviewChartInitiator.returningChart())
        });
    }
}

export default Overview;
