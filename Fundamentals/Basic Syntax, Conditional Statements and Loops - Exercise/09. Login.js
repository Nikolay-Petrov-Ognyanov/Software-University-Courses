function solve(input) {
    for (i = 1; i < input.length; i++) {
        if (input[0] === input[i].split("").reverse().join("")) {
            console.log(`User ${input[0]} logged in.`)
        } else {
            if (i === input.length - 1) {
                console.log(`Incorrect Password. Try again.`)
            }
        }
    }
}
solve(['Acer','login','go','let me in','recA'])