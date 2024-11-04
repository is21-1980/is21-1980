// Espera que el contenido de la pagina este completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const toggleIcon = document.getElementById("toggleIcon");
    const isDarkMode = localStorage.getItem("theme") === "dark";

    // Función para aplicar el tema (oscuro o claro)
    function applyTheme(dark) {
        // Aplica o quita la clase 'dark-mode' al cuerpo para cambiar el tema
        document.body.classList.toggle("dark-mode", dark);
        document.body.classList.toggle("light-mode", !dark);
        // Cambia el icono del boton de sol a luna y viceversa segun el tema
        toggleIcon.classList.toggle("bi-sun-fill", !dark);
        toggleIcon.classList.toggle("bi-moon-fill", dark);

        // Cambia el color de los enlaces de redes sociales en función del tema
        const socialLinks = document.querySelectorAll(".social-links a");
        socialLinks.forEach(link => {
            link.classList.toggle("dark-mode", dark);
        });
        // Guarda la preferencia de tema en localStorage
        localStorage.setItem("theme", dark ? "dark" : "light");
    }

    // Aplica el tema en base a la preferencia guardada
    applyTheme(isDarkMode);

    // Cambia el tema al hacer clic en el botón
    themeToggle.addEventListener("click", function () {
        const isDark = document.body.classList.contains("dark-mode");
        applyTheme(!isDark);
    });
});

// Función para mostrar una alerta con un mensaje personalizado
function mostrarAlerta(mensaje) {
    alert(mensaje); // Muestra una ventana de alerta con el mensaje
}

// Función para mostrar un modal Bootstrap específico según su ID
function mostrarModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show(); // Muestra el modal con el ID especificado
}

//Funcion para enviar el email desde la seccion contacto (el formulario)
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Verifica si los campos están completos
    if (name && email && message) {
        // Crea el enlace mailto con los datos del formulario codificados en URL
        const mailtoLink = `mailto:is21-1980@unphu.edu.do?subject=Contacto desde el sitio web&body=Nombre: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMensaje:%0D%0A${encodeURIComponent(message)}`;
        // Abre el cliente de correo predeterminado para enviar el correo
        window.location.href = mailtoLink;

        // Muestra un modal de éxito después de enviar el correo
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();

        // Limpia los campos del formulario de contacto
        document.getElementById('contactForm').reset();
    } else {
        // Muestra una alerta si los campos no están completos
        alert("Por favor, complete todos los campos del formulario.");
    }
}