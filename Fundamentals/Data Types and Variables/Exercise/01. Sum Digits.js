function solve(num) {
    let sum = 0
    let numAsString = String(num)
    for (i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
    }
    console.log(sum)
}
solve(1234)
