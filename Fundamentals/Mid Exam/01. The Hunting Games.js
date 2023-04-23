function theHuntingGames(input) {
    input = input.map(Number)
    let days = input.shift()
    let countOfPeople = input.shift()
    let energyLevel = input.shift()
    let waterPerDayForOnePerson = input.shift()
    let foodPerDayForOnePerson = input.shift()
    let water = days * countOfPeople * waterPerDayForOnePerson
    let food = days * countOfPeople * foodPerDayForOnePerson
    for (let i = 0; i < input.length; i++) {
        let day = i + 1
        energyLevel -= input[i]
        if (energyLevel <= 0) {
            break
        }
        if (day % 2 === 0) {
            energyLevel += energyLevel * 0.05
            water = water * 0.70
        }
        if (day % 3 === 0) {
            food -= food / countOfPeople
            energyLevel += energyLevel * 0.10
        }
    }
    if (energyLevel > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energyLevel.toFixed(2)} energy!`)
    } else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
    }
}
theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"])
