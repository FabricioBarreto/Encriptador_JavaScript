var frase = document.getElementById("textareaFrase");
var btnDesenc = document.querySelector(".btnDesencriptar");
var alerta = document.querySelector(".alerta");
var salidaMuñeco = document.querySelector(".salidaMuñeco");
var salidaTexto = document.querySelector(".salidaTexto");
var texto = document.getElementById("texto");

// Funcion Encriptar.
var btnEnc = document.querySelector(".btnEncriptar");

btnEnc.addEventListener("click",function(){
    event.preventDefault();
    let fraseEncriptada = validarLetras(frase.value);
    if(fraseEncriptada === ""){
        salidaMuñeco.style.display = "flex";
        salidaTexto.style.display = "none";
    }else if(fraseEncriptada){
        fraseEncriptada = fraseEncriptada.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        btnCopiar.innerHTML = '<p class="textoBoton">Copiar</p>';
        return texto.innerHTML = fraseEncriptada;
    }else{
        texto.innerHTML = "";
        return;
    }
});

// Funcion Desencriptar.
btnDesenc.addEventListener("click",function(){
    event.preventDefault();
    let fraseDesencriptada = validarLetras(frase.value);
    if(fraseDesencriptada){
    fraseDesencriptada = fraseDesencriptada.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    btnCopiar.innerHTML = '<p class="textoBoton">Copiar</p>';
    return texto.innerHTML = fraseDesencriptada;
    }else{
        return texto.innerHTML = "";
    }
});

// Funcion para validar que las letras sean unicamente minusculas.
function validarLetras(frase){
    let validas = 'abcdefghijklmnñopqrstuvwxy z ';
    let encriptar = "";
    for(letra of frase){
        if(validas.indexOf(letra) === -1){
            // Muestra la alerta de solo Mayusculas.
            alerta.style.color = "red";
            alerta.style.fontSize = "20px";
            // Muestra el muñeco.
            salidaMuñeco.style.display = "flex";
            salidaTexto.style.display = "none";
            return false;
        }else{
            encriptar += letra; 
            // Vuelve las letras de Alerta a su color y tamaño original.
            alerta.style.fontSize = "12px";
            alerta.style.color = "#000";
            // Oculta el muñeco y muestra el texto ya encriptado.
            salidaMuñeco.style.display = "none";
            salidaTexto.style.display = "flex";
        }
    }
    return encriptar;
};


//Funcion copiar
var btnCopiar = document.querySelector(".btnCopiar");

btnCopiar.addEventListener("click",function(){
    texto.select();
    document.execCommand('copy');
    btnCopiar.innerHTML = '<p class="textoBoton">¡Copiado!</p>';
});
