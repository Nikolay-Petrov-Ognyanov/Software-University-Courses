function solve(n1, n2, n3) {
    let arr = []
    arr.push(n1, n2, n3)
    arr.sort((a, b) => b - a)
    console.log(`The largest number is ${arr[0]}.`)
}
solve(-3, -5, -22.5)