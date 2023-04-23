function solve(input) {
    let arr = []
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i].split(' '))
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = Number(arr[i][j])
        }
    }
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) {
                sum1 += arr[i][j]
            }
            if (i + j === arr.length - 1) {
                sum2 += arr[i][j]
            }
        }
    }
    if (sum1 === sum2) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (i === j) {
                    continue
                } else if (i + j === arr.length - 1) {
                    continue
                } else {
                    arr[i][j] = sum1
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].join(' '))
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            console.log(input[i])
        }
    }
}
solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])