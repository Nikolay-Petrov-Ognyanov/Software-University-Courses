function solve(input) {
    let arr = input.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            arr[i] = ""
        }
    }
    console.log(arr.join(""))
}
solve('aaaaabbbbbcdddeeeedssaa')