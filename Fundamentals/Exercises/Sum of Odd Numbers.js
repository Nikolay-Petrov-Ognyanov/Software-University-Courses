function solve(num) {
    let sum = 0
    let counter = 0
    for (i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i)
            sum += i
            counter++

        }
        if (counter === num) {
            break;
        }
    }
    console.log(`Sum: ${sum}`)
}
solve(5)