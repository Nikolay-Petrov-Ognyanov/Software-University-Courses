function solve(input) {
    let wordmap = new Map()
    let basewords = input.shift().split(' ')
    for (let word of basewords) {
        wordmap.set(word, 0)
    }
    for (let word of input) {
        if (wordmap.has(word)) {
            let sum = wordmap.get(word) + 1
            wordmap.set(word, sum)
        }
    }
    let arr = Array.from(wordmap)
    let sorted = arr.sort((a, b) => b[0].localeCompare(a[0]))
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${sorted[i][0]} - ${sorted[i][1]}`)
    }
}
solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])