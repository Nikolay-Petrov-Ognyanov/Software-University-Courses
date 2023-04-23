function solve(arr) {
    let newarr = []
    for (i = 0; i < arr.length - 1; i += Number(arr[arr.length - 1])) {
        newarr.push(arr[i])
    }
    console.log(newarr.join(" "))
}
solve(['5', '20', '31', '4', '20', '2'])