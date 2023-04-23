function solve(arr, start, end) {

    if (start < 0) {
        start = 0
    }
    if (end > arr.length - 1) {
        end = arr.length - 1
    }
    let isNaN = false
    let result = 0
    for (let i = start; i <= end; i++) {
        if (arr[i] !== Number(arr[i])) {
            return NaN
            isNaN = true
            break
        } else {
            result += arr[i]
        }
    }
    if (isNaN === false) {
        return result
    }
}
console.log(solve([], 1, 2))