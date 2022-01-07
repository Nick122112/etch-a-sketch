"use strict";

const sketchContainer = document.createElement("div");
sketchContainer.setAttribute(
  "style",
  "width: 64rem; height:64rem; background-color: black; display: flex; flex-wrap: wrap;"
);
document.getElementById("content-container").appendChild(sketchContainer);

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

// function to clear grid
function clearGrid() {
  // returns sketchboxes to white
  sketchBoxes.forEach((sketchBox) => {
    sketchBox.style.backgroundColor = "white";
  });

  //asks user how large the grid should be
  const gridSize = prompt("How large would you like the grid?");

  //math to figure out height and width of new grid
  //container size / grid size - 0.2
  const containerSize = parseInt(
    sketchContainer.style.width.replace(/rem/, "")
  );
  const gridSizeNumber = Number(gridSize);
  const gridWidth = (containerSize / gridSizeNumber - 0.2).toFixed(2);
  const gridWidthRem = gridWidth + "rem";
  const gridHeightRem = gridWidthRem;
  sketchBox.style.width = gridWidthRem;
  sketchBox.style.height = gridHeightRem;

  for (let i = 0; i < gridSize * gridSize; i++) {
    sketchContainer.appendChild(sketchBox.cloneNode());
  }
  //   sketchBox.setAttribute(
  //     "style",
  //     "width: ((sketchContainer.style.width / gridSize) - .2rem); height: ((sketchContainer.style.width / gridSize) - .2rem)"
  //   );
  //   console.log(sketchContainer.style.width);
  //   console.log(gridSize);
  //   console.log(sketchContainer.style.width / gridSize);
}

// for each sketchbox add an event listener that changes the color
sketchBoxes.forEach((sketchBox) => {
  sketchBox.addEventListener("mouseover", changeColor);
});

// assign button to a variable and add event listener
const btn = document.querySelector("#btn");
btn.addEventListener("click", clearGrid);
