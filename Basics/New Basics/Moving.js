function moving(input) {
  let width = Number(input[0])
  let length = Number(input[1])
  let height = Number(input[2])
  let freeSpace = width * length * height
  let index = 3

  while (index < input.length && input[index] !== "Done") {
    if (Number(input[index]) > freeSpace) {
      freeSpace = (Number(input[index]) - freeSpace) * -1

      break
    }

    freeSpace -= Number(input[index])
    index++
  }

  if (freeSpace >= 0) {
    console.log(`${freeSpace} Cubic meters left.`)
  } else {
    console.log(`No more free space! You need ${freeSpace * -1} Cubic meters more.`)
  }
}

moving(["10",

  "10",

  "2",

  "20",

  "20",

  "20",

  "20",

  "122"])