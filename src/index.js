document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    direction: "horizontal",
    loop: false,
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  });
});

// Читать далее

function readMore() {
  let dot = document.querySelector(".dot");
  let more = document.querySelector(".more");
  let btn = document.querySelector(".title__button");
  // let icon = document.querySelector("title__button-icon");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btn.innerHTML = "Читать далее";
    more.style.display = "none";
    // icon.src = "/img/icon.webp";
  } else {
    dot.style.display = "none";
    btn.innerHTML = "Скрыть";
    more.style.display = "inline";
    // icon.src = "/img/icon_up.webp";
  }
}

// Показать всё на брендах

function brandsShow() {
  let button = document.querySelector(".brands__button");
  let container = document.querySelector(".brands__section-container");
  let buttontext = document.querySelector(".brands__buttontext");
  let buttonimg = document.querySelector(".brands__buttonimg");

  if (buttontext.innerHTML === "Скрыть") {
    container.style.display = "none";
    buttontext.innerHTML = "Показать всё";
    buttonimg.src = "img/icon.webp";
  } else {
    container.style.display = "grid";
    buttontext.innerHTML = "Скрыть";
    buttonimg.src = "img/icon_up.webp";
  }
}

// Показать всё на вью

function viewShow() {
  let button = document.querySelector(".view__button");
  let container = document.querySelector(".view__section-container");
  let buttontext = document.querySelector(".view__buttontext");
  let buttonimg = document.querySelector(".view__buttonimg");

  if (buttontext.innerHTML === "Скрыть") {
    container.style.display = "none";
    buttontext.innerHTML = "Показать всё";
    buttonimg.src = "img/icon_up.webp";
  } else {
    container.style.display = "grid";
    buttontext.innerHTML = "Скрыть";
    buttonimg.src = "img/icon.webp";
  }
}

// Бургер меню

function burgerMenu() {
  let aside = document.querySelector(".dopmenu");
  aside.style.left = "0px";
  let background = document.querySelector(".background");
  background.style.opacity = "0.1";
}

function closeMenu() {
  let aside = document.querySelector(".dopmenu");
  aside.style.left = "-475px";
  let background = document.querySelector(".background");
  background.style.opacity = "1";
}

// Обратная связь

function feedback() {
  let aside = document.querySelector(".feedback");
  let menu = document.querySelector(".dopmenu");
  aside.style.display = "block";
  menu.style.opacity = "0.1";
  let background = document.querySelector(".background");
  background.style.opacity = "0.1";
}

function closefeedback() {
  let aside = document.querySelector(".feedback");
  let menu = document.querySelector(".dopmenu");
  aside.style.display = "none";
  menu.style.opacity = "1";
  let background = document.querySelector(".background");
  background.style.opacity = "1";
}

// Звонок

function call() {
  let aside = document.querySelector(".call");
  let menu = document.querySelector(".dopmenu");
  aside.style.display = "block";
  menu.style.opacity = "0.1";
  let background = document.querySelector(".background");
  background.style.opacity = "0.1";
}

function closecall() {
  let aside = document.querySelector(".call");
  let menu = document.querySelector(".dopmenu");
  aside.style.display = "none";
  menu.style.opacity = "1";
  let background = document.querySelector(".background");
  background.style.opacity = "1";
}

console.log(null + 1);
