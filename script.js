
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
    });
}




document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    if (!form) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {


        clearErrors();

        let valid = true;


        if (nameInput.value.trim().length < 2) {
            showError(nameInput, "Ingresa un nombre válido.");
            valid = false;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Ingresa un correo electrónico válido.");
            valid = false;
        }

  
        if (messageInput.value.trim().length < 5) {
            showError(messageInput, "El mensaje es obligatorio.");
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
            return;
        }

 
        e.preventDefault();
        formMessage.textContent = "Mensaje enviado correctamente.";
        formMessage.classList.add("success");
        form.reset();
    });


    function showError(input, message) {
        const errorID = input.id + "-error";
        const errorDiv = document.getElementById(errorID);

        errorDiv.textContent = message;
        errorDiv.style.display = "block";
        input.setAttribute("aria-invalid", "true");
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(msg => {
            msg.textContent = "";
            msg.style.display = "none";
        });

        document.querySelectorAll("[aria-invalid]").forEach(el => {
            el.removeAttribute("aria-invalid");
        });
    }
});
const backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.textContent = "↑";
backToTop.setAttribute("aria-label", "Volver al inicio");
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
