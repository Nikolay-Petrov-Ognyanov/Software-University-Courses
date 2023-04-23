function solve(input) {
    let days = Number(input[0])
    let dailyplunder = Number(input[1])
    let expectedplunder = Number(input[2])
    let totalplunder = 0
    let day = 0
    while (day < days) {
        day++
        totalplunder += dailyplunder
        if (day % 3 === 0) {
            totalplunder += dailyplunder / 2
        }
        if (day % 5 === 0) {
            totalplunder = totalplunder * 0.70
        }
    }
    if (totalplunder >= expectedplunder) {
        console.log(`Ahoy! ${totalplunder.toFixed(2)} plunder gained.`)
    } else {
        let expectedplunderpercent = expectedplunder / 100
        let totalplunderpercent = totalplunder / expectedplunderpercent
        console.log(`Collected only ${totalplunderpercent.toFixed(2)}% of the plunder.`)
    }
}
solve(["10",
    "20",
    "380"])
