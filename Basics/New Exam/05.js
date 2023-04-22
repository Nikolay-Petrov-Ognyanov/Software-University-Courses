function excursionSale(input) {
  let sea = Number(input[0])
  let mountain = Number(input[1])
  let profit = 0
  let index = 2

  while (input[index] !== "Stop" && sea + mountain !== 0) {
    if (input[index] === "sea" && sea > 0) {
      sea--
      profit += 680
    }

    if (input[index] === "mountain" && mountain > 0) {
      mountain--
      profit += 499
    }

    index++
  }


  if (mountain + sea === 0) {
    console.log(`Good job! Everything is sold.`)
  }

  console.log(`Profit: ${profit} leva.`)
}

excursionSale(["6",

  "3",

  "sea",

  "mountain",

  "mountain",

  "mountain",

  "sea",

  "Stop"]) 