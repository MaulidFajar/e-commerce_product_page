const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");
const main = document.getElementById("main");
const productInput = document.getElementById("inputProduct");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const cartBtn = document.querySelector(".cart_btn ");
const imgThumbnail = document.querySelectorAll(".thumbnail img");
const lightboxThumbnail = document.querySelectorAll(".lightbox_thumbnail img");
const mainImg = document.querySelector(".main_img");
const LightboxMainImg = document.querySelector(".lightbox_main_img");
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");
const lightboxPrevBtn = document.getElementById("lightbox_prev_btn");
const lightboxNextBtn = document.getElementById("lightbox_next_btn");
const lightboxClsBtn = document.querySelector(".lightbox_close_btn");
const lightboxContainer = document.querySelector(".lightbox");

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

let imgCurrentIndex = 0;

const updateImg = () => {
  const selectedImg = lightboxThumbnail[imgCurrentIndex];
  lightboxThumbnail.src = selectedImg.src;

  lightboxThumbnail.forEach((tumbnail) => {
    tumbnail.parentElement.style.border = "none";
  });
  selectedImg.parentElement.style.border = "2px solid hsl(26, 100%, 55%)";
  selectedImg.parentElement.style.borderRadius = "14px";
};

mainImg.addEventListener("click", () => {
  lightboxContainer.classList.remove("hidden");
  LightboxMainImg.src = mainImg.src;
});

imgThumbnail.forEach((img, index) => {
  img.addEventListener("click", () => {
    imgThumbnail.forEach((tumbnail) => {
      tumbnail.parentElement.style.border = "none";
    });

    img.parentElement.style.border = "2px solid hsl(26, 100%, 55%)";
    img.parentElement.style.borderRadius = "14px";

    mainImg.src = img.src;
    imgCurrentIndex = index;
  });
});

lightboxThumbnail.forEach((img, index) => {
  img.addEventListener("click", () => {
    imgCurrentIndex = index;
    updateImg();
  });
});

prevBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex - 1 + imgThumbnail.length) % imgThumbnail.length;
  updateImg();
});

nextBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex + 1 + imgThumbnail.length) % imgThumbnail.length;
  updateImg();
});

lightboxClsBtn.addEventListener("click", () => {
  lightboxContainer.classList.add("hidden");
});

lightboxPrevBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex - 1 + imgThumbnail.length) % imgThumbnail.length;
  updateImg();
});

lightboxNextBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex + 1 + imgThumbnail.length) % imgThumbnail.length;
  updateImg();
});

updateImg(0);
