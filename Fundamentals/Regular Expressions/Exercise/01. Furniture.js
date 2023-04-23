function solve(input) {
    let pattern = />>[A-Z][A-Za-z\s]+<<\d+\.?\d+/g
    let match
    let totalPrice = 0
    console.log(`Bought furniture:`)
    for (let line of input) {
        if (line === 'Purchase') {
            break
        } else {
            let [nameAndPrice, quantity] = line.split('!')
            while ((match = pattern.exec(nameAndPrice)) !== null) {
                let [nameAndPrice, quantity] = line.split('!')
                let [name, price] = nameAndPrice.split('<<')
                name = name.substring(2)
                price = Number(price)
                quantity = Number(quantity)
                totalPrice += price * quantity
                console.log(name)
            }
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
solve([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
])