function suppliesForSchool(input){
    let penPackagePrice = 5.80
    let markerPackagePrice = 7.20
    let detergentPricePerLiter = 1.20
    let penPackageCount = Number(input[0])
    let markerPackageCount = Number(input[1])
    let detergentLiters = Number(input[2])
    let percentageDiscount = Number(input[3] * 0.01)
    let totalPrice = Number(penPackageCount * penPackagePrice + markerPackageCount * markerPackagePrice + detergentLiters * detergentPricePerLiter)
    let discount = Number(totalPrice * percentageDiscount)
    let finalPrice = Number(totalPrice - discount)
    console.log(finalPrice)
}
suppliesForSchool(["4", "2", "5", "13"])