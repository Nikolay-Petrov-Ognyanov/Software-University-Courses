function calorieObject(input) {
    let foods = {}
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            let name = input[i]
            let calories = input[i + 1]
            foods[name] = Number(calories)
        }
    }
    console.log(foods)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])