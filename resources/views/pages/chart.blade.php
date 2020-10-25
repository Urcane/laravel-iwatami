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
    <div class="col-sm-2">
        <select class="form-control" id="kolam-selector-chart">
            <option value="kolam1">Kolam 1</option>                            
            <option value="kolam2">Kolam 2</option>
            <option value="kolam3">Kolam 3</option>            
            <option value="kolam4">Kolam 4</option>
        </select>
    </div>
</div>
<div class="tab-content bg-white" id="myTabContent">
    <div class="tab-pane fade show active" id="harian" role="tabpanel" aria-labelledby="harian-tab">
        <div class="form-group row form-tab">
            <label for="date-picker-chart-from" class="col-sm-1 col-form-label">Periode: </label>
            <div class="col-sm-2">
                <input type="date" class="form-control" id="date-picker-chart-from" value="">
            </div>
            <p class="breaker-periode">s/d</p>
            <div class="col-sm-2">
                <input type="date" class="form-control" id="date-picker-chart-to" value="">
            </div>
        </div>
        <div id="canvasContainerChart">
            <div style="padding: 32px;">
                <h3>Indikator Chart pH</h3>
                <canvas id="chartPagesPh"></canvas>
            </div>
            <div style="padding: 32px;">
                <h3>Indikator Chart Konduktivitas</h3>
                <canvas id="chartPagesKondutivitas"></canvas>
            </div>
            <div style="padding: 32px;">
                <h3>Indikator Chart DO</h3>
                <canvas id="chartPagesDo"></canvas>
            </div>
            <div style="padding: 32px;">
                <h3>Indikator Chart Suhu</h3>
                <canvas id="chartPagesSuhu"></canvas>
            </div>
            <div style="padding: 32px;">
                <h3>Indikator Chart SisaPakan</h3>
                <canvas id="chartPagesSisaPakan"></canvas>
            </div>
        </div>
    </div>
</div>