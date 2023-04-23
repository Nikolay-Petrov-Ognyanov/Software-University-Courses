function sumSeconds(input) {
    let timeOne = Number(input[0])
    let timeTwo = Number(input[1])
    let timeThree = Number(input[2])
    let totalTime = timeOne + timeTwo + timeThree
    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds(['22', `7`, `34`])