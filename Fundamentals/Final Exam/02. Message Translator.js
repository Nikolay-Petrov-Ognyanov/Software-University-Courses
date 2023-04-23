function solve(input) {
    let n = +input.shift()
    let commandarr = []
    let stringarr = []
    let numbersarr = []
    let pattern = /!(?<command>[A-z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/g
    for (let line of input) {
        let match = pattern.exec(line)
        if (match !== null) {
            commandarr.push(match.groups.command)
            stringarr.push(match.groups.string)
            for (let i = 0; i < stringarr.length; i++) {
                let stringEntry = stringarr[i]
                let numarr = []
                for (let j = 0; j < stringEntry.length; j++) {
                    let num = stringEntry.charCodeAt(j)
                    numarr.push(num)
                }
                numbersarr.push(numarr)
            }
            for (let k = 0; k < commandarr.length; k++) {
                console.log(`${commandarr[k]}: ${numbersarr[k].join(" ")}`)
            }
        } else {
            console.log(`The message is invalid`)
        }
    }
}
solve(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])