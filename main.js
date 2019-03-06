let turnCount = 10;
let turnRemainSpan = document.getElementById("turnRemain");
turnRemainSpan.innerHTML = "Remaining attemp: " + turnCount;


function getRandomNumber() {

    return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = getRandomNumber(100);

console.log(randomNumber);
let result = "";
let guessBtn = document.getElementById("guessBtn");
// let resetBtn = document.getElementById("resetBtn");




function color(myColor) {

    let a = document.getElementById("comment");


    a.className = (myColor);

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
        turnCount--;
        color("alertMessLow");

    } else
    if (userNumber > randomNumber) {
        result = ("Your number is higher");
        turnCount--;
        color("alertMessHigh");

    } else
    if (userNumber == randomNumber) {
        result = ("BINGO");

        color("alertMessOk");

    }
    if (turnCount === 0) {
        turnRemainSpan.innerHTML = "Over. Please click New Game!";
        comment.innerHTML = "";
        color("alertMess");
        return;
    } else if (turnCount > 0) {
        comment.innerHTML = result;
        turnRemainSpan.innerHTML = "Remaining attemp: " + turnCount;
    }

    console.log(turnCount);
}

// function Reset() {
//     document.getElementById("myForm").reset();
// }

guessBtn.addEventListener("click", checkGuess);
// resetBtn.addEventListener("click", Reset);

// let testButton = document.getElementById("testBtn");


// testButton.addEventListener("click", color);

// function countDownTurn(x) {
//     let i = 10;
//     for (i = 10, i <= 10, i--) {

//     }