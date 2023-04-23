function solve(input) {
    let isBetweenSixAndTen = false
    let consistsOfOnlyLettersAndDigits = false
    let numberscounter = 0
    input = input.split("")
    if (input.length < 6 || input.length > 10) {
        console.log(`Password must be between 6 and 10 characters`)
    } else {
        isBetweenSixAndTen = true
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'A' &&
            input[i] !== 'B' &&
            input[i] !== 'C' &&
            input[i] !== 'D' &&
            input[i] !== 'E' &&
            input[i] !== 'F' &&
            input[i] !== 'G' &&
            input[i] !== 'H' &&
            input[i] !== 'I' &&
            input[i] !== 'J' &&
            input[i] !== 'K' &&
            input[i] !== 'L' &&
            input[i] !== 'M' &&
            input[i] !== 'N' &&
            input[i] !== 'O' &&
            input[i] !== 'P' &&
            input[i] !== 'Q' &&
            input[i] !== 'R' &&
            input[i] !== 'S' &&
            input[i] !== 'T' &&
            input[i] !== 'U' &&
            input[i] !== 'V' &&
            input[i] !== 'W' &&
            input[i] !== 'X' &&
            input[i] !== 'Y' &&
            input[i] !== 'Z' &&
            input[i] !== 'a' &&
            input[i] !== 'b' &&
            input[i] !== 'c' &&
            input[i] !== 'd' &&
            input[i] !== 'e' &&
            input[i] !== 'f' &&
            input[i] !== 'g' &&
            input[i] !== 'h' &&
            input[i] !== 'i' &&
            input[i] !== 'j' &&
            input[i] !== 'k' &&
            input[i] !== 'l' &&
            input[i] !== 'm' &&
            input[i] !== 'n' &&
            input[i] !== 'o' &&
            input[i] !== 'p' &&
            input[i] !== 'q' &&
            input[i] !== 'r' &&
            input[i] !== 's' &&
            input[i] !== 't' &&
            input[i] !== 'u' &&
            input[i] !== 'v' &&
            input[i] !== 'w' &&
            input[i] !== 'x' &&
            input[i] !== 'y' &&
            input[i] !== 'z' &&
            input[i] !== '0' &&
            input[i] !== '1' &&
            input[i] !== '2' &&
            input[i] !== '3' &&
            input[i] !== '4' &&
            input[i] !== '5' &&
            input[i] !== '6' &&
            input[i] !== '7' &&
            input[i] !== '8' &&
            input[i] !== '9') {
            console.log(`Password must consist only of letters and digits`)
            break
        } else {
            consistsOfOnlyLettersAndDigits = true
        }
    }
    for (let j = 0; j < input.length; j++) {
        if (input[j] === '0' ||
            input[j] === '1' ||
            input[j] === '2' ||
            input[j] === '3' ||
            input[j] === '4' ||
            input[j] === '5' ||
            input[j] === '6' ||
            input[j] === '7' ||
            input[j] === '8' ||
            input[j] === '9') {
            numberscounter++
        }
    }
    if (numberscounter < 2) {
        console.log(`Password must have at least 2 digits`)
    }
    if (isBetweenSixAndTen === true &&
        consistsOfOnlyLettersAndDigits === true &&
        numberscounter >= 2) {
        console.log(`Password is valid`)
    }
}
solve('Pa$s$s')