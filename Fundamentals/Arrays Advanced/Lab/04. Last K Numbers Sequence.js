function solve(n, k) {
    result = [1]
    for (i = 0; i < n - 1; i++) {
        lastK = result.slice(-k)
        sum = 0
        for (element of lastK) {
            sum += element
        }
        result.push(sum)
    }
    console.log(result.join(" "));
}
solve(6, 3)