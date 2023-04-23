function solve(arr) {
    let revarr = []
    for (i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            revarr.unshift(arr[i] * 2)
        }
    }
    console.log(revarr.join(" "))
}
solve([3, 0, 10, 4, 7, 3])