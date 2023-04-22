function catDiet(input) {

    let fatPercentage = Number(input[0])
    let proteinPercentge = Number(input[1])
    let carbohydratePercentage = Number(input[2])
    let totalCalories = Number(input[3])
    let waterPercentage = Number(input[4])

    let caloriesPerGramFat = 9
    let caloriesPerGramProtein = 4
    let caloriesPerGramCarbohydrate = 4

    let fatWeight = (totalCalories * (fatPercentage / 100)) / caloriesPerGramFat
    let proteinWeight = (totalCalories * (proteinPercentge / 100)) / caloriesPerGramProtein
    let carbohydrateWeight = (totalCalories * (carbohydratePercentage / 100)) / caloriesPerGramCarbohydrate

    let foodWeight = fatWeight + proteinWeight + carbohydrateWeight
    let caloriesPerGramFoodWithWater = (totalCalories / foodWeight)
    let caloriesPerGramFood = caloriesPerGramFoodWithWater - (caloriesPerGramFoodWithWater * (waterPercentage /100))

    console.log(caloriesPerGramFood.toFixed(4))
}
catDiet([`20`, `60`, `20`, `1800`, `50`])