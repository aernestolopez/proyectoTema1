<?php
require './conexion/conexion.php';
//Obtenemos el id de sesion creada en el login
session_start();
$id = $_SESSION['sesion'];
$sql = "SELECT nick FROM usuario WHERE sesion=:sesion";
$stmt = $conecta->prepare($sql);
$stmt->bindParam(":sesion", $id, PDO::PARAM_STR);
$stmt->execute();
$elresul = $stmt->fetch(PDO::FETCH_ASSOC);
$nombre = $elresul['nick'];
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./img/logo.ico">
    <link rel="stylesheet" href="./estilos.css"/>
    <script src="./comprobacion2.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
        integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ"
        crossorigin="anonymous"></script>

    <title>Contacto</title>
</head>

<body>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-brand">
                <img class="img-fluid" src="./img/logo.ico" width="30" height="30" alt="">
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="./home.php">Home<span class="sr-only"></span></a>
                </div>
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="./home.php">Contactanos<span class="sr-only"></span></a>
                </div>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a class="nav-item nav-link active" href="./indexup.php">
                        <img src="obtenerimg.php?nombre=<?= $nombre ?>" alt="login-icon" width="40 px" height="40 px"
                            class="rounded-circle" />
        </div></a>
        </li>
        </ul>
        </div>
    </nav>

    <div id="center">
    <div id="app-2">
        <h1 v-bind:title="message">Contáctanos</h1>
    </div>
        <div id="app-4">
        <ol class="list">
            <li style="text-align: center;" v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        
    <form onsubmit="">
        <div id="email">
            <label>Introduzca su correo:
                <input class="form-control form-control-lg" name="email" type="email" placeholder="email" onchange="comprobar()">
            </label>
        </div>
        <div id="text">
            <label> Introduzca su mensaje:
                <input class="form-control form-control-lg" name="text" type="text" placeholder="mensaje" onchange="comprobar()">
            </label>
        </div>
        <input name="submit1" type="submit">
    </form>
    </div>
    </div>
    <script>
        var app4 = new Vue({
            el: '#app-4',
            data: {
                todos: [
                    { text: 'Introduzca su correo' },
                    { text: 'Introduzca el mensaje' },
                    { text: 'Envíe el formulario' }
                ]
            }
        })
    </script>

<script>
        var app2 = new Vue({
            el: '#app-2',
            data: {
                message: 'Usted cargó esta página el ' + new Date().toLocaleString()
            }
        })
    </script>
</body>

</html>