const burgerBtn = document.querySelector(".burger_btn");
const navbarList = document.querySelector(".navbar_list");
const cartIconBtn = document.querySelector(".cart_icon");
const itemCount = document.querySelector(".item_count");
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

cartIconBtn.addEventListener("click", () => {
  cartBasket.classList.toggle("hidden");
});

incrementBtn.addEventListener("click", () => {
  productInput.value++;
});

decrementBtn.addEventListener("click", () => {
  if (productInput.value > 0) {
    productInput.value--;
  }
});

cartBtn.addEventListener("click", () => handleProductCart());

mainImg.addEventListener("click", () => {
  lightboxContainer.classList.remove("hidden");
  LightboxMainImg.src = mainImg.src;
});

lightboxThumbnail.forEach((img, index) => {
  img.addEventListener("click", () => {
    handleMainImg(
      index,
      lightboxThumbnail,
      LightboxMainImg,
      (index, thumbnail, mainImage) => {
        updateImg(index, thumbnail, mainImage);
        updateImg(index, imgThumbnail, mainImg);
      }
    );
  });
});

imgThumbnail.forEach((img, index) => {
  img.addEventListener("click", () =>
    handleMainImg(
      index,
      imgThumbnail,
      mainImg,
      (index, thumbnail, mainImage) => {
        updateImg(index, thumbnail, mainImage);
        updateImg(index, lightboxThumbnail, LightboxMainImg);
      }
    )
  );
});

prevBtn.addEventListener("click", () =>
  handleImgChange(-1, imgThumbnail, mainImg, updateImg)
);

nextBtn.addEventListener("click", () =>
  handleImgChange(1, imgThumbnail, mainImg, updateImg)
);

lightboxPrevBtn.addEventListener("click", () =>
  handleImgChange(
    -1,
    lightboxThumbnail,
    LightboxMainImg,
    (index, thumbnail, mainImage) => {
      updateImg(index, thumbnail, mainImage);
      updateImg(index, imgThumbnail, mainImg);
    }
  )
);

lightboxNextBtn.addEventListener("click", () => {
  handleImgChange(
    1,
    lightboxThumbnail,
    LightboxMainImg,
    (index, thumbnail, mainImage) => {
      updateImg(index, thumbnail, mainImage);
      updateImg(index, imgThumbnail, mainImg);
    }
  );
});

lightboxClsBtn.addEventListener("click", () => {
  lightboxContainer.classList.add("hidden");
});

const updateIndex = (currentIndex, step, lengthImage) => {
  return (currentIndex + step + lengthImage) % lengthImage;
};

const handleImgChange = (step, thumbnail, mainImage, update) => {
  imgCurrentIndex = updateIndex(imgCurrentIndex, step, thumbnail.length);
  update(imgCurrentIndex, thumbnail, mainImage);
};

const handleMainImg = (index, img, main, mainimgUpdate) => {
  mainimgUpdate(index, img, main);
};

const updateImg = (index, thumbnailImg, mainImage) => {
  const selectedImg = thumbnailImg[index];
  mainImage.src = selectedImg.src;
  thumbnailImg.forEach((thumb) => {
    thumb.parentElement.style.border = "none";
    thumb.classList.remove("opacity-50");
  });
  selectedImg.parentElement.style.border = "2px solid hsl(26, 100%, 55%)";
  selectedImg.parentElement.style.borderRadius = "14px";
  selectedImg.classList.add("opacity-50");
  imgCurrentIndex = index;
};

const handleProductCart = () => {
  if (productInput.value > 0) {
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
      <p class="text-dark-grayish-blue">Fall Limited Edition Sneakers</p>
      <div class="price flex">
        <p class="text-dark-grayish-blue">$125.00</p>
        <span class="mx-1 text-dark-grayish-blue"> x ${
          productInput.value
        } </span>
        <p class="font-bold">$${125.0 * productInput.value}.00</p>
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
    class="mb-7 mt-1 w-full flex justify-center items-center bg-orange hover:bg-orange/50 py-3 text-sm rounded-lg font-extrabold text-dark-blue gap-x-3 transition-all duration-150"
  >
    Checkout
  </button>`;
    itemCount.classList.remove("hidden");
    itemCount.innerHTML = productInput.value;
    productInput.value = 0;
  }
};

const deleteCartItem = () => {
  productBasket.innerHTML = `<div className="flex items-center justify-center w-full p-5 h-40">
    <span class="font-bold text-dark-grayish-blue">
        Your cart is empty.
    </span>
  </div>`;
  itemCount.textContent = 0;
  itemCount.classList.add("hidden");
};

updateImg(0, lightboxThumbnail, LightboxMainImg);
updateImg(0, imgThumbnail, mainImg);
productInput.value = 0;
