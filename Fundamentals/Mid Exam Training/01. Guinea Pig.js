function solve(input) {
    input = input.map(Number)
    let food = input[0]
    let hay = input[1]
    let cover = input[2]
    let weight = input[3]
    let day = 0
    while (day < 30) {
        day++
        food -= 0.300
        if (day % 2 === 0) {
            hay -= food * 0.05
        }
        if (day % 3 === 0) {
            cover -= weight / 3
        }
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
        console.log(`Merry must go to the pet store!`)
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food).toFixed(2)}, Hay: ${(hay).toFixed(2)}, Cover: ${(cover).toFixed(2)}.`)
    }
}
solve(["10",
    "5",
    "5.2",
    "1"])