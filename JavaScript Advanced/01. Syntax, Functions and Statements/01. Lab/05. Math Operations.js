function solve(n1, n2, str) {
    let result
    switch (str) {
        case '+':
            result = n1 + n2
            break
        case '-':
            result = n1 - n2
            break
        case '*':
            result = n1 * n2
            break
        case '/':
            result = n1 / n2
            break
        case '%':
            result = n1 % n2
            break
        case '**':

            result = n1 ** n2
    }
    console.log(result)
}
solve(3, 5.5, '*')