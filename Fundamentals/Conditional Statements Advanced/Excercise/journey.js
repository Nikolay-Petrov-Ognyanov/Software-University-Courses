function journey(input) {
    let budget = Number(input[0])
    let season = input[1]

    let destination
    let type
    let price

    if (budget <= 100) {
        destination = `Bulgaria`
        switch (season) {
            case `summer`:
                type = `Camp`
                price = budget * 0.30; break
            case `winter`:
                type = `Hotel`
                price = budget * 0.70; break
        }
    } else if (budget <= 1000) {
        destination = `Balkans`
        switch (season) {
            case `summer`:
                type = `Camp`
                price = budget * 0.40; break
            case `winter`:
                type = `Hotel`
                price = budget * 0.80; break
        }
    } else if (budget > 1000) {
        destination = `Europe`
        switch (season) {
            case `summer`:
                type = `Hotel`
                price = budget * 0.90; break
            case `winter`:
                type = `Hotel`
                price = budget * 0.90; break
        }
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${price.toFixed(2)}`)
}
journey(["1500", "summer"])

