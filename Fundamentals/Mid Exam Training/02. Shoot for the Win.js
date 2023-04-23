function solve(input) {
    let targets = input.shift().split(" ").map(Number)
    let arr = []
    let count = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End") {
            console.log(`Shot targets: ${count} -> ${targets.join(" ")}`)
            break
        } else {
            let index = Number(input[i])
            if (targets[index] !== undefined && targets[index] !== -1) {
                arr.push(targets[index])
                targets[index] = -1
                count++
                for (let j = 0; j < targets.length; j++) {
                    if (targets[j] !== -1 && targets[j] > arr[arr.length - 1]) {
                        targets[j] -= arr[arr.length - 1]
                    } else if (targets[j] !== -1 && targets[j] <= arr[arr.length - 1]) {
                        targets[j] += arr[arr.length - 1]
                    }
                }
            }
        }
    }
}
solve(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
