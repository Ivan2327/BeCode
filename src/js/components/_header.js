// const subMenu = document.querySelectorAll(".header__menuSub");

// function calculateDropdownPosition(menu, dropdown) {
//   if (!menu || !dropdown) return;

//   dropdown.style.visibility = "hidden";
//   dropdown.style.opacity = "0";
//   dropdown.style.display = "grid";

//   const menuRect = menu.getBoundingClientRect();
//   const dropdownRect = dropdown.getBoundingClientRect();

//   dropdown.style.visibility = "";
//   dropdown.style.opacity = "";
//   dropdown.style.display = "";

//   const windowWidth = window.innerWidth;
//   const dropdownWidth = dropdownRect.width;

//   const leftPosition = 0;

//   const rightPosition = menuRect.width - dropdownWidth;

//   const fitsOnLeft = menuRect.left + dropdownWidth <= windowWidth - 20;
//   const fitsOnRight = menuRect.right - dropdownWidth >= 20;

//   if (fitsOnLeft) {
//     dropdown.style.left = "0";
//     dropdown.style.right = "auto";
//     dropdown.classList.remove("right");
//   } else if (fitsOnRight) {
//     dropdown.style.left = "auto";
//     dropdown.style.right = "0";
//     dropdown.classList.add("right");
//   } else {
//     dropdown.style.maxWidth = windowWidth - menuRect.left - 20 + "px";
//     dropdown.style.left = "0";
//     dropdown.style.right = "auto";
//     dropdown.classList.remove("right");
//   }
// }

// subMenu?.forEach((menu) => {
//   menu.addEventListener("click", (e) => {
//     e.stopPropagation();

//     const dropMenu = menu.querySelector(".header__menuDropdown");
//     const dropMenuSvg = menu.querySelector(".header__menuLiSvg");

//     const isActive = dropMenu?.classList.contains("active");

//     subMenu.forEach((otherMenu) => {
//       const otherDropMenu = otherMenu.querySelector(".header__menuDropdown");
//       const otherSvg = otherMenu.querySelector(".header__menuLiSvg");

//       if (otherDropMenu) {
//         otherDropMenu.classList.remove("active");
//         otherDropMenu.classList.remove("right");
//         otherDropMenu.style.maxWidth = "";
//       }
//       if (otherSvg) otherSvg.classList.remove("active");
//     });

//     if (!isActive && dropMenu) {
//       calculateDropdownPosition(menu, dropMenu);

//       dropMenu.classList.add("active");
//       if (dropMenuSvg) dropMenuSvg.classList.add("active");
//     }
//   });
// });

// let resizeTimeout;
// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(() => {
//     subMenu.forEach((menu) => {
//       const dropMenu = menu.querySelector(".header__menuDropdown.active");
//       if (dropMenu) {
//         calculateDropdownPosition(menu, dropMenu);
//       }
//     });
//   }, 250);
// });

// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".header__menuSub")) {
//     subMenu.forEach((menu) => {
//       const dropMenu = menu.querySelector(".header__menuDropdown");
//       const dropMenuSvg = menu.querySelector(".header__menuLiSvg");

//       if (dropMenu) {
//         dropMenu.classList.remove("active");
//         dropMenu.classList.remove("right");
//         dropMenu.style.maxWidth = "";
//       }
//       if (dropMenuSvg) dropMenuSvg.classList.remove("active");
//     });
//   }
// });
