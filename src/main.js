const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");
const main = document.getElementById("main");
const productInput = document.getElementById("inputProduct");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const cartBtn = document.querySelector(".cart_btn ");
const imgThumbnail = document.querySelectorAll(".thumbnail img");
const mainImg = document.querySelector(".main_img img");

burgerBtn.addEventListener("click", () => {
  const burgerImg = document.querySelector(".burger_img");

  overlay.classList.toggle("opacity-75");
  overlay.classList.toggle("pointer-events-auto");
  navbarList.classList.toggle("w-64");
  burgerBtn.classList.toggle("absolute");
  burgerBtn.classList.toggle("fixed");

  if (burgerImg.src.includes("icon-menu.svg")) {
    burgerImg.src = "assets/images/icon-close.svg";
  } else {
    burgerImg.src = "assets/images/icon-menu.svg";
  }
});

productInput.addEventListener("input", () => {
  console.log(Number(productInput.value));
});

incrementBtn.addEventListener("click", () => {
  productInput.value++;
});
decrementBtn.addEventListener("click", () => {
  productInput.value == "0"
    ? decrementBtn.setAttribute(disabled, "true")
    : productInput.value--;
});

cartBtn.addEventListener("click", () => {
  alert(productInput.value);
});

productInput.value = 0;

imgThumbnail.forEach((img) => {
  img.addEventListener("click", () => {
    imgThumbnail.forEach((tumbnail) => {
      tumbnail.parentElement.style.border = "none";
      tumbnail.style.opacity = "1";
    });
    mainImg.src = img.src;
    img.parentElement.style.border = "2px solid hsl(26, 100%, 55%)";
    img.parentElement.style.borderRadius = "14px";
    img.style.opacity = "0.5";
  });
  if (mainImg.src === img.src) {
    img.parentElement.style.border = "2px solid hsl(26, 100%, 55%)";
    img.parentElement.style.borderRadius = "14px";
    img.style.opacity = "0.5";
  }
});
