let button = document.querySelector(".brands__open-button");
let brands = document.querySelector(".brands");

let open = function () {
  brands.classList.toggle("brands--closed");

  if (brands.classList.contains("brands--closed")) {
    button.textContent = "Показать все";
    button.style.setProperty("--rotate", "rotate(0deg)");
  } else {
    button.textContent = "Скрыть";
    button.style.setProperty("--rotate", "rotate(180deg)");
  }
};

button.addEventListener("click", open);

let swiper;

function initSwiper() {
  if (window.innerWidth <= 768 && !swiper) {
    swiper = new Swiper(".swiper", {
      // Optional parameters
      // direction: "vertical",
      slidesPerView: "auto",
      spaceBetween: -20,
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  } else if (window.innerWidth > 768 && swiper) {
    swiper.destroy(true, true); // Удаляем Swiper на десктопе
    swiper = null;
  }
}

// Инициализируем при загрузке
document.addEventListener("DOMContentLoaded", initSwiper);

// Отслеживаем изменение размера экрана
window.addEventListener("resize", initSwiper);
