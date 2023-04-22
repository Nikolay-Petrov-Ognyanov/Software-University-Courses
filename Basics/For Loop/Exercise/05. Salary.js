function solve(input) {
    let tabs = Number(input.shift())
    let salary = Number(input.shift())

    let websites = {
        'Facebook': 150,
        'Instagram': 100,
        'Reddit': 50
    }

    for (let website of input) {
        if (websites.hasOwnProperty(website)) {
            salary -= websites[website]
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(salary)
    }
}
solve(["3", 

"500", 

"Facebook", 

"Stackoverflow.com", 

"softuni.bg"]) 