function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color")
const btn = document.querySelector(".change-color");

btn.addEventListener("click", changeColor);

function changeColor() {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = span.textContent;
  span.textContent += ' или в RGB: ' + body.style.backgroundColor;
}