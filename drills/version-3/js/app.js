let brush;

const wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper");
document.body.appendChild(wrapper);

const title = document.createElement("h1");
const titleText = document.createTextNode("Fun Pixel Art Maker");
title.appendChild(titleText);
wrapper.appendChild(title);

const links = document.createElement("div");
links.setAttribute("class", "canvas-links");
wrapper.appendChild(links);

const buttonSmall = document.createElement("button");
buttonSmall.setAttribute("class", "canvas-button-small button");
buttonSmall.innerHTML = "Small";
links.appendChild(buttonSmall);

const buttonMedium = document.createElement("button");
buttonMedium.setAttribute("class", "canvas-button-medium button");
buttonMedium.innerHTML = "Medium";
links.appendChild(buttonMedium);

const buttonLarge = document.createElement("button");
buttonLarge.setAttribute("class", "canvas-button-large button");
buttonLarge.innerHTML = "Large";
links.appendChild(buttonLarge);

const canvas = document.createElement("div");
canvas.setAttribute("class", "canvas-board");
wrapper.appendChild(canvas);

const pallet = document.createElement("div");
pallet.setAttribute("class", "paint-pallet");
wrapper.appendChild(pallet);

const brushOne = document.createElement("div");
brushOne.setAttribute("class", "paint-brush color-one");
pallet.appendChild(brushOne);

const brushTwo = document.createElement("div");
brushTwo.setAttribute("class", "paint-brush color-two");
pallet.appendChild(brushTwo);

const brushThree = document.createElement("div");
brushThree.setAttribute("class", "paint-brush color-three");
pallet.appendChild(brushThree);

const brushFour = document.createElement("div");
brushFour.setAttribute("class", "paint-brush color-four");
pallet.appendChild(brushFour);

const brushFive = document.createElement("div");
brushFive.setAttribute("class", "paint-brush color-five");
pallet.appendChild(brushFive);

function setBrushColor(pixel, color){
  pixel.style.backgroundColor = color;
}

let canvasButton = document.querySelectorAll("button");

for(let i = 0; i < canvasButton.length; i++) {
  canvasButton[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = "lightblue";
    this.style.color = "white";
  }, false);
  canvasButton[i].addEventListener('mouseout', function() {
    this.style.backgroundColor='';
    this.style.color = "black";
  }, false);
}

buttonSmall.addEventListener("click", function() {
  let artistChoice = 256;
  canvas.setAttribute("class", "canvas-board small-canvas");
  for (var i = 0; i < (artistChoice); i++) {
      let newSquare = document.createElement('div');
      newSquare.classList.add('pixel');
      canvas.appendChild(newSquare);
    }

});

buttonMedium.addEventListener('click', function(num) {
  let artistChoice = 408;
  canvas.setAttribute("class", "canvas-board medium-canvas");
  for (var i = 0; i < (artistChoice); i++) {
      let newSquare = document.createElement('div');
      newSquare.classList.add('pixel');
      canvas.appendChild(newSquare);
    }
});

buttonLarge.addEventListener('click', function(num) {
  let artistChoice = 768;
  canvas.setAttribute("class", "canvas-board large-canvas");
  for (var i = 0; i < (artistChoice); i++) {
      let newSquare = document.createElement('div');
      newSquare.classList.add('pixel');
      canvas.appendChild(newSquare);
    }
});
