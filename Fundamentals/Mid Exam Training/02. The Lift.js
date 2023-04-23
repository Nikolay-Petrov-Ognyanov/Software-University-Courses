function solve(input) {
    let peopleWaiting = Number(input.shift())
    input = input.toString().split(" ").map(Number)
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 4 && peopleWaiting > 0) {
            let spotsAvailable = 4 - input[i]
            if (peopleWaiting < spotsAvailable) {
                spotsAvailable = peopleWaiting
            }
            peopleWaiting -= spotsAvailable
            input[i] += spotsAvailable
        }
    }
    if (peopleWaiting === 0 && input[input.length - 1] < 4) {
        console.log(`The lift has empty spots!
        ${input.join(" ")}`)
    } else if (peopleWaiting > 0 && input[input.length - 1] === 4) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!
        ${input.join(" ")}`)
    }
}
solve(["20", "0 2 0"])