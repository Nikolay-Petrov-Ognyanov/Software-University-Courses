function solve(input) {
    let racers = {}
    let names = input.shift().split(", ")
    let racerDistance = 0
    for (let line of input) {
        if (line !== 'end of race') {
            let name = line.match(/[A-Z]+/gi).join('')
            let distanceInDigits = line.match(/\d/g)
            let distance = 0
            for (let index of distanceInDigits) {
                distance += +index
            }
            if (names.includes(name)) {
                if (racers.hasOwnProperty(name)) {
                    racers[name] += distance
                } else {
                    racers[name] = distance
                }
            }
        }
    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a])
    for (let i = 1; i <= 3; i++) {
        switch (i) {
            case 1:
                console.log(`1st place: ${sorted[i-1]}`)
                break
            case 2:
                console.log(`2nd place: ${sorted[i-1]}`)
                break
            case 3:
                console.log(`3rd place: ${sorted[i-1]}`)
                break
        }
    }
}
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])