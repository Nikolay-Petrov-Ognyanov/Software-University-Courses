function taxCalculator(input) {
    input = input.toString().split(">>")
    let taxForFamily = 50
    let taxForHeavyDuty = 80
    let taxForSports = 100
    let currentTaxForFamily = 0
    let currentTaxForHeavyDuty = 0
    let currentTaxForSports = 0
    let totalTaxForFamily = 0
    let totalTaxForHeavyDuty = 0
    let totalTaxForSports = 0
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ")
        let type = tokens[0]
        let years = Number(tokens[1])
        let kilometers = Number(tokens[2])
        switch (type) {
            case `family`:
                currentTaxForFamily =
                Math.floor(kilometers / 3000) * 12 + (taxForFamily - years * 5)
                console.log
                (`A ${type} car will pay ${currentTaxForFamily.toFixed(2)} euros in taxes.`)
                totalTaxForFamily += currentTaxForFamily
                break
            case 'heavyDuty':
                currentTaxForHeavyDuty =
                Math.floor(kilometers / 9000) * 14 + (taxForHeavyDuty - years * 8)
                console.log
                (`A ${type} car will pay ${currentTaxForHeavyDuty.toFixed(2)} euros in taxes.`)
                totalTaxForHeavyDuty += currentTaxForHeavyDuty
                break
            case 'sports':
                currentTaxForSports =
                Math.floor(kilometers / 2000) * 18 + (taxForSports - years * 9)
                console.log
                (`A ${type} car will pay ${currentTaxForSports.toFixed(2)} euros in taxes.`)
                totalTaxForSports += currentTaxForSports
                break
            default:
                console.log(`Invalid car type.`)
                break
        }
    }
    let totalTax = totalTaxForFamily + totalTaxForHeavyDuty + totalTaxForSports
    console.log
    (`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`)
}
taxCalculator([
    'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'
])