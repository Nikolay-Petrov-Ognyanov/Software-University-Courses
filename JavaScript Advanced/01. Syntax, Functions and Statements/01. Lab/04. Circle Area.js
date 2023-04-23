function solve(r) {
    if (r === +r) {
        console.log((r ** 2 * Math.PI).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof r}.`)
    }
}
solve(5)