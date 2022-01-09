"use strict";

const sketchContainer = document.createElement("div");
sketchContainer.setAttribute("id", "sketch-container");
sketchContainer.setAttribute(
  "style",
  "width: 64rem; height:64rem; background-color: black; display: flex; flex-wrap: wrap; margin-bottom: 3rem;"
);
document
  .getElementById("content-container")
  .insertBefore(sketchContainer, document.getElementById("options-container"));

//creating and appending sketch box
const sketchBox = document.createElement("div");
sketchBox.setAttribute(
  "style",
  "width: 3.8rem; height: 3.8rem; background-color: white; margin:1px;"
);

// slider functionality
const slider = document.getElementById("grid-slider");
const output = document.getElementById("grid-slider-value");

output.textContent = `${slider.value} X ${slider.value}`;

slider.oninput = function () {
  output.textContent = this.value;
};

// cloning 256 sketch boxes
for (let i = 0; i < slider.value * slider.value; i++) {
  sketchContainer.appendChild(sketchBox.cloneNode());
}

// assigns the variables sketchboxes to all the divs
const sketchBoxes = sketchContainer.querySelectorAll("div");

//remove grid function
function removeGrid(sketchContainer) {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
}

// function to clear grid
function clearGrid() {
  removeGrid(sketchContainer);

  output.textContent = `${slider.value} X ${slider.value}`;

  //math to figure out height and width of new grid
  //container size / grid size - 0.2
  const containerSize = parseInt(
    sketchContainer.style.width.replace(/rem/, "")
  );
  const gridSizeNumber = Number(slider.value);
  const gridWidth = (containerSize / gridSizeNumber - 0.2).toFixed(20);
  const gridWidthRem = gridWidth + "rem";
  const gridHeightRem = gridWidthRem;
  sketchBox.style.width = gridWidthRem;
  sketchBox.style.height = gridHeightRem;

  for (let i = 0; i < slider.value * slider.value; i++) {
    sketchContainer.appendChild(sketchBox.cloneNode());
  }

  const sketchBoxes = sketchContainer.querySelectorAll("div");

  let colorMode = pencilMode;

  function refreshGrid() {
    sketchBoxes.forEach((sketchBox) => {
      sketchBox.style.backgroundColor = "white";
    });
  }

  function removeEventListener() {
    sketchBoxes.forEach((sketchBox) => {
      sketchBox.removeEventListener("mouseover", colorMode);
    });
  }

  function addEventListener() {
    sketchBoxes.forEach((sketchBox) => {
      sketchBox.addEventListener("mouseover", colorMode);
    });
  }

  function eraserMode() {
    this.style.backgroundColor = "white";
  }

  function rainbowMode() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    this.style.backgroundColor = color;
  }

  function pencilMode() {
    this.style.backgroundColor = document.getElementById("color-picker").value;
  }

  function eraserModePicker() {
    removeEventListener();
    colorMode = eraserMode;
    addEventListener();
  }

  function rainbowModePicker() {
    removeEventListener();
    colorMode = rainbowMode;
    addEventListener();
  }

  function pencilModePicker() {
    removeEventListener();
    colorMode = pencilMode;
    addEventListener();
  }

  function clearGridMode() {
    refreshGrid();
  }

  refreshGridBtn.addEventListener("click", clearGridMode);
  eraserBtn.addEventListener("click", eraserModePicker);
  rainbowBtn.addEventListener("click", rainbowModePicker);
  colorBtn.addEventListener("click", pencilModePicker);

  sketchBoxes.forEach((sketchBox) => {
    sketchBox.addEventListener("mouseover", colorMode);
  });
}

// add event listener to slider
slider.addEventListener("input", clearGrid);

// refresh grid function
function refreshGrid() {
  sketchBoxes.forEach((sketchBox) => {
    sketchBox.style.backgroundColor = "white";
  });
}

function removeEventListener() {
  sketchBoxes.forEach((sketchBox) => {
    sketchBox.removeEventListener("mouseover", colorMode);
  });
}

function addEventListener() {
  sketchBoxes.forEach((sketchBox) => {
    sketchBox.addEventListener("mouseover", colorMode);
  });
}

let colorMode = pencilMode;

function eraserMode() {
  this.style.backgroundColor = "white";
}

function rainbowMode() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  this.style.backgroundColor = color;
}

function pencilMode() {
  this.style.backgroundColor = document.getElementById("color-picker").value;
}

function eraserModePicker() {
  removeEventListener();
  colorMode = eraserMode;
  addEventListener();
}

function rainbowModePicker() {
  removeEventListener();
  colorMode = rainbowMode;
  addEventListener();
}

function pencilModePicker() {
  removeEventListener();
  colorMode = pencilMode;
  addEventListener();
}

function clearGridMode() {
  refreshGrid();
}

const refreshGridBtn = document.getElementById("refresh-grid");
const eraserBtn = document.getElementById("eraser");
const rainbowBtn = document.getElementById("rainbow");
const colorBtn = document.getElementById("color-btn");

refreshGridBtn.addEventListener("click", clearGridMode);
eraserBtn.addEventListener("click", eraserModePicker);
rainbowBtn.addEventListener("click", rainbowModePicker);
colorBtn.addEventListener("click", pencilModePicker);

sketchBoxes.forEach((sketchBox) => {
  sketchBox.addEventListener("mouseover", colorMode);
});
