function solve(input) {
    let string = input.shift()
    for (let line of input) {
        if (line === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${string}`)
            break
        } else {
            let tokens = line.split(":")
            let command = tokens[0]
            switch (command) {
                case "Add Stop":
                    let addIndex = +tokens[1]
                    let addString = tokens[2]
                    if (string[addIndex] !== undefined) {
                        string = string.slice(0, addIndex) + addString + string.slice(addIndex)
                    }
                    console.log(string)
                    break
                case "Remove Stop":
                    let startIndex = +tokens[1]
                    let endIndex = +tokens[2]
                    if (string[startIndex] !== undefined &&
                        string[endIndex] !== undefined) {
                        let newstring1 = string.substring(0, startIndex)
                        let newstring2 = string.substring(endIndex + 1, string.length)
                        string = newstring1.concat(newstring2)
                    }
                    console.log(string)
                    break
                case "Switch":
                    let oldString = tokens[1]
                    let newString = tokens[2]
                    if (string.includes(oldString)) {
                        string = string.split(oldString).join(newString)
                    }
                    console.log(string)
                    break
            }
        }
    }
}
solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
