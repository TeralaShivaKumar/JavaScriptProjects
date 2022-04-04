let searchInput = document.getElementById("searchInput");
let searchResultEl = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
let pbooksHead = document.getElementById("pbooksHead");

function createAndAppendResults(result) {
    let {
        title,
        imageLink,
        author
    } = result;
    let container = document.createElement("div");
    container.classList.add('p-3')
    searchResultEl.appendChild(container);
    let imageElement = document.createElement("img");
    imageElement.src = imageLink;
    imageElement.classList.add("book-image");
    container.appendChild(imageElement);
    let authorEl = document.createElement("p");
    authorEl.textContent = author;
    authorEl.classList.add("author-name");
    container.appendChild(authorEl);


}

function displayResults(searchResults) {

    let pbooksHead = document.createElement("h1")
    pbooksHead.classList.add("pbooks")
    pbooksHead.textContent = "Popular Books"
    searchResultEl.appendChild(pbooksHead)
    for (let result of searchResults) {
        createAndAppendResults(result)
    }

}

function getResults(event) {

    if (event.key === "Enter") {
        spinner.classList.toggle("d-none")
        searchResultEl.textContent = ""

        let searchValue = event.target.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                console.log(jsonData)

                let {
                    search_results,
                    total
                } = jsonData
                if (total === 0) {
                    spinner.classList.toggle("d-none")
                    pbooksHead.textContent = "No Results found"
                } else {

                    spinner.classList.toggle("d-none")
                    displayResults(search_results)
                }
            })
    }
}

searchInput.addEventListener("keydown", getResults)