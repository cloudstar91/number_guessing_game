function getRandomNumber() {

    return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = getRandomNumber(100);

console.log(randomNumber);
let result = "";
let guessBtn = document.getElementById("guessBtn");


// console.log('Guess Button check');
// console.log(guessBtn);

// let myColor = "";

function color(myColor) {
    let a = document.getElementById("comment");
    console.log(a)
    a.classList.add(myColor);
    console.log('After adding');
    console.log(a);
}

function checkGuess() {
    let guessBox = document.getElementById("guessBox");
    let userNumber = guessBox.value;
    let comment = document.getElementById("comment");


    if (isNaN(userNumber) || userNumber == "") {
        alert("Can only enter a number");
    } else
    if (userNumber < randomNumber) {
        result = ("Your number is lower");
        color("alertMessLow");
    } else
    if (userNumber > randomNumber) {
        result = ("Your number is higher");
        color("alertMessHigh");
    } else
    if (userNumber == randomNumber) {
        result = ("BINGO");
        color("alertMessOk");
    }
    comment.innerHTML = result;
}
guessBtn.addEventListener("click", checkGuess);

// let testButton = document.getElementById("testBtn");


// testButton.addEventListener("click", color);