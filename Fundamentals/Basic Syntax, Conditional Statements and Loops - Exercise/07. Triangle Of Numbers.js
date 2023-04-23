function solve(num) {
    for (i = 1; i <= num; i++) {
        let line = ``
        for (j = 1; j <= i; j++) {
            line += i
            if (j !== i) {
                line += " "
            }
        }
        console.log(line)
    }
}
solve(3)