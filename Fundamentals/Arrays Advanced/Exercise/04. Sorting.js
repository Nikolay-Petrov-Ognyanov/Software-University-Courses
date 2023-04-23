function solve(input) {
    input.sort((a, b) => a - b)
    let newarr = []
    while (input.length > 0) {
        let biggernum = input.pop()
        newarr.push(biggernum)
        let smallernum = input.shift()
        newarr.push(smallernum)
    }
    console.log(newarr.join(" "))
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])