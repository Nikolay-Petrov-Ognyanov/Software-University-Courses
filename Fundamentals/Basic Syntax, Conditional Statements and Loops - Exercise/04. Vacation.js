function solve(count, type, day) {
    let price
    let totalprice
    if (type === `Students`) {
        switch (day) {
            case `Friday`: price = 8.45; break
            case `Saturday`: price = 9.80; break
            case `Sunday`: price = 10.46; break
        }
        if (count >= 30) {
            totalprice = (count * price) * 0.85
        } else {
            totalprice = count * price
        }
    } else if (type === `Business`) {
        switch (day) {
            case `Friday`: price = 10.90; break
            case `Saturday`: price = 15.60; break
            case `Sunday`: price = 16; break
        }
        if (count >= 100) {
            totalprice = (count * price) - (10 * price)
        } else {
            totalprice = count * price
        }
    } else if (type === `Regular`) {
        switch (day) {
            case `Friday`: price = 15; break
            case `Saturday`: price = 20; break
            case `Sunday`: price = 22.50; break
        }
        if (count >= 10 && count <= 20) {
            totalprice = (count * price) * 0.95
        } else {
            totalprice = count * price
        }
    }
    console.log(`Total price: ${totalprice.toFixed(2)}`)
}
solve(40,
    "Regular",
    "Saturday"
)