function solve(input) {
    let arr = []
    let newarr = []
    for (let i = 0; i < input; i++) {
        newarr.push(input)
    }
    for (let j = 0; j < input; j++) {
        arr.push(newarr)
    }
    for (let k = 0; k < input; k++) {
        console.log(arr[k].join(" "))
    }
}
solve(7)