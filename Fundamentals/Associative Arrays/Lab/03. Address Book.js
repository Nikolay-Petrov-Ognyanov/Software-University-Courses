function solve(input) {
    let result = {}
    for (let line of input) {
        let [name, adress] = line.split(':')
        result[name] = adress
    }
    let sorted = Object.entries(result)
    sorted.sort((a, b) => a[0].localeCompare(b[0]))
    for (let [name, adress] of sorted) {
        console.log(`${name} -> ${adress}`)
    }
    // for (let [key, value] of sorted) {
    //     console.log(key, value)
    // }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])