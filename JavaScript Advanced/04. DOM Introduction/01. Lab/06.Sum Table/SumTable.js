function sumTable() {
    let tdlist = document.querySelectorAll("td")
    let result = 0
    let sum = document.getElementById("sum")

    for (let td of tdlist) {
        if (td.textContent == Number(td.textContent)) {
            result+= Number(td.textContent)
        }
    }
    
    sum.textContent = result
}