const SignUpBtn = document.querySelector("#profile");
const allCategories = document.querySelector("#all-categories");
const setdelevery = document.querySelector(".set-delevery");

SignUpBtn.addEventListener("click", () => {
  window.location.href = "SignUP.html";
});

setdelevery.addEventListener("click", () => {
  window.location.href = "map.html";
});

allCategories.addEventListener("click", () => {
  window.location.href = "categories.html";
});
