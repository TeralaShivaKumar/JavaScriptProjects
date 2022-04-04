let randomNumber = Math.ceil(Math.random() * 100)
let resultNumber = document.getElementById("result")
let userInput = document.getElementById("userInput")

console.log(randomNumber)

function checkNumber() {
    let guessedNumber = parseInt(userInput.value)

    if (guessedNumber > randomNumber) {
        resultNumber.textContent = "Too High! Try Again.";
        resultNumber.style.backgroundColor = "#1e217c"
    } else if (guessedNumber < randomNumber) {
        resultNumber.textContent = "Too Low! Try Again.";
        resultNumber.style.backgroundColor = "#1e217c"
    } else if (guessedNumber === randomNumber) {
        resultNumber.textContent = "Congo!! You got it Right";
        resultNumber.style.backgroundColor = "green"
    } else {
        resultNumber.textContent = "Please Enter a Valid Input.";
        resultNumber.style.backgroundColor = "red"
    }

}