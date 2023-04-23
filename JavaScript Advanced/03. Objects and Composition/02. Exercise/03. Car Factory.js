function carFactory(input) {
    let car = {}
    car.model = input.model
    if (input.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        }
    } else if (input.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        }
    } else if (input.power <= 200) {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }
    if (input.carriage === 'hatchback') {
        car.carriage = {
            type: input.carriage,
            color: input.color
        }
    } else if (input.carriage === 'coupe') {
        car.carriage = {
            type: input.carriage,
            color: input.color
        }
    }
    if (input.wheelsize % 2 === 0) {
        input.wheelsize -= 1
    }
    car.wheels = []
    for (let i = 0; i < 4; i++) {
        car.wheels.push(input.wheelsize)
    }
    return car
}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))