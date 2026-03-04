const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
e.preventDefault();
validateForm();
});

function validateForm(){
let valid = true;

const name = document.getElementById("name");
const email = document.getElementById("email");
const service = document.getElementById("service");
const message = document.getElementById("message");

clearErrors();

if(name.value.trim() === ""){
showError(name,"Nama wajib diisi");
valid=false;
}

if(email.value.trim() === ""){
showError(email,"Email wajib diisi");
valid=false;
}else if(!validateEmail(email.value)){
showError(email,"Format email tidak valid");
valid=false;
}

if(service.value === ""){
showError(service,"Pilih layanan terlebih dahulu");
valid=false;
}

if(message.value.trim().length < 10){
showError(message,"Pesan minimal 10 karakter");
valid=false;
}

if(valid){

const yourWA = "6282147335723"; // GANTI NOMOR KAMU
const yourEmail = "syamanugrah11@gmail.com"; // GANTI EMAIL KAMU

const text = `Halo Syamsi,%0A%0A
Nama: ${name.value}%0A
Email: ${email.value}%0A
Layanan: ${service.value}%0A
Pesan: ${message.value}`;

const encodedText = encodeURIComponent(text);

window.open(`https://wa.me/${yourWA}?text=${encodedText}`, "_blank");

window.location.href = `mailto:${yourEmail}?subject=Pesan dari Website&body=${text}`;

alert("Pesan berhasil dikirim 🚀");
form.reset();
}
}

// ================= POPUP SYSTEM =================


// Buat popup element otomatis (tanpa ubah HTML kamu)
const popup = document.createElement("div");
popup.classList.add("popup-overlay");

popup.innerHTML = `
    <div class="popup-box">
        <h3>Kirim Pesan Via</h3>
        <div class="popup-buttons">
            <button class="popup-wa">WhatsApp</button>
            <button class="popup-email">Email</button>
        </div>
        <div class="close-popup">Tutup</div>
    </div>
`;

document.body.appendChild(popup);

form.addEventListener("submit", function(e){
    e.preventDefault();

    popup.classList.add("active");
});

// Tutup popup
popup.querySelector(".close-popup").addEventListener("click", () => {
    popup.classList.remove("active");
});

// ================= WHATSAPP =================

popup.querySelector(".popup-wa").addEventListener("click", () => {

    const phone = "6282147335723"; // GANTI nomor kamu tanpa +
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const text = `
Halo Syamsi 👋

Nama: ${name}
Email: ${email}
Layanan: ${service}

Pesan:
${message}
    `;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
});

// ================= EMAIL =================

popup.querySelector(".popup-email").addEventListener("click", () => {

    const emailTo = "syamanugrah11@gmail.com"; // GANTI email kamu

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const subject = `Pesan dari ${name}`;
    const body = `
Nama: ${name}
Email: ${email}
Layanan: ${service}

Pesan:
${message}
    `;

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
