const menuIcon = document.querySelector(".fa");
const button = document.querySelector("button");
const menu = document.querySelector("ul");

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
