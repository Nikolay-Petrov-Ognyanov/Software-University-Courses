function solve(input) {
    let list = input.shift().split("!")
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Go Shopping!') {
            break
        } else {
            let tokens = input[i].split(" ")
            let command = tokens[0]
            let product1 = tokens[1]
            let product2 = tokens[2]
            switch (command) {
                case 'Urgent':
                    if (!list.includes(product1)) {
                        list.unshift(product1)
                    } else {
                        continue
                    }
                    break
                case 'Unnecessary':
                    if (list.includes(product1)) {
                        for (let j = 0; j < list.length; j++) {
                            if (list[j] === product1) {
                                list.splice(j, 1)
                                j--
                            }
                        }
                    } else {
                        continue
                    }
                    break
                case 'Correct':
                    if (list.includes(product1)) {
                        for (let k = 0; k < list.length; k++) {
                            if (list[k] === product1) {
                                let temp = list[k]
                                list[k] = product2
                                product2 = temp
                            }
                        }
                    } else {
                        continue
                    }
                    break
                case 'Rearrange':
                    if (list.includes(product1)) {
                        for (let n = 0; n < list.length; n++) {
                            if (list[n] === product1) {
                                list.push(n)
                                list.splice(n, 1)
                                n--
                            }
                        }
                    } else {
                        continue
                    }
                    break
            }
        }
    }
    console.log(list.join(", "))
}
solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])




