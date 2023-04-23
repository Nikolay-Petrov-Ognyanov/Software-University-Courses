function solve(input) {
    let arr = []
    for (let n of input) {
        if (n < 0) {
            arr.unshift(n)
        } else {
            arr.push(n)
        }
    }
    for (let n of arr) {
        console.log(n)
    }
}
solve([3, -2, 0, -1])