const btn = document.querySelector(".button");
// const navbar = document.querySelector(".nav");

btn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("bg-dark");
  btn.classList.toggle('active')

}); 