function solve(input) {
    let pirateShip = input.shift().split(">").map(Number)
    let warship = input.shift().split(">").map(Number)
    let maximumHealthCapacity = Number(input.shift())
    let stalemate = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Retire') {
            break
        } else {
            let tokens = input[i].split(" ")
            let command = tokens.shift()
            tokens = tokens.map(Number)
            switch (command) {
                case 'Fire':
                    let fireIndex = tokens[0]
                    let fireDamage = tokens[1]
                    if (warship[fireIndex] !== undefined) {
                        warship[fireIndex] -= fireDamage
                    }
                    if (warship[fireIndex] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`)
                        stalemate += 1
                        break
                    }
                    break
                case 'Defend':
                    let startIndex = tokens[0]
                    let endIndex = tokens[1]
                    let defendDamage = tokens[2]
                    if (pirateShip[startIndex] !== undefined &&
                        pirateShip[endIndex] !== undefined) {
                        for (let j = startIndex; j <= endIndex; j++) {
                            pirateShip[j] -= defendDamage
                            if (pirateShip[j] <= 0) {
                                console.log(`You lost! The pirate ship has sunken.`)
                                stalemate -= 1
                                break
                            }
                        }
                    }
                    break
                case 'Repair':
                    let index = tokens[0]
                    let health = tokens[1]
                    if (pirateShip[index] !== undefined) {
                        if (pirateShip[index] + health > maximumHealthCapacity) {
                            pirateShip[index] = maximumHealthCapacity
                        } else {
                            pirateShip[index] += health
                        }
                    }
                    break
                case 'Status':
                    let count = 0
                    for (let k = 0; k < pirateShip.length; k++) {
                        if (pirateShip[k] < maximumHealthCapacity * 0.20) {
                            count++
                        }
                    }
                    console.log(`${count} sections need repair.`)
                    break
            }
        }
    }
    if (stalemate === 0) {
        let pirateShipSum = 0
        for (let l = 0; l < pirateShip.length; l++) {
            pirateShipSum += pirateShip[l]
        }
        let warshipSum = 0
        for (let m = 0; m < warship.length; m++) {
            warshipSum += warship[m]
        }
        console.log(`Pirate ship status: ${pirateShipSum}`)
        console.log(`Warship status: ${warshipSum}`)
    }
}
solve(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])