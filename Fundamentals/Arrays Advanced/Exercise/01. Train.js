function input(input) {
    let train = input[0].split(" ")
    let maxCapacityOfAWagon = Number(input[1])
    let commands = input.slice(2)
    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split(` `)
        if (element[0] === `Add`) {
            train.push(element[1])
        } else if (element[0] !== `Add`) {
            for (j = 0; j < train.length; j++) {
                if (Number(train[j]) + Number(element[0]) <= maxCapacityOfAWagon) {
                    let newWagonSize = Number(train[j]) + Number(element[0])
                    train.splice(j, 1, newWagonSize)
                    break
                }
            }
        }
    }
    console.log(train.join(" "))
}
input(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])