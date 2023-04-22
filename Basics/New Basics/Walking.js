function walking(input) {
  let goal = 10000
  let walked = 0
  let index = 0

  while (index < input.length) {
    if (input[index] === "Going home") {
      walked += Number(input[index+1])

      break
    }

    walked += Number(input[index])
    index++
  }

  if (walked >= goal) {
    console.log(`Goal reached! Good job!`)
    console.log(`${walked - goal} steps over the goal!`)
  } else {
    console.log(`${goal - walked} more steps to reach goal.`)
  }
}

walking(["1500",

  "3000",

  "250",

  "1548",

  "2000",

  "Going home",

  "2000"]) 