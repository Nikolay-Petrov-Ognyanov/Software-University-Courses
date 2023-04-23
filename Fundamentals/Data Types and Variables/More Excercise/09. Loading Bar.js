function solve(input) {
    let n = Number(input / 10)
    let arr = []
    for (let i = 0; i < 10; i++) {
        if (n > 0) {
            arr.push('%')
        } else {
            arr.push('.')
        }
        n--
    }
    if (input < 100) {
        console.log(`${input}% [${arr.join('')}]`)
        console.log(`Still loading...`)
    } else {
        console.log(`${input}% Complete!`)
        console.log(`[${arr.join('')}]`)
    }
}
solve(50)