function solve(n) {
    for (num = 1; num <= n; num++) {
        let numAsString = String(num)
        let sum = 0

        for (i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i])
        }

        console.log(`${num} -> ${sum === 5 || sum === 7 || sum === 11 ? `True` : `False`}`)
    }
}
solve(15)