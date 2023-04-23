function search() {
    let towns = document.querySelectorAll("#towns li")
    let searchBox = document.querySelector("#searchText")
    let result = document.querySelector("#result")
    let matches = 0
    for (let town of towns) {
        town.style.fontWeight = "normal"
        if (town.textContent.includes(searchBox.value)) {
            town.style.fontWeight = "bold"
            town.style.textDecoration = "underline"
            matches++
        }
    }
    result.textContent = `${matches} matches found`
}