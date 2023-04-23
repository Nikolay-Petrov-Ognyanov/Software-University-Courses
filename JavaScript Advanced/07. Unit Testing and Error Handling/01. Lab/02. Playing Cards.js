function solve(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    if (!faces.includes(face)) {
        throw new Error('Invalid face ' + face)
    }
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    let card = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit
        }
    }
    return card.toString()
}
console.log(solve('5', 'C'))