function solve(input) {
    let cars = {}
    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ')
        quantity = Number(quantity)
        if (cars.hasOwnProperty(brand) === false) {
            cars[brand] = {}
        }
        if (cars[brand].hasOwnProperty(model) === false) {
            cars[brand][model] = quantity
        } else {
            cars[brand][model] += quantity
        }
    }
    for (let brand in cars) {
        console.log(brand)
        for (let model in cars[brand]) {
            console.log(`###${model} -> ${cars[brand][model]}`)
        }
    }
}
    solve([
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ])