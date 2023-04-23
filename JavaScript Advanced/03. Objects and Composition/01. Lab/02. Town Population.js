function solve(input) {
    let cities = {}
    for (let line of input) {
        let tokens = line.split(' <-> ')
        let name = tokens[0]
        let population = Number(tokens[1])
        if (!cities.hasOwnProperty(name)) {
            cities[name] = population
        } else {
            cities[name] += population
        }
    }
    for (let city in cities) {
        console.log(`${city} : ${cities[city]}`)
    }
}
solve(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
)