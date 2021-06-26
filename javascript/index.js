//js for burger menubar

Burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
Burger.addEventListener("click", () => {
  navlist.classList.toggle("v-class");
  navbar.classList.toggle("h-nav");
});

//js for parallax scroll effect

const parallax = document.getElementById("parallax")
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
const parallax2 = document.getElementById("parallax2")
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallax2.style.backgroundPositionY = offset * 0.7 + "px";
});
const parallax1 = document.getElementById("parallax1")
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallax1.style.backgroundPositionY = offset * 0.7 + "px";
});
const parallax3 = document.getElementById("parallax3")
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallax3.style.backgroundPositionY = offset * 0.7 + "px";
});
