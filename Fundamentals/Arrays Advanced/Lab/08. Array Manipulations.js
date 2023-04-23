function solve(input) {
    let arr = input[0].split(" ")
    input.shift()
    for (i = 0; i < input.length; i++) {
        let split = input[i].split(` `)
        switch (input[0]) {
            case `Add`: arr.push(Number(split[1])); break
            case `Remove`: for (j = 0; j < arr.length; j++) {
                if (arr[j] === split[1]) { arr.splice(j, 1); j = j - 1 }
            }; break
            case `RemoveAt`: arr.splice(split[1], 1); break
            case `Insert`: arr.splice(split[2], 0, split[1]); break
        }
    }
    console.log(arr.join(" "));
}
solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])