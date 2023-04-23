function solve(n) {
    let arr = n.toString().split('')
    let evensum = 0
    let oddsum = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evensum += Number(arr[i])
        } else {
            oddsum += Number(arr[i])
        }
    }
    console.log(`Odd sum = ${oddsum}, Even sum = ${evensum}`)
}
solve(3495892137259234)