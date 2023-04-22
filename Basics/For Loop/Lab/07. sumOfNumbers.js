function solve(input) {
    let sum = 0

    for (let digit of input[0].split('')) {
        sum += Number(digit)
    }

    console.log('The sum of the digits is:' + sum)
}
solve(["564891"])