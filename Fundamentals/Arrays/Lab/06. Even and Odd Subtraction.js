function solve(arr) {
    let even = 0
    let odd = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i]
        } else {
            odd += arr[i]
        }
    }
    console.log(even - odd)
}
solve([2, 4, 6, 8, 10])