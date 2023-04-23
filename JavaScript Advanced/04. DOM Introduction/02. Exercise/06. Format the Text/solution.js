function solve() {
    let input = document.getElementById("input").value
    let output = document.getElementById("output")

    output.innerHTML = ""

    let split = input.split(". ")
    let combine = []
    let arr = []

    for (let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            if (split.length - i + 1 >= 3) {
                combine.push(split[i] + ". ")
                if (combine.length == 3) {
                    combine = combine.join("").trim()
                    arr.push(combine)
                    combine = []
                }
            } else if (split.length - i == 1) {
                combine.push(split[i])
                combine = combine.join("").trim()
                arr.push(combine)
                combine = []
            }
        }
    }

    for (let entry of arr) {
        console.log(entry)
        let paragraph = document.createElement("p")
        paragraph.textContent = entry
        output.appendChild(paragraph)
    }
}