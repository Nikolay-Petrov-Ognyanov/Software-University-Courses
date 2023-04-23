function solve(arr, rotations) {
    let newarr = []
    if (rotations > arr.length) {
        rotations = rotations % arr.length
    }
    let n = 0
    while (n < rotations) {
        arr.unshift(arr.pop())
        n++
    }
    console.log(arr.join(' '))
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)
