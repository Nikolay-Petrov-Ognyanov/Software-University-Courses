function solve(input) {
    let sortedInAscending = input.sort((a, b) => { return a - b })
    let firstTwoNums = sortedInAscending.slice(0, 2)
    console.log(firstTwoNums.join(" "));
}
solve([30, 15, 50, 5])