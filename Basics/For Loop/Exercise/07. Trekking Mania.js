function solve(input) {
    let numberOfGroups = Number(input.shift())

    let people = 0

    let Musala = 0
    let MonthBlanc = 0
    let Kilimanjaro = 0
    let K2 = 0
    let Everest = 0


    for (let groupSize of input) {
        groupSize = Number(groupSize)

        people += groupSize

        if (groupSize <= 5) {
            Musala += groupSize
        } else if (groupSize <= 12) {
            MonthBlanc += groupSize
        } else if (groupSize <= 25) {
            Kilimanjaro += groupSize
        } else if (groupSize <= 40) {
            K2 += groupSize
        } else {
            Everest += groupSize
        }
    }

    console.log(`${(Musala / people * 100).toFixed(2)}%`)
    console.log(`${(MonthBlanc / people * 100).toFixed(2)}%`)
    console.log(`${(Kilimanjaro / people * 100).toFixed(2)}%`)
    console.log(`${(K2 / people * 100).toFixed(2)}%`)
    console.log(`${(Everest / people * 100).toFixed(2)}%`)
}
solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])