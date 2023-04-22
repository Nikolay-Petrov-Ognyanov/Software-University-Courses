function solve(input) {
    let tourneysCount = Number(input.shift())
    let initialPoints = Number(input.shift())
    let additionalPoints = 0
    let wo
    n = 0

    let tourneys = {
        'W': 2000,
        'F': 1200,
        'SF': 720
    }

    for (let tourney of input) {
        if (tourney == 'W') {
            won++
        }

        additionalPoints += tourneys[tourney]
    }

    console.log(`Final points: ${initialPoints + additionalPoints}`)
    console.log(`Average points: ${additionalPoints / tourneysCount}`)
    console.log(`${(won / tourneysCount * 100).toFixed(2)}%`)
}
solve(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"]) 