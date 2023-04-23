function solve(arr1) {
    let arr2 = []
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0) {
            arr2.unshift(arr1[i])
        } else {
            arr2.push(arr1[i])
        }
    }
    console.log(arr2.join(`\n`))
}
solve(['3', '-2', '0', '-1'])