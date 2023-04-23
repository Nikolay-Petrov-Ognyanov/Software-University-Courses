function solve(arr) {
    let n = 1
    let newarr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === `add`) {
            newarr.push(n)
        } else if (arr[i] === `remove`) {
            newarr.pop()
        }
        n++
    }
    if (newarr.length < 1) {
        console.log(`Empty`)
    } else {
        console.log(newarr.join(" "))
    }
}
solve(['add', 'add', 'remove', 'add', 'add'])