const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav-ul")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-ul_visible");
});