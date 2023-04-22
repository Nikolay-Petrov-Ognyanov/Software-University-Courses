function bestPlayer(input) {
    let index = 0
    let name = ""
    let goals = 0

    while (index < input.length) {
        if (input[index] === "END") {
            break
        }

        if (index % 2 !== 0 && Number(input[index]) > goals) {
            name = input[index - 1]
            goals = Number(input[index])
        }

        if (Number(input[index]) > 10) {
            break
        }

        index++
    }

    console.log(`${name} is the best player!`)
    
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${goals} goals.`)
    }
}

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])
