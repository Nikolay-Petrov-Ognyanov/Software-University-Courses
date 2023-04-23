function solve(input) {
    let totalPrice = 0
    let customer = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'special' || input[i] === 'regular') {
            customer.push(input[i])
            break
        } else if (Number(input[i]) < 0) {
            console.log(`Invalid price!`)
            //i++
        } else {
            let price = Number(input[i])
            totalPrice += price
        }
    }
    let taxes = totalPrice * 0.20
    let totalPriceWithTaxes = totalPrice + taxes
    if (customer[0] === 'special') {
        totalPriceWithTaxes = totalPriceWithTaxes * 0.90
    }
    if (totalPriceWithTaxes === 0) {
        console.log(`Invalid order!`)
    } else {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPrice.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPriceWithTaxes.toFixed(2)}$`)
    }
}
solve([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
