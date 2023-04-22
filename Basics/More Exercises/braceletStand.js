function braceletStand(input) {

    let pocketMoney = Number(input[0])
    let dailyIncome = Number(input[1])
    let totalCosts = Number(input[2])
    let presentPrice = Number(input[3])

    let days = 5

    let savedMoney = pocketMoney * days
    let totalIncome = dailyIncome * days
    let totalSavedMoney = savedMoney + totalIncome
    let budget = totalSavedMoney - totalCosts

    if (budget >= presentPrice) {
        console.log(`Profit: ${budget.toFixed(2)} BGN, the gift has been purchased.`)
    }
    else {
        console.log(`Insufficient money: ${(presentPrice - budget).toFixed(2)} BGN.`)
    }
}
braceletStand([`15.20`, `200.00`, `7.30`, `1500.12`])