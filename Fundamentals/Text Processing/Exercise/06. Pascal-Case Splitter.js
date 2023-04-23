function solve(input) {
    input = input.split("")
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) {
            input[i - 1] += ", "
        }
    }
    console.log(input.join(""))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')