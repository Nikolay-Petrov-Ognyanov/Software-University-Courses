function solve(n1, n2, operator) {
    switch (operator) {
        case `add`: console.log(n1 + n2); break
        case `subtract`: console.log(n1 - n2); break
        case `multiply`: console.log(n1 * n2); break
        case `divide`: console.log(n1 / n2); break
    }
}
solve(50,
    13,
    'subtract'
    )