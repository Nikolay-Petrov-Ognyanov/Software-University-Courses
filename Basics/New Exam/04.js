function grandpaStavri(input) {
  let liters = 0
  let degrees = 0

  for (let i = 1; i < input.length; i += 2) {
    liters += Number(input[i])
    degrees += Number(input[i]) * Number(input[i + 1])
  }

  degrees /= liters

  console.log(`Liter: ${liters.toFixed(2)}`)
  console.log(`Degrees: ${degrees.toFixed(2)}`)

  if (degrees < 38) {
    console.log(`Not good, you should baking!`)
  } else if (degrees >= 38 && degrees <= 42) {
    console.log(`Super!`)
  } else if (degrees > 42) {
    console.log(`Dilution with distilled water!`)
  }
}

grandpaStavri(["3",

  "100",

  "45",

  "50",

  "55",

  "150",

  "36"]) 