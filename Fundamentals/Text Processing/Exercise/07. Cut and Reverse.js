function solve(arr1) {
    arr1 = arr1.split("").reverse()
    let arr2 = arr1.splice(0, arr1.length / 2)
    console.log(arr1.join(""))
    console.log(arr2.join(""))
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')