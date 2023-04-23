function solve(n1, n2) {
    let result = 0
    n1 = +n1
    n2 = +n2
    for (let i = n1; i <= n2; i++) {
        result += i
    }
    console.log(result)
}
solve('1', '5')