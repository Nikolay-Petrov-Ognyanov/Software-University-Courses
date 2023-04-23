function shopping(input) {

    let budget = Number(input[0])
    let videocardCount = Number(input[1])
    let processorCount = Number(input[2])
    let ramCount = Number(input[3])

    let videoCardPrice = 250
    let videoCardTotalPrice = videocardCount * videoCardPrice

    let processorPrice = 0.35 * videoCardTotalPrice
    let processorTotalPrice = processorCount * processorPrice

    let ramPrice = 0.10 * videoCardTotalPrice
    let ramTotalPrice = ramCount * ramPrice

    let totalPrice = videoCardTotalPrice + processorTotalPrice + ramTotalPrice

    if (videocardCount > processorCount) {
        totalPrice = totalPrice * 0.85
    }

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }

}

shopping(["920.45",
    "3",
    "1",
    "1"])
