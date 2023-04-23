function solve(input) {
    let towns = {}
    for (let line of input) {
        let tokens = line.split(" | ")
        towns.town = tokens[0]
        towns.latitude = Number(tokens[1]).toFixed(2)
        towns.longitude = Number(tokens[2]).toFixed(2)
        console.log(towns)
    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])