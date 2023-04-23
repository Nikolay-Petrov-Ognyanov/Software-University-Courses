function solve() {
    let rows = Array.from(document.querySelectorAll("tbody tr"))
    let input = document.getElementById("searchField")
    let btn = document.getElementById("searchBtn")
    btn.addEventListener("click", searchBtnFunc)
    function searchBtnFunc(event) {
        for (let row of rows) {
            row.classList.remove("select")
            if (input.value !== "" && row.innerHTML.includes(input.value)) {
                row.className = "select"
            }
        }
        input.value = ""
    }
}