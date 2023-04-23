function solve(n, arr) {
    let slice = []
    for (let i = 0; i < n; i++) {
        slice.push(arr[i])
    }
    let result = ''
    for (let i = slice.length - 1; i >= 0; i--) {
        result += slice[i]
        result += ' '
    }
    console.log(result)
}
solve(3, [10, 20, 30, 40, 50])