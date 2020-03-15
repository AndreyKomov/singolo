const MENU=document.getElementById ("menu");
const header = document.querySelector("head_menu")

header.classList.add("head_menu-sticky");

MENU.addEventListener("click", (event) => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});