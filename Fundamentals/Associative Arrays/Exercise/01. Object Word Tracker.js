function solve(input) {
    let obj = {}
    let basewords = input.shift().split(' ')
    for (let word of basewords) {
        obj[word] = 0
    }
    for (let word of input) {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1
        }
    }
    let sorted = Object.entries(obj)
    sorted.sort((a, b) => b[0].localeCompare(a[0]))
    for (let entry of sorted){
        console.log(`${entry[0]} - ${entry[1]}`)
    }
}
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)