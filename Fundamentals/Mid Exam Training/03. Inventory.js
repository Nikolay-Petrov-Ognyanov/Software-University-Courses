function solve(input) {
    let inventory = input.shift().split(", ")
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Craft!') {
            break
        } else {
            let tokens = input[i].split(" - ")
            let command = tokens[0]
            let item = tokens[1]
            switch (command) {
                case 'Collect':
                    if (!inventory.includes(item)) {
                        inventory.push(item)
                    }
                    break
                case 'Drop':
                    if (inventory.includes(item)) {
                        for (let j = 0; j < inventory.length; j++) {
                            if (inventory[j] === item) {
                                inventory.splice(j, 1)
                                j--
                            }
                        }
                    }
                    break
                case 'Combine Items':
                    let items = item.split(":")
                    let item1 = items[0]
                    let item2 = items[1]
                    if (inventory.includes(item1)) {
                        for (let k = 0; k < inventory.length; k++) {
                            if (inventory[k] === item1) {
                                inventory.splice(k + 1, 0, item2)
                            }
                        }
                    }
                    break
                case 'Renew':
                    if (inventory.includes(item)) {
                        for (let l = 0; l < inventory.length; l++) {
                            if (inventory[l] === item) {
                                inventory.splice(l, 1)
                                inventory.push(item)
                            }
                        }
                    }
                    break
            }
        }
    }
    console.log(inventory.join(", "))
}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])