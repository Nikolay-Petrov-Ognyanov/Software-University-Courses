function solve() {
    let arr1 = ['hi', 'hello']
    let arr2 = ['Niki']
    if (!arr1.includes('asd')) {
        arr2.push(arr1[0])
    }
    console.log(arr2)
}
solve()