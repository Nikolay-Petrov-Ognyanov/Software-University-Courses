function YardGreening(input) {
    let area = Number(input[0])
    let pricePerSquareMeter = 7.61
    let totalPrice = area * pricePerSquareMeter
    let discount = totalPrice * 0.18.toFixed(2)
    let priceAfterDiscount = totalPrice - discount

    console.log(`The final price is: ${priceAfterDiscount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

YardGreening(["550"])