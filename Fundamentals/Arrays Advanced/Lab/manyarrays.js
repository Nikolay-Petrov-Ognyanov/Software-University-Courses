function solve(input) {
    let arrlength = Number(input[0].length)
    let arr = input.flat()
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] || arr[i] === arr[i + arrlength]) {
            sum++
        }
    }
    console.log(sum)
}
solve([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
)