function agregarTarea() {
    //obtener valor de la nueva tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    console.log(nuevaTareaTexto);
    //validamos que no esté vacío el campo
    if(nuevaTareaTexto === "") {
        alert("Ingresa una tarea!");
        return;
    }
    //crear elemento de la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //crear botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
        console.log("Borrar");
        nuevaTarea.remove();
    }
    
    //agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);
    
    //agregar el elemento de la lista a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);
    //limpiar cuadro texto
    document.getElementById("nuevaTarea").value="";
}