function solve(input) {
    let list = {}
    for (let line of input) {
        let [company, user] = line.split(" -> ")
        if (list.hasOwnProperty(company) === false) {
            list[company] = new Set()
        }
        list[company].add(user)
    }
    entries = Object.entries(list)
    entries = entries.sort((a, b) => a[0].localeCompare(b[0]))
    for (let [company, users] of entries) {
        console.log(`${company}`)
        for (let user of users) {
            console.log(`-- ${user}`)
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])