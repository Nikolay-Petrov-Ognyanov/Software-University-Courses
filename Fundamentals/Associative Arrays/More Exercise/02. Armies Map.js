function solve(input) {
    let leaders = new Map()
    let leader = new Map()
    let armies = new Map()
    for (let line of input) {
        if (line.includes("arrives")) {
            leader = line.split("arrives").shift().trim()
            leaders.set(leader)
        } else if (line.includes(":")) {
            leader = line.split(":").shift().trim()
            let [name, size] = line.split(": ").pop().split(", ")
            size = Number(size)
            leaders.get(leader) = name, size
            console.log(leaders.get(leader))
        }
    }
    
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