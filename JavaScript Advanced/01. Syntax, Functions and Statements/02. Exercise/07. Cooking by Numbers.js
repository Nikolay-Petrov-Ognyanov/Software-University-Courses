function solve(n, l1, l2, l3, l4, l5) {
    let input = [l1, l2, l3, l4, l5]
    for (let command of input) {
        switch (command) {
            case 'chop':
                n = n / 2
                break
            case 'dice':
                n = Math.sqrt(n)
                break
            case 'spice':
                n = n + 1
                break
            case 'bake':
                n = n * 3
                break
            case 'fillet':
                n = n - n * 0.2
                break
        }
        console.log(n)
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')