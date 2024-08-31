'use strict';

const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`)
});