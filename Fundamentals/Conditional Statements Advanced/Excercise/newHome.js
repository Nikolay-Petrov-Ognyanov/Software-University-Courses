function newHome(input) {

    let type = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])

    let price
    let totalPrice

    switch (type) {
        case `Roses`: price = 5
            if (count > 80) {
                totalPrice = (count * price) * 0.90
            } else {
                totalPrice = count * price
            }
            ; break


        case `Dahlias`: price = 3.80
            if (count > 90) {
                totalPrice = (count * price) * 0.85
            } else {
                totalPrice = count * price
            }
            ; break


        case `Tulips`: price = 2.80
            if (count > 80) {
                totalPrice = count * price * 0.85
            } else {
                totalPrice = count * price
            }
            ; break


        case `Narcissus`: price = 3
            if (count < 120) {
                totalPrice = count * price * 1.15
            } else {
                totalPrice = count * price
            }
            ; break


        case `Gladiolus`: price = 2.50
            if (count < 80) {
                totalPrice = count * price * 1.20
            } else {
                totalPrice = count * price
            }
            ; break


    }

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }

}

newHome(["Tulips",
    "88",
    "260"])
