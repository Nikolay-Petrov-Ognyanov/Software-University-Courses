function solve(input) {
    let arr = []
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {
            if (input[i][j] === input[i][j + 1]) {
                arr.push(input[i][j])
            }
            if (input[i][j] === input[i + 1][j]) {
                arr.push(input[i][j])
            }
        }
    }
    console.log(arr.length)
}
solve([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']])