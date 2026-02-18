const header = document.querySelector(".header");
const headerTop = document.querySelector(".header__top");

let lastScroll = 0;
const topHeight = headerTop.offsetHeight;

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current === 0) {
    header.classList.remove("is-collapsed");
    lastScroll = current;
    return;
  }

  if (current > lastScroll && current > topHeight) {
    header.classList.add("is-collapsed");
  }

  if (current < lastScroll) {
    header.classList.remove("is-collapsed");
  }

  lastScroll = current;
});

const menuSub = document.querySelectorAll("[data-sub]");
const subLi = document.querySelectorAll(".header__menuSub");
const headerSubClose = document.querySelectorAll(".header__subMenu--close");

subLi.forEach((li) => {
  li.addEventListener("click", () => {
    const id = li.dataset.li;
    const target = document.querySelector(`[data-sub="${id}"]`);

    const isActive = target?.classList.contains("active");

    menuSub.forEach((i) => i.classList.remove("active"));
    subLi.forEach((i) => {
      i.classList.remove("active");
      i.querySelector("svg").classList.remove("active");
    });

    if (!isActive) {
      li.classList.add("active");
      target?.classList.add("active");
      li.querySelector("svg").classList.add("active");
    }
  });
});

headerSubClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuSub.forEach((i) => i.classList.remove("active"));
    subLi.forEach((i) => {
      i.classList.remove("active");
      i.querySelector("svg").classList.remove("active");
    });
  });
});

const search = document.querySelector(".header__search");
const searchBtn = document.querySelector(".header__searchBtn");
const searchInput = document.querySelector(".header__searchInp");

searchBtn.addEventListener("click", () => {
  const isActive = searchInput.classList.contains("active");

  searchInput.classList.toggle("active");
  searchBtn.classList.toggle("active");

  if (!isActive) {
    setTimeout(() => {
      searchInput.focus();
    }, 200);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  if (!search.contains(e.target)) {
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
  }
});
