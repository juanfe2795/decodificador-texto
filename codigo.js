var opcionEncriptar = document.querySelector(".btn-encriptar");
var opcionDesencriptar = document.querySelector(".btn-desencriptar");
var logo = document.querySelector(".opcion-logo");
var subtextoh2 = document.querySelector(".opcion-h2");
var texto = document.querySelector(".opcion-texto");
var resultado = document.querySelector(".opcion-resultado");

opcionEncriptar.onclick = encriptar;
opcionDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarFrente();
    var area = traerTexto()
    resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
    ocultarFrente();
    var area = traerTexto()
    resultado.textContent = desencriptarTexto(area);

}

function traerTexto(){
    var area = document.querySelector(".area"); //recuperar texto del area
    return area.value;
}

function ocultarFrente(){   //para ocultar el dibujo y el texto 
    logo.classList.add("ocultar");
    subtextoh2.classList.add("ocultar");
    texto.classList.add("ocultar");
}

function encriptarTexto(parrafo){
    var mensaje = parrafo;
    var mensajeFinal = "";

    for(var i = 0; i < mensaje.length; i++){
        if(mensaje[i] == "a"){
            mensajeFinal = mensajeFinal + "ai"
        }
        else if(mensaje[i] == "e"){
            mensajeFinal = mensajeFinal + "enter"
        }
        else if(mensaje[i] == "i"){
            mensajeFinal = mensajeFinal + "imes"
        }
        else if(mensaje[i] == "o"){
            mensajeFinal = mensajeFinal + "ober"
        }
        else if(mensaje[i] == "u"){
            mensajeFinal = mensajeFinal + "ufat"
        }
        else{
            mensajeFinal = mensajeFinal + mensaje[i];
        }
    }
    return mensajeFinal;
}

function desencriptarTexto(parrafo){
    var mensaje = parrafo;
    var mensajeFinal ="";

    for(var i = 0; i < mensaje.length; i++){
        if(mensaje[i] == "a"){
            mensajeFinal = mensajeFinal + "a"
            i = i+1;
        }
        else if(mensaje[i] == "e"){
            mensajeFinal = mensajeFinal + "e"
            i = i+4;
        }
        else if(mensaje[i] == "i"){
            mensajeFinal = mensajeFinal + "i"
            i = i+3;
        }
        else if(mensaje[i] == "o"){
            mensajeFinal = mensajeFinal + "o"
            i = i+3;
        }
        else if(mensaje[i] == "u"){
            mensajeFinal = mensajeFinal + "u"
            i = i+3;
        }
        else{
            mensajeFinal = mensajeFinal + mensaje[i];
        }
    }
    return mensajeFinal;
}
