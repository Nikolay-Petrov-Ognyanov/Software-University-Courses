function solve(input) {
    let arr1 = input[0]
    let arr2 = input[1]
    let arr3 = input[2]
    let isMagical
    if (arr1[0] + arr1[1] + arr1[2] ===
        arr2[0] + arr2[1] + arr2[2] &&
        arr2[0] + arr2[1] + arr2[2] ===
        arr3[0] + arr3[1] + arr3[2] &&
        arr1[0] + arr2[0] + arr3[0] ===
        arr1[1] + arr2[1] + arr3[1] &&
        arr1[1] + arr2[1] + arr3[1] ===
        arr1[2] + arr2[2] + arr3[2]) {
        isMagical = true
    } else {
        isMagical = false
    }
    console.log(isMagical)
}
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)