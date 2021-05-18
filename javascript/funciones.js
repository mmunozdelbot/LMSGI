function mostrarAlerta() {
    alert('ALERTA');
}

function mostrarMensaje() {
    document.getElementById("texto").innerHTML = "<b>MENSAJE</b>";
    document.getElementById("texto").style = "color: blue";
    document.getElementById("texto").className = "borde";
}

function ocultarCapa() {
    document.getElementById("principal").style = 
        "display: none"
}

function mostrarCapa() {
    document.getElementById("principal").style = 
        "display: visibility"
}

function mostrar(mensaje) {
    alert(mensaje);
}

function init() {
    //alert(document.getElementById("usuario").value);
    //var usu = prompt("Introduzca usuario");
    //document.getElementById("usuario").value = usu; 
    
    /*var radios = document.getElementsByName("valores");
    for (let i = 0; i < radios.length; i++) {
         alert (radios[i].value);
        
    }*/

    /*document.getElementsByTagName('p')[0]
        .innerHTML = "PRIMERO";
    document.getElementsByTagName('p')[0]
        .onclick = mostrarAlerta;*/

    //document.getElementsByClassName('clase')[1].onclick = mostrar('PÁRRAFO 2');

    //document.querySelector("#principal p:first-child").onclick = mostrarAlerta;

    /*var lista = document.querySelectorAll("#principal p");
    var lista = document.getElementById("principal").querySelectorAll('p');
    for (let i = 0; i < lista.length; i++) {
        lista[i].innerHTML = i;
        
    }*/

    document.getElementsByTagName('p')[0].innerHTML = "PRIMER PÁRRAFO"
    document.getElementsByTagName('p')[0].onclick = mostrarAlerta;

    document.getElementsByClassName("clase")[0].style = "color: red";

    document.querySelector("#principal p:first-child").onclick = mostrarAlerta;

    var coleccion = document.querySelectorAll("#principal p")
    var colecction = document.getElementById("principal").querySelectorAll('p');

for (let i = 0; i < colecction.length; i++ ) {
    colection[i].innerHTML = "Párrafo " + i;


}
}



window.addEventListener("load", init, false);