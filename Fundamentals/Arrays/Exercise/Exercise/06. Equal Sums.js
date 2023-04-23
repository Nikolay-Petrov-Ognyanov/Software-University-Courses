function solve(arr) {
    let leftsum = 0
    let rightsum = 0
    for (i = 0; i < arr.length; i++) {
        leftsum += arr[i]
        for (j = arr.length - 1; j >= 0; j--) {
            rightsum += arr[j]
            if (rightsum !== leftsum) {
                break
            }
        }
    }
    console.log(leftsum, rightsum)
}
solve([1, 2, 3, 3])