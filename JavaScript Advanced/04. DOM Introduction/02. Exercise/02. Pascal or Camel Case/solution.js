function solve() {
    let text = document.getElementById("text")
    let namingConvention = document.getElementById("naming-convention")
    let result = document.getElementById("result")
    text.value = text.value.toLowerCase()
    let arr = text.value.split(" ")
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (namingConvention.value === "Camel Case") {
            if (i === 0) {
                newarr.push(arr[0].toLowerCase())
            } else {

                newarr.push(arr[i][0].toUpperCase() + arr[i].substring(1))
            }
        } else if (namingConvention.value === "Pascal Case") {
            newarr.push(arr[i][0].toUpperCase() + arr[i].substring(1))
        } else {
            break
        }
    }
    if (newarr.length > 0) {
        result.textContent = newarr.join("")
    } else {
        result.textContent = "Error!"
    }
}