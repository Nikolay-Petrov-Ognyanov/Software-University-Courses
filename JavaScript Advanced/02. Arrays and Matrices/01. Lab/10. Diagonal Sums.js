function solve(input) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (i === j) {
                sum1 += input[i][j]
            }
            if (i + j === input.length - 1) {
                sum2 += input[i][j]
            }
        }
    }
    console.log(sum1, sum2)
}
solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)