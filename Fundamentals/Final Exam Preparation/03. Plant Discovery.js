function solve(input) {
    let plants = {}
    let n = +input.shift()
    let plantarr = input.splice(0, n)
    for (let line of plantarr) {
        let tokens = line.split('<->')
        let plant = tokens[0]
        let rarity = +tokens[1]
        let rating = 0
        let ratings = 0
        if (plants.hasOwnProperty(plant)) {
            plants[plant][0] = rarity
        } else {
            plants[plant] = [rarity, rating, ratings]
        }
    }
    for (let line of input) {
        if (line === 'Exhibition') {
            break
        } else {
            let [command, tokens] = line.split(': ')
            tokens = tokens.split(' - ')
            let plant = tokens[0]
            switch (command) {
                case 'Rate':
                    let rating = +tokens[1]
                        if (plants.hasOwnProperty(plant)) {
                            plants[plant][1] += rating
                            plants[plant][2]++
                        } else {
                            console.log(`error`)
                        }
                    break
                case 'Update':
                    let newrarity = +tokens[1]
                    if (plants.hasOwnProperty(plant)) {
                        plants[plant][0] = newrarity
                    } else {
                        console.log(`error`)
                    }
                    break
                case 'Reset':
                    if (plants.hasOwnProperty(plant)) {
                        plants[plant][1] = 0
                    } else {
                        console.log(`error`)
                    }
                    break
            }
        }
    }
    console.log(`Plants for the exhibition:`)
    for (let plant in plants) {
        if (plants[plant][2] <= 0) {
            plants[plant][2] = 1
        }
        
        console.log(`- ${plant}; Rarity: ${plants[plant][0]}; Rating: ${Number(plants[plant][1] / plants[plant][2]).toFixed(2)}`)
    }
}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])