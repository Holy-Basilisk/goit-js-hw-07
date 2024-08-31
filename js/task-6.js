function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createElems() {
  const amount = document.querySelector('.num-input').value;
  if (amount >= 1 && amount <= 100) {    
    createBoxes(amount);
    document.querySelector('.num-input').value = '';
  }
   
}

function createBoxes(amount) {
  let boxes = '';
  for (let i = 1; i <= amount; i++) {
    const boxSize = 10 + i * 5;
    boxes += `<div class="box" width="${boxSize}" height="${boxSize}" style="background-color:${getRandomHexColor()};padding:${boxSize}px"></div>`
    
  }
  container.innerHTML = boxes;
}

function destroyElems() {
  container.innerHTML = '';
}

const controls = document.querySelector("#controls");
const container = document.querySelector("#boxes");

document.querySelector("button[data-create]").addEventListener("click", createElems);
document.querySelector("button[data-destroy]").addEventListener("click", destroyElems);