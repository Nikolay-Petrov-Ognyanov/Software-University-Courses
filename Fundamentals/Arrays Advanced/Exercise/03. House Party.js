function solve(arr) {
    let list = []
    for (i = 0; i < arr.length; i++) {
        let nameAndAction = arr[i].split(" ")
        let name = nameAndAction.shift()
        let action = nameAndAction.join(" ")
        if (action === 'is going!' && !list.includes(name)) {
            list.push(name)
        } else if (action === 'is going!' && list.includes(name)) {
            console.log(`${name} is already in the list!`)
        } else if (action === 'is not going!' && list.includes(name)) {
            for (j = 0; j < list.length; j++) {
                if (name === list[j]) {
                    list.splice(j, 1)
                    j = j - 1
                }
            }
        } else if (action === 'is not going!' && !list.includes(name)) {
            console.log(`${name} is not in the list!`)
        }
    }
    console.log(list.join("\n"))
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])