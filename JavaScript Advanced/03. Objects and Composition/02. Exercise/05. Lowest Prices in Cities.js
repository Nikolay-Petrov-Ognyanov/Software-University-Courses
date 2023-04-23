function solve(input) {
    let obj = {}
    for (let line of input) {
        let tokens = line.split(' | ')
        let town = tokens[0]
        let product = tokens[1]
        let price = Number(tokens[2])
        if (!obj.hasOwnProperty(product)) {
            obj[product] = { price, town }
        } else {
            if (price < obj[product].price) {
                obj[product] = { price, town }
            }
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`)
    }
}
solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])