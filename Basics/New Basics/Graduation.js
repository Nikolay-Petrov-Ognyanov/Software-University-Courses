function Graduation(input) {
  let student = input[0]
  let index = 1
  let grade = 0
  let sum = 0
  let lowGradesCounter = 0

  while (index < input.length) {
    if (Number(input[index]) < 4) {
      lowGradesCounter++
    }

    if (lowGradesCounter === 2) {
      console.log(`${student} has been excluded at ${grade} grade`)

      break
    }

    grade++
    sum += Number(input[index])
    index++
  }

  if (grade === 12) {
    console.log(`${student} graduated. Average grade: ${(sum / grade).toFixed(2)}`)
  }
}