function solve(input) {
    let energy = Number(input.shift())
    let battle = 0
    for (let i = 0; i < input.length; i++) {
        let distance = Number(input[i])
        if (battle % 3 === 0) {
            energy += battle
        }
        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${battle} won battles and ${energy} energy`)
            break
        }
        if (input[i] === 'End of battle') {
            console.log(`Won battles: ${battle}. Energy left: ${energy}`)
            break
        }
        energy -= distance
        battle++
    }
}
solve(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])


