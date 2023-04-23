function solve(input) {
    let targets = input.shift().split(" ").map(Number)
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'End') {
            console.log(`${targets.join("|")}`)
            break
        } else {
            let tokens = input[i].split(" ")
            let command = tokens[0]
            let index = Number(tokens[1])
            switch (command) {
                case 'Shoot':
                    let power = Number(tokens[2])
                    for (let j = 0; j < targets.length; j++) {
                        if (index === j) {
                            targets[j] -= power
                            if (targets[j] <= 0) {
                                targets.splice(j, 1)
                            }
                        }
                    }
                    break
                case 'Add':
                    let value = Number(tokens[2])
                    if (targets[index] !== undefined) {
                        targets.splice(index, 0, value)
                    } else {
                        console.log(`Invalid placement!`)
                    }
                    break
                case 'Strike':
                    let radius = Number(tokens[2])
                    for (let l = 0; l < targets.length; l++) {
                        if (index === l) {
                            if (targets[l - radius] !== undefined &&
                                targets[l] !== undefined &&
                                targets[l + radius] !== undefined) {
                                targets.splice(l - radius, radius * 2 + 1)
                                l--
                            } else {
                                console.log(`Strike missed!`)
                            }
                        }
                    }
                    break
            }
        }
    }
}
solve(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])


