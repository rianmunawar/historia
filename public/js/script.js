const buttonMenu = document.querySelector(".humburger-menu");
const buttonItem = document.querySelectorAll("span");
const menuCollapse = document.querySelector(".menu-collapse");
const slides = document.querySelectorAll(".image-slide");

// Collapse menu
buttonMenu.addEventListener("click", () => {
  if (menuCollapse.style.opacity === "1") {
    buttonItem[1].style.transform = "rotate(0)";
    buttonItem[2].style.transformOrigin = "0 0";
    buttonItem[2].style.transform = "rotate(0)";
    buttonItem[0].style.opacity = "1";
    menuCollapse.style.opacity = "0";
  } else {
    buttonItem[1].style.transform = "rotate(35deg)";
    buttonItem[2].style.transformOrigin = "0 0";
    buttonItem[2].style.transform = "rotate(-35deg)";
    buttonItem[0].style.opacity = "0";
    menuCollapse.style.opacity = "1";
  }
});

// Slideshow
let index = 0;
const plusSlides = () => slideShow();
slideShow();

function slideShow() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";
}

// Scroll to Top Element
let anchorTag = document.createElement("a");
anchorTag.classList.add("to-top-btn");
anchorTag.classList.add("fade");
anchorTag.innerHTML = "&uarr;";

window.addEventListener("scroll", () => {
  let verticalPosition = this.scrollY;
  verticalPosition > 200
    ? (anchorTag.style.display = "block")
    : (anchorTag.style.display = "none");
});

function toTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

anchorTag.addEventListener("click", toTop);
document.body.appendChild(anchorTag);

console.log("JS Ok");
