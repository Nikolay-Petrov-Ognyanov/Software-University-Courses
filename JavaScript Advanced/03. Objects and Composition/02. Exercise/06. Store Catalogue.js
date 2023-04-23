function solve(input) {
    let list = {}
    for (let line of input) {
        let tokens = line.split(' : ')
        let product = tokens[0]
        let price = Number(tokens[1])
        list[product] = price
    }
    let currentLetter = ''
    let sorted = Object.keys(list).sort((a, b) => a.localeCompare(b))
    for (let product of sorted) {
        let startingLetter = product.split('').shift()
        if (startingLetter !== currentLetter) {
            currentLetter = startingLetter
            console.log(currentLetter)
        }
        console.log(`  ${product}: ${list[product]}`)
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])