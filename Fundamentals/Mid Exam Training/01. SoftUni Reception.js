function solve(input) {
    input = input.map(Number)
    let e1 = input[0]
    let e2 = input[1]
    let e3 = input[2]
    let students = input[3]
    let etotal = e1 + e2 + e3
    let hour = 0
    while (students > 0) {
        hour++
        if (hour % 4 !== 0) {
            students -= etotal
        }
    }
    console.log(`Time needed: ${hour}h.`)
}
solve(['3', '2', '5', '40'])