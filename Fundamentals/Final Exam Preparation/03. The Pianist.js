function solve(input) {
    let collection = {}
    let n = +input.shift()
    let piecesArray = input.splice(0, n)
    for (let entry of piecesArray) {
        let tokens = entry.split("|")
        let piece = tokens[0]
        let composer = tokens[1]
        let key = tokens[2]
        collection[piece] = [composer, key]
    }
    for (let line of input) {
        let tokens = line.split("|")
        let command = tokens[0]
        let piece = tokens[1]
        switch (command) {
            case "Add":
                let composer = tokens[2]
                let key = tokens[3]
                if (!collection.hasOwnProperty(piece)) {
                    collection[piece] = [composer, key]
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                } else {
                    console.log(`${piece} is already in the collection!`)
                }
                break
            case "Remove":
                if (collection.hasOwnProperty(piece)) {
                    delete collection[piece]
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break
            case "ChangeKey":
                let newkey = tokens[2]
                if (collection.hasOwnProperty(piece)) {
                    collection[piece][1] = newkey
                    console.log(`Changed the key of ${piece} to ${newkey}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break
            case "Stop":
                for (let piece in collection) {
                    let composer = collection[piece][0]
                    let key = collection[piece][1]
                    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
                }
                break
        }
    }
}
solve(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])