function solve(input) {
    let pattern = /(?<symbol>[|#])(?<food>[A-Z][a-z]+\s{0,1}[A-Za-z+]*)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let match = pattern.exec(input)
    let arr = []
    let totalCalories = 0
    while (match !== null) {
        let food = match.groups.food
        let date = match.groups.date
        let calories = +match.groups.calories
        totalCalories += calories
        arr.push(food, date, calories)
        match = pattern.exec(input)
    }
    let days = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${days} days!`)
    for (let i = 0; i < arr.length; i += 3) {
        console.log(`Item: ${arr[i]}, Best before: ${arr[i + 1]}, Nutrition: ${arr[i + 2]}`)
    }
}
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])