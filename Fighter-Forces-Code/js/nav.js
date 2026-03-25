function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const overlay = document.getElementById("menu-overlay");
    navLinks.classList.toggle("show");
    overlay.classList.toggle("show");
}
