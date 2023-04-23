function solve(word, char, match) {
    let result = ``
    for (i = 0; i < word.length; i++) {
        if (word[i] === `_`) {
            result += char
        } else {
            result += word[i]
        }
    }
    if (result === match) {
        console.log(`Matched`)
    } else {
        console.log(`Not Matched`)
    }
}
solve('Str_ng', 'I', 'String')