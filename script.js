"use strict";

// creating and appending sketch container
const sketchContainer = document.createElement("div");
sketchContainer.setAttribute(
  "style",
  "width: 64rem; background-color: black; display: flex; flex-wrap: wrap;"
);
document.body.appendChild(sketchContainer);

//creating and appending sketch box
const sketchBox = document.createElement("div");
sketchBox.setAttribute(
  "style",
  "width: 3.8rem; height: 3.8rem; background-color: white; margin:1px;"
);

// change color function
function changeColor() {
  this.setAttribute("style", "color: purple");
}

// cloning 256 sketch boxes
for (let i = 0; i < 256; i++) {
  sketchContainer.appendChild(sketchBox.cloneNode());
}

// assigns the variables sketchboxes to all the divs
const sketchBoxes = sketchContainer.querySelectorAll("div");

// function to change color of sketchboxes
function changeColor() {
  this.style.backgroundColor = "black";
}

// for each sketchbox add an event listener that changes the color
sketchBoxes.forEach((sketchBox) => {
  sketchBox.addEventListener("mouseover", changeColor);
});
