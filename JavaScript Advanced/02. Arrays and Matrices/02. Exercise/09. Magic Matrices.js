function solve(input) {
    let isMagical = true
    let arr = []
    let newarr = []
    for (let i = 0; i < input.length; i++) {
        let currentSumRows = input[i].reduce((a, b) => a + b)
        if (input[i + 1] !== undefined) {
            let nextSumRows = input[i + 1].reduce((a, b) => a + b)
            if (currentSumRows !== nextSumRows) {
                isMagical = false
            }
        }
        for (let j = 0; j < input[i].length; j++) {
            arr.push(input[i][j])
        }
    }
    if (isMagical) {
        for (let i = 0; i < arr.length; i += input.length) {
            let start = i
            let end = i + input.length
            let sum = 0
            for (let j = start; j < end; j++) {
                sum += arr[j]
            }
            newarr.push(sum)
        }
    }
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i + 1] !== undefined) {
            if (newarr[i] !== newarr[i + 1]) {
                isMagical = false
            }
        } else if (newarr[i] !== newarr[i - 1]) {
            isMagical = false
        }
    }
    console.log(isMagical)
}
solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)