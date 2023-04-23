function solve(input) {
    let arr1 = Array.from(String(input))
    let arr2 = []
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum += +arr1[i]
    }
    for (let i = 0; i < arr1.length; i++) {
        if (sum / arr1.length === +arr1[i]) {
            arr2.push(arr1)
        }
    }
    if (arr1.length === arr2.length) {
        console.log(`true`)
        console.log(sum)
    } else {
        console.log(`false`)
        console.log(sum)
    }
}
solve(2222222)