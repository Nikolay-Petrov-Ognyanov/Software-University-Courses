function solve(input) {
    let result = new Map()
    for (let line of input) {
        let [product, qty] = line.split(' ')
        qty = Number(qty)
        if (result.has(product)) {
            let existing = result.get(product)
            result.set(product, qty + existing)
        } else {
            result.set(product, qty)
        }
    }
    for (let [product, qty] of result) {
        console.log(`${product} -> ${qty}`)
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])