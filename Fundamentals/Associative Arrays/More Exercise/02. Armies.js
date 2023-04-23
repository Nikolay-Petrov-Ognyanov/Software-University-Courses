function solve(input) {
    let leaders = {}
    for (let line of input) {
        if (line.includes("arrives")) {
            let leader = line.split("arrives").shift().trim()
            leaders[leader] = {}
        } else if (line.includes(":")) {
            let [leader, rest] = line.split(":")
            let [name, size] = rest.split(", ")
            size = Number(size)
            if (leaders.hasOwnProperty(leader)) {
                leaders[leader] = [name, size]
            }
        } else if (line.includes("+")) {
            let [newname, newsize] = line.split(" + ")
            newsize = Number(newsize)
            for (let leader in leaders) {
                console.log(leader)
                let [name, size] = Array.from(leaders[leader])
                size = Number(size)
                if (leaders.hasOwnProperty(leader)) {
                    console.log(Object.values(leader))
                }
            }
        } else if (line.includes("defeated")) {
            let leader = line.split("defeated").shift().trim()
            if (leaders.hasOwnProperty(leader)) {
                    console.log(leader)
            }
        }
    }
    console.log(Object.values(leaders)[1])
}
solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])