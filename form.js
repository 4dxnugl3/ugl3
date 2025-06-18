let mainForm = document.getElementById("mainForm");
let inputNom= document.getElementById("nombre");
let inputCodigoPostal=document.getElementById("codigoPostal");
let inputEdad=document.getElementById("edad");
let errorNombre = document.getElementById("errorNombre");
let errorEdad = document.getElementById("errorEdad");
let errorCodigoPostal = document.getElementById("errorCodigoPostal");

console.log("hjgjhg");
mainForm.addEventListener('submit', e=>{
    e.preventDefault(); 

    if(inputNom.value.length == 0)
        errorNombre.textContent = "Por favor escribe tu nombre.";
    else
        errorNombre.textContent = " ";

    if(inputEdad.value.length > 1 && inputEdad.value.length < 3)
        errorEdad.textContent = "La edad no es valida";
    else
        errorEdad.textContent = " ";
    if(inputCodigoPostal.value.length != 5)
        errorCodigoPostal.textContent = "El godigo postal ti tiene un formato valido";
    else
        errorCodigoPostal.textContent = " ";


});