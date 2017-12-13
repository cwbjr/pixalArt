var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

/* Your code here */
function createGame() {
    const gameBoard = document.getElementById("gameboard");
    return board.map((item, i) => {
        const boardGrid = document.createElement("div");
        boardGrid.id = i;
        switch(i) {
            case 0: case 1: case 3: case 4:
                boardGrid.setAttribute("class", "square b-border r-border");
                break;
            case 2: case 5:
                boardGrid.setAttribute("class", "square b-border");
                break;
            case 6: case 7:
                boardGrid.setAttribute("class", "square r-border");
                break;
            default:
                boardGrid.setAttribute("class", "square");
        }
        gameBoard.appendChild(boardGrid);
        addClickListener(boardGrid);
    });
}

function displayMessage(message) {
    // const msgClass = document.getElementsByClassName('message')[0];
    const msgClass = document.querySelector('.message');
    if(message) {
        msgClass.innerHTML = message;
    } else {
        msgClass.innerHTML = "Current Player: " + currentPlayer;
    }
}

function changeMessage() {
  const msgAttribute = document.querySelector('.message');
  msgAttribute.className += " end-message";
}

function makeMove(square, index) {
  board[index] = currentPlayer;
  square.innerHTML = currentPlayer;
}


createGame();
