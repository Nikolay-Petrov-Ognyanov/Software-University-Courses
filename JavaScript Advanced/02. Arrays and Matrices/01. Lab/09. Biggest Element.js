function solve(input) {
    let arr = []
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            arr.push(input[i][j])
        }
    }
    return arr.sort((a, b) => b - a)[0]
}
console.log(solve(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))