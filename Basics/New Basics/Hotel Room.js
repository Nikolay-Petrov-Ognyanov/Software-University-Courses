function HotelRoom(input) {
    let month = input[0]
    let nights = Number(input[1])

    let studio = 0
    let apartment = 0

    if (month == "May" || month == "October") {
        studio = 50
        apartment = 65

        if (nights > 7 && nights <= 14) {
            studio *= 0.95
        } else if (nights > 14) {
            studio *= 0.7
        }
    } else if (month == "June" || month == "September") {
        studio = 75.2
        apartment = 68.7

        if (nights > 14) {
            studio *= 0.8
        }
    } else if (month == "July" || month == "August") {
        studio = 76
        apartment = 77
    }

    if (nights > 14) {
        apartment *= 0.9
    }

    console.log(`Apartment: ${(apartment * nights).toFixed(2)} lv.`)
    console.log(`Studio: ${(studio * nights).toFixed(2)} lv.`)
}

HotelRoom(["June",

    "14"])