function validar(campo) {

    if (cp.value == null || cp.value.length == 0) {
        cadenaErrores = "<li>Error Usuario: Campo Vacío</li>";
    } else if (cp.value.length != 4) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Usuario: 5 caracteres</li>";
    }
}

function mostrarError(id, mensaje) {
    document.getElementById("sp" + id).innerHTML = mensaje;
    setTimeout("document.getElementById('nombre').focus();",1);
}

function borrarError(id) {
    document.getElementById("sp" + id).innerHTML = "";
}

function mostrarEdad(campo) {
    document.getElementById("sp" + campo.id).innerHTML = campo.value;
}

function validarFormulario() {
    var cadenaErrores = "";

    var usu = document.getElementById("usu");
    if (usu.value == null || usu.value.length == 0) {
        cadenaErrores = "<li>Error Usuario: Campo Vacío</li>";
    } else if (usu.value.length != 4) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Usuario: 5 caracteres</li>";
    }

    var cp = document.getElementById("web");
    if (cp.value == null || cp.value.length == 0) {
        cadenaErrores = "<li>Error Web Personal: Campo Vacío</li>";
    } else if (cp.startsWith("")) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Web Personal: debe empezar por www</li>";
    } else if (str.endsWith("")) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Web Personal: debe acabar en .es</li>";
    
    }

    var tel = document.getElementById("telefono");
    if (tel.value == null || tel.value.length == 0) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Teléfono: Campo Vacío</li>";
    } else if (tel.value.length != 9) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Teléfono: 9 cifras</li>";
    } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Teléfono: 9 o 6 primera cifra</li>";
    }

    var aficiones = document.getElementById("aficiones");
    if (aficiones.value == null || aficiones.value == 0) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Afición: Seleccione su afición</li>";
    }

    if (cadenaErrores.length == 0) {
        return true;
    } else {
        verErrores(cadenaErrores);
        return false;
    }
}

function verErrores(mensaje) {
    document.getElementById("errores").innerHTML = mensaje;
    document.getElementById("capaerrores").style.visibility = "visible";
}