function validar(campo) {
    //var campo = document.getElementById("nombre");
    if (campo.value == null || campo.value.lenght == 0) {
        mostrarError(campo.id, "Error: Nombre vacío");
        //campo.style = "border-color: red";
        //campo.focus();
    } else {
        borrarError(campo.id);
        //campo.style = "border-color: none";
    }
}
function mostrarError(id, mensaje) {
    document.getElementById("sp" + id).innerHTML = mensaje;

}

function borrarError(id) {
    document.getElementById("sp" + id).innerHTML = "";
}

function validarFormulario() {
    var cadenaError = "";

    var nombre = document.getElementById("nombre");
    if (nombre.value == null || nombre.value.lenght == 0) {
        cadenaError = "<li>Error Nombre: campo vacío</li>";
    }

    var cp = document.getElementById("postal");
    if (cp.value == null || cp.value.lenght == 0) {
        cadenaError = cadenaError + "<li>Error cód Postal: campo vacío</li>";
    } else if (cp.value.lenght != 5) {
        cadenaError = cadenaError + "<li>Error cód Postal: 5 cifras</li>";
    }

    var tel = document.getElementById("telefono");
    if (tel.value == null || tel.value.lenght == 0) {
        cadenaError = cadenaError + "<li>Error Teléfono: campo vacío</li>";
    } else if (tel.value.lenght != 9) {
        cadenaError = cadenaError + "<li>Error Teléfono: 9 cifras</li>";
    } else if (tel.value.startsWith(9) { !tel.value.startsWith(6) {
        cadenaError = cadenaError + "<li>Error Teléfono: 9 o 6 cifras</li>"

    }
        
    if (cadenaError.lenght == 0) {
        return true;
    } else {
        mostrarError(cadenaError);
        return false;
    }


}


function mostrarError(cadenaError) {
    document.getElementById("errores").innerHTML = cadenaError;
    document.getElementById("capaerrores").style.visibility = "visible";
}

function mostrarEdad(campo) {
    document.getElementById("sp + campo.id").innerHTML = campo.value;
}

