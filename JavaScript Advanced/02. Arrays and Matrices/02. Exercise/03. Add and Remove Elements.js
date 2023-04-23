function solve(input) {
    let arr = []
    let n = 1
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            arr.push(n)
        } else if ('remove') {
            arr.pop()
        }
        n++
    }
    if (arr.length > 0) {
        console.log(arr.join('\n'))
    } else {
        console.log('Empty')
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add'])