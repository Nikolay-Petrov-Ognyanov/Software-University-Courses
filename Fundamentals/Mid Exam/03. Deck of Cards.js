function deckOfCards(input) {
    let deck = input.shift().split(", ")
    let n = Number(input.shift())
    for (let i = 0; i < n; i++) {
        let tokens = input[i].split(", ")
        let command = tokens[0]
        switch (command) {
            case 'Add':
                let addCardName = tokens[1]
                if (deck.includes(addCardName)) {
                    console.log(`Card is already in the deck`)
                } else {
                    deck.push(addCardName)
                    console.log(`Card successfully added`)
                }
                break
            case 'Remove':
                let removeCardName = tokens[1]
                if (!deck.includes(removeCardName)) {
                    console.log(`Card not found`)
                } else {
                    for (let j = 0; j < deck.length; j++) {
                        if (deck[j] === removeCardName) {
                            deck.splice(j, 1)
                            console.log(`Card successfully removed`)
                        }
                    }
                }
                break
            case 'Remove At':
                let removeAtIndex = Number(tokens[1])
                if (deck[removeAtIndex] === undefined) {
                    console.log(`Index out of range`)
                } else {
                    deck.splice(removeAtIndex, 1)
                    console.log(`Card successfully removed`)
                }
                break
            case 'Insert':
                let insertIndex = Number(tokens[1])
                let insertCardName = tokens[2]
                if (deck[insertIndex] === undefined) {
                    console.log(`Index out of range`)
                } else if (deck[insertIndex] !== undefined &&
                    deck.includes(insertCardName)) {
                    console.log(`Card is already added`)
                } else if (deck[insertIndex] !== undefined &&
                    !deck.includes(insertCardName)) {
                    deck.splice(insertIndex, 0, insertCardName)
                    console.log(`Card successfully added`)
                }
                break
        }
    }
    console.log(`${deck.join(", ")}`)
}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])