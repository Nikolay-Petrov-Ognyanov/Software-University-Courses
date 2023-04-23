function toyshop(input) {

    let vacationPrice = Number(input[0])
    let puzzleCount = Number(input[1])
    let dollCount = Number(input[2])
    let bearCount = Number(input[3])
    let minionCount = Number(input[4])
    let truckCount = Number(input[5])

    let toyCount = puzzleCount + dollCount + bearCount + minionCount + truckCount

    let puzzlePrice = 2.60
    let dollPrice = 3
    let bearPrice = 4.10
    let minionPrice = 8.20
    let truckPrice = 2


    let totalPuzzlePrice = puzzleCount * puzzlePrice
    let totalDollPrice = dollCount * dollPrice
    let totalBearPrice = bearCount * bearPrice
    let totalMinionPrice = minionCount * minionPrice
    let totalTruckPrice = truckCount * truckPrice

    let toyPrice = totalPuzzlePrice + totalDollPrice + totalBearPrice + totalMinionPrice + totalTruckPrice

    if (toyCount >= 50) {
        toyPrice = toyPrice * 0.75
    }

    let rentPrice = toyPrice * 0.10
    let income = toyPrice - rentPrice

    if (income >= vacationPrice) {
        console.log(`Yes! ${(income - vacationPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(vacationPrice - income).toFixed(2)} lv needed.`)
    }
}
toyshop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
