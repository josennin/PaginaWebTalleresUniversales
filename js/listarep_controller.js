function listaReportes() {
    var user = {
        metodo: "selectAll",
    }
    $.ajax({
        url: "../php/admin3.php",
        method: "POST",
        data: user,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (usuario_response) {
            var reportes = JSON.parse(usuario_response);
            reportes.map(function (reporte) {
                var fila = document.createElement("tr");
                //nombre
                var nombre = document.createElement("td");
                $(nombre).text(reporte.nombre);
                $(fila).append(nombre);
                //apellidos
                var apellidos = document.createElement("td");
                $(apellidos).text(reporte.apellidos);
                $(fila).append(apellidos);
                //provincia
                var provincia = document.createElement("td");
                $(provincia).text(reporte.provincia);
                $(fila).append(provincia);
                //telefono
                var telefono = document.createElement("td");
                $(telefono).text(reporte.telefono);
                $(fila).append(telefono);
                //fecha
                var fecha = document.createElement("td");
                $(fecha).text(reporte.fecha);
                $(fila).append(fecha);
                //tipo de articulo
                var tipoArticulo = document.createElement("td");
                $(tipoArticulo).text(reporte.tipoArticulo);
                $(fila).append(tipoArticulo);
                //daño
                var dano = document.createElement("td");
                $(dano).text(reporte.dano);
                $(fila).append(dano);
                //marca
                var marca = document.createElement("td");
                $(marca).text(reporte.marca);
                $(fila).append(marca);
                //garantia
                var garantia = document.createElement("td");
                $(garantia).text(reporte.garantia);
                $(fila).append(garantia);
                //editar
                var editar = document.createElement("td");
                $(editar).html("<a href=\"editarReporte.html?" + reporte.idreporte + "\"><i class=\"fa fa-lg fa-pencil-square-o verde\" aria-hidden=\"true\"></i></a>");
                $(editar).addClass("botonTabla");
                $(fila).append(editar);
                //borrar
                var borrar = document.createElement("td");
                $(borrar).html("<i class=\"fa fa-lg fa-trash-o rojo\" aria-hidden=\"true\"></i>");
                $(borrar).addClass("botonTabla");
                $(fila).append(borrar);
                //pegar la fila a la tabla
                $('#listaReporte').append(fila);
            });
        }
    });
    return false;
}

function traerID(idreporte) {
    var user = {
        metodo: "selectID",
        idreporte: idreporte
    }
    $.ajax({
        url: "../php/admin3.php",
        method: "POST",
        data: user,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (usuario_response) {
            var reporte = JSON.parse(usuario_response);
            $('#nombre').val(reporte.nombre);
            $('#apellidos').val(reporte.apellidos);
            $('#provincia').val(reporte.provincia);
            $('#telefono').val(reporte.telefono);
            $('#fecha').val(reporte.fecha);
            $('input[value="'+reporte.tipoArticulo+'"]').prop("checked",true);
            $('#dano').val(reporte.dano);
            $('#marca').val(reporte.marca);
            $('input[value="'+reporte.garantia+'"]').prop("checked",true);
        }
    });
    return false;
}

function editar() {
    var user = {
        metodo: "update",
        nombre: $('#nombre').val(),
        apellidos: $('#apellidos').val(),
        provincia: $('#provincia').val(),
        telefono: $('#telefono').val(),
        fecha: $('#fecha').val(),
        tipoArticulo: $('input[name="tipart"]:checked').val(),
        dano: $('#dano').val(),
        marca: $('#marca').val(),
        garantia: $('input[name="gara"]:checked').val(),
   }
    console.log(JSON.stringify(user));
    $.ajax({
        url: "../php/admin3.php",
        method: "POST",
        data: user,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (usuario_response) {
            if (usuario_response == "Exito") {
                $('#mensaje').text("Reporte editado con éxito!");
            } else {
                $('#mensaje').text("Error al editar reporte");
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