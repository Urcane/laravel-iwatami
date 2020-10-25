
<div id="dataHistoryContainer">
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
            <select class="form-control" id="kolam-selector">
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
                <label for="date-picker-from" class="col-sm-1 col-form-label">Periode: </label>
                <div class="col-sm-2">
                    <input type="date" class="form-control" id="date-picker-from" value="">
                </div>
                <p class="breaker-periode">s/d</p>
                <div class="col-sm-2">
                    <input type="date" class="form-control" id="date-picker-to" value="">
                </div>
            </div>
            <div class="table-responsive container">
                <table class="table">
                <caption>History of Udang Conditions</caption>
                <thead>
                    <tr>
                        <th scope="col">Tanggal</th>
                        <th scope="col">pH</th>
                        <th scope="col">Konduktivitas</th>
                        <th scope="col">DO</th>
                        <th scope="col">Suhu</th>
                        <th scope="col">Sisa Pakan</th>
                    </tr>
                </thead>
                <tbody id="table-data-content">

                </tbody>
                </table>
            </div>
        </div>
    </div>
</div>