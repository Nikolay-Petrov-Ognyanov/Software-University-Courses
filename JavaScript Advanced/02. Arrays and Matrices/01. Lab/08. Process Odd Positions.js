function solve(input) {
    let arr = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            arr.push(input[i] * 2)
        }
    }
    return arr.reverse().join(' ')
}
console.log(solve([10, 15, 20, 25]))