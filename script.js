const SignUpBtn = document.querySelector("#profile");
const allCategories = document.querySelector("#all-categories");
const setdelevery = document.querySelector(".set-delevery");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slideDot");
const addcartBtns = document.querySelectorAll(".add-cart");
const totatlCartMoney = document.querySelector("#totatl-cart-money");
const cartcountElm = document.querySelector("#cart-count");
const wishcountElm = document.querySelector("#wish-count");

let slideDotIndex = 0;
let totalMoney = 0;
let cartCount = 0;
let wishCount = 0;

// nav start

SignUpBtn.addEventListener("click", () => {
  window.location.href = "SignUP.html";
});

setdelevery.addEventListener("click", () => {
  window.location.href = "map.html";
});

allCategories.addEventListener("click", () => {
  window.location.href = "categories.html";
});

// nav end

// image slider start

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
    slide.classList.remove("block");

    dots[i].classList.remove("bg-green-500");
    dots[i].classList.add("bg-gray-400");
  });
  slides[index].classList.remove("hidden");
  slides[index].classList.add("block");

  dots[index].classList.remove("bg-gray-400");
  dots[index].classList.add("bg-green-500");

  slideDotIndex = index;
}

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    const index = Number(dot.dataset.slide);
    showSlide(index);
  });
});

// auto play slider start

setInterval(() => {
  slideDotIndex += 1;
  if (slideDotIndex >= slides.length) {
    slideDotIndex = 0;
  }
  showSlide(slideDotIndex);
}, 5000);
// auto play slider end

// image slider end

// Add to cart start

const addCartBtns = document.querySelectorAll(".add-cart");

addCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    const cartText = btn.querySelector(".cart-text");
    const price = parseFloat(btn.dataset.price);

    if (cartText.textContent == "Add to Cart") {
      if (icon) icon.classList.replace("fa-plus", "fa-check");
      cartText.textContent = "Added";

      btn.classList.remove("bg-[#DAF2DC]", "text-[#00B207]");
      btn.classList.add("bg-[#00B207]", "text-[#FFFFFF]");

      totalMoney += price;
      cartCount += 1;
    } else {
      if (icon) icon.classList.replace("fa-check", "fa-plus");
      cartText.textContent = "Add to Cart";

      btn.classList.remove("bg-[#00B207]", "text-[#FFFFFF]");
      btn.classList.add("bg-[#DAF2DC]", "text-[#00B207]");

      totalMoney -= price;
      cartCount -= 1;
    }
    totatlCartMoney.textContent = `৳${totalMoney}.00`;
    cartcountElm.innerHTML = cartCount;
  });
});

// Add to cart end

// Wish count start

const heartBtn = document.querySelectorAll(".heart");

heartBtn.forEach((heart) => {
  heart.addEventListener("click", () => {
    const hearticon = heart.querySelector("i");

    if (hearticon && !hearticon.classList.contains("text-red-500")) {
      hearticon.classList.add("text-red-500");
      wishCount += 1;
    } else if (hearticon.classList.contains("text-red-500")) {
      hearticon.classList.remove("text-red-500");
      wishCount -= 1;
    }
    wishcountElm.innerHTML = wishCount;
  });
});

// Wish count end
