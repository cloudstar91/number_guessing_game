function getRandomNumber() {

    return Math.floor(Math.random() * 100 + 1);
}



let randomNumber = getRandomNumber(100);

function checkGuess() {
    let guessBox = document.getElementById("guessBox");
    let userNumber = guessBox.value;
    let guessBtn = document.getElementById("guessBtn");

    if (isNaN(userNumber) || userNumber == "") {
        alert("Can only enter a number");
    } else if (userNumber < randomNumber) {
        console.log("Your number is lower");
    } else
    if (userNumber > randomNumber) {
        console.log("Your number is higher");
    } else
    if (userNumber == randomNumber) {
        console.log("BINGO");
    }
}


guessBtn.addEventListener("click", checkGuess);