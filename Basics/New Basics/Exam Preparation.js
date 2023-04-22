function examPreparation(input) {
  let maxLowMarksCount = Number(input[0])

  let index = 1
  let lowMarks = 0

  let currentProblem = ""
  let currentMark = 0

  let numberOfProblems = 0
  let totalScore = 0

  while (input[index] !== "Enough" && index < input.length || lowMarks < lowMarks) {
    currentProblem = input[index]
    currentMark = Number(input[index + 1])

    if (currentMark <= 4) {
      lowMarks++
    }

    numberOfProblems++
    totalScore += currentMark

    index += 2
  }

  if (lowMarks === maxLowMarksCount) {
    console.log(`You need a break, ${lowMarks} poor grades.`)
  } else {
    console.log(`Average score: ${(totalScore / numberOfProblems).toFixed(2)}`)
    console.log(`Number of problems: ${numberOfProblems}`)
    console.log(`Last problem: ${currentProblem}`)
  }
}

examPreparation(["3",

  "Money",

  "6",

  "Story",

  "4",

  "Spring Time",

  "5",

  "Bus",

  "6",

  "Enough"]) 