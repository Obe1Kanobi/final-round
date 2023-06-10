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

function showMore() {
  let button = document.querySelector(".button");
  let container = document.querySelector(".container");
  let buttontext = document.querySelector(".buttontext");
  let buttonimg = document.querySelector(".buttonimg");

  if (buttontext.innerHTML === "Скрыть") {
    container.style.display = "none";
    buttontext.innerHTML = "Показать всё";
    buttonimg.src = "img/expand.webp";
  } else {
    container.style.display = "grid";
    buttontext.innerHTML = "Скрыть";
    buttonimg.src = "img/expand_up.webp";
  }
}
