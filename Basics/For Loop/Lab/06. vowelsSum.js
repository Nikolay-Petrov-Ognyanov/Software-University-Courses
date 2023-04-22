function vowelsSum(input) {
    let vowels = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5
    }

    let sum = 0

    for (let character of input[0].split('')) {
        if (vowels.hasOwnProperty(character)) {
            sum += vowels[character]
        }
    }

    console.log(sum)
}
vowelsSum(["bamboo"])