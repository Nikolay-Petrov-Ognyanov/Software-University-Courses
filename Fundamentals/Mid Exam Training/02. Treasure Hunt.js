function solve(input) {
    let loot = input.shift().split("|")
    let stolen = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Yohoho!") {
            break
        } else {
            let tokens = input[i].split(" ")
            let command = tokens.shift()
            switch (command) {
                case 'Loot':
                    for (let j = 0; j < tokens.length; j++) {
                        let item = tokens[j]
                        if (!loot.includes(item)) {
                            loot.unshift(item)
                        }
                    }
                    break
                case 'Drop':
                    let index = Number(tokens[0])
                    if (loot[index] !== undefined) {
                        loot.push(loot[index])
                        loot.splice(index, 1)
                    }
                    break
                case 'Steal':
                    let count = Number(tokens[0])
                    for (let k = 0; k < count; k++) {
                        stolen.unshift(loot[loot.length - 1])
                        loot.splice(loot.length - 1, 1)
                    }
                    console.log(stolen.join(", "))
                    break
            }
        }
    }
    if (loot.length <= 0) {
        console.log(`Failed treasure hunt.`)
    } else {
        let sum = 0
        for (let l = 0; l < loot.length; l++) {
            sum += Number(loot[l].length)
        }
        let averageGain = Number(sum / loot.length)
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)
    }
}
solve(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
