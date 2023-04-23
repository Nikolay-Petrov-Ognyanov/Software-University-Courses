function solve(input) {
    let string = input.shift()
    for (let line of input) {
        if (line === "Finish") {
            break
        }
        else {
            let tokens = line.split(" ")
            let command = tokens[0]
            switch (command) {
                case "Replace":
                    let currentChar = tokens[1]
                    let newChar = tokens[2]
                    while (string.includes(currentChar)) {
                        string = string.replace(currentChar, newChar)
                    }
                    console.log(string)
                    break
                case "Cut":
                    let cutStartIndex = +tokens[1]
                    let cutEndIndex = +tokens[2]
                    if (string[cutStartIndex] !== undefined && cutStartIndex >= 0 &&
                        string[cutEndIndex] !== undefined && cutEndIndex >= 0) {
                        string = string.split("")
                        for (let i = cutStartIndex; i <= cutEndIndex; i++) {
                            string[i] = ''
                        }
                        string = string.join("")
                        console.log(string)
                    }
                    else {
                        console.log(`Invalid indices!`)
                    }
                    break
                case "Make":
                    string = string.split("")
                    if (tokens[1] === "Upper") {
                        for (let i = 0; i < string.length; i++) {
                            if (string[i] === string[i].toLowerCase()) {
                                string[i] = string[i].toUpperCase()
                            }
                        }
                    }
                    else if (tokens[1] === "Lower") {
                        for (let j = 0; j < string.length; j++) {
                            if (string[j] === string[j].toUpperCase()) {
                                string[j] = string[j].toLowerCase()
                            }
                        }
                    }
                    string = string.join("")
                    console.log(string)
                    break
                case "Check":
                    let checkString = tokens[1]
                    if (string.includes(checkString)) {
                        console.log(`Message contains ${checkString}`)
                    }
                    else {
                        console.log(`Message doesn't contain ${checkString}`)
                    }
                    break
                case "Sum":
                    let sumStartIndex = +tokens[1]
                    let sumEndIndex = +tokens[2]
                    if (string[sumEndIndex] !== undefined && sumStartIndex >= 0 &&
                        string[sumEndIndex] !== undefined && sumEndIndex >= 0) {
                        sumString = string.substring(sumStartIndex, sumEndIndex + 1)
                        let sum = 0
                        for (let k = 0; k < sumString.length; k++) {
                            sum += sumString.charCodeAt(k)
                        }
                        console.log(sum)
                    }
                    else {
                        console.log(`Invalid indices!`)
                    }
                    break
            }
        }
    }
}
solve(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])