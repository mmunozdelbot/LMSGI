function validarFormulario() {
    var cadenaErrores = "";
    var campo = document.getElementById("campo");
    
    if (campo.value == null || campo.value.length == 0) {
        cadenaErrores = "<li>Error Campo: Campo Vacío</li>";
    } else if (campo.value.length < 5) {
        cadenaErrores = cadenaErrores + "<li>Error Campo: Debe tener al menos 5 caracteres</li>";
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

    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0){
        cadenaErrores = cadenaErrores + "<li>Error Web: Campo Vacío</li>";
    } else if (!web.startsWith("www") && !web.endsWith("es")) {
        cadenaErrores = cadenaErrores + "<li>Error Web: Debe empezar por www y acabar en .es</li>";
    }

    var aficion1 = document.getElementById("aficion1");
    var aficion2 = document.getElementById("aficion2");
    var aficion3 = document.getElementById("aficion3");

    if (!aficion1.checked || !aficion2.checked || !aficion3.checked){
        cadenaErrores = cadenaErrores + "<li>Error Aficiones: Debes elegir al menos uno</li>";
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

function cambiar() {
    var letra = document.getElementById("letra");
    letra.style.fontSize = "x-large";
    var negrita = document.getElementById("negrita");
    negrita.style.fontWeight = "bold";
    var color = document.getElementById("color");
    color.style.color = "pink";
}

function calcular() {
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var iva = document.getElementById("iva").value;
    
    var resultado = eval(precio) + eval(precio*iva/100);
    document.getElementById("resultado").innerHTML = nombre + " tendrá un precio final de " + resultado + "€";

}