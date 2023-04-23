function solve(arr) {
    newarr = []
    newarr.push(arr[0])
    for (i = 0; i < arr.length; i++) {
        if (arr[i+1] > arr[i] && arr[i+1] > newarr[0]) {
            newarr.push(arr[i+1])
        }
    }
    console.log(newarr.join(" "))
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])