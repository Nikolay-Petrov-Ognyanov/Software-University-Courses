function solve(arr) {
    let k = arr.shift()
    console.log(arr.length);
    console.log(arr.slice(0, k).join(' '))
    console.log(arr.slice(arr.length - k, arr.length).join(' '))
}
solve([2,
    7, 8, 9]
)