const header = document.querySelector("header");

// Toggle sticky class based on scroll position
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 90);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

// Toggle menu icon and navigation list on click
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// Close menu and navigation list when scrolling
window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
});

// Initialize ScrollReveal with correct options
ScrollReveal().reveal(".hero-text, .skills-content, .service-content", {
  distance: "80px",
  duration: 2000,
  delay: 200,
  origin: "left",
});
ScrollReveal().reveal(".hero-img, .mid-right", {
  distance: "80px",
  duration: 2000,
  delay: 200,
  origin: "right",
});

document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah aksi default dari tag <a>
      const url = this.getAttribute("data-url");
      if (url) {
        window.location.href = url;
      }
    });
  });
});

// Gantilah dengan User ID Anda dari EmailJS
const userID = "KfDZdmnj-b9IXZvZe";
emailjs.init(userID);

document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("commentForm");

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    emailjs
      .sendForm("service_3jp6it8", "template_2l50a0m", "#commentForm")
      .then(() => {
        alert("Pesan Anda telah dikirim!");
        commentForm.reset(); // Kosongkan formulir setelah pengiriman
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan. Silakan coba lagi.");
      });
  });
});
