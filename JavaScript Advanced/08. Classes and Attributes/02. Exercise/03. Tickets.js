function tickets(array, criteria) {
    let tickets = []
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }
    for (let line of array) {
        let [destination, price, status] = line.split('|')
        price = Number(price)
        tickets.push(new Ticket(destination, price, status))
    }
    if (criteria === 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (criteria === 'price') {
        tickets.sort((a, b) => a.price - b.price)
    } else if (criteria == 'status') {
        tickets.sort((a, b) => a.status.localeCompare(b.status))
    }
    return tickets
}
console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
))