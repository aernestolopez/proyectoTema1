function comprobar() {
    //conseguimos todos los inputs
    let inputs = document.getElementsByTagName("input");
    //recorremos los inputs y recogemos los tipos que poseen
    for (let i=0; i<inputs.length; i++){
       let tipo=inputs[i].getAttribute("type");
       if (tipo=="email"){
           let input=inputs.namedItem("email").value;
           //controlamos que en la direccion de correo exista @ y termine con ".com" o ".es"
           if(!(input.includes("@") && (input.endsWith(".com")) || input.endsWith(".es"))) {
            //Si no cumple con este requisito se mostrara una alerta en el navegador indicando el error
            alert("El email no es correcto");
           }
       }
        else if (tipo=="text"){
            //Controlamos que el tamaño maximo sea 12
            let input=inputs.namedItem("text").value;
            if (input.length<1 || input.length>12){
                //Si no se cumple con el requisito se mostrara una alerta en el navegador indicando el error
                alert("El mensaje debe tener entre 1 y 12 caracteres")
            }
        }
    }
}