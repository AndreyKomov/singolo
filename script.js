const MENU = document.getElementById("menu");
const HEADER = document.querySelector("#head_menu");
const BTNLEFT = document.getElementById("btn_left");
const BTNRIGHT = document.getElementById("btn_right");
const BTNBLR = document.getElementById ("bbr");
const BTNBLL = document.getElementById ("bbl");
const SCREEN = document.getElementById("screen");
const PARENTPFL = document.querySelector(".portfolio_images"); //родитель списка элементов. 
// И querySelector выбирает по всему (тегам, классам, id), использовать его!
const BTNALL = document.querySelector(".all");
const BTNWEB = document.querySelector(".web_design");
const BTNGRH = document.querySelector(".graphic_design");
const BTNART = document.querySelector(".artwork");
const ARRPRT = document.querySelector(".images");
const BUTTON = document.querySelector("#btn");
const CLOSE_BTN = document.querySelector("#close_btn");

HEADER.classList.add("head_menu_sticky");

MENU.addEventListener("click", (event) => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

SCREEN.addEventListener("click", (event) => {
  SCREEN.querySelectorAll("div").forEach(el => el.classList.remove("screen_off"));
  event.target.classList.add("screen_off");
});

// slider
let slides = document.getElementById("slide");
let i = 0;

BTNRIGHT.addEventListener("click", function () {
  // i = i + 1;
  // if (i >= slides.length) {
  //   slides[i - 1].class.remove("block");
  //   // i = 0;
  //   slides[i].class.add("block");
  // } else {
  //   slides[i - 1].class.remove("block");
  //   slides[i].class.add("block");
  // }
  document.querySelectorAll (".second_page").forEach(el => el.classList.remove("second_page"));
  document.querySelectorAll (".slider_content").forEach(el => el.classList.add("second_page"));
});

BTNLEFT.addEventListener("click", function () {
  // i = i - 1;
  document.querySelectorAll (".second_page").forEach(el => el.classList.remove("second_page"));
  document.querySelectorAll (".slider_content").forEach(el => el.classList.add("second_page"));
});

BTNBLR.addEventListener("click", function () {
    document.querySelectorAll (".second_page").forEach(el => el.classList.remove("second_page"));
    document.querySelectorAll (".slider_blue_page").forEach(el => el.classList.add("second_page"));
  });

BTNBLL.addEventListener ("click", function () {
    document.querySelectorAll (".second_page").forEach(el => el.classList.remove("second_page"));
    document.querySelectorAll (".slider_blue_page").forEach(el => el.classList.add("second_page"));
  });
  
  // images changer
BTNALL.addEventListener ("click", function () {
  let arr = document.querySelectorAll (".images");
  let arr2 = []; // пустой массив для заполнения
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]); //новый массив
  }
  
  // debugger // для отладки по шагам кода
  let arrNew = arr2.reverse(); // перевёрнутый массив
  while(PARENTPFL.firstChild){    
    PARENTPFL.removeChild(PARENTPFL.firstChild);  
  }
  for (let i = 0; i < arrNew.length; i++) {  // удаляет поочереди элементы
    PARENTPFL.appendChild(arrNew[i]);        // метод работае с Node, с массивом (array не пашет),
    // поэтому надо поодному элементу из массива запишивать arrNew i-ый берём поэтому.
  }
});

BTNWEB.addEventListener ("click", function () {
  let arr = document.querySelectorAll (".images");
  let arr2 = []; // пустой массив для заполнения
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]); //новый массив
  }
  
  // debugger // для отладки по шагам кода
  let arrNew = arr2.reverse(); // перевёрнутый массив
  while(PARENTPFL.firstChild){    
    PARENTPFL.removeChild(PARENTPFL.firstChild);  
  }
  for (let i = 0; i < arrNew.length; i++) {  // удаляет поочереди элементы
    PARENTPFL.appendChild(arrNew[i]);        // метод работае с Node, с массивом (array не пашет),
    // поэтому надо поодному элементу из массива запишивать arrNew i-ый берём поэтому.
  }
});

BTNGRH.addEventListener ("click", function () {
  let arr = document.querySelectorAll (".images");
  let arr2 = []; // пустой массив для заполнения
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]); //новый массив
  }
  
  // debugger // для отладки по шагам кода
  let arrNew = arr2.reverse(); // перевёрнутый массив
  while(PARENTPFL.firstChild){    
    PARENTPFL.removeChild(PARENTPFL.firstChild);  
  }
  for (let i = 0; i < arrNew.length; i++) {  // удаляет поочереди элементы
    PARENTPFL.appendChild(arrNew[i]);        // метод работае с Node, с массивом (array не пашет),
    // поэтому надо поодному элементу из массива запишивать arrNew i-ый берём поэтому.
  }
});

BTNART.addEventListener ("click", function () {
  let arr = document.querySelectorAll (".images");
  let arr2 = []; // пустой массив для заполнения
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]); //новый массив
  }
  
  // debugger // для отладки по шагам кода
  let arrNew = arr2.reverse(); // перевёрнутый массив
  while(PARENTPFL.firstChild){    
    PARENTPFL.removeChild(PARENTPFL.firstChild);  
  }
  for (let i = 0; i < arrNew.length; i++) {  // удаляет поочереди элементы
    PARENTPFL.appendChild(arrNew[i]);        // метод работае с Node, с массивом (array не пашет),
    // поэтому надо поодному элементу из массива запишивать arrNew i-ый берём поэтому.
  }
});

  // form
  debugger
BUTTON.addEventListener("click", function () {
  debugger
  const subjectName = document.getElementById("subject1").value.toString();
  const subject = document.getElementById("subject2").value.toString();
  const subjectDescribe = document.getElementById("describe").valur.toString();
  document.getElementById("result_name").innerText = subjectName;
  document.getElementById("result2").innerText = subject;
  document.getElementById("result_describe").innerText = subjectDescribe;
  document.getElementById("message_block").classList.remove("hidden");
});

CLOSE_BTN.addEventListener("click", () => {
  document.getElementById("result").innerText = "";
  document.getElementById("message_block").classList.add("hidden");
});

