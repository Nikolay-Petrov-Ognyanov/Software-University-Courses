function hotelRoom(input) {
    let month = input[0]
    let duration = Number(input[1])
    let studioPrice
    let apartmentPrice
    switch (month) {
        case `May`:
        case `October`:
            if (duration > 7 && duration <= 14) {
                studioPrice = 50 * 0.95
                apartmentPrice = 65
            }
            else if (duration > 14) {
                studioPrice = 50 * 0.70
                apartmentPrice = 65 * 0.90
            } else {
                studioPrice = 50
                apartmentPrice = 65
            }
            ; break
        case `June`:
        case `September`:
            if (duration > 14) {
                studioPrice = 75.20
                apartmentPrice = 68.70 * 0.90
            }
            else {
                studioPrice = studioPrice = 75.20
                apartmentPrice = 68.70
            }
            ; break
        case `July`:
        case `August`:
            if (duration > 14) {
                studioPrice = 76
                apartmentPrice = 77 * 0.90
            }
            else {
                studioPrice = 76
                apartmentPrice = 77
            }
            ; break
    }
    console.log(`Apartment: ${(duration * apartmentPrice).toFixed(2)} lv.`)
    console.log(`Studio: ${(duration * studioPrice).toFixed(2)} lv.`)
}
hotelRoom(["August",
    "20"])
