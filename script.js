document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form && formMessage) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            formMessage.textContent = "Your form was submitted successfully.";
            form.reset();
        });
    }
});
