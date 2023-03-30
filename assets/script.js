const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let slideImg = document.querySelector(".banner-img");
let slideTxt = document.querySelector(".banner-txt");
let slideDot = document.querySelector(".dots");
let slideIndex = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

function slideShow() {
  slideImg.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[slideIndex].image}`
  );
  slideTxt.innerHTML = slides[slideIndex].tagLine;
}

function dotShow() {
  for (let i in slides) {
    let dotAdd = document.createElement("div");
    dotAdd.classList.add("dot");
    if (i == slideIndex) {
      dotAdd.classList.add("dot_selected");
    }
    slideDot.appendChild(dotAdd);
  }
}
dotShow();

arrowLeft.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  document.querySelector(".dots").innerHTML = "";
  slideShow();
  dotShow();
});
arrowRight.addEventListener("click", () => {
  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  document.querySelector(".dots").innerHTML = "";
  slideShow();
  dotShow();
});
