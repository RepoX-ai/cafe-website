const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});