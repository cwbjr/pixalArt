// Button to create canvas

const button = document.createElement("button");
button.setAttribute("id", "canvas-button");
button.innerHTML = "Create Canvas";
const body = document.getElementsByTagName("body")[0];
body.appendChild(button);


// Div holding pixel squares
const canvas = document.createElement("div");
canvas.setAttribute("id", "canvas-board");
document.body.appendChild(canvas);

const createCanvasButton = document.getElementById('canvas-button');
const canvasBoard = document.getElementById('canvas-board');

// createCanvasButton.addEventListener('click', createCanvas());
createCanvasButton.addEventListener('click', function(num) {
  const artist = prompt("Select canvas size: ", "3");
  const artistAns = Number(artist);
  for (var i = 0; i < (artistAns * artistAns); i++) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('square');
    canvasBoard.appendChild(newSquare);
  }
});















// const canvas = document.createElement("div");
// canvas.setAttribute("id", "canvas");
// body.appendChild(canvas);
// const canvasBoard = document.getElementById("canvas");









/*
// .setAttribute("class", "square b-border");


// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});
*/
