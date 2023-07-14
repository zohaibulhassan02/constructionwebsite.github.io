let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

const dropdownMenu = document.querySelector(".dropdown");
let dropBtn = dropdownMenu.querySelector(".fa-angle-down");

dropBtn.addEventListener("click", () =>
  dropdownMenu.classList.toggle("active")
);

const pavingDropdownMenu = document.querySelector(".paving-dropdown");
let pavingDropBtn = pavingDropdownMenu.querySelector(".fa-angle-right");

pavingDropBtn.addEventListener("click", () =>
  pavingDropdownMenu.classList.toggle("active")
);

const concreteDropdownMenu = document.querySelector(".concrete-dropdown");
let concreteDropBtn = concreteDropdownMenu.querySelector(".fa-angle-right");

concreteDropBtn.addEventListener("click", () =>
  concreteDropdownMenu.classList.toggle("active")
);

const masonryDropdownMenu = document.querySelector(".masonry-dropdown");
let masonryDropBtn = masonryDropdownMenu.querySelector(".fa-angle-right");

masonryDropBtn.addEventListener("click", () =>
  masonryDropdownMenu.classList.toggle("active")
);

const drivewaysDropdownMenu = document.querySelector(".driveways-dropdown");
let drivewaysDropBtn = drivewaysDropdownMenu.querySelector(".fa-angle-right");

drivewaysDropBtn.addEventListener("click", () =>
  drivewaysDropdownMenu.classList.toggle("active")
);

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
