function repainting(input){
    let nylon = Number(input[0])
    let paint = Number(input[1])
    let paintThinner = Number(input[2])
    let workHours = Number(input[3])
    let nylonPricePerSquareMeter =  1.50
    let paintPricePerLiter = 14.50
    let paintThinnerPricePerLiter = 5.00
    let bagsPrice = 0.40
    let nylonPrice = Number(nylon * nylonPricePerSquareMeter)
    let nylonTotalPrice = Number(nylonPrice + 2 * nylonPricePerSquareMeter)
    let paintPrice = Number(paint * paintPricePerLiter)
    let paintTotalPrice = Number(paintPrice + (paintPrice * 0.10))
    let paintThinnerPrice = Number(paintThinner * paintThinnerPricePerLiter)
    let materialsPrice = Number(nylonTotalPrice + paintTotalPrice + paintThinnerPrice + bagsPrice)
    let workPricePerHour = Number(materialsPrice * 0.30)
    let totalWorkPrice = Number(workHours * workPricePerHour)
    let totalPrice = Number(materialsPrice + totalWorkPrice)
    console.log(totalPrice)
}
repainting(["5","10","10","1"])