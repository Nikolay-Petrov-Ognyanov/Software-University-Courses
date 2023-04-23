function solve(input) {
    let arr1 = []
    for (let i = 0; i < input; i++) {
        arr1.push(`*`)
    }
    arr1 = arr1.join(' ')
    for (let i = 0; i < input; i++) {
        console.log(arr1)
    }
}
solve(3)