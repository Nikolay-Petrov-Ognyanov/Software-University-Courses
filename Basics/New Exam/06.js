function multiplyTable(input) {
  input = input[0].split("").reverse()

  let n1 = Number(input[0])
  let n2 = Number(input[1])
  let n3 = Number(input[2])

  for (let d1 = 1; d1 <= n1; d1++) {
    for (let d2 = 1; d2 <= n2; d2++) {
      for (let d3 = 1; d3 <= n3; d3++) {
        console.log(`${d1} * ${d2} * ${d3} = ${d1 * d2 * d3};`)
      }
    }
  }
}

multiplyTable(["324"]) 