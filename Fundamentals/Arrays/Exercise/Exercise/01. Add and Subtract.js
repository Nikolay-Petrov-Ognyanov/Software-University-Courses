function solve(arr1) {
    let arr2 = []
    let sumarr1 = 0
    let sumarr2 = 0
    for (i = 0; i < arr1.length; i++) {
        sumarr1 += Number(arr1[i])
        if (arr1[i] % 2 === 0) {
            arr2.push(arr1[i] + i)
        } else {
            arr2.push(arr1[i] - i)
        }
    }
    for (i = 0; i < arr2.length; i++) {
        sumarr2 += Number(arr2[i])
    }
    console.log(arr2)
    console.log(sumarr1)
    console.log(sumarr2)
}
solve([5, 15, 23, 56, 35])