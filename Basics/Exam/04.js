function workout(input) {
    let days = Number(input.shift())
    let distancePerDay = Number(input.shift())
    let totalDistance = distancePerDay

    for (let i = 0; i < days; i++) {
        let percentage = Number(input[i])

        distancePerDay += distancePerDay * percentage * 0.01
        totalDistance += distancePerDay
    }

    if (totalDistance > 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalDistance - 1000)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalDistance)} more kilometers`)
    }
}

workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])