function InvalidNumber(input) {
    let num = Number(input[0])

    if (num != 0) {
        if (num < 100 || num > 200) {
            console.log("invalid")
        }
    }
}

InvalidNumber(["150"])