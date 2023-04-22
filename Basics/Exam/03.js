function santasHoliday(input) {
    let stayDuration = Number(input[0])
    let typeOfRoom = input[1]
    let approval = input[2]

    let nights = stayDuration - 1
    let pricePerNight = 0

    if (typeOfRoom === "room for one person") {
        pricePerNight = 18
    } else if (typeOfRoom === "apartment") {
        pricePerNight = 25
    } else if (typeOfRoom === "president apartment") {
        pricePerNight = 35
    }

    let discount = 0

    if (typeOfRoom === "apartment") {
        if (stayDuration < 10) {
            discount = 0.30
        } else if (stayDuration > 10 && stayDuration < 15) {
            discount = 0.35
        } else if (stayDuration > 15) {
            discount = 0.50
        }
    } else if (typeOfRoom === "president apartment") {
        if (stayDuration < 10) {
            discount = 0.10
        } else if (stayDuration > 10 && stayDuration < 15) {
            discount = 0.15
        } else if (stayDuration > 15) {
            discount = 0.20
        }
    }

    let price = nights * pricePerNight

    price -= price * discount

    if (approval === "positive") {
        price += price * 0.25
    } else if (approval === "negative") {
        price -= price * 0.1
    }

    console.log(price.toFixed(2))
}

santasHoliday(["2",
"apartment",
"positive"])