function finalCompetition(input) {

    let dancersCount = Number(input[0])
    let pointsCount = Number(input[1])
    let season = input[2]
    let place = input[3]

    let prize
    let costs

    switch (place) {
        case `Bulgaria`:
            prize = pointsCount * dancersCount
            switch (season) {
                case `summer`: costs = prize * 0.05; break
                case `winter`: costs = prize * 0.08; break
            }
            ; break

        case `Abroad`:
            prize = pointsCount * dancersCount + ((pointsCount * dancersCount) * 0.5)
            switch (season) {
                case `summer`: costs = prize * 0.10; break
                case `winter`: costs = prize * 0.15; break
            }
            ; break
    }

    let moneyAfterCosts = prize - costs
    let charity = moneyAfterCosts * 0.75
    let moneyAfterCharity = moneyAfterCosts - charity
    let moneyPerDancer = moneyAfterCharity / dancersCount

    console.log(`Charity - ${charity.toFixed(2)}`)
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
}
finalCompetition([`25`, `98`, `winter`, `Bulgaria`])