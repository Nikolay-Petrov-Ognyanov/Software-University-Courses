function special_numbers(input) {
    let n = input[0] * 1
    let result = []

    for (let i = 1111; i <= 9999; i++) {
        i = i.toString().split("")
        
        let counter = 0

        for (let j = 0; j < i.length; j++) {
            if (Number.isInteger(n / i[j] * 1)) {
                counter++
            }
        }

        i = i.join("") * 1

        if (counter == 4) {
            result.push(i)
        }
    }

    console.log(result.join(" "))
}

special_numbers(["16"])