function createTabs(swiper, tabsContainer) {
  if (!tabsContainer) return;

  tabsContainer.innerHTML = "";

  const slidesPerGroup = swiper.params.slidesPerGroup || 1;
  const totalSlides = swiper.slides.length;
  const tabsCount = Math.ceil(totalSlides / slidesPerGroup);

  for (let i = 0; i < tabsCount; i++) {
    const tab = document.createElement("div");
    tab.classList.add("swiper-tab"); // универсальный класс
    if (i === 0) tab.classList.add("active");

    tab.addEventListener("click", () => {
      swiper.slideTo(i * slidesPerGroup);
    });

    tabsContainer.appendChild(tab);
  }
}

function updateTabs(swiper, tabsContainer) {
  if (!tabsContainer) return;

  const slidesPerGroup = swiper.params.slidesPerGroup || 1;
  const currentIndex = Math.floor(swiper.activeIndex / slidesPerGroup);

  const tabs = tabsContainer.querySelectorAll(".swiper-tab");

  tabs.forEach((tab) => tab.classList.remove("active"));

  if (tabs[currentIndex]) {
    tabs[currentIndex].classList.add("active");
  }
}

function recreateTabs(swiper, tabsContainer) {
  createTabs(swiper, tabsContainer);
  updateTabs(swiper, tabsContainer);
}

const specialistsTabs = document.querySelector(".specialists__tabs");
const promotionsTabs = document.querySelector(".promotions__tabs");
console.log(promotionsTabs);
console.log(specialistsTabs);

const specialistsSwiper = new Swiper(".specialists__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 2 },
    1024: { slidesPerView: 4, slidesPerGroup: 4 },
  },
  on: {
    init: function () {
      createTabs(this, specialistsTabs);
    },
    slideChange: function () {
      updateTabs(this, specialistsTabs);
    },
    breakpoint: function () {
      recreateTabs(this, specialistsTabs);
    },
  },
});

const promotionSwiper = new Swiper(".promotions__swiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 2 },
  },
  on: {
    init: function () {
      createTabs(this, promotionsTabs);
    },
    slideChange: function () {
      updateTabs(this, promotionsTabs);
    },
    breakpoint: function () {
      recreateTabs(this, promotionsTabs);
    },
  },
});
