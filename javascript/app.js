const doc = document;

const typewriter = doc.querySelector(".typewriter");
const welcomeOverlay = doc.querySelector(".welcomeOverlay")
const welcomeOverlayBackground = doc.querySelector(".welcomeOverlayBackground")
doc.addEventListener("DOMContentLoaded", () => {
  setTimeout(function(){typewriter.classList.add("welcomeOverlayWhite");}, 2200);
  setTimeout(function(){welcomeOverlayBackground.classList.add("welcomeOverlayBackgroundFade");}, 3200);
  setTimeout(function(){welcomeOverlayBackground.classList.add("welcomeOverlay--inactiv");}, 4200);
});

//menu open/close
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const contact = doc.querySelector(".contact-sideMenu")


menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

contact.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

//dark mode 
const darkmodeSwitch = doc.querySelector(".form-check-input")
const body = doc.querySelector("body")
const carouselSection = doc.querySelector(".carousel-section")

darkmodeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  carouselSection.classList.toggle("carousel-dark");
})