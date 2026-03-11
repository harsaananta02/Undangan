// LOADING SCREEN
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1200);
});


// OPEN INVITATION BUTTON
document.getElementById("openInvite").addEventListener("click", () => {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});


// SMOOTH NAVIGATION SCROLL
document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// COUNTDOWN TIMER

const targetDate = new Date("march 20, 2026 08:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();


// COPY REKENING

function copyRek() {

    const text = document.getElementById("rekening").innerText;

    navigator.clipboard.writeText(text).then(() => {

        alert("Nomor rekening berhasil disalin 💌");

    });

}


// SHARE WHATSAPP

function shareWA() {

    const url = window.location.href;

    const text = "Kami mengundang Anda ke pernikahan kami 💍\n\n" + url;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);

}


// COPY LINK

function copyLink() {

    navigator.clipboard.writeText(window.location.href).then(() => {

        alert("Link undangan berhasil disalin 📩");

    });

}


// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll(".section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";

        const image = document.createElement("img");
        image.src = img.src;

        lightbox.appendChild(image);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {

            lightbox.remove();

        });

    });

});


// RSVP FORM SUBMIT

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {

    rsvpForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const formData = new FormData(this);

        fetch("https://script.google.com/macros/s/AKfycbzgJVOQeVK17k3rJFJhLdUuFMC0FlAECPLUuTdFJbinm0xFo1_P1wsoZz-EjBrTKCd5/exec", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(() => {

            alert("Terima kasih atas konfirmasi kehadirannya ❤️");

            rsvpForm.reset();

        })
        .catch(() => {

            alert("Gagal mengirim RSVP");

        });

    });

}