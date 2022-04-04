let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;
let presentWidthElement = document.getElementById("imageWidth")
let defaultWidthValue = parseInt(originalImageWidth)
console.log(defaultWidthValue)
let warningMessageElement = document.getElementById("warningMessage")

function decreaseWidth() {

    let currentWidthValue = defaultWidthValue - 5
    if (currentWidthValue <= 100) {
        warningMessageElement.textContent = "Can't Visible.Increase the Size of Image"
        presentWidthElement.textContent = "100px"
    } else if (currentWidthValue >= 300) {
        warningMessageElement.textContent = "Too Big. Decrease the Size of Image"
        presentWidthElement.textContent = "300px"
    } else {
        warningMessageElement.textContent = ""

        presentWidthElement.textContent = currentWidthValue + "px"
        imageElement.style.width = presentWidthElement.textContent
        defaultWidthValue = currentWidthValue

    }
}

function increaseWidth() {
    let currentWidthValue = defaultWidthValue + 5

    if (currentWidthValue <= 100) {
        warningMessageElement.textContent = "Can't Visible.Increase the Size of Image"
        presentWidthElement.textContent = "100px"
    } else if (currentWidthValue >= 300) {
        warningMessageElement.textContent = "Too Big. Decrease the Size of Image"
        presentWidthElement.textContent = "300px"
    } else {
        warningMessageElement.textContent = ""

        presentWidthElement.textContent = currentWidthValue + "px"
        imageElement.style.width = presentWidthElement.textContent
        defaultWidthValue = currentWidthValue
    }
}