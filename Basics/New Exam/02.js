function braceletStand(input) {
  let pocketMoney = Number(input[0])
  let dailyIncome = Number(input[1])
  let totalCosts = Number(input[2])
  let presentsPrice = Number(input[3])

  let totalDays = 5

  let savedPocketMoney = totalDays * pocketMoney
  let savedMoneyFromSales = totalDays * dailyIncome
  let totalIncome = savedPocketMoney + savedMoneyFromSales
  let totalProfit = totalIncome - totalCosts

  if (totalProfit - presentsPrice > 0) {
    console.log(`Profit: ${totalProfit.toFixed(2)} BGN, the gift has been purchased.`)
  } else {
    console.log(`Insufficient money: ${(presentsPrice - totalProfit).toFixed(2)} BGN.`)
  }
}

braceletStand(["15.20",
  "200.00",
  "7.30",
  "1500.12"])