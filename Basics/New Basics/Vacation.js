function vacation(input) {
  let requiredMoney = Number(input[0])
  let savedMoney = Number(input[1])

  let days = 0
  let consecutiveDaysSpendingMoney = 0

  let index = 2

  while (index < input.length && consecutiveDaysSpendingMoney < 5) {
    days++

    if (input[index] === "spend") {
      savedMoney -= Number(input[index + 1])
      consecutiveDaysSpendingMoney++
    } else if (input[index] === "save") {
      savedMoney += Number(input[index + 1])
      consecutiveDaysSpendingMoney = 0
    }

    if (savedMoney < 0) {
      savedMoney = 0
    }

    index+=2
  }

  if (consecutiveDaysSpendingMoney === 5) {
    console.log(`You can't save the money.`)
    console.log(`${days}`)
  } else if (savedMoney >= requiredMoney) {
    console.log(`You saved the money for ${days} days.`)
  }
}

vacation(["250",

  "150",

  "spend",

  "50",

  "spend",

  "50",

  "save",

  "100",

  "save",

  "100"]) 