function skiTrip(input) {
  let nights = Number(input[0]) - 1
  let typeOfRoom = input[1]
  let rating = input[2]

  let pricePerNight = 0
  let discount = 0

  switch (typeOfRoom) {
    case "room for one person":
      pricePerNight = 18
      break
    case "apartment":
      pricePerNight = 25

      if (nights < 10) {
        discount = 0.3
      } else if (nights >= 10 && nights <= 15) {
        discount = 0.35
      } else if (nights > 15) {
        discount = 0.5
      }
      break
    case "president apartment":
      pricePerNight = 35

      if (nights < 10) {
        discount = 0.1
      } else if (nights >= 10 && nights <= 15) {
        discount = 0.15
      } else if (nights > 15) {
        discount = 0.2
      }
      break
  }

  let totalPrice = nights * pricePerNight - (nights * pricePerNight * discount)

  if (rating === "positive") {
    totalPrice += totalPrice * 0.25
  } else if (rating === "negative") {
    totalPrice -= totalPrice * 0.1
  }

  console.log(totalPrice.toFixed(2))
}

skiTrip(["14",

  "apartment",

  "positive"])