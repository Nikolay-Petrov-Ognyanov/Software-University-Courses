function cinema_tickets(input) {
    let movie = ""
    let seatsTotal = 0
    let seatsPurchased = 0
    let studentTickets = 0
    let standardTickets = 0
    let kidTickets = 0
    let mentionedMovies = []

    for (let i = 0; i < input.length; i++) {
        if (input[i + 1] == Number(input[i + 1])) {
            movie = input[i]
            seatsPurchased = 0
            seatsTotal = 0
        }

        if (input[i] == Number(input[i])) {
            seatsTotal = Number(input[i])
        }

        if (input[i] == "student") {
            studentTickets++
            seatsPurchased++
        }

        if (input[i] == "standard") {
            standardTickets++
            seatsPurchased++
        }

        if (input[i] == "kid") {
            kidTickets++
            seatsPurchased++
        }

        if (seatsTotal - seatsPurchased == 0 || input[i] == "End" || input[i] == "Finish") {
            let percentage = ((seatsPurchased / seatsTotal) * 100).toFixed(2)

            if (isNaN(percentage) == false && mentionedMovies.includes(movie) == false) {
                console.log(`${movie} - ${percentage}% full.`)
                mentionedMovies.push(movie)
            }
        }
    }

    let totalTickets = studentTickets + standardTickets + kidTickets

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`)
}

cinema_tickets([
    "Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"
])