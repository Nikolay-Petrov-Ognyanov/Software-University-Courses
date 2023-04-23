function solve(arr) {
    let newarr = arr
    let n = Number(arr[arr.length - 1])
    newarr.pop()
    for (i = 0; i < n; i++) {
        newarr.unshift(newarr[newarr.length - 1])
        newarr.pop()
    }
    console.log(newarr.join(" "))
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])