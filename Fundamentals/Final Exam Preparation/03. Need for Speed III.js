function solve(input) {
    let cars = {}
    let carsNumber = Number(input.shift())
    let carsInfo = input.splice(0, carsNumber)
    for (let i = 0; i < carsInfo.length; i++) {
        let tokens = carsInfo[i].split("|")
        let car = tokens[0]
        let distance = Number(tokens[1])
        let fuel = Number(tokens[2])
        cars[car] = [distance, fuel]
    }
    for (let line of input) {
        if (line === 'Stop') {
            break
        } else {
            let tokens = line.split(" : ")
            let command = tokens[0]
            let name = tokens[1]
            switch (command) {
                case 'Drive':
                    let driveDistance = Number(tokens[2])
                    let driveFuel = Number(tokens[3])
                    for (let car in cars) {
                        if (name === car) {
                            let distance = Number(cars[car][0])
                            let fuel = Number(cars[car][1])
                            if (fuel < driveFuel) {
                                console.log(`Not enough fuel to make that ride`)
                            } else {
                                distance += driveDistance
                                fuel -= driveFuel
                                console.log(`${car} driven for ${driveDistance} kilometers. ${driveFuel} liters of fuel consumed.`)
                                cars[car] = [distance, fuel]
                                if (distance >= 100000) {
                                    console.log(`Time to sell the ${car}!`)
                                    delete cars[car]
                                }
                            }
                        }
                    }
                    break
                case 'Refuel':
                    let refuel = Number(tokens[2])
                    for (let car in cars) {
                        if (name === car) {
                            let distance = Number(cars[car][0])
                            let fuel = Number(cars[car][1])
                            if (fuel + refuel >= 75) {
                                refuel = 75 - fuel
                            }
                            fuel += refuel
                            console.log(`${car} refueled with ${refuel} liters`)
                            cars[car] = [distance, fuel]
                        }
                    }
                    break
                case 'Revert':
                    let revertDistance = Number(tokens[2])
                    for (let car in cars) {
                        if (name === car) {
                            let distance = Number(cars[car][0])
                            let fuel = Number(cars[car][1])
                            distance -= revertDistance
                            if (distance < 10000) {
                                distance = 10000
                            } else {
                                console.log(`${car} mileage decreased by ${revertDistance} kilometers`)
                            }
                            cars[car] = [distance, fuel]
                        }
                    }
                    break
            }
        }
    }
    for (let car in cars) {
        let mileage = Number(cars[car][0])
        let fuel = Number(cars[car][1])
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`)
    }
}
solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])