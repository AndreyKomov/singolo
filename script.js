const MENU = document.getElementById ("menu");
const HEADER = document.getElementById ("head_menu");
const BTNLEFT = document.getElementById ("btn_left");
const BTNRIGHT = document.getElementById ("btn_right");
const SCREEN = document.getElementById ("screen");
const BUTTON = document.getElementById ("btn");
const CLOSE_BTN = document.getElementById ("close_btn");

HEADER.classList.add("head_menu_sticky");

MENU.addEventListener("click", (event) => {
  MENU.querySelectorAll("a").forEach (el => el.classList.remove("active"));
  event.target.classList.add("active");
});

SCREEN.addEventListener("click", (event) => {
  SCREEN.querySelectorAll ("div").forEach (el => el.classList.remove("screen_off"));
  event.target.classList.add("screen_off");
});

BUTTON.addEventListener("click", () => {
  const subject = document.getElementById ("subject1").value.toString ();
  document.getElementById ("result").innerText = subject;
  document.getElementById ("message_block").classList.remove ("hidden");
});

CLOSE_BTN.addEventListener("click", () => {
  document.getElementById ("result").innerText = "";
  document.getElementById ("message_block").classList.add ("hidden");
});

