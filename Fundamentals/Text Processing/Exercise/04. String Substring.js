function solve(word, text) {
    let counter = 0
    text = text.split(" ")
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === word) {
            console.log(text[i].toLowerCase())
            counter++
            break
        }
    }
    if (counter === 0) {
        console.log(`${word} not found!`)
    }
}
solve('python',
'JavaScript is the best programming language'
)