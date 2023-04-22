function cake(input) {
  let length = Number(input[0])
  let width = Number(input[1])
  let totalPieces = length * width
  let piecesLeft = totalPieces
  let index = 2

  while (index < input.length && input[index] !== "STOP") {
    piecesLeft -= Number(input[index])
    index++
  }

  if (piecesLeft > 0) {
    console.log(`${piecesLeft} pieces are left.`)
  } else {
    console.log(`No more cake left! You need ${piecesLeft * -1} pieces more. `)
  }
}

cake(["10",

  "10",

  "20",

  "20",

  "20",

  "20",

  "21"]) 