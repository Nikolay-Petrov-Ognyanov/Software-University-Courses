function solve(n1, n2) {
    let arr1 = []
    for (let i = 1; i <= n1; i++) {
        arr1.push(i)
    }
    let r1 = 1
    for (let j = 0; j < arr1.length; j++) {
        r1 *= arr1[j]
    }
    let arr2 = []
    for (let k = 1; k <= n2; k++) {
        arr2.push(k)
    }
    let r2 = 1
    for (let l = 0; l < arr2.length; l++) {
        r2 *= arr2[l]
    }
    console.log(`${(r1 / r2).toFixed(2)}`)
}
solve(6,
    2
)