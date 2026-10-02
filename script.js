const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");
const currentYear = document.getElementById("currentYear");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  const isOpen = navbar.classList.contains("active");
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

currentYear.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", (event) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !service || !message) {
    event.preventDefault();

    formStatus.style.display = "block";
    formStatus.style.color = "#dc2626";
    formStatus.textContent = "Please complete all fields before sending.";
    return;
  }

  formStatus.style.display = "block";
  formStatus.style.color = "#15803d";
  formStatus.textContent = "Sending your message...";
});