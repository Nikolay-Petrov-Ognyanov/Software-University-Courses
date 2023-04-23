function solve(input) {
    let income = 0
    for (let line of input) {
        let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([Ee][-+]?[0-9]+)?)\$/g
        let result = regex.exec(line)
        if (result) {
            let customer = result.groups['customer']
            let product = result.groups['product']
            let quantity = +result.groups['quantity']
            let price = +result.groups['price']
            let totalPrice = quantity * price
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`)
            income += totalPrice
        } else if (line === 'end of shift') {
            console.log(`Total income: ${income.toFixed(2)}`)
        }
    }
}
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])