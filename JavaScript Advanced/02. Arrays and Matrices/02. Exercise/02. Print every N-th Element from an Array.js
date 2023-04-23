function solve(arr, n) {
    let newarr = []
    for (let i = 0; i < arr.length; i += n) {
        newarr.push(arr[i])
    }
    return newarr
}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2))