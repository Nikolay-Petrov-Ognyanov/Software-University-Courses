function sumOfTwoNumbers(input) {
  let start = Number(input[0])
  let end = Number(input[1])
  let magicNumber = Number(input[2])
  let combinations = 0
  let brake = false

  for (let n1 = start; n1 <= end; n1++) {
    for (let n2 = start; n2 <= end; n2++) {
      if (brake) {
        break
      }

      combinations++

      if (n1 + n2 === magicNumber) {
        console.log(`Combination N:${combinations} (${n1} + ${n2} = ${magicNumber})`)

        brake = true
        break
      }
    }
  }

  if (!brake) {
    console.log(`${combinations} combinations - neither equals ${magicNumber}`)
  }
}

sumOfTwoNumbers(["23",

  "24",

  "20"])