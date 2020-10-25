<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iwatami</title>
    <link rel="stylesheet" href="{{ URL::asset('css/style.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></head>
<body>
    <main class="login-main-content">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-7">
                <div class="login-cover">
                    <img src="../assets/Logo_Iwatami1.png" alt="logo IWATAMI" class="img-fluid mx-auto d-block">
                    <h2 class="text-light text-center welcome-greet display-2">Selamat Datang di <strong>Iwatami</strong></h2>
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="container">
                    <div class="form-login mx-auto d-block text-center">
                        
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            
                            <h3>Login</h3>
                            <div class="custom-form">
                                <div>
                                    <i class="far fa-envelope d-inline-block"></i>
                                    <div class="form-login-group d-inline-block">
                                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" name="email" required>
                                    </div>
                                </div>
                                <div>
                                    <i class="fas fa-key d-inline-block"></i>
                                    <div class="form-login-group d-inline-block">
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" autocomplete="current-password" name="password" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <input type="checkbox" class="form-check-input" id="checkRemember" name="remember">
                                    <label class="form-check-label" for="checkRemember">Ingat saya</label>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-success btn-lg button-login" type="submit" role="button">
                                        {{ __('Login') }}
                                    </button>
                                </div>
                            </div>
                            @if ($errors->any())
                                <div style="margin-top: 16px">
                                    <div class="text-danger h6">{{ __('input the right Email or Password please.') }}</div>
        
                                    @foreach ($errors->all() as $error)
                                        <p>{{ $error }}</p>
                                    @endforeach
                                </div>
                            @endif
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Bootstrap js -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <script src="{{ mix('js/index.js')}}"></script>
</body>
</html>