// Botón principal
const botonServicios = document.querySelector("#inicio button");

botonServicios.addEventListener("click", function () {
    document.querySelector("#servicios").scrollIntoView({
        behavior: "smooth"
    });
});


// Formulario de contacto
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.querySelector('input[type="text"]').value;

    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    alert("¡Gracias por contactarnos, " + nombre + "!");
    
    formulario.reset();
});