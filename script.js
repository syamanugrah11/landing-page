const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const service = document.getElementById("service");
    const message = document.getElementById("message");

    clearErrors();

    if (name.value.trim() === "") {
        showError(name, "Nama wajib diisi");
        valid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "Email wajib diisi");
        valid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Format email tidak valid");
        valid = false;
    }

    if (service.value === "") {
        showError(service, "Pilih layanan terlebih dahulu");
        valid = false;
    }

    if (message.value.trim().length < 10) {
        showError(message, "Pesan minimal 10 karakter");
        valid = false;
    }

    if (valid) {
        alert("Pesan berhasil dikirim 🚀");
        form.reset();
    }
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector(".error");
    small.textContent = message;
    input.style.border = "1px solid red";
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.querySelectorAll("input,select,textarea").forEach(i => i.style.border = "none");
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}