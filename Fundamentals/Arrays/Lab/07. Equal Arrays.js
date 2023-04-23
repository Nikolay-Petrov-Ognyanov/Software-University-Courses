function solve(arr1, arr2) {
    let arr3 = []
    let sum = 0
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`); break
        } else {
            arr3.push(arr1[i])
        }
    }
    if (arr3[arr3.length - 1] === arr1[arr1.length - 1]) {
        for (k = 0; k < arr3.length; k++) {
            sum += Number(arr3[k])
        }
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
solve(['10','20','30'], ['10','20','30'])