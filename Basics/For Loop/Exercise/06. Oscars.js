function solve(input) {
    let actor = String(input.shift())
    let points = Number(input.shift())
    let judges = Number(input.shift())

    for (let i = 0; i < judges * 2; i += 2) {
        let judgesNameLength = Number(input[i].length)
        let pointsFromJudge = Number(input[i + 1])

        points += judgesNameLength * pointsFromJudge / 2

        if (points.toFixed(1) > 1250.5) {
            break
        }
    }

    if (points.toFixed(1) > 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`)
    }
}
solve(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"]) 