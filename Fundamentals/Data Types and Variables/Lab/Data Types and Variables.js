function solve(parameter) {
    if (parameter === String(parameter)) {
        console.log(typeof (parameter))
        console.log(`${parameter}`)
    } else {
        console.log(`'Parameter is not suitable for printing'`)
    }
}
solve(`hi`)