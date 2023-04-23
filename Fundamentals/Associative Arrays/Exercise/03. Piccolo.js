function solve(input) {
    let parking = new Set()
    for (let entry of input) {
        tokens = entry.split(', ')
        let direction = tokens[0]
        let carNumber = tokens[1]
        if (direction === 'IN') {
            parking.add(carNumber, 0)
        } else if (direction === 'OUT') {
            parking.delete(carNumber)
        }
    }
    let parkarray = Array.from(parking)
    let sorted = parkarray.sort((a, b) => a[0].localeCompare(b[0]))
    if (sorted.length === 0) {
        console.log(`Parking Lot is Empty`)
    } else {
        for (let entry of sorted) {
            console.log(entry[0])
        }
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)