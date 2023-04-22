function coins(input) {
  let remainingAmount = Number(input[0])
  let coins = 0

  let coinsArray = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]
  let index = 0

  while (index < coinsArray.length) {
    let currentCoin = coinsArray[index]

    if (remainingAmount >= currentCoin) {
      coins += Math.floor(remainingAmount / currentCoin)
      remainingAmount = (remainingAmount - Math.floor(remainingAmount / currentCoin) * currentCoin).toFixed(2)
    }

    index++
  }

  console.log(coins)
}

coins(["1.23"])
coins(["2"])
coins(["0.56"])
coins(["2.73"]) 