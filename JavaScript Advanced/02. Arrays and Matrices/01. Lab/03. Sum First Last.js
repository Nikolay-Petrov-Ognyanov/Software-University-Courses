function solve(input) {
    let sum = 0
    if (input.length < 1) {
        sum = Number(input[0])
    } else {
        sum = Number(input.shift()) + Number(input.pop())
    }
    return sum
}
console.log(solve(['20', '30', '40']))