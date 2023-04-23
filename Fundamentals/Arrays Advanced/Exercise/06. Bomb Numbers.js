function solve(arr, bombarr) {
    let bombnum = Number(bombarr[0])
    let bombradius = Number(bombarr[1])
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bombnum) {
            arr.splice(i - bombradius, bombradius * 2 + 1)
            break
        }
    }
    for (let j = 0; j < arr.length; j++) {
        sum += Number(arr[j])
    }
    console.log(sum)
}
solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)