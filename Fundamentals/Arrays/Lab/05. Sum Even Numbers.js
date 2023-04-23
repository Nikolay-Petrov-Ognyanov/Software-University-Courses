function solve(input) {
    let sum = 0
    for (i = 0; i <= input.length; i++) {
        if (input[i] % 2 === 0) {
            n = Number(input[i])
            sum += n
        }
    }
    console.log(sum)
}
solve(['2', '4', '6', '8', '10'])