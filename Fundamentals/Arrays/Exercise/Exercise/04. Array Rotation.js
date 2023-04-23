function solve(array, rotations) {
    for (i = 0; i < rotations; i++) {
        array.push(array.shift())
    }
    console.log(array.join(" "))
}
solve([2, 4, 15, 31], 5)