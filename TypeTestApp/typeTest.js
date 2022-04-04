let quoteDisplay = document.getElementById("quoteDisplay")
let timer = document.getElementById("timer");
let spinner = document.getElementById("spinner")

function startCountdown() {
    let countdown = parseFloat(timer.textContent)
    let uniqueId = setInterval(function() {
        countdown = countdown + 1
        timer.textContent = countdown
    }, 1000)
    localStorage.setItem("uniqueId", uniqueId)
}
startCountdown()

function onDisplayQuote() {
    spinner.classList.toggle("d-none")
    let url = "https://apis.ccbp.in/random-quote"
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(text) {
            quoteDisplay.textContent = text.content
            localStorage.setItem("quote", quoteDisplay.textContent)
            spinner.classList.toggle("d-none")

        })
}
onDisplayQuote()

let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");

submitBtn.addEventListener("click", function() {
    let quote = localStorage.getItem("quote");
    if (quote === quoteInput.value) {
        let uniqueId = localStorage.getItem("uniqueId")
        clearInterval(uniqueId)
        result.textContent = "you typed in " + timer.textContent + " seconds"
    } else {
        result.textContent = "You typed Incorrect Sentence"
    }
})

resetBtn.addEventListener("click", function() {
    quoteDisplay.textContent = ""
    spinner.classList.toggle("d-none")
    quoteInput.value = "";
    result.textContent = "";
    let uniqueId = localStorage.getItem("uniqueId")
    clearInterval(uniqueId)
    timer.textContent = 0
    onDisplayQuote()
    spinner.classList.toggle("d-none")
    startCountdown()
})