function solve(text, word) {
    let counter = text.split(" ").filter(x => x === word)
    console.log(counter.length)
}
solve('This is a word and it also is a sentence',
    'is'
)