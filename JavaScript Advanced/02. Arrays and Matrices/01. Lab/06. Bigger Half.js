function solve(input) {
    let cut = 0
    if (input.length % 2 !== 0) {
        cut = Math.floor(input.length / 2)
    } else {
        cut = input.length / 2
    }
    input = input.sort((a, b) => a - b)
    return input.slice(cut)
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]))