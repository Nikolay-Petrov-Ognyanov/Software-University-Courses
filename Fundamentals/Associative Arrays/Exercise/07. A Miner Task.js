function solve(input) {
    let collection = new Map()
    for (let i = 0; i < input.length; i += 2) {
        let material = input[i]
        let quantity = Number(input[i + 1])
        if (collection.has(material)) {
            let existing = collection.get(material)
            collection.set(material, existing + quantity)
        } else {
            collection.set(material, quantity)
        }
    }
    for (let [material, quantity] of collection) {
        console.log(`${material} -> ${quantity}`)
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)