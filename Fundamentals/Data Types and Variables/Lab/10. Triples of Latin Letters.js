function solve(n) {
    n = Number(n)
    for (let i = 1; i <= n; i++) {
        let letter1 = String.fromCharCode(96 + i)
        for (let j = 1; j <= n; j++) {
            let letter2 = String.fromCharCode(96 + j)
            for (let k = 1; k <= n; k++) {
                let letter3 = String.fromCharCode(96 + k)
                console.log(letter1 + letter2 + letter3)
            }
        }
    }
}
solve(3)