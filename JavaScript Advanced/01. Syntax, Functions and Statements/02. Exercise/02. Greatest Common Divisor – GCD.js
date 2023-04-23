function solve(n1, n2) {
    let arr = []
    for (let i = 0; i < 100; i++) {
        if (Number.isInteger(n1 / i) && Number.isInteger(n2 / i)) {
            arr.push(i)
        }
    }
    arr.sort((a, b) => b - a)
    console.log(arr[0])
}
solve(2154, 458)