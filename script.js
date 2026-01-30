const SignUpBtn = document.querySelector("#profile");
const allCategories = document.querySelector("#all-categories");
const setdelevery = document.querySelector(".set-delevery");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slideDot");

let slideDotIndex = 0;

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
