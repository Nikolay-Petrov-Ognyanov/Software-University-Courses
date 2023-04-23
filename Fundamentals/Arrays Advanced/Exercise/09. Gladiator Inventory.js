function solve(input) {
    let inventory = input.shift().split(" ")
    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(" ")
        let command = arr[0]
        let equipment = arr[1]
        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment)
                }
                break
            case 'Trash':
                if (inventory.includes(equipment)) {
                    for (j = 0; j < inventory.length; j++) {
                        if (inventory[j] === equipment) {
                            inventory.splice(j, 1)
                            j -= 1
                        }
                    }
                }
                break
            case 'Repair':
                if (inventory.includes(equipment)) {
                    for (o = 0; o < inventory.length; o++) {
                        if (inventory[o] === equipment) {
                            inventory.splice(o, 1)
                            o -= 1
                        }
                    }
                    inventory.push(equipment)
                }
                break
            case 'Upgrade':
                let splitEquipment = equipment.split("-")
                let joinedEquipment = splitEquipment.join(":")
                if (inventory.includes(splitEquipment[0])) {
                    for (p = 0; p < inventory.length; p++) {
                        if (inventory[p] === splitEquipment[0]) {
                            inventory.splice(p + 1, 0, joinedEquipment)
                            break
                        }
                    }
                }
                break
        }
    }
    console.log(inventory.join(" "))
}
solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
)