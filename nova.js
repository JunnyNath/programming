const navtoggle = document.querySelector("#mobile-menu");
const navbar = document.querySelector(".nav-top");
const btn = document.querySelector(".btn");



navtoggle.addEventListener("click", () => {
    navtoggle.classList.toggle("is-active");
    navbar.classList.toggle("active");
})

btn.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("bg-blue");
    btn.classList.toggle('active');
})
