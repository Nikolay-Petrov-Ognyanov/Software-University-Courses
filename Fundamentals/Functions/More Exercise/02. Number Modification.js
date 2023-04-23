function solve(input) {
    input = input.toString().split("").map(Number)
    let num = input.reduce((a, b) => a + b) / input.length
    while (num < 5) {
        input.push(9)
        num = input.reduce((a, b) => a + b) / input.length
    }
    console.log(input.join(""))
}
solve(101)