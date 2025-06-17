btnañade=document.getElementById("añadir");
btnelimina=document.getElementById("eliminar");
lista=document.getElementById("contenedor");
function añadir()
{
    let nuevaTarea=document.createElement("div");
    nuevaTarea.textContent="Nueva tarea ^^"
    lista.appendChild(nuevaTarea);
}
btnañade.addEventListener("click",()=>{
    añadir();
});
btnelimina.addEventListener("click",()=>{
    lista.removeChild(lista.lastChild);
});
