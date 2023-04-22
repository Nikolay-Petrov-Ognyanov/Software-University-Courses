function solve(input) {
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
    let n = Number(input.shift())

    for (let entry of input) {
        entry = Number(entry)

        if (entry >= 0 && entry < 200) {
            p1++
        } else if (entry >= 200 && entry < 400) {
            p2++
        } else if (entry >= 400 && entry < 600) {
            p3++
        } else if (entry >= 600 && entry < 800) {
            p4++
        } else {
            p5++
        }
    }

    console.log((p1 / n * 100).toFixed(2) + '%')
    console.log((p2 / n * 100).toFixed(2) + '%')
    console.log((p3 / n * 100).toFixed(2) + '%')
    console.log((p4 / n * 100).toFixed(2) + '%')
    console.log((p5 / n * 100).toFixed(2) + '%')
}
solve(["7",

    "800",

    "801",

    "250",

    "199",

    "399",

    "599",

    "799"])