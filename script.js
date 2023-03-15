const nav = document.querySelector("nav");
const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const link = document.querySelectorAll(".link");

ham.addEventListener("click", () => {
  nav.classList.toggle("active");
  close.classList.toggle("active");
  overlay.classList.toggle("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
  close.classList.remove("active");
  overlay.classList.remove("active");
});

link.forEach((links) => {
  links.addEventListener("click", () => {
    nav.classList.remove("active");
    close.classList.remove("active");
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  close.classList.remove("active");
  overlay.classList.remove("active");
});
