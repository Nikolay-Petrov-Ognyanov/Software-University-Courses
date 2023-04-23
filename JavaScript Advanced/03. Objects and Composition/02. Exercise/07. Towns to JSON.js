function solve(input) {
    let towns = []
    let keys = input.shift().split(' | ')
    for (let line of input) {
        let tokens = line.split(' | ')
        let town = tokens[0].split('').splice(2).join('')
        let latitude = Number(tokens[1])
        let longitude = Number(tokens[2].split('').slice(0, tokens[2].length - 2).join(''))
        let obj = {
            'Town': town,
            'Latitude': Number(latitude.toFixed(2)),
            'Longitude': Number(longitude.toFixed(2))
        }
        towns.push(obj)
    }
    console.log(JSON.stringify(towns))
}
solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])