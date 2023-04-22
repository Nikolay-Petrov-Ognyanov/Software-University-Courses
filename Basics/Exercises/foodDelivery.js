function foodDelivery(input){
    let chickenMenuCount = Number(input[0])
    let fishMenuCount = Number(input[1])
    let vegetarianMenuCount = Number(input[2])
    let chickenMenuPrice = 10.35
    let fishMenuPrice = 12.40
    let vegeterianMenuPrice = 8.15
    let totalChickenMenuPrice = Number(chickenMenuCount * chickenMenuPrice)
    let totalFishMenuPrice = Number(fishMenuCount * fishMenuPrice)
    let totalVegetarianMenuPrice = Number(vegetarianMenuCount * vegeterianMenuPrice)
    let totalMenuPrice = Number(totalChickenMenuPrice + totalFishMenuPrice + totalVegetarianMenuPrice)
    let desertPrice = Number(totalMenuPrice * 0.20)
    let deliveryPrice = 2.50
    let totalPrice = Number(totalMenuPrice + desertPrice + deliveryPrice)
    console.log(totalPrice)
}
foodDelivery(["9", "2", "6"])