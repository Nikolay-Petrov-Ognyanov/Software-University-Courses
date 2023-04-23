function solve(input) {
    input = Array.from(input)
    let arr = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toLowerCase()) {
            input[i] = input[i].toUpperCase()
        }
        if (input[i] === 'A' ||
            input[i] === 'B' ||
            input[i] === 'C' ||
            input[i] === 'D' ||
            input[i] === 'E' ||
            input[i] === 'F' ||
            input[i] === 'G' ||
            input[i] === 'H' ||
            input[i] === 'I' ||
            input[i] === 'J' ||
            input[i] === 'K' ||
            input[i] === 'L' ||
            input[i] === 'M' ||
            input[i] === 'N' ||
            input[i] === 'O' ||
            input[i] === 'P' ||
            input[i] === 'Q' ||
            input[i] === 'R' ||
            input[i] === 'S' ||
            input[i] === 'T' ||
            input[i] === 'U' ||
            input[i] === 'V' ||
            input[i] === 'W' ||
            input[i] === 'X' ||
            input[i] === 'Y' ||
            input[i] === 'Z' ||
            input[i] === ' ') {
            arr.push(input[i])
        }
    }
    arr = String(arr.join('').split(' ').join(', '))
    console.log(arr)
}
solve('Hi, how are you?')