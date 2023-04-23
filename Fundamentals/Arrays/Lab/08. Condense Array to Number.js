function solve(arr1) {
    while (arr1.length > 1) {
        let arr2 = []
        for (i = 0; i <= arr1.length; i++) {
            arr2.push(arr1[i] + arr1[i + 1])
        }
        arr2.length = arr1.length - 1
        arr1 = arr2
    }
    console.log(Number(arr1))
}
solve([2, 10, 3])