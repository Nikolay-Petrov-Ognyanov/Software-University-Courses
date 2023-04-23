function solve(input) {
    let cities = {}
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Sail") {
            input.splice(input[i], 1)
            i--
            break
        } else {
            let tokens = input[i].split("||")
            let city = tokens[0]
            let population = Number(tokens[1])
            let gold = Number(tokens[2])
            if (cities.hasOwnProperty(city)) {
                for (let town in cities) {
                    if (city === town) {
                        cities[city][0] += population
                        cities[city][1] += gold
                    }
                }
            } else {
                cities[city] = [population, gold]
            }
            input.splice(input[i], 1)
            i--
        }
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End") {
            if (Array.from(Object.entries(cities)).length > 0) {
                console.log(`Ahoy, Captain! There are ${Array.from(Object.entries(cities)).length} wealthy settlements to go to:`)
                for (let city in cities) {
                    console.log(`${city} -> Population: ${cities[city][0]} citizens, Gold: ${cities[city][1]} kg`)
                }
            } else {
                console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
            }
            break
        } else {
            let tokens = input[i].split("=>")
            let command = tokens[0]
            switch (command) {
                case "Plunder":
                    let plT = tokens[1]
                    let plP = Number(tokens[2])
                    let plG = Number(tokens[3])
                    for (let city in cities) {
                        if (city === plT) {
                            cities[city][0] -= plP
                            cities[city][1] -= plG
                            console.log(`${plT} plundered! ${plG} gold stolen, ${plP} citizens killed.`)
                            if (cities[city][0] === 0 || cities[city][1] === 0) {
                                delete cities[city]
                                console.log(`${city} has been wiped off the map!`)
                            }
                        }
                    }
                    break
                case 'Prosper':
                    let prT = tokens[1]
                    let prG = Number(tokens[2])
                    if (prG < 0) {
                        console.log(`Gold added cannot be a negative number!`)
                    } else {
                        for (let city in cities) {
                            if (city === prT) {
                                cities[city][1] += prG
                                console.log(`${prG} gold added to the city treasury. ${prT} now has ${cities[city][1]} gold.`)
                            }
                        }
                    }
                    break
            }
        }
    }
}
solve(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])