let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer")
timer.classList.add("timer")
let countdown = 10

let uniqueId = setInterval(function() {
    countdown = countdown - 1
    timer.textContent = countdown
    if (countdown === 0) {
        timer.textContent = "Boooooooooom! bomb blasted"
        clearInterval(uniqueId)
    }
}, 1000)

defuser.addEventListener("keydown", function(event) {
    if (defuser.value === "defuse" && event.key === "Enter" && countdown !== 0) {
        timer.textContent = "You Did it!!! You Defused TimeBomb"
        clearInterval(uniqueId)
        defuser.value = ""
    }
})