function solve(input) {
    let listOfEmployees = {}
    for (let employee of input) {
        listOfEmployees.name = employee
        listOfEmployees.personalNumber = employee.length
        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`)
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])