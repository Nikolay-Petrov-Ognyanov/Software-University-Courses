function solve(text) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g
    let match = pattern.exec(text)
    let result = []
    while (match !== null) {
        console.log(match[0].trim())
        match = pattern.exec(text)
    }
    console.log(result.join(', '))
}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")