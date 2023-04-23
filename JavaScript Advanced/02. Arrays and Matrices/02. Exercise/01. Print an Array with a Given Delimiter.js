function solve(arr, delimeter) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i])
        if (arr[i + 1] !== undefined) {
            newarr.push(delimeter)
        }
    }
    console.log(newarr.join(''))
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-')