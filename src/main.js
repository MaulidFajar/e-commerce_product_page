const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");
const main = document.getElementById("main");

burgerBtn.addEventListener("click", () => {
  console.log("wikowk");

  overlay.classList.toggle("opacity-75");
  overlay.classList.toggle("pointer-events-auto");
  navbarList.classList.toggle("w-64");
});
