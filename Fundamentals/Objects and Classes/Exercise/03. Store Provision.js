function solve(current, ordered) {
    for (let i = 0; i < current.length; i++) {
        if (i % 2 !== 0) {
            current[i] = Number(current[i])
        }
    }
    for (let j = 0; j < ordered.length; j++) {
        if (j % 2 !== 0) {
            ordered[j] = Number(ordered[j])
        }
    }
    for (let k = 0; k < ordered.length; k++) {
        if (k % 2 === 0 && !current.includes(ordered[k])) {
            current.push(ordered[k], ordered[k + 1])
        } else if (k % 2 === 0 && current.includes(ordered[k])) {
            for (let l = 0; l < current.length; l++) {
                if (current[l] === ordered[k]) {
                    current[l + 1] += ordered[k + 1]
                    l++
                }
            }
        }
        k++
    }
    for (let m = 0; m < current.length; m++) {
        console.log(`${current[m]} -> ${current[m + 1]}`)
        m++
    }
}
solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])