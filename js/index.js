// Your code goes here
// 1
const enlargePhoto = document.querySelector("img");

enlargePhoto.addEventListener("mouseover", function (event) {
  event.target.style.height = "20rem";
});

enlargePhoto.addEventListener('click', function(event){
    event.preventDefault();
})
// 2
const highlight = document.querySelector("h2");

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    highlight.style.color = "orange";
  }
});
// 3
highlight.addEventListener("dblclick", function () {
  highlight.style.color = "black";
});
// 4
window.addEventListener("load", () => {
  console.log("Page is fully loaded.");
});
// 5
const alertHello = document.querySelector("h1");

alertHello.addEventListener("click", function () {
  alert("Hello");
});
// 6
const paraFlash = document.querySelector("p");

paraFlash.addEventListener("mouseout", function (event) {
  event.target.style.color = "purple";
});
// 7

document.addEventListener("keypress", function () {
  highlight.style.backgroundColor = "red";
});
// 8

paraFlash.addEventListener("wheel", zoom);

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("p");
el.onwheel = zoom;

//  9

highlight.addEventListener("copy", function () {
  alert("You copied image.");
});

// 10

const imgOpacity = document.querySelectorAll("img");

imgOpacity.forEach((item) => {
  item.addEventListener("mousemove", () => {
    item.style.opacity = "0.5";
  });
});
imgOpacity.forEach((item) => {
    item.addEventListener('click',function(event){
        event.preventDefault();
    })
})
// stop nav links
const navLinks = document.getElementsByTagName("nav a");

navLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    navLinks.innerHTML += "Sorry can't do that!";
    event.preventDefault();
  });
});
