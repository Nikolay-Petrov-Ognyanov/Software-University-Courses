function solve(input) {
    let text = Array.from(input.shift())
    for (let line of input) {
        if (line === 'Reveal') {
            console.log(`You have a new text message: ${text.join("")}`)
            break
        } else {
            let tokens = line.split(":|:")
            let command = tokens[0]
            let p1 = tokens[1]
            let p2 = tokens[2]
            switch (command) {
                case 'InsertSpace':
                    p1 = Number(p1)
                    text.splice(p1, 0, " ")
                    console.log(text.join(""))
                    break
                case 'Reverse':
                    let newtext = text.join("")
                    if (newtext.includes(p1)) {
                        let word = text.splice(-p1.length).reverse()
                        for (let i = 0; i < word.length; i++) {
                            text.push(word[i])
                        }
                        console.log(text.join(""))
                    } else {
                        console.log(`error`)
                    }
                    break
                case 'ChangeAll':
                    for (let j = 0; j < text.length; j++) {
                        if (text[j] === p1) {
                            text[j] = p2
                        }
                    }
                    console.log(text.join(""))
                    break
            }
        }
    }
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])
//При Reverse си напраивл същата грешка като другите трима колеги - прочети пак условието къде трябва да отиде обърнатия стринг. При ChangeAll си приел че заменяш само един символ, а по условие се казва че заменяш цял substring, който може да е с произволна дължина. Като цяло, избора да обърнеш текста в масив и да боравиш само с него е лоша идея, защото няма начин тези две команди да се разпишат коректно. Този подход работи само за InsertSpace.