const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function vanish() {
  preloader.classList.add("disappear");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("hidden");
  document.querySelector(".body").classList.toggle("overflow");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector(".overlay").classList.toggle("hidden");
    document.querySelector(".body").classList.toggle("overflow");
  })
);
