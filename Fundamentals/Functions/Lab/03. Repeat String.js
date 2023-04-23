function solve(str, n) {
    let newstr = ``
    for (i = 0; i < n; i++) {
        newstr += str
    }
    console.log(newstr)
}
solve("abc", 3)