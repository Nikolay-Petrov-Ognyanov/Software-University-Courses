function solve(n, k) {
    let arr = [1]
    while (arr.length < n) {
        let lastKElements = arr.slice(-k)
        let sum = 0
        for (let element of lastKElements) {
            sum += element
        }
        arr.push(sum)
    }
    return arr
}
console.log(solve(8, 2))