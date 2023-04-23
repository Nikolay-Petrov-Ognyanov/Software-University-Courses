function solve(arr1, arr2) {
    let num1 = arr2[0]
    let num2 = arr2[1]
    let num3 = arr2[2]
    let sum = 0
    let takenElements = arr1.splice(0, num1)
    for (let i = 0; i < num2; i++) {
        takenElements.shift()
    }
    for (let j = 0; j < takenElements.length; j++) {
        if (takenElements[j] === num3) {
            sum += 1
        }
    }
    console.log(`Number ${num3} occurs ${sum} times.`)
}
solve([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)