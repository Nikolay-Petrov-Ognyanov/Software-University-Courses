function solve(input) {
    let value = 0
    for (let i = 0; i < input.length; i++) {
        let command = input[i]
        switch (command) {
            case 'soap':
                value += 10
                break
            case 'water':
                value += value * 0.2
                break
            case 'vacuum cleaner':
                value += value * 0.25
                break
            case 'mud':
                value -= value * 0.1
                break
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])