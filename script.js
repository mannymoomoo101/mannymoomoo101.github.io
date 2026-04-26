document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const messageBox = document.getElementById("message");
    const charCount = document.getElementById("charCount");

    const allowedTopics = [
        "passwords",
        "phishing",
        "malware",
        "wifi",
        "privacy",
        "accounts",
        "tools",
        "feedback",
        "general"
    ];

    function cleanInput(value) {
        return value.trim().replace(/[<>]/g, "");
    }

    if (messageBox && charCount) {
        messageBox.addEventListener("input", function () {
            const remaining = 300 - messageBox.value.length;
            charCount.textContent = remaining + " characters remaining";
        });
    }

    if (form && formMessage) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = cleanInput(document.getElementById("name").value);
            const email = cleanInput(document.getElementById("email").value);
            const topic = document.getElementById("topic").value;
            const message = cleanInput(document.getElementById("message").value);

            formMessage.className = "error-message";
            formMessage.textContent = "";

            if (name.length < 2 || name.length > 50) {
                formMessage.textContent = "Please enter a name between 2 and 50 characters.";
                return;
            }

            if (!email.includes("@") || email.length > 80) {
                formMessage.textContent = "Please enter a valid email address.";
                return;
            }

            if (!allowedTopics.includes(topic)) {
                formMessage.textContent = "Please choose a valid topic.";
                return;
            }

            if (message.length < 10 || message.length > 300) {
                formMessage.textContent = "Please enter a message between 10 and 300 characters.";
                return;
            }

            formMessage.className = "success-message";
            formMessage.textContent = "Form submitted successfully. No personal data was saved on this demo website.";

            form.reset();

            if (charCount) {
                charCount.textContent = "300 characters remaining";
            }
        });
    }
});
