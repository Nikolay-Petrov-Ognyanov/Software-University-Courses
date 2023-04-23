function solve(input) {
    let message = input.shift().split('')
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Decode') {
            console.log(`The decrypted message is: ${message.join('')}`)
            break
        } else {
            let tokens = input[i].split('|')
            let command = tokens[0]
            switch (command) {
                case 'Move':
                    let numberOfLetters = Number(tokens[1])
                    let movemessage = message.splice(0, numberOfLetters)
                    message = message.concat(movemessage)
                    break
                case 'Insert':
                    let index = Number(tokens[1])
                    let value = tokens[2]
                    message[index - 1] += value
                    message = message.join('').split('')
                    break
                case 'ChangeAll':
                    let substring = tokens[1]
                    let replacement = tokens[2]
                    for (let j = 0; j < message.length; j++) {
                        if (message[j] === substring) {
                            message[j] = replacement
                        }
                    }
                    break
            }
        }
    }
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])