function fishingBoat(input) {
    budget = Number(input[0])
    season = input[1]
    count = input[2]

    let price
    let totalPrice

    switch (season) {
        case `Spring`: price = 3000; break
        case `Summer`:
        case `Autumn`: price = 4200; break
        case `Winter`: price = 2600; break
    }

    if (count <= 6) {
        totalPrice = price * 0.90
    } else if (count <= 11) {
        totalPrice = price * 0.85
    } else if (count >= 12) {
        totalPrice = price
    }

    if (count % 2 === 0 && season !== `Autumn`) {
        totalPrice = totalPrice * 0.95
    } else {
        totalPrice = totalPrice
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3600",
    "Autumn",
    "6"])
