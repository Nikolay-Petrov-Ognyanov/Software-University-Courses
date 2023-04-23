function getPersons() {
    let arr = []
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }
    }
    let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
    arr.push(person)
    person = new Person('SoftUni')
    arr.push(person)
    person = new Person('Stephan', 'Johnson', 25)
    arr.push(person)
    person = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    arr.push(person)
    return arr
}
console.log(getPersons())