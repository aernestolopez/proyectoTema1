//Regex que nos ayudaran en las validaciones
var validEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
var validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}[^'\s]/
var validNum=/^[0-9]+$/;
var validTel=/^[0-9]{9}/
//Obtenemos los divs que contendran los mensajes de error
const errorEmail=document.getElementById('errorEmail')
const errorTexto=document.getElementById('errorTexto')
const errorPassword=document.getElementById('errorPassword')
const errorNumero=document.getElementById('errorNumero')
const errorTel=document.getElementById('errorTel')
const errorNick=document.getElementById('errorNick')
const errorPassword2=document.getElementById('errorPassword2')
//Obtenemos el boton y lo deshabilitamos
const botonSubmit=document.getElementById('submit')
botonSubmit.disabled=true

//Comprobacion de email
function comprobarEmail(){
    var email=document.getElementById('email').value
    
    //Si el email no es valido se mostrara un mensaje de error
    if(!validEmail.test(email)){
        errorEmail.innerHTML='El correo está malformado'
    }else{
    //Si es valido no se mostrara nada
    errorEmail.innerHTML=' ';
    }
}

//Comprobacion de contraseña
function comprobarPassword(){
    var password=document.getElementById('password').value
    //Si no contiene lo que pedimos en el regex y es menor de 8 caracteres mostramos un error
    if(!( validPassword.test(password)&& password.length>8)){
        errorPassword.innerHTML='La contraseña debe contener minusculas, mayusculas, numeros y caracteres especiales'
    }else{
        //Si es valida no mostramos nada
        errorPassword.innerHTML=' '
    }
}

//Comprobacion de texto
function comprobarTexto(){
    var texto=document.getElementById('text').value.length
    //Si el texto tiene menos de 12 caracteres mostramos un error
    if(texto>12){
        errorTexto.innerHTML='El texto tiene mas de 12 caracteres'
    }else{
        //Si tiene mas no mostramos nada
    errorTexto.innerHTML=' '
    }
}

//Comprobacion de numero
function comprobarNumero(){
    //Se utiliza text para el numero ya que al usar el tipo number este se valida solo a que sea un numero no dejando escribir letras
    var numero=document.getElementById('num').value;
    //Si lo introducido no está dentro del regex se mostrara un mensaje de error
    if(!validNum.test(numero)){
        errorNumero.innerHTML='Numero no valido'
    }else{
        //Si es valido no se muestra nada
        errorNumero.innerHTML=' '
    }
}
//Comprobacion numero telefono
function comprobarNumeroTel(){
    var numeroTel=document.getElementById('tel').value;
    //Si el numero de telefono no se verifica con el regex mostramos un mensaje de error
    if(!validTel.test(numeroTel)){
        errorTel.innerHTML="El numero de telefono no es valido"
    }else{
        //Si no hay problemas no se muestra nada
    errorTel.innerHTML=' '
    }
}

function comprobarNick(){
    var texto=document.getElementById('nick').value.length
    //Si el texto tiene menos de 12 caracteres mostramos un error
    if(texto>12){
        errorNick.innerHTML='El texto tiene mas de 12 caracteres'
    }else{
        //Si tiene mas no mostramos nada
    errorNick.innerHTML=' '
    }
}

function validarContrasenia(){
    var password=document.getElementById('password').value
    var password2=document.getElementById('password2').value
    if(password2!=password){
        errorPassword2.innerHTML='La contraseña no es igual a la anterior'
    }else{
        errorPassword2.innerHTML=' '
    }
}



//Comprobacion que no hay errores
function comprobar(){
    //Si los divs donde se muestra el texto de error están vacios se habilita el boton
    if(( errorEmail==null||errorEmail.innerHTML==' ' ) && (errorPassword2==null || errorPassword2.innerHTML==' ') && (errorNick==null || errorNick.innerHTML==' ') && ( errorNumero==null||errorNumero.innerHTML==' ' ) && ( errorPassword==null||errorPassword.innerHTML==' ' ) && (errorTel==null || errorTel.innerHTML==' ') && ( errorTexto==null||errorTexto.innerHTML==' ' )){
        botonSubmit.disabled=false;
    }else{
        //De lo contrario se deshabilita
        botonSubmit.disabled=true;
    }
}

function desactivar(){
    if(!(errorEmail.innerHTML==' ' || errorNumero.innerHTML==' ' || errorPassword.innerHTML==' ' || errorTel.innerHTML==' ' || errorTexto.innerHTML==' ')){
        errorEmail.innerHTML=''
        errorNumero.innerHTML=''
        errorPassword.innerHTML=''
        errorTel.innerHTML=''
        errorTexto.innerHTML=''
    }
    botonSubmit.disabled=true;
}

