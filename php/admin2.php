<?php
$username = "root2";
$password = "";
$servername = "localhost";
$dbname = "proyectofinal";
$conn = new mysqli($servername, $username, $password, $dbname);

if($_POST["metodo"] == "insert"){
        
        $sql = "insert into usuadmin (nombre,apellido,correo,username,
        password) values ('"
        .$_POST["nombre"]."','"
        .$_POST["apellidos"]."','"
        .$_POST["correo"]."','"
        .$_POST["username"]."','"
        .$_POST["password"]."')";
        //var_dump($sql);

    }else if($_POST["metodo"] == "update"){
        $sql = "update usuadmin set 
        nombre='".$_POST["nombre"]."',
        apellido='".$_POST["apellido"]."',
        correo='".$_POST["correo"]."',
        username='".$_POST["username"]."',
        password='".$_POST["password"]."', where idusuAdmin = ".$_POST["idusuAdmin"];
    }
    var_dump($conn->query($sql));
    /*
    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }
    */



$conn->close();
?>