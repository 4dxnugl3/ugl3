let mainForm = document.getElementById("mainForm");
let inputNom= document.getElementById("nombre");
let inputCodigoPostal=document.getElementById("codigoPostal");
let inputEdad=document.getElementById("edad");
let errorNombre = document.getElementById("errorNombre");
let errorEdad = document.getElementById("errorEdad");
let errorCodigoPostal = document.getElementById("errorCodigoPostal");
let errorGenero = document.getElementById("errorGenero");
let errorPais = document.getElementById("errorPais");


console.log("hjgjhg");
mainForm.addEventListener('submit', e=>{
    e.preventDefault(); 

    if(inputNom.value.length == 0 )
        errorNombre.textContent = "Por favor escribe tu nombre.";
    else
        errorNombre.textContent = " ";

    if(inputEdad.value.length < 1 && inputEdad.value.length > 3)
        errorEdad.textContent = "La edad no es valida";
    else
        errorEdad.textContent = " ";
    if(inputCodigoPostal.value.length != 5)
        errorCodigoPostal.textContent = "El godigo postal ti tiene un formato valido";
    else
        errorCodigoPostal.textContent = " ";
        
    let generosValidos=["Masculino", "Femenino", "Otro"];
    let inputGenero=document.querySelector("input[name='genero']:checked");
    if (!inputGenero)
        errorGenero.textContent = "Por favor selecciona un género.";
    else if(generosValidos.indexOf(inputGenero.value)==-1)
        errorGenero.textContent = "seleccione un genero valido";
    else
        errorGenero.textContent = " ";

    let interesesValidos=["Tecnologia", "Deportes", "Musica", "Arte"];
    let inputIntereses=document.querySelector("input[name='Intereses']:checked");
    if (!inputIntereses)
        errorInteres.textContent = "Por favor elige un interes";
    else if(interesesValidos.indexOf(inputIntereses.value)==-1)
        errorInteres.textContent = "seleccione un interes valido";
    else
        errorInteres.textContent = " ";

    let paisesValidos=["Mexico", "España", "Argentina", "Colombia", "Peru", "Chile", "Venezuela", "Otros"];
    let inputPais=document.getElementById("pais");
    let paisSeleccionado=inputPais.value;
    if (!paisSeleccionado)
        errorPais.textContent = "Por favor elige un pais";
    else if(paisesValidos.indexOf(paisSeleccionado)==-1)
        errorPais.textContent = "seleccione un pais valido";
    else
        errorPais.textContent = " ";

});
