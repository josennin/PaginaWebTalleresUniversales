<?php
$username = "root2";
$password = "";
$servername = "localhost";
$dbname = "proyectofinal";
$conn = new mysqli($servername, $username, $password, $dbname);

if($_POST["metodo"] == "select"){
    $sql = "select * from usuadmin where username ='".$_POST["username"]."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectID"){
    $sql = "select * from usuadmin where idusuAdmin =".$_POST["idusuAdmin"];
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectAll"){
    $sql = "select * from usuadmin";
    $usuadmin = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($usuadmin, $row);
        }
        echo json_encode($usuadmin);
    }else{
        echo "Error";
    }
}if($_POST["metodo"] == "update"){
        $sql = "update reporte set 
        nombre='".$_POST["nombre"]."',
        apellido='".$_POST["apellido"]."',
        provincia='".$_POST["provincia"]."',
        telefono='".$_POST["telefono"]."',
        fecha='".$_POST["fecha"]."',
        tipoArticulo='".$_POST["tipoArticulo"]."',
        dano='".$_POST["dano"]."',
        marca='".$_POST["marca"]."',
        garantia='".$_POST["garantia"]."' where idreporte = ".$_POST["idreporte"];
    }
}
$conn->close();
?>