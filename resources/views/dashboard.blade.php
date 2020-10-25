<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iwatami - Dashboard</title>
    <link rel="stylesheet" href="{{ URL::asset('css/dashboard.css') }}">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></head>
</head>
<body>
    @if (session('status'))
        <div>{{ session('status') }}</div>
    @endif

    
    <div class="row">
        <div id="sidebar" class="col-lg-2 col-md-3 sidebar reset-padding">
            <div class="text-center">
                <img src="../../assets/Logo_Iwatami2.png">
            </div>
            <div>
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link custom-padding-nav active" id="v-pills-home-tab" data-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">
                        <i class="fas fa-th-large"></i>
                        <span style="padding-left: 16px;">Overview</span> 
                    </a>
                    <a class="nav-link custom-padding-nav" id="v-pills-profile-tab" data-toggle="pill" href="#chart" role="tab" aria-controls="chart" aria-selected="false">
                        <i class="fas fa-chart-area"></i>
                        <span style="padding-left: 16px;">Chart</span>
                    </a>
                    <a class="nav-link custom-padding-nav" id="v-pills-messages-tab" data-toggle="pill" href="#history" role="tab" aria-controls="history" aria-selected="false">
                        <i class="fas fa-history"></i>
                        <span style="padding-left: 16px;">Riwayat</span>
                    </a>
                    <a class="nav-link custom-padding-nav" id="settings-tab" data-toggle="pill" href="#settings" role="tab" aria-controls="settings" aria-selected="false">
                        <i class="fas fa-cog"></i>
                        <span style="padding-left: 16px;">Pengaturan</span>
                    </a>
                    <a class="nav-link custom-padding-nav" id="settings-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="false">
                        <i class="far fa-user-circle"></i>
                        <span style="padding-left: 16px;">Akun</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-9 col-lg-10 reset-padding" id="main-content">
            <header>
                <nav class="navbar navbar-light bg-secondary border">
                    <a class="btn btn-outline-primary" id="btn-drawer-trigger">
                        <i class="fas fa-bars"></i>
                        <span style="padding-left: 8px;">Menu</span>
                    </a>
                    <p>{{ date('D, d M Y, h:ia' , strtotime("now"))}}</p>
                    <div class="dropdown">
                        <a class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="far fa-user-circle"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <h6 class="dropdown-header">Account</h6>

                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                        
                                <button  class="btn btn-light button-login float-right" type="submit">
                                    {{ __('Logout') }}
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <main class="my-app-dashboard">
                <div class="tab-content all-content-tabs" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                        @include('pages.overview')
                    </div>
                    <div class="tab-pane fade" id="chart" role="tabpanel" aria-labelledby="chart-tab">
                        @include('pages.chart')
                    </div>
                    <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
                        @include('pages.history')
                    </div>
                    <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        @include('pages.settings')
                    </div>
                    <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab">
                        @include('pages.account')
                    </div>
                </div>
            </main>        
        </div>
    </div>
    
    <!-- Bootstrap js -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.3/umd/popper.min.js" integrity="sha512-53CQcu9ciJDlqhK7UD8dZZ+TF2PFGZrOngEYM/8qucuQba+a+BXOIRsp9PoMNJI3ZeLMVNIxIfZLbG/CdHI5PA==" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <script src="{{ mix('js/dashboard.js') }}"></script>
</body>
</html>