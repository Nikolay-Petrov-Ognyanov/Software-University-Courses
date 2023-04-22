function combinations(input) {
  let sum = Number(input[0])
  let counter = 0

  for (let n1 = 0; n1 <= input; n1++) {
    for (let n2 = 0; n2 <= input; n2++) {
      for (let n3 = 0; n3 <= input; n3++) {
        if (n1 + n2 + n3 === sum) {
          counter++
        }
      }
    }
  }

  console.log(counter)
}

combinations(["25"]) 