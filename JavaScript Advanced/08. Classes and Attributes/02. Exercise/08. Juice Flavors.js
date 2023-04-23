function solve(input) {
    let juices = {}
    let actualJuices = {}
    for (let line of input) {
        let [juice, quantity] = line.split(' => ')
        quantity = Number(quantity)
        if (actualJuices.hasOwnProperty(juice) === false) {
            actualJuices[juice] = 0
        }
        actualJuices[juice] += quantity
        if (actualJuices[juice] >= 1000) [
            juices[juice] = 1
        ]
    }
    for (let juice in juices) {
        console.log(` ${juice} => ${Math.floor(actualJuices[juice] / 1000)}`)
    }
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])