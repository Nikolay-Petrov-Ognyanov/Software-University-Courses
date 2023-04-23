function extract(content) {
    content = document.getElementById("content").textContent

    let regex1 = /\([\w\s]+\)/g
    let result1 = content.match(regex1)
    let regex2 = /[\w+\s]+/g
    let result2 = []

    for (let entry of result1) {
        let string = entry.match(regex2)
        result2.push(string[0])
    }

    return result2.join("; ")
}