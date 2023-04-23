function solve(input) {
    let health = 100
    let bitcoins = 0
    input = input.toString().split('|')
    for (let i = 0; i < input.length; i++) {
        let room = i + 1
        let tokens = input[i].split(" ")
        let amount = Number(tokens[1])
        if (tokens[0] === "potion" || tokens[0] === "chest") {
            let command = tokens[0]
            switch (command) {
                case "potion":
                    if (health + amount > 100) {
                        amount = 100 - health
                        console.log(`You healed for ${amount} hp.`)
                    } else {
                        console.log(`You healed for ${amount} hp.`)
                    }
                    health += amount
                    console.log(`Current health: ${health} hp.`)
                    break
                case "chest":
                    console.log(`You found ${amount} bitcoins.`)
                    bitcoins += amount
                    break
            }
        } else {
            let monster = tokens[0]
            health -= amount
            if (health > 0) {
                console.log(`You slayed ${monster}.`)
            } else {
                console.log(`You died! Killed by ${monster}.`)
                console.log(`Best room: ${room}`)
                break
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])