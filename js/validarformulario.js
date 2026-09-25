var CORREO = "orli_castellanos02@unicah.edu";

function enviar(evento) {
    evento.preventDefault();

    var nombre = document.getElementById("txtNombre").value;
    var correo = document.getElementById("txtCorreo").value;
    var mensaje = document.getElementById("txtMensaje").value;

    var errNombre = document.getElementById("errNombre");
    var errCorreo = document.getElementById("errCorreo");
    var errMensaje = document.getElementById("errMensaje");

    errNombre.innerHTML = "";
    errCorreo.innerHTML = "";
    errMensaje.innerHTML = "";

    var valido = true;

    if (nombre.trim() == "") {
        errNombre.innerHTML = "El nombre no puede estar vacío";
        valido = false;
    }
    if (correo.indexOf("@") == -1 || correo.indexOf(".") == -1) {
        errCorreo.innerHTML = "El correo no es válido";
        valido = false;
    }
    if (mensaje.trim() == "") {
        errMensaje.innerHTML = "El mensaje no puede estar vacío";
        valido = false;
    }

    if (valido == true) {
        var asunto = encodeURIComponent("Contacto desde mi portafolio");
        var cuerpo = encodeURIComponent(mensaje + " - De: " + nombre + " (" + correo + ")");
        window.location.href = "mailto:" + CORREO + "?subject=" + asunto + "&body=" + cuerpo;
    }
}

document.getElementById("formContacto").addEventListener("submit", enviar);