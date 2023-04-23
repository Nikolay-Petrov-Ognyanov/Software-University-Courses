function solve(input) {
    input = input.split(' ')
    let wordmap = new Map()
    for (let word of input) {
        word = word.toLowerCase()
        if (wordmap.has(word)) {
            let sum = wordmap.get(word) + 1
            wordmap.set(word, sum)
        } else {
            wordmap.set(word, 1)
        }
    }
    let arr = Array.from(wordmap)
    let newarr= []
    for (let entry of arr) {
        if (entry[1] % 2 !== 0) {
            newarr.push(entry[0])
        }
    }
    console.log(newarr.join(' '))
}
solve('Cake IS SWEET is Soft CAKE sweet Food')