function solve(input) {
    let currentBiggestNumber = 0
    let arr = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= currentBiggestNumber) {
            currentBiggestNumber = input[i]
            arr.push(currentBiggestNumber)
        }
    }
    return arr.sort((a, b) => a - b)
}
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]))