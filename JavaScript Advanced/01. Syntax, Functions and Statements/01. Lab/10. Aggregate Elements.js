function solve(input) {
    let sum1 = 0
    let sum2 = 0
    for (let n of input) {
        sum1 += n
        sum2 += 1 / n
    }
    console.log(sum1)
    console.log(sum2)
    console.log(input.join(''))
}
solve([2, 4, 8, 16])