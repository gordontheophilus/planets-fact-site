const menuIcon = document.querySelector(".fa");
let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);
const menu = document.querySelector("ul");

const overview = document.getElementById("overview");
const structure = document.getElementById("internal-structure");
const surface = document.getElementById("surface-geology");

menuIcon.addEventListener("click", () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    menu.classList.add("active");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    menu.classList.remove("active");
  }
});

overview.addEventListener("click", () => {
  if (structure.classList.contains("active"))
    structure.classList.remove("active");

  if (surface.classList.contains("active")) surface.classList.remove("active");

  overview.classList.add("active");
});

structure.addEventListener("click", () => {
  if (overview.classList.contains("active"))
    overview.classList.remove("active");

  if (surface.classList.contains("active")) surface.classList.remove("active");

  structure.classList.add("active");
});

surface.addEventListener("click", () => {
  if (structure.classList.contains("active"))
    structure.classList.remove("active");

  if (overview.classList.contains("active"))
    overview.classList.remove("active");

  surface.classList.add("active");
});
