function train_the_trainers(input) {
    let judgesCount = input.shift() * 1
    let marksCounter = 0
    let totalMarksCounter = 0
    let result = 0
    let totalResult = 0

    for (let i = 0; input[i] != "Finish"; i++) {
        if (input[i] * 1) {
            result += input[i] * 1
            marksCounter++
            totalMarksCounter++
        }

        if (marksCounter == judgesCount) {
            console.log(`${input[i - marksCounter]} - ${(result / marksCounter).toFixed(2)}.`)

            totalResult += result
            marksCounter = 0
            result = 0
        }
    }

    console.log(`Student's final assessment is ${(totalResult / totalMarksCounter).toFixed(2)}.`)
}

train_the_trainers(["2", 

"Objects and Classes", 

"5.77", 

"4.23", 

"Dictionaries", 

"4.62", 

"5.02", 

"RegEx", 

"2.88", 

"3.42", 

"Finish"]) 