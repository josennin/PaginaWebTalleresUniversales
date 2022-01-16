<?php
	$destino = "joseandresuzumaki@gmail.com";
	$nombre = $_POST["name"];
	$correo = $_POST["email"];
	$asunto = $_POST["asunto"];
	$mensaje = $_POST["mensaje"];
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;
	mail($destino, $asunto, $contenido);
?>