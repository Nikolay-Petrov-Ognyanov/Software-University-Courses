function solve(steps, stepsLength, kilometersPerHour) {
    let distanceInMeters = steps * stepsLength
    let metersPerSecond = kilometersPerHour * 1000 / 60 / 60
    let timeInSeconds = distanceInMeters / metersPerSecond
    let bonusMinutes = Math.floor(distanceInMeters / 500)
    let hours = String(Math.floor(timeInSeconds / 60 / 60))
    let minutes = String(Math.floor(timeInSeconds / 60) + bonusMinutes)
    let seconds = String(Math.ceil(timeInSeconds % 60))
    if (hours <= 9) {
        hours = '0' + hours
    }
    if (minutes <= 9) {
        minutes = '0' + minutes
    }
    if (seconds <= 9) {
        seconds = '0' + seconds
    }
    console.log(`${hours}:${minutes}:${seconds}`)
}
solve(2564, 0.70, 5.5)