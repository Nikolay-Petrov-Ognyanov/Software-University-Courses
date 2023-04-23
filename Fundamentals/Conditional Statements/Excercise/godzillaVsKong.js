function godzillaVsKong(input) {

    let budget = Number(input[0])
    let statistsCount = Number(input[1])
    let clothingPricePerOneStatist = Number(input[2])

    if (statistsCount > 150) {
        clothingPricePerOneStatist = clothingPricePerOneStatist * 0.90
    }

    let totalClothingPrice = statistsCount * clothingPricePerOneStatist
    let decoration = budget * 0.10
    let totalPrice = totalClothingPrice + decoration

    if (totalPrice > budget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])
