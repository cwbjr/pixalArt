const buttonsArray = document.getElementsByTagName("span");

const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
// const zero = document.getElementById("zero");

console.log(clear);

for (var i = 0; i < buttonsArray.length; i++) {
    if(buttonsArray[i].innerHTML === "=") {
        buttonsArray[i].addEventListener("click", calculate(i));
    } else {
        buttonsArray[i].addEventListener("click", fillScreen(i));
    }
}

function fillScreen(i) {
    return function() {
        if(buttonsArray[i].innerHTML == "÷") {
            screen.innerHTML += "/";
        } else if(buttonsArray[i].innerHTML == "x") {
            screen.innerHTML += "*";
        } else {
            screen.innerHTML += buttonsArray[i].innerHTML;
        }
    };
}

function calculate(i) {
    return function () {
            var showScreen = screen.innerHTML;

            var btnNumbers = showScreen.replace(/[\d.]+/g, function(n){
                return parseFloat(n);
            });

      screen.innerHTML = eval(btnNumbers);
    };

}

clear.onclick = function() {
    screen.innerHTML = "";
};
