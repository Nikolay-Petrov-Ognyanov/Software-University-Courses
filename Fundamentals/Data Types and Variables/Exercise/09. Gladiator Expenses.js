function solve(fights, helmet, sword, shield, armor) {
    let expenses = 0
    for (current = 1; current <= fights; current++) {
        if (current % 2 === 0) {
            expenses += helmet
        }
        if (current % 3 === 0) {
            expenses += sword
        }
        if (current % 6 === 0) {
            expenses += shield
        }
        if (current % 12 === 0) {
            expenses += armor
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
solve(7,
    2,
    3,
    4,
    5
)