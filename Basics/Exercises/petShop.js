function petShop(input){
    let dogFoodPacksCount = input[0]
    let catFoodPacksCount = input[1]
    let dogFoodPacksPrice = dogFoodPacksCount * 2.50
    let catFoodPacksPrice = catFoodPacksCount * 4.00
    let totalPrice = dogFoodPacksPrice + catFoodPacksPrice
    console.log(`${totalPrice} lv.`)
}
petShop(["13", "9"])