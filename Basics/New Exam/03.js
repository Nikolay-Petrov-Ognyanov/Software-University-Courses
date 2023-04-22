function finalCompetition(input) {
  let dancers = Number(input[0])
  let points = Number(input[1])
  let season = input[2]
  let place = input[3]
  let prize = 0

  if (place === "Bulgaria") {
    prize = dancers * points

    if (season === "summer") {
      prize -= prize * 0.05
    } else if (season === "winter") {
      prize -= prize * 0.08
    }
  } else if (place === "Abroad") {
    prize = dancers * points * 1.5

    if (season === "summer") {
      prize -= prize * 0.10
    } else if (season === "winter") {
      prize -= prize * 0.15
    }
  }

  let charity = prize * 0.75
  let moneyPerDancer = (prize - charity) / dancers

  console.log(`Charity - ${charity.toFixed(2)}`)
  console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
}

finalCompetition(["1",

  "89.5",

  "summer",

  "Abroad"]) 