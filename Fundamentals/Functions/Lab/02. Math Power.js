function solve(n, p) {
    let result = 1
    for (i = 0; i < p; i++) {
        result *= n
    }
    console.log(result)
}
solve(2, 3)