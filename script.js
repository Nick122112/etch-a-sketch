"use strict";

// creating and appending sketch container
const sketchContainer = document.createElement("div");
sketchContainer.setAttribute(
  "style",
  "width: 64rem; background-color: white; display: flex; flex-wrap: wrap;"
);
document.body.appendChild(sketchContainer);

//creating and appending sketch box
const sketchBox = document.createElement("div");
sketchBox.setAttribute(
  "style",
  "width: 3.8rem; height: 3.8rem; background-color: black; margin:1px;"
);

// cloning 256 sketch boxes
for (let i = 0; i < 256; i++) {
  sketchContainer.appendChild(sketchBox.cloneNode());
}
