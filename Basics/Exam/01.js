function catDiet(input) {
    let percentageFat = Number(input[0])
    let percentageProtein = Number(input[1])
    let percentageCarbohydrate = Number(input[2])
    let totalCalories = Number(input[3])
    let percentageWater = Number(input[4])

    let caloriesInAGramOfFat = 9
    let caloriesInAGramOfProtein = 4
    let caloriesInAGramOfCarbohydrate = 4

    let totalGramsOfFat = (percentageFat * 0.01) * totalCalories / caloriesInAGramOfFat
    let totalGramsOfProtein = (percentageProtein * 0.01) * totalCalories / caloriesInAGramOfProtein
    let totalGramsOfCarbohydrate = (percentageCarbohydrate * 0.01) * totalCalories / caloriesInAGramOfCarbohydrate

    let totalWeightOfFood = totalGramsOfFat + totalGramsOfProtein + totalGramsOfCarbohydrate

    let caloriesPerGramOfFoodWithWater = totalCalories / totalWeightOfFood

    let caloriesPerGramOfFoodWithoutWater = caloriesPerGramOfFoodWithWater - (percentageWater * 0.01) * caloriesPerGramOfFoodWithWater

    console.log(caloriesPerGramOfFoodWithoutWater.toFixed(4))
}

catDiet(["20",
"60",
"20",
"1800",
"50"])