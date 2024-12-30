const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");
const cartIconBtn = document.querySelector(".cart_icon");
const cartBasket = document.querySelector(".cart_basket");
const productBasket = document.querySelector(".product_basket");
const deleteBtn = document.querySelector(".delete_btn");

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

productInput.value = 0;

cartIconBtn.addEventListener("click", () => {
  cartBasket.classList.toggle("hidden");
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
  productBasket.innerHTML = `<div class="flex items-center justify-center gap-x-4 py-5">
                    <div class="product_img">
                      <img
                        src="assets/images/image-product-1.jpg"
                        alt=""
                        width="50"
                        class="rounded-md"
                      />
                    </div>
                    <div class="product_desc">
                      <p>Fall Limited Edition Sneakers</p>
                      <div class="price flex">
                        <p>$125.00</p>
                        <span class="mx-1"> x ${productInput.value} </span>
                        <p>$${125.0 * productInput.value}.00</p>
                      </div>
                    </div>
                    <img
                      src="assets/images/icon-delete.svg"
                      alt=""
                      class="cursor-pointer"
                      onclick="deleteCartItem()"
                    />
                  </div>
                  <button
                    class="mb-7 mt-1 w-full flex justify-center items-center bg-orange py-3 text-sm rounded-lg font-extrabold text-dark-blue gap-x-3 transition-all duration-150"
                  >
                    Checkout
                  </button>`;
});

const deleteCartItem = () => {
  productBasket.innerHTML = "";
};

let imgCurrentIndex = 0;

const updateImg = (index) => {
  const selectedImg = imgThumbnail[index];
  mainImg.src = selectedImg.src;

  imgThumbnail.forEach((tumbnail) => {
    tumbnail.parentElement.style.border = "none";
  });
  selectedImg.parentElement.style.border = "2px solid hsl(26, 100%, 55%)";
  selectedImg.parentElement.style.borderRadius = "14px";
};

const updateLightboxImg = (index) => {
  const selectedImg = lightboxThumbnail[index];
  LightboxMainImg.src = selectedImg.src;

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

lightboxThumbnail.forEach((img, index) => {
  img.addEventListener("click", () => {
    updateLightboxImg(index);
    updateImg(index);
    imgCurrentIndex = index;
  });
});

imgThumbnail.forEach((img, index) => {
  img.addEventListener("click", () => {
    updateImg(index);
    updateLightboxImg(index);
    imgCurrentIndex = index;
  });
});

prevBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex - 1 + imgThumbnail.length) % imgThumbnail.length;
  updateImg(imgCurrentIndex);
});

nextBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex + 1 + imgThumbnail.length) % imgThumbnail.length;
  updateImg(imgCurrentIndex);
});

lightboxPrevBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex - 1 + lightboxThumbnail.length) % lightboxThumbnail.length;
  updateLightboxImg(imgCurrentIndex);
  updateImg(imgCurrentIndex);
});

lightboxNextBtn.addEventListener("click", () => {
  imgCurrentIndex =
    (imgCurrentIndex + 1 + lightboxThumbnail.length) % lightboxThumbnail.length;
  updateLightboxImg(imgCurrentIndex);
  updateImg(imgCurrentIndex);
});

lightboxClsBtn.addEventListener("click", () => {
  lightboxContainer.classList.add("hidden");
});

updateImg(0);
