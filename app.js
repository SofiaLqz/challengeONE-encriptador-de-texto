//<textarea> de entrada
let textoEntrada = document.querySelector('.input-text');
//<textarea> de salida
let textoSalida = document.querySelector('.output-text');
//Función para validar el texto
function validarTexto(texto) {
    var expresionRegular = /[^a-z0-9 ]/;  //La expresión coincide con cualquier caracter que no sea una letra minúscula, un número o un espacio
    //Devuelve la longitud del mensaje después de eliminar los espacios en blanco
    if (texto.trim().length === 0) {
        //El mensaje está vacío
        swal("Mensaje vacío", "Por favor ingresa un mensaje para continuar.", "error");
        return false;
    } 
    else {
        //El mensaje no está vacío
        if (expresionRegular.test(texto) === true){
            swal("Su mensaje contiene mayúsculas, caracteres especiales y/o tildes", "Por favor, borrarlos para continuar.", "warning");
            return false; //El mensaje no está vacío y no se ajusta a las restricciones
        }
        else {
            return true;
        }
    }
}
//Función para encriptar el texto
function encriptar(){
    let textoEncriptado = ""
    //La letra "e" es convertida para "enter"
    //La letra "i" es convertida para "imes"
    //La letra "a" es convertida para "ai"
    //La letra "o" es convertida para "ober"
    //La letra "u" es convertida para "ufat"
    let letras = ["a","e","i","o","u"];
    let clavesEncriptacion = ["ai","enter","imes","ober","ufat"];
    //Capturar el texto ingresado por el usuario en el <textarea> de entrada
    let textoEntrada = document.querySelector('.input-text').value;
    //Se valida el texto
    let validacion = validarTexto(textoEntrada) 
    //Si no hay caracteres especiales y el mensaje no está vacío
    if (validacion === true){    
        //Recorrer el texto 
        for (let i = 0; i < textoEntrada.length; i++){
            //Si la letra coincide con alguna de la lista "letras"
            if (letras.includes(textoEntrada[i])){
                //Se obtiene el indice de esa letra en la lista
                let indiceClave = letras.indexOf(textoEntrada[i]);
                //Se contruye el texto encriptado usando la clave equivalente a esa letra
                textoEncriptado+=clavesEncriptacion[indiceClave];
            } 
            else{
                //Si la letra no está en la lista, solo se agrega al texto encriptar
                textoEncriptado+=textoEntrada[i];
            }
        }
        //Desaparece el div-output-section 
        let divOutput = document.querySelector('.div-output-section');
        divOutput.style.display = 'none';
        //Mostrar <textarea> de salida
        textoSalida.style.display = 'block';
        //Mostrar el botón de copiar
        let botonCopiar = document.querySelector('.div-button-copy');
        botonCopiar.style.display = 'block'
        //Mostrar el texto encriptado en el <textarea> de salida
        textoSalida.value = textoEncriptado;
    }
};
//Función para desencriptar el texto
function desencriptar(){
    //Capturar el texto ingresado por el usuario en el <textarea> de entrada
    let textoEntrada = document.querySelector('.input-text').value;
    //Desencriptar el texto haciendo el reemplazo del texto encriptado por la letra original
    textoDesencriptado = textoEntrada.replaceAll("ufat","u").replaceAll("ober","o").replaceAll("ai","a").replaceAll("imes","i").replaceAll("enter","e");
    //Desaparece el div-output-section 
    let divOutput = document.querySelector('.div-output-section');
    divOutput.style.display = 'none';
    //Mostrar <textarea> de salida
    textoSalida.style.display = 'block';
    //Mostrar el botón de copiar
    let botonCopiar = document.querySelector('.div-button-copy');
    botonCopiar.style.display = 'block'
    //Mostrar el texto desencriptado en el <textarea> de salida
    textoSalida.value = textoDesencriptado;
};
//Función para copiar texto al portapapeles
function copiarTextoPortapapeles() {
    let texto = document.querySelector(".output-text").value;
    // Copiar texto del <textarea> de salida
    navigator.clipboard.writeText(texto).then(() => {
        // Mostrar la alerta
        document.querySelector(".alerta").style.display = 'block';
        // Ocultar la alerta después de 2 segundos
        setTimeout(() => {
            document.querySelector(".alerta").style.display = 'none';
        }, 2000); // 2000 milisegundos = 2 segundos
      }).catch(err => {
        console.error('Error al copiar el texto: ', err);
        alert("No se pudo copiar el texto al portapapeles.");
      });
}
//Función para borrar el texto de entrada y reiniciar el <section> de salida
function borrarTexto(){
    document.querySelector('.input-text').value = '';
    //Ocultar <textarea> de salida
    textoSalida.style.display = 'none';
    //Ocultar el botón de copiar
    let botonCopiar = document.querySelector('.div-button-copy');
    botonCopiar.style.display = 'none'
    //Mostrar el div-output-section 
    let divOutput = document.querySelector('.div-output-section');
    divOutput.style.display = 'block';
}