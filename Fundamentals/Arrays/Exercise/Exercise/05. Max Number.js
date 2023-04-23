function solve(arr) {
    let newarr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > (arr[i + 1]) && arr[i] > arr[arr.length - 1]) {
            newarr.push(arr[i])
        }
    }
    newarr.push(arr[arr.length - 1])
    console.log(newarr.join(" "))
}
solve([1, 4, 3, 2])