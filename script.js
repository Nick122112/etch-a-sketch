"use strict";

// const sketchContainer = document.createElement("div");
// sketchContainer.setAttribute(
//   "style",
//   "width: 64rem; height:64rem; background-color: black; display: flex; flex-wrap: wrap;"
// );
// document.getElementById("content-container").appendChild(sketchContainer);

// //creating and appending sketch box
// const sketchBox = document.createElement("div");
// sketchBox.setAttribute(
//   "style",
//   "width: 3.8rem; height: 3.8rem; background-color: white; margin:1px;"
// );

// sketchBox.classList.add("orig");

// // cloning 256 sketch boxes
// for (let i = 0; i < 256; i++) {
//   sketchContainer.appendChild(sketchBox.cloneNode());
// }

// // assigns the variables sketchboxes to all the divs
// const sketchBoxes = sketchContainer.querySelectorAll("div");

// // function to change color of sketchboxes
// function changeColor() {
//   this.style.backgroundColor = "black";
// }

// // function to clear grid
// function clearGrid() {
//   //asks user how large the grid should be
//   const gridSize = prompt("How large would you like the grid?");

//   //math to figure out height and width of new grid
//   //container size / grid size - 0.2
//   const containerSize = parseInt(
//     sketchContainer.style.width.replace(/rem/, "")
//   );
//   const gridSizeNumber = Number(gridSize);
//   const gridWidth = (containerSize / gridSizeNumber - 0.2).toFixed(20);
//   const gridWidthRem = gridWidth + "rem";
//   const gridHeightRem = gridWidthRem;
//   //   sketchBox.style.width = gridWidthRem;
//   //   sketchBox.style.height = gridHeightRem;

//   const newSketchBox = document.createElement("div");
//   newSketchBox.classList.add("new");
//   newSketchBox.style.width = gridWidthRem;
//   newSketchBox.style.height = gridHeightRem;
//   newSketchBox.style.backgroundColor = "white";
//   newSketchBox.style.margin = "1px";

//   for (let i = 0; i < gridSize * gridSize; i++) {
//     sketchContainer.appendChild(newSketchBox.cloneNode());
//   }

//   //removes original divs
//   document.querySelectorAll(".orig").forEach((div) => div.remove());

//   const newSketchBoxes = document.querySelectorAll(".new");
//   newSketchBoxes.forEach((newSketchBox) => {
//     newSketchBox.addEventListener("mouseover", changeColor);
//   });
//   sketchContainer.removeChild;
// }

// // for each sketchbox add an event listener that changes the color
// sketchBoxes.forEach((sketchBox) => {
//   sketchBox.addEventListener("mouseover", changeColor);
// });

// // assign button to a variable and add event listener
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", clearGrid);

// for (let i = 0; i < 256; i++) {
//   document.createElement("div");
// }

// document.getElementById("sketch-container").appendChild(div);

// div.setAttribute("style", "width: 40px; height 40px; background-color: blue;");

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
  this.style.backgroundColor = document.querySelector("input").value;
}

// for each sketchbox add an event listener that changes the color
sketchBoxes.forEach((sketchBox) => {
  sketchBox.addEventListener("mouseover", changeColor);
});

//remove grid function
function removeGrid(sketchContainer) {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
}

// function to clear grid
function clearGrid() {
  //asks user how large the grid should be
  const gridSize = prompt("How large would you like the grid?");

  removeGrid(sketchContainer);

  //math to figure out height and width of new grid
  //container size / grid size - 0.2
  const containerSize = parseInt(
    sketchContainer.style.width.replace(/rem/, "")
  );
  const gridSizeNumber = Number(gridSize);
  const gridWidth = (containerSize / gridSizeNumber - 0.2).toFixed(20);
  const gridWidthRem = gridWidth + "rem";
  const gridHeightRem = gridWidthRem;
  sketchBox.style.width = gridWidthRem;
  sketchBox.style.height = gridHeightRem;

  console.log(gridWidthRem);

  for (let i = 0; i < gridSize * gridSize; i++) {
    sketchContainer.appendChild(sketchBox.cloneNode());
  }

  const sketchBoxes = sketchContainer.querySelectorAll("div");

  sketchBoxes.forEach((sketchBox) => {
    sketchBox.addEventListener("mouseover", changeColor);
  });

  //   sketchBox.setAttribute(
  //     "style",
  //     "width: ((sketchContainer.style.width / gridSize) - .2rem); height: ((sketchContainer.style.width / gridSize) - .2rem)"
  //   );
  //   console.log(sketchContainer.style.width);
  //   console.log(gridSize);
  //   console.log(sketchContainer.style.width / gridSize);

  // random color event listener
  function randomColorEvent() {
    sketchBoxes.forEach((sketchBox) => {
      sketchBox.addEventListener("mouseover", getRandomColor);
    });
  }

  // add rainbow event listener
  const rainbow = document.querySelector("#rainbow");
  rainbow.addEventListener("click", randomColorEvent);

  // eraser event listener
  function eraserEvent() {
    sketchBoxes.forEach((sketchBox) => {
      sketchBox.addEventListener("mouseover", eraseSketchBox);
    });
  }

  // add event listener to eraser button
  const eraser = document.querySelector("#eraser");
  eraser.addEventListener("click", eraserEvent);
}

// assign button to a variable and add event listener
const btn = document.querySelector("#btn");
btn.addEventListener("click", clearGrid);

// random color function
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  this.style.backgroundColor = color;
}

// random color event listener
function randomColorEvent() {
  sketchBoxes.forEach((sketchBox) => {
    sketchBox.addEventListener("mouseover", getRandomColor);
  });
}

// add event listener to rainbow button
const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", randomColorEvent);

// eraser function
function eraseSketchBox() {
  this.style.backgroundColor = "white";
}

// eraser event listener
function eraserEvent() {
  sketchBoxes.forEach((sketchBox) => {
    sketchBox.addEventListener("mouseover", eraseSketchBox);
  });
}

// add event listener to eraser button
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", eraserEvent);
