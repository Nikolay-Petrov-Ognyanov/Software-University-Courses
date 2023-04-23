function worldSwimmingRecord(input) {

    let record = Number(input[0])
    let distance = Number(input[1])
    let speed = Number(input[2])

    let time = speed * distance
    let additionaltime = Math.floor(distance / 15) * 12.5
    let totaltime =time + additionaltime

    if (totaltime > record) {
        console.log(`No, he failed! He was ${(totaltime - record).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
