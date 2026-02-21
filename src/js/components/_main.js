// function createTabs(swiper, tabsContainer) {
//   if (!tabsContainer) return;

//   tabsContainer.innerHTML = "";

//   const slidesPerGroup = swiper.params.slidesPerGroup || 1;
//   const totalSlides = swiper.slides.length;
//   const tabsCount = Math.ceil(totalSlides / slidesPerGroup);

//   for (let i = 0; i < tabsCount; i++) {
//     const tab = document.createElement("div");
//     tab.classList.add("swiper-tab"); // универсальный класс
//     if (i === 0) tab.classList.add("active");

//     tab.addEventListener("click", () => {
//       swiper.slideTo(i * slidesPerGroup);
//     });

//     tabsContainer.appendChild(tab);
//   }
// }

// function updateTabs(swiper, tabsContainer) {
//   if (!tabsContainer) return;

//   const slidesPerGroup = swiper.params.slidesPerGroup || 1;
//   const currentIndex = Math.floor(swiper.activeIndex / slidesPerGroup);

//   const tabs = tabsContainer.querySelectorAll(".swiper-tab");

//   tabs.forEach((tab) => tab.classList.remove("active"));

//   if (tabs[currentIndex]) {
//     tabs[currentIndex].classList.add("active");
//   }
// }

// function recreateTabs(swiper, tabsContainer) {
//   createTabs(swiper, tabsContainer);
//   updateTabs(swiper, tabsContainer);
// }

// const specialistsTabs = document.querySelector(".specialists__tabs");
// const promotionsTabs = document.querySelector(".promotions__tabs");
// const reviewsTabs = document.querySelector(".reviews__tabs");

// const specialistsSwiper = new Swiper(".specialists__swiper", {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   speed: 600,
//   breakpoints: {
//     0: { slidesPerView: 1, slidesPerGroup: 1 },
//     768: { slidesPerView: 2, slidesPerGroup: 2 },
//     1024: { slidesPerView: 4, slidesPerGroup: 4 },
//   },
//   on: {
//     init: function () {
//       createTabs(this, specialistsTabs);
//     },
//     slideChange: function () {
//       updateTabs(this, specialistsTabs);
//     },
//     breakpoint: function () {
//       recreateTabs(this, specialistsTabs);
//     },
//   },
// });

// const promotionSwiper = new Swiper(".promotions__swiper", {
//   slidesPerView: 2,
//   slidesPerGroup: 2,
//   spaceBetween: 20,
//   speed: 600,
//   breakpoints: {
//     0: { slidesPerView: 1, slidesPerGroup: 1 },
//     768: { slidesPerView: 2, slidesPerGroup: 2 },
//   },
//   on: {
//     init: function () {
//       createTabs(this, promotionsTabs);
//     },
//     slideChange: function () {
//       updateTabs(this, promotionsTabs);
//     },
//     breakpoint: function () {
//       recreateTabs(this, promotionsTabs);
//     },
//   },
// });

// const reviewsSwiper = new Swiper(".reviews__swiper", {
//   slidesPerView: 2,
//   slidesPerGroup: 2,
//   spaceBetween: 20,
//   speed: 600,
//   breakpoints: {
//     0: { slidesPerView: 1, slidesPerGroup: 1 },
//     768: { slidesPerView: 2, slidesPerGroup: 2 },
//   },
//   on: {
//     init: function () {
//       createTabs(this, reviewsTabs);
//     },
//     slideChange: function () {
//       updateTabs(this, reviewsTabs);
//     },
//     breakpoint: function () {
//       recreateTabs(this, reviewsTabs);
//     },
//   },
// });

function getRealSlidesCount(swiper) {
  return swiper.slides.length - swiper.params.slidesPerView + 1;
}

function createTabs(swiper, tabsContainer) {
  if (!tabsContainer) return;

  tabsContainer.innerHTML = "";

  const positions = getRealSlidesCount(swiper);

  for (let i = 0; i < positions; i++) {
    const tab = document.createElement("div");
    tab.classList.add("swiper-tab");

    if (i === swiper.activeIndex) {
      tab.classList.add("active");
    }

    tab.addEventListener("click", () => {
      swiper.slideTo(i);
    });

    tabsContainer.appendChild(tab);
  }
}

function updateTabs(swiper, tabsContainer) {
  if (!tabsContainer) return;

  const tabs = tabsContainer.querySelectorAll(".swiper-tab");

  tabs.forEach((tab) => tab.classList.remove("active"));

  if (tabs[swiper.activeIndex]) {
    tabs[swiper.activeIndex].classList.add("active");
  }
}

function recreateTabs(swiper, tabsContainer) {
  createTabs(swiper, tabsContainer);
  updateTabs(swiper, tabsContainer);
}

const specialistsTabs = document.querySelector(".specialists__tabs");
const promotionsTabs = document.querySelector(".promotions__tabs");
const reviewsTabs = document.querySelector(".reviews__tabs");

const specialistsSwiper = new Swiper(".specialists__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
  on: {
    init() {
      createTabs(this, specialistsTabs);
    },
    slideChange() {
      updateTabs(this, specialistsTabs);
    },
    breakpoint() {
      recreateTabs(this, specialistsTabs);
    },
  },
});

const promotionSwiper = new Swiper(".promotions__swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  },
  on: {
    init() {
      createTabs(this, promotionsTabs);
    },
    slideChange() {
      updateTabs(this, promotionsTabs);
    },
    breakpoint() {
      recreateTabs(this, promotionsTabs);
    },
  },
});

const reviewsSwiper = new Swiper(".reviews__swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  },
  on: {
    init() {
      createTabs(this, reviewsTabs);
    },
    slideChange() {
      updateTabs(this, reviewsTabs);
    },
    breakpoint() {
      recreateTabs(this, reviewsTabs);
    },
  },
});

const newsSwiper = new Swiper(".news__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: 3 },
  },
});

const magazineSwiper = new Swiper(".magazine__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

const cookie = document.querySelector(".cookie");
const cookieBtn = document.querySelector(".cookie__btn");

// Проверяем при загрузке
if (localStorage.getItem("cookieAccepted")) {
  cookie.classList.remove("active");
} else {
  cookie.classList.add("active");
}

// Клик по кнопке
cookieBtn.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "true");
  cookie.classList.remove("active");
});
