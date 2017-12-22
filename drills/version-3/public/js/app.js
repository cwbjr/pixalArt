let brushColor;

// Main div
const wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper");
document.body.appendChild(wrapper);

const title = document.createElement("h1");
const titleText = document.createTextNode("Ballew's Pixel Art Maker");
title.appendChild(titleText);
wrapper.appendChild(title);

// Buttons
const links = document.createElement("div");
links.setAttribute("class", "canvas-links");
wrapper.appendChild(links);

const buttonSmall = document.createElement("button");
buttonSmall.setAttribute("class", "canvas-button-small buttons");
buttonSmall.innerHTML = "Small";
links.appendChild(buttonSmall);

const buttonMedium = document.createElement("button");
buttonMedium.setAttribute("class", "canvas-button-medium buttons");
buttonMedium.innerHTML = "Medium";
links.appendChild(buttonMedium);

const buttonLarge = document.createElement("button");
buttonLarge.setAttribute("class", "canvas-button-large buttons");
buttonLarge.innerHTML = "Large";
links.appendChild(buttonLarge);

// Pixel Board
const canvas = document.createElement("div");
canvas.setAttribute("class", "canvas-board");
wrapper.appendChild(canvas);

const pallet = document.createElement("div");
pallet.setAttribute("class", "paint-pallet");
wrapper.appendChild(pallet);

// Paint Brushes
const brushOne = document.createElement("div");
brushOne.setAttribute("class", "paint-brush color-one");
brushOne.style.backgroundColor = "#FFF";
pallet.appendChild(brushOne);

const brushTwo = document.createElement("div");
brushTwo.setAttribute("class", "paint-brush");
brushTwo.style.backgroundColor = "#4682B4";
pallet.appendChild(brushTwo);

const brushThree = document.createElement("div");
brushThree.setAttribute("class", "paint-brush color-three");
brushThree.style.backgroundColor = "#FF5733";
pallet.appendChild(brushThree);

const brushFour = document.createElement("div");
brushFour.setAttribute("class", "paint-brush color-four");
brushFour.style.backgroundColor = "#DAF7A6";
pallet.appendChild(brushFour);

const brushFive = document.createElement("div");
brushFive.setAttribute("class", "paint-brush color-five");
brushFive.style.backgroundColor = "#000";
pallet.appendChild(brushFive);

brushOne.addEventListener("click", function(event) {
  brushColor = event.target.style.backgroundColor;
  brushOne.setAttribute("class", "highLight");
});

brushTwo.addEventListener("click", function(event) {
  brushColor = event.target.style.backgroundColor;
  brushTwo.setAttribute("class", "highLight");
});

brushThree.addEventListener("click", function(event) {
  brushColor = event.target.style.backgroundColor;
  brushThree.setAttribute("class", "highLight");
});

brushFour.addEventListener("click", function(event) {
  brushColor = event.target.style.backgroundColor;
  brushFour.setAttribute("class", "highLight");
});

brushFive.addEventListener("click", function(event) {
  brushColor = event.target.style.backgroundColor;
  brushFive.setAttribute("class", "highLight");
});

// Pixel Canvas
buttonSmall.addEventListener("click", function(event) {
  let artistChoice = 256;
  canvas.setAttribute("class", "canvas-board small-canvas");
  for (var i = 0; i < (artistChoice); i++) {
      let newSquare = document.createElement('div');
      newSquare.classList.add('pixel');
      canvas.appendChild(newSquare);
      newSquare.addEventListener("click", addColor);
      canvas.appendChild(newSquare);
    }
    buttonSmall.disabled = true;
    buttonMedium.disabled = true;
    buttonLarge.disabled = true;
});

buttonMedium.addEventListener("click", function() {
  let artistChoice = 408;
  canvas.setAttribute("class", "canvas-board medium-canvas");
  for (var i = 0; i < (artistChoice); i++) {
      let newSquare = document.createElement('div');
      newSquare.classList.add('pixel');
      canvas.appendChild(newSquare);
      newSquare.addEventListener("click", addColor);
      canvas.appendChild(newSquare);
    }
    buttonSmall.disabled = true;
    buttonMedium.disabled = true;
    buttonLarge.disabled = true;
});

buttonLarge.addEventListener("click", function() {
  let artistChoice = 768;
  canvas.setAttribute("class", "canvas-board large-canvas");
  for (var i = 0; i < (artistChoice); i++) {
      let newSquare = document.createElement('div');
      newSquare.classList.add('pixel');
      newSquare.addEventListener("click", addColor);
      canvas.appendChild(newSquare);
    }
    buttonSmall.disabled = true;
    buttonMedium.disabled = true;
    buttonLarge.disabled = true;
});

function addColor(event) {
  event.target.style.backgroundColor = brushColor;
  // event.setAttribute("");
}

let canvasButton = document.querySelectorAll("button");

for(let i = 0; i < canvasButton.length; i++) {
  canvasButton[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
    this.style.color = "white";
  }, false);
  canvasButton[i].addEventListener("mouseout", function() {
    this.style.backgroundColor='';
    this.style.color = "black";
  }, false);
}
