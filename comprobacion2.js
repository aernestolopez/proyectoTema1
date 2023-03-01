function comprobar() {
    //conseguimos todos los inputs
    var inputs = document.getElementsByTagName("input");
    //recorremos los inputs y recogemos los tipos que poseen
    for (var i=0; i<inputs.length; i++){
        
       var tipo=inputs[i].getAttribute("type");
       if (tipo=="email"){
           var input=inputs.namedItem("email").value;
           //controlamos que en la direccion de correo exista @ y termine con ".com" o ".es"
           if(input.includes("@") && (input.endsWith(".com")) || input.endsWith(".es")) {
               //Habilitamos el boton
               
           }else{
               var div=document.getElementById("email");
               //TODO: HACER QUE EL P SE BORRE SI ESTA BIEN
               //
                   var error=document.createElement("p");
                   var errorText=document.createTextNode("El email no es correcto");
                   error.appendChild(errorText);
                   error.style.color="red";
                   div.appendChild(error);
           }
       }
        if (tipo=="text"){
            //Controlamos que el tamaño maximo sea 12
            var input=inputs.namedItem("text").value;
            if (input.length===0 || input.length>12){
                var div=document.getElementById("text");
                
                    var error=document.createElement("p");
                    var errorText=document.createTextNode("El texto tiene 0 caracteres o mas de 12 caracteres");
                    error.appendChild(errorText);
                    error.style.color="red";
                    div.appendChild(error); 
            }
        }
        var p=document.getElementsByTagName('p');
        for (var i=0; i<p.length; i++){
            p.value("")
        }
    }
}