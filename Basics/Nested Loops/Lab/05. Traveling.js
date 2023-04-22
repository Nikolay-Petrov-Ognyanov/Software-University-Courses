function traveling(input) {
  let destination = ""

  for (let i = 0; i < input.length; i++) {
    if (input[i] != Number(input[i])) {
      if (destination) {
        console.log(`Going to ${destination}!`)
      }

      destination = input[i]
    }
  }
}

traveling(["France",

  "2000",

  "300",

  "300",

  "200",

  "400",

  "190",

  "258",

  "360",

  "Portugal",

  "1450",

  "400",

  "400",

  "200",

  "300",

  "300",

  "Egypt",

  "1900",

  "1000",

  "280",

  "300",

  "500",

  "End"]) 