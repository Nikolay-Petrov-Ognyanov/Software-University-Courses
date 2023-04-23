function solve(input) {
    input = input.map(Number)
    let students = input.shift()
    let lectures = input.shift()
    let additionalBonus = input.shift()
    input.sort((a, b) => b - a)
    let totalBonus = input[0] / lectures * (5 + additionalBonus)
    totalBonus = Math.ceil(totalBonus)
    console.log(`Max Bonus: ${totalBonus}.`)
    console.log(`The student has attended ${input[0]} lectures.`)
}
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
)