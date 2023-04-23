function lunchBreak(input) {

    let film = String(input[0])
    let filmDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let lunchDuration = breakDuration / 8
    let restDuration = breakDuration / 4
    let freeTime = breakDuration - (lunchDuration + restDuration)

    if (freeTime >= filmDuration) {
        console.log(`You have enough time to watch ${film} and left with ${Math.ceil(freeTime - filmDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${film}, you need ${Math.ceil(filmDuration - freeTime)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])

