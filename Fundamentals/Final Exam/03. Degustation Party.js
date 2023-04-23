function solve(input) {
    let guests = {}
    let unlikedMeals = 0
    for (let line of input) {
        if (line === "Stop") {
            break
        } else {
            let tokens = line.split("-")
            let command = tokens[0]
            let guest = tokens[1]
            let meal = tokens[2]
            switch (command) {
                case "Like":
                    if (guests.hasOwnProperty(guest) && !guests[guest].has(meal)) {
                        guests[guest].add(meal)
                    } else if (!guests.hasOwnProperty(guest)) {
                        guests[guest] = new Set()
                        guests[guest].add(meal)
                    } else if (guests[guest].has(meal)) {
                        continue
                    }
                    break
                case "Dislike":
                    if (!guests.hasOwnProperty(guest)) {
                        console.log(`${guest} is not at the party.`)
                    } else if (guests.hasOwnProperty(guest) && !guests[guest].has(meal)) {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                    } else if (guests.hasOwnProperty(guest) && guests[guest].has(meal)) {
                        console.log(`${guest} doesn't like the ${meal}.`)
                        guests[guest].delete(meal)
                        unlikedMeals++
                    }
                    break
            }
        }
    }
    for (let guest in guests) {
        console.log(`${guest}: ${Array.from(guests[guest]).join(", ")}`)
    }
    console.log(`Unliked meals: ${unlikedMeals}`)
}
solve(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])