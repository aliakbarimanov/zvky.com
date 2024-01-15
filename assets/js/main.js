//! Portfolio menuBarIcon Algoritm Start 

let menuBtn = document.querySelector("#menuBtn");
let portfolio = document.querySelector(".portfolio");
let i = 1;

menuBtn.addEventListener("click", () => {

  i++;

  if (i % 2 == 0) {
    portfolio.style.visibility = "visible";
    portfolio.style.opacity = "1";
  } else {
    portfolio.style.visibility = "hidden";
    portfolio.style.opacity = "0";
  }
});

//! Portfolio Btn Algoritm End


//! Menu Btn Algoritm Start

let menuBarIcon = document.querySelector("#menuBarIcon");
let slideMenu = document.querySelector(".slideMenu");
let j = 1;

menuBarIcon.addEventListener("click", () => {

  j++;

  if (j % 2 == 0) {
    slideMenu.style.visibility = "visible";
    slideMenu.style.opacity = "1";
  } else {
    slideMenu.style.visibility = "hidden";
    slideMenu.style.opacity = "0";
  }
});

//! Menu Btn Algoritm End
