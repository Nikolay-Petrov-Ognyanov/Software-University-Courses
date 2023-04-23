function solve(input) {
    let sequence = input.shift().split(" ")
    let moves = 0
    let arr = []
    for (let i = 0; i < input.length; i++) {
        moves++
        if (input[i] === 'end') {
            break
        } else {
            let tokens = input[i].split(" ")
            let index1 = tokens[0]
            let index2 = tokens[1]
            if (index1 === index2 ||
                sequence[index1] === undefined ||
                sequence[index2] === undefined) {
                sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`)
                console.log(`Invalid input! Adding additional elements to the board`)
            } else if (sequence[index1] === sequence[index2]) {
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`)
                for (let j = 0; j < sequence.length; j++) {
                    if (sequence[j] !== sequence[index1]) {
                        arr.push(sequence[j])
                    }
                }
                sequence = arr.join(" ").split(" ")
                arr = []
            } else if (sequence[index1] !== sequence[index2]) {
                console.log(`Try again!`)
            }
            if (sequence.length <= 1) {
                sequence = []
                console.log(`You have won in ${moves} turns!`)
                break
            }
        }
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(
            ${sequence.join(" ")}
            `)
    }
}
solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
)