function solve(input) {
    let arr = input.split(" ").map(Number)
    let totalSum = 0
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    }
    let averageValue = (totalSum / arr.length).toFixed(2)
    let newarr = []
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > averageValue) {
            newarr.push(arr[j])
        }
    }
    newarr.sort((a, b) => b - a)
    if (newarr.length === 0) {
        console.log(`No`)
    }
    if (newarr.length > 5) {
        newarr.length = 5
    }
    console.log(newarr.join(" "))
}
solve('-1 -2 -3 -4 -5 -6')