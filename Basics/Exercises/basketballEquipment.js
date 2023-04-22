function basketballEquipment(input){
    let trainingTax = Number(input[0])
    let shoesPrice = Number(trainingTax - trainingTax * 0.40)
    let uniformPrice = Number(shoesPrice - shoesPrice * 0.20)
    let basketballPrice = Number(uniformPrice * 0.25)
    let accessoriesPrice = Number(basketballPrice * 0.20)
    let totalPrice = trainingTax + shoesPrice + uniformPrice + basketballPrice + accessoriesPrice
    console.log(totalPrice)
}
basketballEquipment(["550"])
