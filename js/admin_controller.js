function registrarUsu() {
    var user = {
        metodo: "insert",
        nombre: $('#nombre').val(),
        apellidos: $('#apellidos').val(),
        correo: $('#correo').val(),
        username: $('#username').val(),
        password: $('#password').val(),
                   
    }
    //console.log(JSON.stringify(user));
    $.ajax({
        url: "../php/admin2.php",
        method: "POST",
        data: user,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (usuario_response) {
            var usuarioLogueado = sessionStorage.getItem('usuarioLogueado');
            if(usuarioLogueado){
                if (usuario_response == "Exito") {
                    $('#mensaje3').text("Usuario registrado con éxito!");
                } else {
                    $('#mensaje3').text("Usuario registrado con éxito!");
                }
            }else{
                alert("Se ha enviado con éxito!");
                window.location.href = "/";
            }
            
        }
    });
    return false;
}

function salir() {
    sessionStorage.removeItem("usuarioLogueado");
    alert("Cerrar sesion");
    window.location.href = "/";
}