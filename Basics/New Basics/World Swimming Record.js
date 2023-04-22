function WorldSwimmingRecord(input) {
    let currentRecord = Number(input[0])
    let distance = Number(input[1])
    let timeToSwimOneMeter = Number(input[2])

    let initialTime = distance * timeToSwimOneMeter
    let bonusTime = Math.floor(distance / 15) * 12.5
    let finalTime = initialTime + bonusTime

    if (finalTime < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(finalTime - currentRecord).toFixed(2)} seconds slower.`)
    }
}

WorldSwimmingRecord(["55555.67", "3017", "5.03"])