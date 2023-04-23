function solve(fruit, grams, pricePerKG) {
    let weight = (grams / 1000)
    let money = (pricePerKG * weight)
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
solve('apple', 1563, 2.35)